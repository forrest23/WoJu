var app = getApp();
var requester = app.globalData.requester;
Page({
    data: {
        citys: ['上海', '南京', '杭州', '镇江'],
        index: 0,
        selectCity: '',
        page: 0,
        size: 10,
        communitys: [],
        loading: false,
        hasMore: false,
        where: '{}',
        search: ''
    },

    
})