---
title: "Node.js SDK: While using Localhost mode, error generated: Cannot find name 'path'"
sidebar_label: "Node.js SDK: While using Localhost mode, error generated: Cannot find name 'path'"
sidebar_position: 4
---

<p>
  <button hidden style={{borderRadius:'8px', border:'1px', fontFamily:'Courier New', fontWeight:'800', textAlign:'left'}}> help.split.io link: https://help.split.io/hc/en-us/articles/4409899125645-NodeJS-SDK-While-using-Localhost-mode-error-generated-Cannot-find-name-path </button>
</p>

## Issue

Using Node.js SDK, when trying to run the code below in Typescript file using Localhost mode: 
```javascript
var factory = SplitFactory({
    core: {
         authorizationKey: 'localhost'
    },
    features: path.join(__dirname, '.split'),
    scheduler: {
        offlineRefreshRate: 15 // 15 sec
    }
});
```

The following error is thrown:
```
Cannot find name 'path'
 ```

## Root cause

This is a node issue. Typescript needs typings for any module, except if that module is not written in typescript. 

## Answer

You need to install the following package by running the command:
```
npm i @types/node -D
```