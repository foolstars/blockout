// pages/nearby/subs/detail/detail.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:{},
    contents:[],
    online:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(option) {
    this.setData({online:getApp().globalData.online==true})
    var that = this
    wx.request({
      url: getApp().globalData.server,
      data: { "operation_type": "get_thread", "pid":option.pid },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res:any) {
        that.setData({title:res.data[0]})
        let tmp:any = []
        for(let i = res.data.length - 1; i > 0; i--) {
          tmp.push(res.data[i])
        }
        that.setData({contents:tmp})
      }
    });
  },

  reply() {
    let that = this
    wx.navigateTo({
      url:"sender?pid="+that.data.title.pid
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