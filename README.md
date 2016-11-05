#react-native-BGNativeModuleExample

下面两篇博客的示例代码：

[ReactNative之原生模块开发并发布——iOS篇](http://www.liuchungui.com/blog/2016/05/02/reactnativezhi-yuan-sheng-mo-kuai-kai-fa-bing-fa-bu-iospian/)

[ReactNative之原生模块开发并发布——android篇](http://www.liuchungui.com/blog/2016/05/08/reactnativezhi-yuan-sheng-mo-kuai-kai-fa-bing-fa-bu-androidpian/)


##安装
```
rnpm install react-native-nativemodule-example
```

##集成
reactNative0.29版本以后，需要在`MainApplication.java`文件的`getPackages`方法中添加：

```
@Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
              new MainReactPackage(),
              new BGNativeExamplePackage()
      );
    }
```

##使用
```
import BGNativeModuleExample from 'react-native-nativemodule-example';

BGNativeModuleExample.testPrint("Jack", {
    height: '1.78m',
    weight: '7kg'
});
```


##Example
```
npm install
```
