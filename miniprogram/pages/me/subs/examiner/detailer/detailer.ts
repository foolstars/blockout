// pages/nearby/subs/detail/detail.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: {},
    contents: [],
    lv: -1,
    sessionCode: getApp().globalData.sessionCode
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(option: any) {
    console.log(getApp())
    console.log(getApp().globalData.sessionCode)
    this.setData({sessionCode: getApp().globalData.sessionCode})
    console.log(this.data.sessionCode)
    var that = this
    let pid = option.pid
    wx.request({
      url: getApp().globalData.server,
      data: { "operation_type": "get_thread_examiner", "pid": pid },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res: any) {
        that.setData({ title: res.data[0] })
        let tmp: any = []
        for (let i = res.data.length - 1; i > 0; i--) {
          tmp.push(res.data[i])
        }
        that.setData({
          contents: tmp,
          lv: pid
        })
      }
    });
  },

  approve() {
    var that = this
    wx.request({
      url: getApp().globalData.server,
      data: {
        "operation_type": "operate_thread_in_buffer",
        "pid": that.data.lv,
        "sessionCode": that.data.sessionCode,
        "optype": 1
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res: any) {

      }
    });
  },

  disapprove() {
    var that = this
    wx.request({
      url: getApp().globalData.server,
      data: {
        "operation_type": "operate_thread_in_buffer",
        "pid": that.data.lv,
        "sessionCode": that.data.sessionCode,
        "optype": 0
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res: any) {

      }
    });
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