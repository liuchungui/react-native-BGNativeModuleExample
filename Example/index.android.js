/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
} from 'react-native';

import BGNativeModuleExample from 'react-native-nativemodule-example';

class TestProject extends Component {
  componentDidMount() {
    BGNativeModuleExample.testPrint("Jack", {
      height: '1.78m',
      weight: '7kg'
    });

    BGNativeModuleExample.getNativeClass(name => {
      console.log("nativeClass: ", name);
    });

    BGNativeModuleExample.testPromises(true)
    .then(result => {
      console.log("result is ", result);
    })
    .catch(result => {
      console.log("result = ", result);
    });

    //打印常量的值
    console.log("BGModuleName const value = ", BGNativeModuleExample.BGModuleName);

    //接收事件
    DeviceEventEmitter.addListener(BGNativeModuleExample.TestEventName, info => {
      console.log(info);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestProject', () => TestProject);
