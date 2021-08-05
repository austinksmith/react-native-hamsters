using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Thread.reactNativeHamsters
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class reactNativeHamstersModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="reactNativeHamstersModule"/>.
        /// </summary>
        internal reactNativeHamstersModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "react-native-hamsters";
            }
        }
    }
}
