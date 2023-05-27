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
  },

  inputpw(e: any) {
    this.setData({ pw: e.detail.value })
    console.log(this.data.pw)
  },


  login() {
    let that = this
    wx.request({
      url: getApp().globalData.server,
      data: { "operation_type": "register", "id": that.data.id, "password": that.data.pw },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res: any) {
        console.log(res)
        if (res.data.info == 'registered') {
          wx.showToast({
            title: '注册成功',
            icon: "success",
            duration: 1000
          })
          getCurrentPages()[getCurrentPages().length - 2].getStatus()
          setTimeout(function () {
            wx.navigateBack({ delta: 1 })
          }, 2000);
        }
        else {
          wx.showToast({
            title: '注册失败',
            icon: "none",
            duration: 1000
          })
        }
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