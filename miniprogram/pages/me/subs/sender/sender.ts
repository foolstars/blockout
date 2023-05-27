// pages/me/subs/sender/sending.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkbox1items: [{
      namea: 'agreement',
      text: "我确认发布内容不违反法律法规并愿意接受审核",
      value: false
    }],
    checkbox2items: [{
      namea: 'location',
      text: "我愿意分享此方案所在位置七日",
      value: false
    }],
    title: "",
    content: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },


  inputtitle(e: any) {
    this.setData({ title: e.detail.value })
  },

  inputcontent(e: any) {
    this.setData({ content: e.detail.value })
  },

  submit() {
    let that = this
    wx.request({
      url: getApp().globalData.server,
      data: {
        "operation_type": "create_thread",
        sessionCode: getApp().globalData.sessionCode,
        "ptheme": that.data.title,
        "content": that.data.content,
        "longitude": that.data.checkbox2items[0].value ? Math.floor(Number(getApp().globalData.longitude) * 10000) : null,
        "latitude": that.data.checkbox2items[0].value ? Math.floor(Number(getApp().globalData.latitude) * 10000) : null,
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res: any) {
        if (res.data[0].success) {
          wx.showToast({
            title: '发送成功',
            icon: "success",
            duration: 1500
          })
          setTimeout(function () {
            wx.navigateBack({ delta: 1 })
          }, 2000);
        }
        else {
          wx.showToast({
            title: '发送失败',
            icon: "none",
            duration: 1500
          })
        }
      }
    })
  },

  agree1(e: any) {
    console.log(this.data)
    let tmp: any = [
      {
        "namea": 'agreement',
        "text": "我确认发布内容不违反法律法规并愿意接受审核",
        "value": !this.data.checkbox1items[0].value
      }]
    this.setData({
      checkbox1items: tmp
    })
  },

  agree2(e: any) {
    console.log(this.data)
    let tmp: any = [
      {
        "namea": "location",
        "text": "我愿意分享此方案所在位置七日",
        "value": !this.data.checkbox2items[0].value
      }]
    this.setData({
      checkbox2items: tmp
    })
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