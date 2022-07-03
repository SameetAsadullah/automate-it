import keras
from preprocess import *
from td_utils import *
import sklearn
import RPi.GPIO as GPIO
import time
from os.path import exists

# Reading channel numbers from file
channel_numbers = {}
with open("channel-numbers.txt", "r") as file:
    lines = file.read().splitlines()
    for line in lines:
        words = line.split(", ")
        channel_numbers[words[0]] = words[1]

# Setting GPIO Pins
GPIO.setmode(GPIO.BCM)
# Front right room
GPIO.setup(6, GPIO.OUT)
# Front left room
GPIO.setup(13, GPIO.OUT)
# Middle right room
GPIO.setup(5, GPIO.OUT)
# Middle left room
GPIO.setup(26, GPIO.OUT)
# Green Signal Light For Recording
GPIO.setup(21, GPIO.OUT)

# variables for appliances action check
tv_on = True
ac_on = True
songs_on = True
tv_unmute = True

# assigning parameters for MFCC feature extraction
trigger_word_max_len_nfft = 682
appliance_max_len_nfft = 649
room_max_len_nfft = 597
channel_max_len_nfft = 345
action_max_len_nfft = 649
n_mfcc = 128

# Loading Models
ruha_detection_model = keras.models.load_model('./Models/Ruha_Model')
trigger_word_detection_model = keras.models.load_model('./Models/Trigger Word Detection Model')
action_detection_model = keras.models.load_model('./Models/Action Detection Model')
channel_detection_model = keras.models.load_model('./Models/Channel Detection Model')
room_detection_model = keras.models.load_model('./Models/Room Detection Model')

# Ruha Detection Model
Tx = 2203 # The number of time steps input to the model from the spectrogram
# Preprocess the audio to the correct format
def preprocess_audio():
    # Trim or pad audio segment to 4000ms
    padding = AudioSegment.silent(duration=4000)
    segment = AudioSegment.from_wav(file_path)[:4000]
    segment = padding.overlay(segment)
    # Set frame rate to 44100
    segment = segment.set_frame_rate(44100)
    # Export as wav
    segment.export(file_path, format='wav')
    
def detect_triggerword(model):
    plt.subplot(2, 1, 1)
    x = graph_spectrogram(file_path)

    # If maximum length exceeds mfcc lengths then pad the remaining ones
    if (x.shape[1] < Tx):
      pad_width = Tx - x.shape[1]
      x = np.pad(x, pad_width=((0, 0), (0, pad_width)), mode='constant')
    # Else cutoff the remaining parts
    elif (x.shape[1] > Tx):
      x = x[:, :Tx]

    # the spectogram outputs (freqs, Tx) and we want (Tx, freqs) to input into the model
    x  = x.swapaxes(0,1)
    x = np.expand_dims(x, axis=0)
    predictions = model.predict(x)
    
    plt.subplot(2, 1, 2)
    plt.plot(predictions[0,:,0])
    plt.ylabel('probability')
    plt.show()
    return predictions

def checkTriggerWord(predictions, threshold):
  audio_clip = AudioSegment.from_wav(file_path)
  Ty = predictions.shape[1]
  # Step 1: Initialize the number of consecutive output steps to 0
  consecutive_timesteps = 0
  # Step 2: Loop over the output steps in the y
  for i in range(Ty):
    # Step 3: Increment consecutive output steps
    if predictions[0,i,0] > threshold:
      consecutive_timesteps += 1
    elif predictions[0,i,0] < threshold:
      consecutive_timesteps = 0
    # Step 4: If prediction is higher than the threshold and more than 75 consecutive output steps have passed
    if consecutive_timesteps > 35:
      return True
  return False

