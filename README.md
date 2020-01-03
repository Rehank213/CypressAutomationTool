Environment setup guide:::
1. Install Android Studio (https://developer.android.com/studio)
   tip: follow default installation
2. install Java Development Kit (JDK): (https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
3. install Python 3 (https://www.python.org/ftp/python/3.7.4/python-3.7.4.exe)
4. install node.js (https://nodejs.org/en/download/)
5. install appium
   ```npm install -g appium``` from commandline
6. install ```npm install -g appium-doctor``` utility
7. install *Appium Desktop* (https://github.com/appium/appium-desktop/releases/tag/v1.13.0)
8. install platform-tools (https://developer.android.com/studio/releases/platform-tools) 
9. Set environment variables (for current user and SYSTEM user):
   - ANDROID_HOME : C:\Users\ebukhgammer\AppData\Local\Android\Sdk
   - JAVA_HOME: C:\Program Files\Java\jdk1.8.0_221
   - tip: if your folder is different, locate your JDK / Android installation
10. Update PATH environment variable (for current user and SYSTEM):
    - C:\Users\ebukhgammer\AppData\Roaming\npm
    - %JAVA_HOME%\bin
    - C:\platform-tools
  hint: make sure you specify correct paths to npm, java, platform tools
11. Run ```appium-doctor``` from cmd to see, if you fulfil the Appium requirements. Fix issues
12. Run `AndroidStudio`, select `AVD Manager`, install emulator device with most recent API level


Project setup guide:
1. Go to you projects folder, where you want to store you tests folder
2. Run `git clone https://senetechnology.visualstudio.com/QA%20Automation/_git/STA_SeneShop_PySeAppium SeneShopUI_tests`
3. `cd SeneShopUI_tests`
4. Create virtual environment: `virtualenv venv`
5. activate virtual environment: `venv\Scripts\activate.bat`
6. install python packages: `pip install -r requriements.txt`

Running tests:
1. Make sure Android device is running:
   `adb devices` should return you the list of devices with your device you want to test on
2. Start up Appium server: open terminal tab and run `appium`. You will see web link with port and a massage that appium is running
3. run `pytest tests/ -sv`
. run `pytest tests/ -sv`