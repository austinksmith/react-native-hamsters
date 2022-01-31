/* jshint esversion: 6, curly: true, eqeqeq: true, forin: true */

/***********************************************************************************
* Title: react-native-hamsters                                                     *
* Description: Stand alone worker threads implementation for ReactNative           *
  "main": "index.js", *
* Author: Austin K. Smith                                                          *
* Contact: austin@asmithdev.com                                                    *  
* Copyright: 2015 Austin K. Smith - austin@asmithdev.com                           * 
* License: Artistic License 2.0                                                    *
***********************************************************************************/

import {
  NativeModules,
  DeviceEventEmitter,
} from 'react-native';

const { ThreadSelfManager } = NativeModules;

const self = {
  onmessage: null,
  postMessage: ThreadSelfManager.postMessage
};

DeviceEventEmitter.addListener('ThreadMessage', (message) => {
  !!message && self.onmessage && self.onmessage(message);
});

export default self;
