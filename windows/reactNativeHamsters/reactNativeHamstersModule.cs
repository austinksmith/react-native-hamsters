using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Thread.react-native-hamsterss
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class react-native-hamsterssModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="react-native-hamsterssModule"/>.
        /// </summary>
        internal react-native-hamsterssModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "react-native-hamsterss";
            }
        }
    }
}
