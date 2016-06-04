# react-native-starter-kit [WORK IN PROGRESS!]
A tutorial for getting started with your first react-native application


# Environment Setup

## IOS

1. Download **[XCode](https://developer.apple.com/xcode/)** from the app store

2. Install  **[Homebrew](http://brew.sh/)** by copying and pasting the following command into your terminal:  
```$ /usr/bin/ruby -e "$(curl -fsSLhttps://raw.githubusercontent.com/Homebrew/install/master/install)"```

3. Install **[node](https://nodejs.org/en/)** with Homebrew using the following command:  
```$ brew install node```

4. Install **[Watchman](https://facebook.github.io/watchman/)** with Homebrew using a similar command to the one above:  
```$ brew install watchman```  
Watchman looks out for file changes and triggers actions such as rebuilding assets with these changes.

5. Install the React Native cli:  
```$ sudo npm install react-native-cli -g```

6. Initialise your React Native project using the React Native cli:  
```$ react-native init <projectName>```

7. Checkout to the newly created folder:  
```$ cd <projectName>```

8. Create a new repository on **[GitHub](https://github.com/)** and then copy the clone link:
![cloneLink](https://cloud.githubusercontent.com/assets/12450298/15799841/32e5ac58-2a62-11e6-94df-f5cfeb58ab67.png)

9. Initialise your project and link it to the GitHub repo:  
```$ git init```  
```$ git add .```    
```$ git commit -m "init"```  
```$ git remote add origin <yourCloneLink>```  
```$ git push -u origin master```

10. Run XCode by right clicking on the ```projectName.xcodeproj``` file in your Finder and then selecting 'Open with XCode'. The file is located within the ```ios``` directory. Once XCode has loaded up, click the 'play' button in the top left to build your project:
![build](https://cloud.githubusercontent.com/assets/12450298/15799851/8a5cf70c-2a62-11e6-958a-98dadd5de870.png)

11. This should open the simulator. Press Cmd+Shft until you get to it. (it should appear in your dock) You should then be able to see the following window:
![simulator](https://cloud.githubusercontent.com/assets/12450298/15799845/4d221502-2a62-11e6-8b2a-cdcecc340357.png)

12. Open the ```index.ios.js``` file in your text editor, make some changes to the text between the <Text></Text> tags and then save it. Go back to your simulator and then press Cmd+R. Now you should be able to see your updated changes.

13. Delete the code from ```index.ios.js``` as we'll be writing our own from scratch later.
