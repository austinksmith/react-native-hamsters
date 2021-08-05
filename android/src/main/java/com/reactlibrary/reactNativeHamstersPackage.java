package com.reactlibrary;

import com.facebook.react.ReactPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class reactNativeHamstersPackage implements ReactPackage {

    private ReactNativeHost reactNativeHost;
    private ReactPackage additionalThreadPackages[];

    public reactNativeHamstersPackage(ReactNativeHost reactNativeHost, ReactPackage... additionalThreadPackages) {
        this.reactNativeHost = reactNativeHost;
        this.additionalThreadPackages = additionalThreadPackages;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(
                new reactNativeHamstersModule(reactContext, reactNativeHost, additionalThreadPackages)
        );
    }
}