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

const { ThreadManager } = NativeModules;

export default class Worker {
  constructor(jsPath) {
    if (!jsPath || !jsPath.endsWith('.js')) {
      throw new Error('Invalid path for thread. Only js files are supported');
    }
    this.id = ThreadManager.startThread(jsPath.replace(".js", "")).then(id => {
      DeviceEventEmitter.addListener(`Thread${id}`, (message) => this.onmessage(message));
      return id;
    }).catch(err => {
      throw new Error(err);
    });
  }

  postMessage(message) {
    this.id.then(id => ThreadManager.postThreadMessage(id, message));
  }

  terminate() {
    this.id.then(ThreadManager.stopThread);
  }
}
