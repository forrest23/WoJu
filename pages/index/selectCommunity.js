var app = getApp();
var requester = app.globalData.requester;
Page( {
    data: {
        array: [ '上海', '江苏', '浙江', '安微' ],
        index: 0,
        src: '../../image/arrowdown.png',
        homeSrc: '../../image/home.png',
        items: [ {
            id: 0,
            name: '华兴园',
            address: '华凌西路1225弄'
        },
            {
                id: 1,
                name: '爱博二村',
                address: '盘古路200号'
            },
            {
                id: 2,
                name: '巴黎花园',
                address: '虹莘路1935弄1～7号'
            },
            {
                id: 3,
                name: '保安新村',
                address: '报春路851号'
            }, {
                id: 4,
                name: '宝钢六村小区',
                address: '友谊路221号附近'
            }]
    },
    bindAddressTap: function( e ) {
        var id = e.currentTarget.id;
        for( var key in this.data.items ) {
            if( key == id ) {
                app.globalData.communityName = this.data.items[ key ].name;
                wx.navigateBack();
            }
        }
    },
    bindInputBlur: function( e ) {
        this.setData( {
            items: [ {
                name: '学府涵青',
                address: '涵青路398弄'
            },
                {
                    name: '华兴园',
                    address: '华凌西路1225弄华凌西路1225弄'
                },
            ]
        })
    },
    bindPickerChange: function( e ) {
        console.log( 'picker发送选择改变，携带值为', e.detail.value );
        this.setData( {
            index: e.detail.value
        })
    },
    onLoad: function() {
        // requester.getBook( '1212', function( data ) {
        //     console.log( data );
        // }, function( code, msg ) {
        //     console.log( code + ":" + msg );
        // });
    }
})