from flask import Flask
from flask import request, jsonify
from flask import Response
from flask_cors import CORS
from pprint import pprint
import json
import base64

app = Flask(__name__)
CORS(app)
ip= '192.168.18.96'
@app.route('/audio', methods=['POST'])
def process_audio():
    data = request.get_json()
    print ("Processing data: ", data['temp_uri'])
    encode_string = data['temp_uri']
    wav_file = open("./FYP/phone_audio.wav", "wb")
    decode_string = base64.b64decode(encode_string)
    wav_file.write(decode_string)
    return jsonify({'message':'successfully recieved from backend'})

@app.route('/set_channels', methods=['POST'])
def set_channels():
    data = request.get_json()
    
    # Reading channel numbers from file
    channel_numbers = {}
    with open("./FYP/channel-numbers.txt", "r") as file:
        lines = file.read().splitlines()
        for line in lines:
            words = line.split(", ")
            channel_numbers[words[0]] = words[1]
    
    # Updating channel
    channel_name = data['channel_name']
    channel_no = data['channel_no']
    channel_numbers[channel_name] = channel_no
    
    # Writing channels
    with open('./FYP/channel-numbers.txt', 'w') as file:
        for channel_name in channel_numbers:
            file.write(channel_name + ', ' + channel_numbers[channel_name] + '\n')
    return jsonify({'message':'successfully recieved from backend'})

@app.route('/ui_input', methods=['POST'])
def ui_input():
    data = request.get_json()
    appliance = data['appliance']
    if appliance == "Bulb":
        room = data['room']
        action = data['action']
        # Writing into file
        with open('./FYP/ui-input.txt', 'w') as file:
            file.write(appliance + '\n' + room + '\n' + action + '\n')
    
    elif appliance == "AC":
        action = data['action']
        # Writing into file
        with open('./FYP/ui-input.txt', 'w') as file:
            file.write(appliance + '\n' + action + '\n')
            
    elif appliance == "Songs":
        action = data['action']
        # Writing into file
        with open('./FYP/ui-input.txt', 'w') as file:
            file.write(appliance + '\n' + action + '\n')
            
    elif appliance == "TV":
        action = data['action']
        if action == "Channel":
            channel = data['channel']
            # Writing into file
            with open('./FYP/ui-input.txt', 'w') as file:
                file.write(appliance + '\n' + action + '\n' + channel + '\n')
        else:
            # Writing into file
            with open('./FYP/ui-input.txt', 'w') as file:
                file.write(appliance + '\n' + action + '\n')
    return jsonify({'message':'successfully recieved from backend'})

if __name__ == '__main__':
    app.run(host=ip,port=5000,debug=True)