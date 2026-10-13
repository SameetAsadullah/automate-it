# Got help in pre-processing from: https://github.com/lukas/ml-class/blob/master/videos/cnn-audio/preprocess.py

import librosa
import os
from sklearn.model_selection import train_test_split
from tensorflow.keras.utils import to_categorical
import numpy as np
from tqdm import tqdm


# Input: Folder Path
# Output: Tuple (Label, Indices of the labels, one-hot encoded labels)
def get_labels(path):
    labels = os.listdir(path)
    label_indices = np.arange(0, len(labels))
    return labels, label_indices, to_categorical(label_indices)


# convert file to wav2mfcc
# Mel-frequency cepstral coefficients
def wav2mfcc(file_path, nfft_array, n_mfcc=20, max_len=11):
    wave, sr = librosa.load(file_path, mono=True, sr=None)
    wave = np.asfortranarray(wave)
    mfcc = librosa.feature.mfcc(wave, n_mfcc=n_mfcc)
    nfft_array.append(mfcc.shape[1])
    
    # If maximum length exceeds mfcc lengths then pad the remaining ones
    if (max_len > mfcc.shape[1]):
        pad_width = max_len - mfcc.shape[1]
        mfcc = np.pad(mfcc, pad_width=((0, 0), (0, pad_width)), mode='constant')

    # Else cutoff the remaining parts
    else:
        mfcc = mfcc[:, :max_len]
    
    return mfcc


def save_data_to_array(data_path, data_arrays_path, max_len=11, n_mfcc=20):
    labels, _, _ = get_labels(data_path)
    nfft_array = []

    for label in labels:
        # Init mfcc vectors
        mfcc_vectors = []

        wavfiles = [data_path + label + '/' + wavfile for wavfile in os.listdir(data_path + '/' + label)]
        for wavfile in tqdm(wavfiles, "Saving vectors of label - '{}'".format(label)):
            mfcc = wav2mfcc(wavfile, nfft_array=nfft_array, max_len=max_len, n_mfcc=n_mfcc)
            mfcc_vectors.append(mfcc)
        np.save(os.path.join(data_arrays_path, label + '.npy'), mfcc_vectors)
    
#     for i in sorted(nfft_array):
#         print (i)
        
def get_train_test(data_path, data_arrays_path, split_ratio=0.6, random_state=42):
    # Get available labels
    labels, indices, _ = get_labels(data_path)

    # Getting first arrays
    X = np.load(os.path.join(data_arrays_path, labels[0] + '.npy'))
    y = np.zeros(X.shape[0])

    # Append all of the dataset into one single array, same goes for y
    for i, label in enumerate(labels[1:]):
        print(i + 1, label)
        x = np.load(os.path.join(data_arrays_path, label + '.npy'))
        X = np.vstack((X, x))
        y = np.append(y, np.full(x.shape[0], fill_value= (i + 1)))

    assert X.shape[0] == len(y)

    return train_test_split(X, y, test_size= (1 - split_ratio), random_state=random_state, shuffle=True)
