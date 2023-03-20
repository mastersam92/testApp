package com.testapp;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class NavbarUtils extends ReactContextBaseJavaModule {
    
    @Override
    public String getName() {
        return "NavbarUtils";
    }

    public NavbarUtils(ReactApplicationContext reactContext) {
        super(reactContext);
    }

}