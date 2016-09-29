//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    text: app.globalData.communityName,
    actionSheetHidden: true,
    actionSheetItems: ['新鲜事', '求助', '服务', '团购', '二手买卖']
  },

  tapAdd: function (event) {
    this.setData({ actionSheetHidden: false });
  },

  tapHead: function (event) {
    wx.navigateTo({
      url: '../index/selectCommunity'
    })
  },

  actionSheetChange: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },

  bindItemTap: function (e) {
    console.log('tap ' + e.currentTarget.dataset.name)
  },

  onLoad: function () {
    console.log('onLoad');
    var value = wx.getStorageSync('communityName');
    if (value) {
      this.setData({
        text: value
      });
      app.globalData.communityName = value;
    }
  },

  onShow: function () {
    console.log('onShow');
    if (this.data.text != app.globalData.communityName) {
      this.setData({
        text: app.globalData.communityName
      })
    }
  }
})