while True:
    ui_input_file_exists = exists("./ui-input.txt")
    if ui_input_file_exists:        
        with open("ui-input.txt", "r") as file:
            lines = file.read().splitlines()
            if lines[0] == "Bulb":
                if lines[1] == "Bethaq":
                    # Front right room
                    if lines[2] == "On":
                        GPIO.output(6, True)
                    elif lines[2] == "Off":
                        GPIO.output(6, False)

                elif lines[1] == "Garage":
                    # Front left room
                    if lines[2] == "On":
                        GPIO.output(13, True)
                    elif lines[2] == "Off":
                        GPIO.output(13, False)
                    
                elif lines[1] == "Bathroom":
                    # Middle right room
                    if lines[2] == "On":
                        GPIO.output(5, True)
                    elif lines[2] == "Off":
                        GPIO.output(5, False)
                        
                elif lines[1] == "Bedroom":
                    # Middle left room
                    if lines[2] == "On":
                        GPIO.output(26, True)
                    elif lines[2] == "Off":
                        GPIO.output(26, False)
                    
                elif lines[1] == "Kitchen":
                    # do nothing
                    print("Do Nothing")
                    
                elif lines[1] == "Lounge":
                    # do nothing
                    print("Do Nothing")
                    
            elif lines[0] == "AC":
                if lines[1] == "On" and ac_on == False:
                    os.system('irsend SEND_ONCE tape KEY_POWER')
                    ac_on = True
                elif lines[1] == "Off" and ac_on == True:
                    os.system('irsend SEND_ONCE tape KEY_POWER')
                    ac_on = False
                elif lines[1] == "Slow":
                    for i in range(0, 2):
                        os.system('irsend SEND_ONCE tape KEY_VOLUMEDOWN')
                elif lines[1] == "Fast":
                    for i in range(0, 2):
                        os.system('irsend SEND_ONCE tape KEY_VOLUMEUP')
                        
            elif lines[0] == "TV":
                if lines[1] == "Channel":
                    # Getting digits of channel number
                    for digit in channel_numbers[lines[2]]:
                      os.system('irsend SEND_ONCE tape KEY_' + digit)
                
                elif lines[1] == "On" and tv_on == False:
                    os.system('irsend SEND_ONCE tape KEY_POWER')
                    tv_on = True
                elif lines[1] == "Off" and tv_on == True:
                    os.system('irsend SEND_ONCE tape KEY_POWER')
                    tv_on = False
                elif lines[1] == "Next":
                    os.system('irsend SEND_ONCE tape KEY_NEXT')
                elif lines[1] == "Previous":
                    os.system('irsend SEND_ONCE tape KEY_PREVIOUS')   
                elif lines[1] == "Slow":
                    os.system('irsend SEND_ONCE tape KEY_VOLUMEDOWN')
                elif lines[1] == "Fast":
                    os.system('irsend SEND_ONCE tape KEY_VOLUMEUP')
                elif lines[1] == "Mute" and tv_unmute == True:
                    os.system('irsend SEND_ONCE tape KEY_MUTE')
                    tv_unmute = False
                elif lines[1] == "Unmute" and tv_unmute == False:
                    os.system('irsend SEND_ONCE tape KEY_MUTE')
                    tv_unmute = True
                
            elif lines[0] == "Songs":
                if lines[1] == "On" and songs_on == False:
                    os.system('irsend SEND_ONCE tape KEY_POWER')
                    songs_on = True
                elif lines[1] == "Off" and songs_on == True:
                    os.system('irsend SEND_ONCE tape KEY_POWER')
                    songs_on = False
                elif lines[1] == "Next":
                    os.system('irsend SEND_ONCE tape KEY_NEXT')
                elif lines[1] == "Previous":
                    os.system('irsend SEND_ONCE tape KEY_PREVIOUS')
        os.remove("ui-input.txt")
        
    file_path = "./mic_audio.wav"
    micAudio = True
    check = True
    file_exists = exists("./phone_audio.wav")
    if file_exists:
        file_path = "./phone_audio.wav"
        micAudio = False
    
    if micAudio:
        # Recording the audio
        os.system('arecord --format=S16_LE --duration=5 --rate=44100 --file-type=wav mic_audio.wav')
        preprocess_audio()
        prediction = detect_triggerword(ruha_detection_model)
        check = checkTriggerWord(prediction, 0.9)
        print(check)
        if check:
            GPIO.output(21, True)
            os.system('arecord --format=S16_LE --duration=5 --rate=44100 --file-type=wav mic_audio.wav')
            GPIO.output(21, False)
        
    if not micAudio or check:
        # trigger word detection model
        labels = ["Ruha", "No Ruha"]
        # loading the file and predicting
        test_data = wav2mfcc(file_path, [], n_mfcc, trigger_word_max_len_nfft)
        test_data = test_data.reshape(1, n_mfcc, trigger_word_max_len_nfft)
        result = trigger_word_detection_model.predict(test_data)
        result = result.argmax(axis=1)
        print("Trigger Word Detection Model: ", labels[result[0]])
        
        if labels[result[0]] == "Ruha":
            # appliance detection model
            labels=["Songs", "TV", "AC", "Bulb", "Negative"]
            appliance_detection_model = keras.models.load_model('./Models/Appliance Detection Model')
            # loading the file and predicting
            test_data = wav2mfcc(file_path, [], n_mfcc, appliance_max_len_nfft)
            test_data = test_data.reshape(1, n_mfcc, appliance_max_len_nfft)
            result = appliance_detection_model.predict(test_data)
            result = result.argmax(axis=1)
            print("Appliance Detection Model: ", labels[result[0]])
            
            # action detection model
            labels1=["Previous", "Unmute", "Slow", "Next", "Mute", "Fast", 
                    "Off karo", "Band karo", "On karo", "Chalao", "Negative"]
            # loading the file and predicting
            test_data = wav2mfcc(file_path, [], n_mfcc, action_max_len_nfft)
            test_data = test_data.reshape(1, n_mfcc, action_max_len_nfft)
            result1 = action_detection_model.predict(test_data)
            result1 = result1.argmax(axis=1)
            print("Action Detection Model: ", labels1[result1[0]])
            
            if labels[result[0]] == "AC":
                if labels1[result1[0]] == "Chalao" or labels1[result1[0]] == "On karo":
                    if not ac_on:
                        os.system('irsend SEND_ONCE tape KEY_POWER')
                        ac_on = True
                elif labels1[result1[0]] == "Band karo" or labels1[result1[0]] == "Off karo":
                    if ac_on:
                        os.system('irsend SEND_ONCE tape KEY_POWER')
                        ac_on = False
                elif labels1[result1[0]] == "Slow":
                    for i in range(0, 2):
                        os.system('irsend SEND_ONCE tape KEY_VOLUMEDOWN')
                elif labels1[result1[0]] == "Fast":
                    for i in range(0, 2):
                        os.system('irsend SEND_ONCE tape KEY_VOLUMEUP')
                    
            elif labels[result[0]] == "Songs":
                if labels1[result1[0]] == "Chalao" and songs_on == False:
                    os.system('irsend SEND_ONCE tape KEY_POWER')
                    songs_on = True
                elif labels1[result1[0]] == "Next":
                    os.system('irsend SEND_ONCE tape KEY_NEXT')
                elif labels1[result1[0]] == "Previous":
                    os.system('irsend SEND_ONCE tape KEY_PREVIOUS')

            elif labels[result[0]] == "TV":            
                if labels1[result1[0]] == "Chalao":
                    # channel detection model
                    labels=["Cartoon Network", "Negative", "Discovery", "Geo News", "Saama News", "HBO"]
                    # loading the file and predicting
                    test_data = wav2mfcc(file_path, [], n_mfcc, channel_max_len_nfft)
                    test_data = test_data.reshape(1, n_mfcc, channel_max_len_nfft)
                    result = channel_detection_model.predict(test_data)
                    result = result.argmax(axis=1)
                    print("Channel Detection Model: ", labels[result[0]])
                    
                    if labels[result[0]] == "Negative" and tv_on == False:
                        os.system('irsend SEND_ONCE tape KEY_POWER')
                        tv_on = True
                    else:
                        # Getting digits of channel number
                        for digit in channel_numbers[labels[result[0]]]:
                          os.system('irsend SEND_ONCE tape KEY_' + digit)
                
                elif labels1[result1[0]] == "On karo" and tv_on == False:
                    os.system('irsend SEND_ONCE tape KEY_POWER')
                    tv_on = True
                elif labels1[result1[0]] == "Band karo" or labels1[result1[0]] == "Off karo":
                    if tv_on:
                        os.system('irsend SEND_ONCE tape KEY_POWER')
                        tv_on = False
                elif labels1[result1[0]] == "Next":
                    os.system('irsend SEND_ONCE tape KEY_NEXT')
                elif labels1[result1[0]] == "Previous":
                    os.system('irsend SEND_ONCE tape KEY_PREVIOUS')   
                elif labels1[result1[0]] == "Slow":
                    os.system('irsend SEND_ONCE tape KEY_VOLUMEDOWN')
                elif labels1[result1[0]] == "Fast":
                    os.system('irsend SEND_ONCE tape KEY_VOLUMEUP')
                elif labels1[result1[0]] == "Mute" and tv_unmute == True:
                    os.system('irsend SEND_ONCE tape KEY_MUTE')
                    tv_unmute = False
                elif labels1[result1[0]] == "Unmute" and tv_unmute == False:
                    os.system('irsend SEND_ONCE tape KEY_MUTE')
                    tv_unmute = True
            
            elif labels[result[0]] == "Bulb":
                # room detection model
                labels=["Bethaq", "Garage", "Bathroom", "Bedroom", "Kitchen", "Lounge", "Washroom", "Negative"]
                # loading the file and predicting
                test_data = wav2mfcc(file_path, [], n_mfcc, room_max_len_nfft)
                test_data = test_data.reshape(1, n_mfcc, room_max_len_nfft)
                result = room_detection_model.predict(test_data)
                result = result.argmax(axis=1)
                print("Room Detection Model: ", labels[result[0]])
                
                if labels[result[0]] == "Bethaq":
                    # Front right room
                    if labels1[result1[0]] == "Chalao" or labels1[result1[0]] == "On karo":
                        GPIO.output(6, True)
                    elif labels1[result1[0]] == "Band karo" or labels1[result1[0]] == "Off karo":
                        GPIO.output(6, False)

                elif labels[result[0]] == "Garage":
                    # Front left room
                    if labels1[result1[0]] == "Chalao" or labels1[result1[0]] == "On karo":
                        GPIO.output(13, True)
                    elif labels1[result1[0]] == "Band karo" or labels1[result1[0]] == "Off karo":
                        GPIO.output(13, False)
                    
                elif labels[result[0]] == "Bathroom":
                    # Middle right room
                    if labels1[result1[0]] == "Chalao" or labels1[result1[0]] == "On karo":
                        GPIO.output(5, True)
                    elif labels1[result1[0]] == "Band karo" or labels1[result1[0]] == "Off karo":
                        GPIO.output(5, False)
                        
                elif labels[result[0]] == "Bedroom":
                    # Middle left room
                    if labels1[result1[0]] == "Chalao" or labels1[result1[0]] == "On karo":
                        GPIO.output(26, True)
                    elif labels1[result1[0]] == "Band karo" or labels1[result1[0]] == "Off karo":
                        GPIO.output(26, False)
                    
                elif labels[result[0]] == "Kitchen":
                    # do nothing
                    print("Do Nothing")
                    
                elif labels[result[0]] == "Lounge":
                    # do nothing
                    print("Do Nothing")
            else:
                # do nothing
                print("Do Nothing")
                
        if not micAudio:
            os.remove(file_path)
            