//index.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['./1.png',  './2.png', './3.png'],
    percent: 0,
    isDown: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.navigatorTitle()
  },

  navigatorTitle: function () {
    var title = '中考真题'
    wx.setNavigationBarTitle({
      title: title,
    })
  },
  downloadUrl:function(e){
    let index = e.currentTarget.id
    let url=''
    if (index == 1)
      url = 'https://7a68-zhongxiaoxue-2af67b-1258249961.tcb.qcloud.la/中考试题/江西省南昌市/语文/2018语文.pdf'
    if (index == 2)
      url = 'https://7a68-zhongxiaoxue-2af67b-1258249961.tcb.qcloud.la/中考试题/江西省南昌市/数学/2018数学.pdf'
    if (index == 3)
      url = 'https://7a68-zhongxiaoxue-2af67b-1258249961.tcb.qcloud.la/中考试题/江西省南昌市/英语/2018英语.pdf'
    if (index == 4)
      url = 'https://7a68-zhongxiaoxue-2af67b-1258249961.tcb.qcloud.la/中考试题/江西省南昌市/物理/2018物理.pdf'
    if (index == 5)
      url = 'https://7a68-zhongxiaoxue-2af67b-1258249961.tcb.qcloud.la/中考试题/江西省南昌市/化学/2018化学.pdf'
    if (index == 6)
      url = 'https://7a68-zhongxiaoxue-2af67b-1258249961.tcb.qcloud.la/中考试题/江西省南昌市/生物/2017生物.pdf'
    if (index == 7)
      url = 'https://7a68-zhongxiaoxue-2af67b-1258249961.tcb.qcloud.la/中考试题/江西省南昌市/政治/2018政治.pdf'
    if (index == 8)
      url = 'https://7a68-zhongxiaoxue-2af67b-1258249961.tcb.qcloud.la/中考试题/江西省南昌市/历史/2018历史.pdf'
    if (index == 9)
      url = 'https://7a68-zhongxiaoxue-2af67b-1258249961.tcb.qcloud.la/中考试题/江西省南昌市/地理/2017地理.pdf'
    this.downloadFile(url)
  },

  downloadFile: function (url) {
    //let index = 2013 + parseInt(e.currentTarget.id)
    //let url = 'https://7a68-zhongxiaoxue-2af67b-1258249961.tcb.qcloud.la/中考试题/江西省南昌市/生物/' + index + '生物.pdf'
    this.setData({
      percent: 0,
      isDown: false
    })
    this.setData({
      percent: 100,
      isDown: true
    })
    app.downloadFromUrl(url, 'pdf')
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
