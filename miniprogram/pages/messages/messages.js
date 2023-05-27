// pages/message/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 图标来源：https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.dc64b3430&cid=23763
    menus: [
      [ {
          icon: "/images/1.png",
          txt: "收到的赞",
          Rtxt: "",
          Topage: "subs/likeme/likeme"
        },
        {
          icon: "/images/2.png",
          txt: "提到我的",
          Rtxt: "",
          Topage: "subs/atme/atme"
        },
        {
          icon: "/images/3.png",
          txt: "回复我的",
          Topage: "subs/replyme/replyme"
        },
        {
          icon: "/images/4.png",
          txt: "系统通知",
          Topage: "subs/notification/notification"
        },
      ]
    ],
    chats: [
      {
        Txt: "张三",
        content: {
          Name: "张三",
          Msg: "hello world",
          Topage: "subs/t5/index"
        },
        Rtxt: "11:11"
      },
      {
        Txt: "李四",
        content: {
          Name: "李四",
          Msg: "QWQ",
          Topage: "subs/t6/index"
        },
        Rtxt: "星期二"
      },
    ]
  },

  updateChatList() {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})