//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    text: app.globalData.communityName,
    src: '../../image/arrowdown.png'
  },
  tapHead: function( event ) {
    wx.navigateTo( {
      url: '../index/selectCommunity'
    })
  },
  onLoad: function() {
    console.log( 'onLoad' );
    var value = wx.getStorageSync( 'communityName' );
    if( value ) {
      this.setData( {
        text: value
      });
      app.globalData.communityName = value;
    }
  },
  onShow: function() {
    console.log( 'onShow' );
    if( this.data.text != app.globalData.communityName ) {
      this.setData( {
        text: app.globalData.communityName
      })
    }
  }
})
