// pages/homepage/homepage.ts
Page({

  /**
   * Page initial data
   */
  data: {
    tabs: ['世界', '社群'],
    current: 0,
    imgUrls: [
      ['/images/bc.jpg', 'bc'],
      ['/images/fzp.jpg', 'fzp'],
      ['/images/hqb.jpg', 'hqb']
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: "",
    threads: []
  },
  tabSelect: function (e: any) {
    var current = e.currentTarget.dataset.id
    this.setData({
      current: current
    })
  },

  fzp() {
    wx.navigateTo({
      url:"subs/antiscan/antiscan"
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
    let that = this
    wx.request({
      url: getApp().globalData.server,
      data: { "operation_type": "get_new_threads","ignore":0,"n":20},
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
            Txt: "首页",
            content: {
              Name: res.data[i].ptheme,
              Msg: res.data[i].content,
              Topage: "subs/detail/detail?pid=" + threadinfo[i].pid.toString()
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
      data: { "operation_type": "get_new_threads","ignore":0,"n":20},
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
            Txt: "首页",
            content: {
              Name: res.data[i].ptheme,
              Msg: res.data[i].content,
              Topage: "subs/detail/detail?pid=" + threadinfo[i].pid.toString()
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
    console.log(getApp().globalData.online==true);
    /*wx.chooseImage({
      success (res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: getApp().globalData.server, //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success (res){
            console.log(res)
            const data = res.data
            //do something
          }
        })
      }
    })*/
  }

})