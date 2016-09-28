var Host = "https://api.douban.com";

function getBook( bookId, succCallBack, failCallBack ) {
    wx.request( {
        url: Host + '/v2/book/1220562',
        header: {
            'Content-Type': 'application/json'
        },
        success: function( res ) {
            console.log( res.data )
        }
    })
}

module.exports = {
    getBook: getBook
}