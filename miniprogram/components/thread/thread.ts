// components/thread/thread.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: {}
    },
    avatar: {
      type: String,
      value: ""
    },
    /*title: {
      type: Object,
      value: {
        pid: Number,
        ptheme: String,
        uid: Number,
        longitude: Number,
        latitude: Number
      }
    },*/
    content: {
      type: Object,
      value: {
        hash: String,
        pid: Number,
        floor: Number,
        uid: Number,
        contents: String,
        photos: [{ url: String }],
        time: Number
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
