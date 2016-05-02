/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules,
  NativeAppEventEmitter
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

    BGNativeModuleExample.testRespondMethod("dealloc")
    .then(result => {
      console.log("result is ", result);
    })
    .catch(error => {
      console.log(error);
    });

    //测试Promiss
    // this.testRespond();

    //测试常量的值
    console.log("BGModuleName value is ", BGNativeModuleExample.BGModuleName);

    //接收事件
    NativeAppEventEmitter.addListener(BGNativeModuleExample.TestEventName, info => {
      console.log(info);
    });
  }

  async testRespond() {
    try {
      var result = BGNativeModuleExample.testRespondMethod("hell");
      if(result) {
        console.log("respond this method");
      }
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress.bind()}>
        <Text style={styles.welcome}>
          Press
        </Text>
      </TouchableOpacity>
    );
  }

  onPress() {
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
