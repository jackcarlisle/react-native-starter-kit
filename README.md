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

11. This should open the simulator. Press Cmd+Shft until you get to it. (it should appear in your dock if you can't find it) You should then be able to see the following window:
![simulator](https://cloud.githubusercontent.com/assets/12450298/15799845/4d221502-2a62-11e6-8b2a-cdcecc340357.png)

12. Open the ```index.ios.js``` file in your text editor, make some changes to the text between the <Text></Text> tags and then save it. Go back to your simulator and then press Cmd+R. Now you should be able to see your updated changes.

13. Delete the code from ```index.ios.js``` as we'll be writing our own from scratch later. You've now successfully set up an IOS simulator! We'll come back to this after we've set up android.

## Android

1. Go to the **[React Native docs](https://facebook.github.io/react-native/docs/getting-started.html)** and select your platform at the top.

2. Scroll down until you see a link to download the JDK (Java Developer Kit) for your OS:
![jdk](https://cloud.githubusercontent.com/assets/12450298/15800015/b87fe348-2a66-11e6-94f6-cc6def73eb91.png)

3. Download the JDK that you need. I chose the one for Mac (make sure you accept the license agreement first):
![JDK download](https://cloud.githubusercontent.com/assets/12450298/15800024/0aeefda8-2a67-11e6-969a-a2eab5846f2e.png)

4. Once it's downloaded, follow the installation instructions:
![install JDK](https://cloud.githubusercontent.com/assets/12450298/15800044/73b979da-2a67-11e6-832a-021ded96deb5.png)

5. Alternatively you can download the **[Android Studio](https://developer.android.com/studio/index.html)** which essentially does the same thing. You can follow instructions for that **[here](https://facebook.github.io/react-native/docs/getting-started.html)

6. Next you'll need to install the android-sdk. Type the following command into your command line:  
```$ brew install android-sdk```

7. Then you'll have to set the ANDROID_HOME environment variable. To do this, type the following into the terminal:  
-``` $ cat ~/.bash_profile``` (this prints out your bash profile)  
-``` $ vi ~/.bash_profile``` (press i then enter)  
-Edit the new first line and paste -```ANDROID_HOME=/usr/local/opt/android-sdk```  
-Then press ```:wq```  
-Lastly enter ```$ echo $ANDROID_HOME``` (should print what you saved it as)  
-If that hasn't worked then try ```$ export ANDROID_HOME=export ANDROID_HOME=~/Library/Android/sdk``` in your terminal

8. In the React Native docs it recommends that you install **[Flow](http://www.flowtype.org/)** which is a static type checker which helps to quickly find errors in Javascript applications. You can install it with Homebrew:  
```$ brew install flow```

9. Next you'll need to install an Android simulator. Download and install **[Genymotion](https://www.genymotion.com/)**. To do this you'll need to create an account. Click on the sign in button in the top right and then click Create Account:
![genymotion](https://cloud.githubusercontent.com/assets/12450298/15804837/54c90750-2b0e-11e6-8c45-644420b3cbc6.png)
![create account](https://cloud.githubusercontent.com/assets/12450298/15804843/a589ae2e-2b0e-11e6-96e5-abc09b434fca.png)

10. Once you've activated your account, click on the products tab at the top and then scroll down until you get to the development options. Genymotion is free if you use it for personal use so if that's the case, click on the 'Individual' tab and then click on 'Get Started' in the box titled 'Basic':
![basic](https://cloud.githubusercontent.com/assets/12450298/15804871/a8f5ef90-2b0f-11e6-9f57-d0b3542f5962.png)

11. Follow the link and then click on the download that you want:
![download genymotion](https://cloud.githubusercontent.com/assets/12450298/15804876/e2b94358-2b0f-11e6-86c2-c8a777ddc183.png)

12. Once it's downloaded, move both Genymotion and Genymotion Shell into Applications:
![genymotion shell](https://cloud.githubusercontent.com/assets/12450298/15804888/5b5c26cc-2b10-11e6-8e4e-62756d9c7c99.png)

13. Next download and install **[VirtualBox](https://www.virtualbox.org/)** which is a virtual machine that you can run on top of your existing OS. (It basically helps with the emulation of Genymotion):
![virtualbox](https://cloud.githubusercontent.com/assets/12450298/15804924/b859b672-2b11-11e6-8f34-6f2ac1599ccb.png)
Choose the version you want:
![vb version](https://cloud.githubusercontent.com/assets/12450298/15804938/f3c838dc-2b11-11e6-9511-31abf662b5ce.png)  
Then follow the instructions to install it:
![install vb](https://cloud.githubusercontent.com/assets/12450298/15804957/967ae4da-2b12-11e6-8b8c-e3484eb6f006.png)

14. To run a device emulator, open Genymotion and then sign in. Then when it asks if you want to add a new device click yes:
![add device](https://cloud.githubusercontent.com/assets/12450298/15804990/5ba43766-2b13-11e6-823a-0c668913126e.png)

15. Select a device that you want to emulate and then click 'next':
![device select](https://cloud.githubusercontent.com/assets/12450298/15807130/47d98d50-2b4d-11e6-9556-358e99dd2a59.png)
Genymotion then retrieves the virtual device:
![retrieve device](https://cloud.githubusercontent.com/assets/12450298/15807146/875e5924-2b4d-11e6-9600-dd6c9d10d86c.png)
If it displays the error 'Genymotion failed to import OVA files' then delete the Genymotion cache by going into settings>misc:
![clear cache](https://cloud.githubusercontent.com/assets/12450298/15807240/7f83858c-2b50-11e6-8dae-0722c23b7d1a.png)

16. To run the emulator, click on the one you just downloaded and then press 'start':
![start emulator](https://cloud.githubusercontent.com/assets/12450298/15807250/d1084b9a-2b50-11e6-9c6b-baa4b035d72e.png)
Then go to your terminal and type the following commands in separate tabs or windows (make sure there is only one instance running):  
```$ npm run start```  
```$ react-native run-android```    
(make sure your emulator is running)
You should be able to see the emulator fetch the JS bundle and then display the content in ```index.android.js```:
![fetch bundle](https://cloud.githubusercontent.com/assets/12450298/15807316/d99db996-2b52-11e6-8f17-fc06332e7a1b.png)
![index.android.js](https://cloud.githubusercontent.com/assets/12450298/15807323/fb1c3408-2b52-11e6-8a47-792a716c728e.png)

17. After you've made changes in ```index.android.js``` you can reload the emulator by pressing the grip in the bottom right and then selecting 'Reload JS':
![reload js](https://cloud.githubusercontent.com/assets/12450298/15807339/68f9fe10-2b53-11e6-942d-7bccc3e1b255.png)

### You've now successfully set up a development environment for both IOS and Android! Now it's time to start developing...
