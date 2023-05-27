// pages/homepage/homepage.ts
Page({

  /**
   * Page initial data
   */
  data: {
    threads: []
  },
  tabSelect: function (e: any) {
    var current = e.currentTarget.dataset.id
    this.setData({
      current: current
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
    let that = this
    wx.request({
      url: getApp().globalData.server,
      data: { "operation_type": "get_new_threads_examiner","ignore":0,"n":200},
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res:any) {
        console.log(res);
        let threadinfo: any = res.data;
        let tmp: any = []
        for (let i = 0; i < threadinfo.length; i++) {
          tmp.push({
            Txt: "审核",
            content: {
              Name: res.data[i].ptheme,
              Msg: res.data[i].content,
              Topage: "detailer/detailer?pid=" + threadinfo[i].pid.toString()
            },
            Rtxt: "",
          })
        }
        that.setData({ threads: tmp })
        console.log(that.data.threads)
      }
    });
  },

  refresh() {
    let that = this
    wx.request({
      url: getApp().globalData.server,
      data: { "operation_type": "get_new_threads_examiner","ignore":0,"n":200},
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res:any) {
        console.log(res);
        let threadinfo: any = res.data;
        let tmp: any = []
        for (let i = 0; i < threadinfo.length; i++) {
          tmp.push({
            Txt: "审核",
            content: {
              Name: res.data[i].ptheme,
              Msg: res.data[i].content,
              Topage: "detailer/detailer?pid=" + threadinfo[i].pid.toString()
            },
            Rtxt: "",
          })
        }
        that.setData({ threads: tmp })
        console.log(that.data.threads)
      }
    });
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

  test() {
    console.log('Pressed');
    wx.request({
      url: 'http://127.0.0.1:8888/plans', //仅为示例，并非真实的接口地址
      data: { "filename": "NaN", "show_type": "raw", "x": 0, "y": 0 },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
      }
    });
  }

})