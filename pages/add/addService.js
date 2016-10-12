var app = getApp();
var requester = app.globalData.requester;
Page({
    data: {
        citys: ['请选择', '家政', '维修', '咨询', '手工', '代办跑腿'],
        index: 0,
        items: [
            { name: '本小区', value: '本小区', checked: 'true' },
            { name: '本区县', value: '本区县' },
            { name: '全城', value: '全城' },
        ],
    },

    search: function (e) {

    },

    radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);
    },

    bindPickerChange: function (e) {
        console.log('bindPickerChange，携带value值为：', e.detail.value);

        this.setData({
            index: e.detail.value,
        });
    },
})