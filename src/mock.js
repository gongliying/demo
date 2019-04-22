const Mock = require('mockjs')
var test = {
    'name' : '@cname',
    'content' : '@content',
    'date' : '@date(yyyy-MM-dd)'
}
//使用mock.js模拟数据
Mock.mock('http://mock.allhome.com.cn/mock/5cb818a3c7fae45c06a67022/gly/one',test)