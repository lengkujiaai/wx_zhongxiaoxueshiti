// miniprogram/pages/page1/pages/chinese/years/years.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    percent: 0,
    isDown: false,
    year: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.navigatorTitle()
  },

  navigatorTitle: function () {
    var title = '物理真题'
    wx.setNavigationBarTitle({
      title: title,
    })
  },

  downloadFile: function (e) {
    let index = 2007 + parseInt(e.currentTarget.id)
    let url = 'https://7a68-zhongxiaoxue-2af67b-1258249961.tcb.qcloud.la/中考试题/江西省南昌市/物理/' + index + '物理.pdf'
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