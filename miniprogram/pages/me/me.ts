// pages/me.ts
Page({

  /**
   * Page initial data
   */
  data: {
    online:false,
    uid:-1,
    id:"",
    sessionCode:""
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
    this.setData({
      online:getApp().globalData.online,
      uid:getApp().globalData.uid,
      id:getApp().globalData.id
      
    })
    console.log(this.data)
    console.log(getApp().globalData.sessionCode)
  },

  register() {
    wx.navigateTo({
      url:'subs/register/register'
    })
    console.log(getApp().globalData.sessionCode)
  },

  login() {
    wx.navigateTo({
      url:'subs/login/login'
    })
    console.log(getApp().globalData.sessionCode)
  },

  manage() {
    wx.navigateTo({
      url:'subs/examiner/examiner'
    })
    console.log(getApp().globalData.sessionCode)
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  },

  myplans() {
    wx.navigateTo({
      url:'subs/myplans/myplans'
    })
    console.log(getApp().globalData.sessionCode)
  },

  profileupdate() {
    wx.navigateTo({
      url:'subs/profileupdate/profileupdate'
    })
    console.log(getApp().globalData.sessionCode)
  },

  myfavourite() {
    wx.navigateTo({
      url:'subs/myfavourite/myfavourite'
    })
    console.log(getApp().globalData.sessionCode)
  },

  getStatus() {
    this.setData({
      online:getApp().globalData.online,
      uid:getApp().globalData.uid,
      id:getApp().globalData.id
    })
    console.log("refreshed")
    console.log(this.data)
    console.log(getApp().globalData.sessionCode)
  },

  reset() {
    wx.removeStorageSync('sessionCode')
    getApp().globalData.online = false
    this.setData({
      online: false
    })
    console.log('wiped')
    console.log(getApp().globalData.sessionCode)
  }

})