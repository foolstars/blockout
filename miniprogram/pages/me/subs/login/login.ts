// pages/me/subs/login/login.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    pw: ""
  },

  inputid(e: any) {
    this.setData({ id: e.detail.value })
    console.log(this.data.id)
  },

  inputpw(e: any) {
    this.setData({ pw: e.detail.value })
    console.log(this.data.pw)
  },


  login() {
    let that = this
    wx.request({
      url: getApp().globalData.server,
      data: { "operation_type": "login", "id": that.data.id, "password": that.data.pw },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res: any) {
        let here = res
        wx.request({
          url: getApp().globalData.server,
          data: { "operation_type": "search_user_by_id", "id": that.data.id },
          method:'POST',
          header:{'content-type':'application/json',},
          success(res:any) {
            console.log(here)
            console.log(that)
            console.log(here.data[0].sessionCode)
            if (here.data[0].success) {
              wx.setStorageSync("sessionCode", here.data[0].sessionCode)
              wx.showToast({
                title: '登录成功',
                icon: "success",
                duration: 1000
              })
              getApp().globalData.sessionCode = here.data[0].sessionCode
              getApp().globalData.online = true
              getApp().globalData.id = that.data.id
              getApp().globalData.uid = res.data[0].uid
              getCurrentPages()[getCurrentPages().length - 2].onLoad()
              setTimeout(function () {
                wx.navigateBack({ delta: 1 })
              }, 2000);
            }
            else {
              wx.showToast({
                title: '登录失败',
                icon: "none",
                duration: 1000
              })
            }
          }
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})