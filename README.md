<h1 align="center">Automate_It</h1>

### Description
The project that we have built is, a `Home Automation System in Urdu Language`. The system will be responsible for controlling some features of home appliances not just by an android app but also with urdu voice which can be heard either from the app or the microphone device installed. Turning appliances on or off, changing the AC temperature, changing TV channels or playing the next/previous song. This all would be controlled by your voice or using the app.

### Manual
1) Download and Install `Go Language` for windows using this link:
    ```
    https://go.dev/doc/install
    ```
    
2) Open the project in Visual Studio Code. Execute the given commands to run the server:

    ```
    cd automate_it_server
    ```
    ```
    go run main.go models.go eps.go
    ```
    <div align="center">
      <img src = "https://drive.google.com/uc?export=view&id=1g-PwY2_NixKQ0l7UC3GGXedQYYB3n1gP" alt = "" width="800px"/>
    </div>

3) Install the required node modules:

    ```
    cd ..
    ```
    ```
    npm install
    ```    

4) Fix the node modules if you are asked to:

    ```
    npm audit fix --force
    ```

5) Run the react native applicaiton on your emulator:
  
    ```
    npx react-native run-android
    ```
    <div align="center">
      <img src = "https://drive.google.com/uc?export=view&id=1ieb-8AOvPbRAnsG7Yjs69lbYkoyu_x6T" alt = "" height="400px"/>
    </div>
  
6) Sign in if you are `Already Registered`:
    <div align="center">
      <img src = "https://drive.google.com/uc?export=view&id=1d1msY0uTbQ2U0zBwkzeKS9U891Wioq1l" alt = "" height="400px"/>
    </div>
  
7) Register by clicking on `Click here to sign up!` and then providing your credentials:
    <div align="center">
      <img src = "https://drive.google.com/uc?export=view&id=1Z9AkjXECTY8X7vXIRZg16ZthRtvXcLbY" alt = "" height="400px"/>
    </div>
  
8) Select `Your Home` and play with the appliances as you want:
    <div align="center">
      <img src = "https://drive.google.com/uc?export=view&id=1iFczmBsMeuxJFzNzTECjc-mcfKM8e9Ke" alt = "" height="400px"/>
      <img src = "https://drive.google.com/uc?export=view&id=15_HSpS0Wy0nlMbDU-1XNwv0BvDrRmOWb" alt = "" height="400px"/>
      <img src = "https://drive.google.com/uc?export=view&id=10yFkrQXF9RoBc7JjiyKc9dPf1CJKPjmD" alt = "" height="400px"/>
    </div>
  
9) Click on `Mic Input` page to send voice command using microphone:
    <div align="center">
      <img src = "https://drive.google.com/uc?export=view&id=1DVKLErTd8Vkta2_B1GvZLjabTzGdUfau" alt = "" height="400px"/>
    </div>
  
10) Click on `Set Channels` page to set channel numbers according to your television:
    <div align="center">
      <img src = "https://drive.google.com/uc?export=view&id=1xWaHp9EfHy9T__HmvvZ2qTYNAwL7t30I" alt = "" height="400px"/>
      <img src = "https://drive.google.com/uc?export=view&id=1qhl4WdVu3y18yvlSB1zuiD5pLbaYdK7q" alt = "" height="400px"/>
      <img src = "https://drive.google.com/uc?export=view&id=1L5MWFyl1BLOcEWg_BwoTNVWnXa2p6bMA" alt = "" height="400px"/>
    </div>
  
### Dataset
The urdu dataset that we collected ourselves and is used for models training can be found 
[Here](https://www.kaggle.com/datasets/sameetassadullah/home-automation-system-in-urdu-language-dataset):
```
https://www.kaggle.com/datasets/sameetassadullah/home-automation-system-in-urdu-language-dataset
```

### Hardware Setup
You will need a professional to set up all the hardware connections. However, you can run the backend server whole file is named as `server.py` in `Hardware Codes` Folder. The command that you will need to run the server is:
```
python3 server.py
```

### Contributors
- [Sameet Asadullah](https://github.com/SameetAsadullah)
- [Aysha Noor](https://github.com/ayshanoorr)
- [Tayyab Ali](https://github.com/DarkDragz)
