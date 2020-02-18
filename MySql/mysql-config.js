const mysql=require('mysql');
const mysqlconfig={
      host:'localhost',
      user:'root',
      password:'',
      database:'juyi'
}
const mysqlconnection=mysql.createConnection(mysqlconfig)
mysqlconnection.connect(function (err) {
    if(err)
    {
        console.log('数据库连接失败');
    }
    else {
        console.log('数据库连接成功');
    }
})
module.exports=mysqlconnection;
