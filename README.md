# reactNativeHamsters

[![npm version](https://img.shields.io/npm/v/reactNativeHamsters.svg?style=flat-square)](https://www.npmjs.com/package/reactNativeHamsters)
[![downloads](https://img.shields.io/npm/dm/reactNativeHamsters.svg?style=flat-square)](https://www.npmjs.com/package/reactNativeHamsters)

This project is based on the work of several previous projects, this is a stand alone worker threads implementation for use within ReactNative and with [Hamsters.js](https://hamsters.io), allowing you to make full use of the multithreading and parallel processing in your React Native application.

## Getting started

`$ npm install hamsters.js --save`
`$ npm install reactNativeHamsters --save`

### Mostly automatic installation

`$ react-native link reactNativeHamsters`

### Android

For android you will need to make a slight modification to your `MainApplication.java`
file.  In the `getPackages` method pass in `mReactNativeHost` to the `reactNativeHamstersPackage`
constructor:

```java
    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new reactNativeHamstersPackage(mReactNativeHost)  // <-- Here
      );
    }
```

Also note that only the official react native modules are available from your
threads (vibration, fetch, etc...). To include additional native modules in your
threads, pass them into the `reactNativeHamstersPackage` constructor after the `mReactNativeHost`
like this:
`new reactNativeHamstersPackage(mReactNativeHost, new ExampleNativePackage(), new SQLitePackage())`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `reactNativeHamsters` and add `reactNativeHamsters.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libreactNativeHamsters.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.reactNativeHamstersPackage;` to the imports at the top of the file
  - Add `new reactNativeHamstersPackage(mReactNativeHost)` to the list returned by the `getPackages()` method
  - Also note that only the official react native modules are available from your
    threads (vibration, fetch, etc...). To include additional native modules in your
    threads, pass them into the `reactNativeHamstersPackage` constructor after the `mReactNativeHost`
    like this:
    `new reactNativeHamstersPackage(mReactNativeHost, new ExampleNativePackage(), new SQLitePackage())`

2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':reactNativeHamsters'
  	project(':reactNativeHamsters').projectDir = new File(rootProject.projectDir, '../node_modules/reactNativeHamsters/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':reactNativeHamsters')
  	```

#### Windows
Windows support is not yet implemented, [PRs are welcome if you want to give it a shot!(https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `reactNativeHamsters.sln` in `node_modules/reactNativeHamsters/windows/reactNativeHamsters.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Thread.reactNativeHamsters;` to the usings at the top of the file
  - Add `new reactNativeHamstersPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage

To learn how to make use of the library with [Hamsters.js](https://hamsters.io) head to the ReactNative section of the [Hamsters.js Wiki](https://hamsters.io/wiki/react-native) or check out the example Hamstersjs application in the examples directory! For use without [Hamsters.js](https://hamsters.io) check out the project this was based on https://github.com/joltup/react-native-threads, this project may contain modifications or changes that are specific for use with [Hamsters.js](https://hamsters.io).

### Worker Thread Lifecycle

- Worker Threads are paused when the app enters in the background
- Worker Threads are resumed once the app is running in the foreground
- During development, when you reload the main JS bundle (shake device -> `Reload`) the Worker Threads are killed

### Debugging

Instantiating Worker Threads creates multiple react native JS processes and can make debugging
remotely behave unpredictably. It's recommended to use a third party debugging tool like
[Reactotron](https://github.com/infinitered/reactotron) to aid with this. Each process,
including your main application as well as your thread code can connect to Reactotron
and log debugging messages.

### Building for Release

You will need to manually bundle your thread files for use in a production release
of your app.  This documentation assumes you have a single thread file called
`reactNativeHamster.js` in your project root.  If your file is named differently or in
a different location, you can update the documented commands accordingly.

**Note**: If your single thread file is in a different location, the folder structure needs to 
be replicated under `./ios` and `./android/app/src/main/assets/threads`.

```
./App/Workers/reactNativeHamster.js => ./ios/App/Workers/reactNativeHamster.jsbundle
./App/Workers/reactNativeHamster.js => ./android/app/src/main/assets/threads/App/Workers/reactNativeHamster.jsbundle
```

For iOS you can use the following command:

`node node_modules/react-native/local-cli/cli.js bundle --dev false --assets-dest ./ios --entry-file ./node_modules/hamsters.js/build/common/reactNativeHamster.js --platform ios --bundle-output ./ios/reactNativeHamster.jsbundle`

Once you have generated the bundle file in your ios folder, you will also need to add
the bundle file to you project in Xcode. In Xcode's file explorer you should see
a folder with the same name as your app, containing a `main.jsbundle` file as well
as an `appDelegate.m` file. Right click on that folder and select the 'Add Files to <Your App Name>'
option, which will open up finder and allow you to select your `ios/reactNativeHamster.jsbundle`
file. You will only need to do this once, and the file will be included in all future
builds.

And then you can use the following command:

`node node_modules/react-native/local-cli/cli.js bundle --dev false --entry-file ./node_modules/hamsters.js/build/common/reactNativeHamster.js --platform android --bundle-output ./android/app/src/main/assets/reactNativeHamster.jsbundle --assets-dest android/app/src/main/res`

For convenience I recommend adding these thread building commands as npm scripts
to your project.

## Example App

Included in this repository is a simple example application demonstrating basic
usage of reactNativeHamsters with [Hamsters.js](https://hamsters.io)

## Acknowledgements

This library exists thanks to the previous effforts by other developers.

* https://github.com/joltup/react-native-threads
* https://github.com/fabriciovergal/react-native-workers
* https://github.com/devfd/react-native-workers

Neither of these were being maintained by their original owners and I wanted [Hamsters.js](https://hamsters.io) to work properly in react-native again so here it is.