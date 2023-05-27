/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    font_size?: number,
    dir?: string,
    usr?: {},
    hasUserInfo?: boolean,
    uid?: number,
    password?: string,
    sessionCode?: string,
    id?:string,
    online?:boolean,
    islogged?:boolean,
    server?:string,
    latitude?:string,
    longitude?:string,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}