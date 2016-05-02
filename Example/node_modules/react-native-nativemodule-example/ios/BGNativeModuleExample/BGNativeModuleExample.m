//
//  BGNativeModuleExample.m
//  TestProject
//
//  Created by user on 16/5/2.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "BGNativeModuleExample.h"
#import "RCTLog.h"
#import "RCTEventDispatcher.h"

static NSString * const kTestNotificationName = @"kTestNotificationName";
static NSString * const TestEventName = @"TestEventName";

@implementation BGNativeModuleExample

@synthesize bridge = _bridge;

- (instancetype)init {
    if(self = [super init]) {
        [NSTimer scheduledTimerWithTimeInterval:1.0 target:self selector:@selector(sendEventToJS) userInfo:nil repeats:YES];
    }
    return self;
}

//此处不能使用OC的字符串，直接输入就行了
RCT_EXPORT_MODULE(BGNativeModuleExample);

//测试方法导出
RCT_EXPORT_METHOD(testPrint:(NSString *)name info:(NSDictionary *)info) {
    RCTLogInfo(@"%@: %@", name, info);
}

//测试回调函数
RCT_EXPORT_METHOD(getNativeClass:(RCTResponseSenderBlock)callback) {
    callback(@[NSStringFromClass([self class])]);
}

//Promiss
RCT_REMAP_METHOD(testRespondMethod,
                 name:(NSString *)name
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject) {
    if([self respondsToSelector:NSSelectorFromString(name)]) {
        resolve(@YES);
    }
    else {
        reject(@"-1001", @"not respond this method", nil);
    }
}

//线程
- (dispatch_queue_t)methodQueue {
    return dispatch_queue_create("com.liuchungui.demo", DISPATCH_QUEUE_SERIAL);
}


//导出常量
- (NSDictionary *)constantsToExport {
    return @{ @"BGModuleName" : @"BGNativeModuleExample",
              TestEventName: TestEventName
              };
}

//发送事件
- (void)sendEventToJS {
    [self.bridge.eventDispatcher sendAppEventWithName:TestEventName body:@{@"name": @"Jack"}];
}



@end
