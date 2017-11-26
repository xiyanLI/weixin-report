//logs.js
const util = require('../../utils/util.js')

Page({
  data:{
    flag:'1',
    way:'请选择所在教室'
  },
  selectWay:function(){
    this.setData({flag:'0'});
  },
  radioChange:function(e){
    console.log(e);
    var way=e.detail.value;
    this.setData({flag:'1'});
    this.setData({way:way});
  }
})
