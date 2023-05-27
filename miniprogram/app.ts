// app.ts

App<IAppOption>({

  globalData: {
    server:"http://106.15.204.254:8888/miniprogram",//远程
    //"http://www.leepersonal.xyz:8888/miniprogram",//域名 但是没备案
    //"http://127.0.0.1:8888/miniprogram",//本地
    //"http://172.24.57.82:8888/miniprogram",
    islogged: false,
    dir: wx.env.USER_DATA_PATH,
    usr: {},
    uid: -1,
    id: "",
    password: "",
    sessionCode: "aa2a104bdad1399efc2ce98b0bca63234f35fe825662f221d0615e7a8f13f883",
    online: false,
    latitude: '',
    longitude: '',
  },
  onLaunch() {
    var that = this
    // 展示本地存储能力
    /*const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    try {
      this.globalData.usr = JSON.parse(wx.getStorageSync('UserInfo'))
      let usrjson_timestamp = wx.getStorageSync('UserInfoTimeStamp')
      let Timer = new Date()
      if ((Timer.getTime() - usrjson_timestamp) / 86400000 > 14)
        this.globalData.hasUserInfo = false
      else
        this.globalData.hasUserInfo = true
    }
    catch (error) { }*/

    // 第三方登录
    console.log(that.globalData.sessionCode)
    console.log("aa2a104bdad1399efc2ce98b0bca63234f35fe825662f221d0615e7a8f13f883")
    that.globalData.sessionCode = wx.getStorageSync("sessionCode")
    wx.request({
      url: that.globalData.server,
      data: { "operation_type":"relogin","sessionCode":that.globalData.sessionCode},
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res:any) {
        console.log(res.data[0])
        if(res.data[0].success) {
          let uid:any = res.data[0].value[0].uid
          let id:any = res.data[0].value[0].id
          that.globalData.uid = uid
          that.globalData.id = id
          console.log("relogin success")
          that.globalData.online = true
          wx.showToast({
            title:"登录成功",
            icon:"success",
            duration:1500
          })
        }
        else {
          try {
            //wx.removeStorageSync('sessionCode') 太暴力了
          }
          catch(error) {
            console.log(error)
          }
        }
      }
    });

    // 登录
    /*wx.login({
      success: res => {
        console.log(res.code)
        wx.request({
          url: 'http://127.0.0.1:8888/miniprogram',
          data: { "operation_type": "get_plans_and_user_and_post_theme", "longitude": Number(this.data.longitude) * 10000, "latitude": Number(this.data.latitude) * 10000 },
          method: 'POST',
          header: {
            'content-type': 'application/json'
          },
          success(res) {
            
          }
        });
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })*/
  },
})