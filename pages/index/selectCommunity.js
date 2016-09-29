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

    bindAddressTap: function (e) {
        var id = e.currentTarget.id;
        for (var key in this.data.communitys) {
            if (this.data.communitys[key].id == id) {
                app.globalData.communityName = this.data.communitys[key].name;
                wx.setStorage({
                    key: "communityName",
                    data: this.data.communitys[key].name
                });
                wx.navigateBack();
            }
        }
    },

    search: function (e) {
        var where = '{"city": "' + this.data.selectCity + '"}';
        if (e.detail.value) {
            where = '{"and": [{"city": "' + this.data.selectCity + '"}, {"or":[{"name": {"like": "' + e.detail.value + '"}},{"address": {"like": "' + e.detail.value + '"}}]}]}';
        }

        this.setData({ loading: true, hasMore: true, where: where, search: e.detail.value, page: 0 });

        this.getCommunity(where);
    },

    loadMore() {
        console.log('loadMore');
        if (!this.data.hasMore) return;

        this.setData({ loading: true });
        requester.getCommunity('community', (this.data.page++) * this.data.size, this.data.size, this.data.where)
            .then(d => {
                if (d.length) {
                    this.setData({ communitys: this.data.communitys.concat(d), loading: false });
                } else {
                    this.setData({ hasMore: false, loading: false });
                }
            })
            .catch(e => {
                this.setData({ subtitle: '获取数据异常', loading: false });
                console.error(e);
            })
    },

    bindPickerChange: function (e) {
        var where = '{"city": "' + this.data.citys[e.detail.value] + '"}';
        if (this.data.search && this.data.search.length > 0) {
            where = '{"and": [{"city": "' + this.data.citys[e.detail.value] + '"}, {"name": {"like": "' + this.data.search + '"}}]}';
        }
        this.setData({
            index: e.detail.value,
            selectCity: this.data.citys[e.detail.value],
            loading: true,
            hasMore: true,
            where: where,
            page: 0
        });

        this.getCommunity(where);
    },

    onLoad: function () {
        var where = '{"city": "' + this.data.citys[0] + '"}';
        this.setData({
            selectCity: this.data.citys[0],
            where: where,
            loading: true,
            hasMore: true
        });
        this.getCommunity(where);
    },

    getCommunity: function (where) {
        requester.getCommunity('community', (this.data.page++) * this.data.size, this.data.size, where)
            .then(d => {
                if (d.length) {
                    this.setData({ communitys: d, loading: false });
                    if (d.length < 10) { this.setData({ hasMore: false }); }
                } else {
                    this.setData({ communitys: [], hasMore: false, loading: false });
                }
            })
            .catch(e => {
                console.error(e);
                this.setData({ communitys: [], loading: false, hasMore: false });
            })
    }
})