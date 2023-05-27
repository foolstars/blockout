// pages/nearby/nearby.ts
Page({

  /**
   * Page initial data
   */
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    textData: {},
    city: '',
    defaultPage: true,
    threads: [],
    menus: []
  },

  updateMarkersWithThread() {
    let tmp: any = []
    let marker: any = {}
    marker = {
      id: 0,
      latitude: Number(this.data.latitude),
      longitude: Number(this.data.longitude),
      iconPath: "../../icons/marker.png",
      width: 22,
      height: 32
    }
    tmp.push(marker)
    for (let i = 0; i < this.data.threads.length; i++) {
      marker = {
        id: i,
        latitude: this.data.threads[i].latitude / 10000,
        longitude: this.data.threads[i].longitude / 10000,
        iconPath: "../../icons/marker.png",
        width: 22,
        height: 32
      }
      tmp.push(marker)
    }
    this.setData({ markers: tmp })
  },

  getDistance(e1: number, n1: number, e2: number, n2: number): number {
    const R = 6371
    // 根据经纬度获取点的坐标
    let getPoint = (e: number, n: number) => {
      e *= Math.PI / 180
      n *= Math.PI / 180
      // 这里 R* 被去掉, 相当于先求单位圆上两点的距, 最后会再将这个距离放大 R 倍
      return { x: Math.cos(n) * Math.cos(e), y: Math.cos(n) * Math.sin(e), z: Math.sin(n) }
    }
    let a = getPoint(e1, n1)
    let b = getPoint(e2, n2)
    let c = Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z)
    let r = Math.asin(c / 2) * 2 * R
    return r
  },

  nearbysearch() {
    let that = this
    wx.request({
      url: getApp().globalData.server,
      data: { "operation_type": "get_plans_and_user_and_post_theme", "longitude": Number(this.data.longitude) * 10000, "latitude": Number(this.data.latitude) * 10000 },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        let threadinfo: any = res.data;
        let tmp: any = []
        for (let i = 0; i < threadinfo.length; i++) {
          tmp.push({
            Txt: "附近",
            content: {
              Name: threadinfo[i].ptheme,
              Msg: threadinfo[i].id,
              Topage: "subs/detail/detail?pid=" + threadinfo[i].pid.toString()
            },
            Rtxt: that.getDistance(Number(that.data.longitude), Number(that.data.latitude), threadinfo[i].longitude / 10000, threadinfo[i].latitude / 10000),
            longitude: threadinfo[i].longitude,
            latitude: threadinfo[i].latitude
          })
        }
        that.setData({ threads: tmp })
      }
    });
    this.setData({})
    this.updateMarkersWithThread()
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
    let that = this
    let amapFile = require('../../libs/amap-wx.130.js')
    let myAmapFun = new amapFile.AMapWX({ key: 'c9203728692b4c2dd633b3067698d163' })
    wx.authorize({scope: 'scope.userLocationBackground'})
    myAmapFun.getRegeo({
      iconPath: "../../icons/marker.png",
      iconWidth: 22,
      iconHeight: 32,
      success(res: any) {
        var tmp: any = []
        var marker: any = {
          id: res[0].id,
          latitude: res[0].latitude,
          longitude: res[0].longitude,
          iconPath: res[0].iconPath,
          width: res[0].width,
          height: res[0].height
        }
        tmp.push(marker)
        that.setData({ markers: tmp });
        that.setData({ latitude: res[0].latitude });
        that.setData({ longitude: res[0].longitude });
        that.setData({ textData: { name: res[0].name, desc: res[0].desc } })
        getApp().globalData.longitude = res[0].longitude
        getApp().globalData.latitude = res[0].latitude
      }
    })

  },

  toggleDisplay() {
    this.setData({ "defaultPage": !this.data.defaultPage })
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

  }
})