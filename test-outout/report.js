$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("G:/Seleniu_Scripts_feb18/CucumberAid/src/main/java/features/login1.feature");
formatter.feature({
  "line": 1,
  "name": "Login Module",
  "description": "",
  "id": "login-module",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#Background:"
    },
    {
      "line": 3,
      "value": "#Given If the User is in home page"
    },
    {
      "line": 4,
      "value": "#When Navigate to sign in page"
    },
    {
      "line": 5,
      "value": "#And Enter \"demo\" and \"1234\""
    },
    {
      "line": 7,
      "value": "#@Sanity @Regression"
    },
    {
      "line": 8,
      "value": "#"
    },
    {
      "line": 9,
      "value": "#Scenario: verify user is able to navigate login page"
    },
    {
      "line": 10,
      "value": "#Given User is on the home page"
    },
    {
      "line": 11,
      "value": "#When Navigate to sign in"
    },
    {
      "line": 12,
      "value": "#Then Verify sign in page"
    },
    {
      "line": 13,
      "value": "#Then Enter username and password"
    },
    {
      "line": 14,
      "value": "#Then  Logout and Close the Browser"
    }
  ],
  "line": 18,
  "name": "very user is able to navigate to Account info page",
  "description": "",
  "id": "login-module;very-user-is-able-to-navigate-to-account-info-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Navigate to sign in",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Verify sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user1 enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on Account info page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify the Account info Page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Logout and Close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-module;very-user-is-able-to-navigate-to-account-info-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 27,
      "id": "login-module;very-user-is-able-to-navigate-to-account-info-page;;1"
    },
    {
      "cells": [
        "demo",
        "1234"
      ],
      "line": 28,
      "id": "login-module;very-user-is-able-to-navigate-to-account-info-page;;2"
    },
    {
      "cells": [
        "demo2",
        "1234"
      ],
      "line": 29,
      "id": "login-module;very-user-is-able-to-navigate-to-account-info-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "very user is able to navigate to Account info page",
  "description": "",
  "id": "login-module;very-user-is-able-to-navigate-to-account-info-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Navigate to sign in",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Verify sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user1 enters \"demo\" and \"1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on Account info page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify the Account info Page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Logout and Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.if_user_is_on_home_page()"
});
formatter.result({
  "duration": 19249725717,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.navigate_to_sign_in()"
});
formatter.result({
  "duration": 3001388839,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.verify_sign_in_page()"
});
formatter.result({
  "duration": 39120845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo",
      "offset": 14
    },
    {
      "val": "1234",
      "offset": 25
    }
  ],
  "location": "LoginStepdef.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 60171702265,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"username\"}\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-VBE9S1K\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73), userDataDir\u003dC:\\Users\\DEEKSH~1\\AppData\\Local\\Temp\\scoped_dir7988_13201}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d65.0.3325.181, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 48ee9b05590a4f16a4287ef551f586d2\n*** Element info: {Using\u003dname, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepDefination.LoginStepdef.user_enters_username_and_password(LoginStepdef.java:59)\r\n\tat ✽.And user1 enters \"demo\" and \"1234\"(G:/Seleniu_Scripts_feb18/CucumberAid/src/main/java/features/login1.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepdef.click_account_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepdef.verify_Account_info_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepdef.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "very user is able to navigate to Account info page",
  "description": "",
  "id": "login-module;very-user-is-able-to-navigate-to-account-info-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Navigate to sign in",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Verify sign in page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user1 enters \"demo2\" and \"1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on Account info page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify the Account info Page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Logout and Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.if_user_is_on_home_page()"
});
formatter.result({
  "duration": 11790479298,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.navigate_to_sign_in()"
});
formatter.result({
  "duration": 3014819140,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.verify_sign_in_page()"
});
formatter.result({
  "duration": 37316598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo2",
      "offset": 14
    },
    {
      "val": "1234",
      "offset": 26
    }
  ],
  "location": "LoginStepdef.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 60076230008,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"username\"}\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027DESKTOP-VBE9S1K\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73), userDataDir\u003dC:\\Users\\DEEKSH~1\\AppData\\Local\\Temp\\scoped_dir11080_1767}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d65.0.3325.181, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: fc54821c8a8134738c456b747737a157\n*** Element info: {Using\u003dname, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepDefination.LoginStepdef.user_enters_username_and_password(LoginStepdef.java:59)\r\n\tat ✽.And user1 enters \"demo2\" and \"1234\"(G:/Seleniu_Scripts_feb18/CucumberAid/src/main/java/features/login1.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepdef.click_account_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepdef.verify_Account_info_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepdef.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
});