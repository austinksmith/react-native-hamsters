using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Thread.react-native-hamsters
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class react-native-hamstersModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="react-native-hamstersModule"/>.
        /// </summary>
        internal react-native-hamstersModule()
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
