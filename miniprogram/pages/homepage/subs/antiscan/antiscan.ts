// pages/me/subs/myfavourite/myfavourite.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    threads: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    var that = this
    let mypid = []
    wx.request({
      url: getApp().globalData.server,
      data: { "operation_type": "get_scamlist", "uid": getApp().globalData.uid },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res: any) {
        mypid = res.data
        wx.request({
          url: getApp().globalData.server,
          data: { "operation_type": "pid_list", "pid": JSON.stringify(mypid) },
          method: 'POST',
          header: {
            'content-type': 'application/json'
          },
          success(res: any) {
            let tmp: any = []
            for (let i = 0; i < res.data.length; i++) {
              tmp.push({
                Txt: "收藏",
                content: {
                  Name: res.data[i].ptheme,
                  Msg: res.data[i].content,
                  Topage: "../detail/detail?pid=" + res.data[i].pid.toString()
                },
                Rtxt: "",
                pid: res.data[i].pid
              })
              that.setData({ threads: tmp })
            }
          }
        });
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