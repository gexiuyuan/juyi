var express = require("express");
var router = express.Router();
var mysql = require("../MySql/mysql-config");
var md5 = require("md5");
var crypto = require('crypto');
var sha1 = require("sha1");
/* GET home page. */


/* GET home page. */
//  router.get('/', function(req, res, next) {
//    res.render('index', { title: 'Express' });
// });

//登录login
router.post("/login", function (req, res, next) {
  const {phone, password} = req.body;
  console.log(phone, password)
  const a = mysql.query(
    `SELECT * FROM users WHERE password='${md5(password)}'`,
    function (error, results, fields) {
      //console.log(results,error,fields[0])
      if (results[0]) {
        res.send({code: 1, user: results[0]});
        console.log("登录成功");
      } else {
        res.send({code: 0, msg: "该用户不存在！"});
        console.log("登录失败");
      }
    }
  );
});
//数据接口设定;code=0表示不存在，code=1表示存在

//检验信息是否已经输入
router.post('/information1', function (req, res, filed) {
  const {phone} = req.body;
  mysql.query(`SELECT nickname FROM users WHERE phone='${phone}'`, function (error, result, filed) {
    console.log(result[0])
    if (result[0]) {
      res.send({code: 2, msg: '跳转页面'})
    }
    else {
      res.send({code: -1, msg: '需要填写内容'})
    }
  })
})
//志愿者信息注入
router.post('/information', function (req, res, next) {
  const {nickname, major, experience, phone, special} = req.body;
  console.log(nickname)
  mysql.query(`UPDATE users SET nickname='${nickname}',special='${special}',major='${major}' ,experience='${experience}' WHERE phone='${phone}'`,
    function (error, result, filed) {
      if (error) {
        res.send({code: 0, msg: "报名失败"});
      } else {
        res.send({code: 1, msg: "报名成功"});
      }
    })
})

//发布者的登录
router.post("/pulishlogin", function (req, res, next) {
  const {phone, password} = req.body;
  //console.log(phone,password)
  const a = mysql.query(
    `SELECT * FROM users WHERE password='${md5(password)}'`,
    function (error, results, fields) {
      //console.log(results,error,fields[0])
      if (results[0]) {
        res.send({code: 1, user: results[0]});
        console.log("登录成功");
      } else {
        res.send({code: 0, msg: "该用户不存在！"});
        console.log("登录失败");
      }
    }
  );
});
//数据接口设定;code=0表示不存在，code=1表示存在

//注册
router.post("/register", function (req, res, next) {
  const {phone, password} = req.body;
  mysql.query(
    `INSERT INTO users (phone,password,credit,volunteertime) VALUES('${phone}','${md5(
      password
    )}',100,'00:00:00')`,
    function (error, result, fields) {
      if (error) {
        //注册失败
        res.send({code: -1, msg: "该账号已经被注册了"});
      } else {
        res.send({code: 2, msg: "注册成功"});
      }
    }
  );
});
//数据接口设定;code=2表示注册成功，code=-1表示注册失败

router.post("/pulishregister", function (req, res, next) {
  const {phone, password} = req.body;
  mysql.query(
    `INSERT INTO pulishusers (phone,password) VALUES('${phone}','${md5(
      password
    )}')`,
    function (error, result, fields) {
      if (error) {
        //注册失败
        res.send({code: -1, msg: "该账号已经被注册了"});
      } else {
        res.send({code: 2, msg: "注册成功"});
      }
    }
  );
});
//数据接口设定;code=2表示注册成功，code=-1表示注册失败

//获取活动列表
router.get("/list", function (req, res, next) {
  mysql.query("SELECT * FROM activity WHERE stoptime is NULL", function (error, result, fields) {
    if (error) {
      //查询失败
      res.send({code: 0, msg: "查询失败"});
    } else {
      //查询成功
      res.send({code: 1, data: result});
    }
  });
});
//添加报名人
router.post("/sign", function (req, res, next) {
  const {activity_id, phone} = req.body;
  console.log(activity_id, phone);
  mysql.query(
    `UPDATE activity SET reciver = '${phone}' WHERE activity_id=${activity_id};`,
    function (error, result, fields) {
      if (error) {
        res.send({code: 0, msg: "报名失败"});
      } else {
        res.send({code: 1, msg: "报名成功"});
      }
    }
  );
});
//接收列表
router.post("/receive", function (req, res, next) {
  const {phone} = req.body;
  console.log(phone);
  mysql.query(
    `SELECT person,title,introduce  FROM activity WHERE reciver='${phone}'AND stoptime is NULL ;`,
    function (error, result, field) {
      if (!result) {
        //查询失败
        res.send({code: 0, msg: "查询失败"});
      } else {
        //查询成功

        res.send({code: 1, data: result});
      }
    }
  );
});
router.post("/addreceiver", function (req, res, next) {
  const {title, finishtime, phone} = req.body;
  const stoptime =
    finishtime.substring(0, 10) + " " + finishtime.substring(11, 19);
  console.log(stoptime);
  mysql.query(`SELECT pulishtime FROM activity  WHERE title='${title}';`, function (error, result, filed) {
    if (result[0]) {
      // console.log(result[0].pulishtime)
      //设计算法   时间
      var pulishtime = JSON.stringify(result[0].pulishtime)
      var starttime = pulishtime.substring(1, 11) + ' ' + pulishtime.substring(12, 20);
      // console.log(starttime)
      var offtime=JSON.stringify(result[0].offtime)
      function diffTime(startDate, endDate) {
        var diff = endDate.getTime() - startDate.getTime();//时间差的毫秒数

        //计算出相差天数
        var days = Math.floor(diff / (24 * 3600 * 1000));

        //计算出小时数
        var leave1 = diff % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
        var hours = Math.floor(leave1 / (3600 * 1000));
        hours += days * 24;
        //计算相差分钟数
        var leave2 = leave1 % (3600 * 1000);        //计算小时数后剩余的毫秒数
        var minutes = Math.floor(leave2 / (60 * 1000));

        //计算相差秒数
        var leave3 = leave2 % (60 * 1000);      //计算分钟数后剩余的毫秒数
        var seconds = Math.round(leave3 / 1000);

        var returnStr = seconds;
        if (minutes > 0) {
          returnStr = minutes + ":" + returnStr;
        }
        if (hours > 0) {
          returnStr = hours + ":" + returnStr;
        }

        return returnStr;
      }
      //console.log(diffTime( new Date(starttime),new Date(stoptime)))
      var volunteertime = diffTime(new Date(starttime), new Date(stoptime))
      // var datetime=diffTime(new Date(stoptime), new Date(offtime))
      // if(isNaN(datetime))
      // {
      //   mysql.query(`SELCT credit FROM users WHERE phone=${phone}`,function(error,result,filed){
      //      let cre=result[0].credit-5;
      //      mysql.query(`UPDATE users SET credit=${cre} WHERE phone=${phone}`,function(error,result,filed){

      //      })
      //   })
      // }
      mysql.query(
        `UPDATE activity SET stoptime="${stoptime}",volunteertime='${volunteertime}' WHERE title='${title}';`,
        function (error, result, result) {
          //res.send({code:0})
          if (error) {
            res.send({code: 0, msg: "报名失败"});
          } else {
            mysql.query(
              `SELECT person,title,introduce  FROM activity WHERE reciver='${phone}'AND stoptime is NULL ;`,
              function (error, result, field) {
                if (!result) {
                  //查询失败
                  res.send({code: 0, msg: "查询失败"});
                } else {
                  //查询成功

                  res.send({code: 1, data: result});
                }
              }
            );
          }
        }
      );
    }

  })

});
//志愿组织列表
router.get("/organize", function (req, res, next) {
  mysql.query("SELECT * FROM organizes ", function (error, result, fields) {
    if (error) {
      res.send({code: 0, msg: "没有相关组织"});
    } else {
      res.send({code: 1, data: result});
    }
  });
});
//排行榜
router.post("/heartlist", function (req, res, next) {
  const {phone}=req.body;
  console.log(phone)
  mysql.query(`SELECT volunteertime FROM activity WHERE reciver='${phone}';`,function(error,result,filed){
      
    var times=Array.from(result);
    var hour=0;
    var minutes=0;
    var second=0;
    for(let i=0;i<times.length;i++)
    {
      console.log(times[i].volunteertime.substring(6,8))
      hour+=Number( times[i].volunteertime.substring(0,2));
      minutes+=Number(times[i].volunteertime.substring(3,5));
      second+=Number(times[i].volunteertime.substring(6,8));
    }
    var volunteertime=hour+':'+minutes+':'+second;
    mysql.query(`UPDATE users SET volunteertime='${volunteertime}' WHERE phone='${phone}'`,function(error,result,field){
       if(!error)
       {
           mysql.query("SELECT * FROM users order by volunteertime DESC", function (
    error,
    result,
    fields
  ) {
    if (error) {
      res.send({code: 0, msg: "出错"});
    } else {
      res.send({code: 1, data: result});
    }
  });
       }
    })
  })


});
//添加活动
router.post("/published", function (req, res, next) {
  const {
    address,
    introduce,
    organization,
    person,
    phone,
    time,
    title,
    offtime
  } = req.body;
  mysql.query("SELECT * FROM activity", function (error, result, filed) {
    if (!error) {
      const activity_id = result.length;
      // console.log(activity_id)
      // console.log(offtime.substring(1,20))
      mysql.query(`
      INSERT INTO activity (activity_id,organization,person,telephone,address,introduce,title,pulishtime,offtime) 
      VALUES(${activity_id},'${organization}','${person}','${phone}','${address}','${introduce}','${title}','${time}','${offtime.substring(1,20)}');
      `, function (
        error,
        result,
        filed
      ) {
        if (error) {
          res.send({code: 0, msg: '发布不成功'})
        } else {
          res.send({code: 1, msg: "发布成功"});
        }
      });
    }
    else {
      res.send({code: 0, msg: '发布不成功'})
    }
  });
});
router.post('/pclogin', function (req, res, next) {
  const {username, password} = req.body;
  //console.log(username,password);
  mysql.query(`SELECT password FROM rootuser WHERE username="${username}"`, function (error, result, next) {
    if (error) {
      res.send({code: 0, msg: '登录失败'})
    }
    else {
      // console.log(result[0]);
      if (result[0].password === password) {
        res.send({code: 1, msg: '登录成功'})
      }
      else {
        res.send({code: 0, msg: '登录失败'})
      }

    }
  })
})
//pc获得界面数据
router.post('/pcmaindata', function (req, res, next) {
  const {address} = req.body;
  console.log(address)
  mysql.query(`SELECT * FROM ${address}`, function (error, result, filed) {
    if (result) {
      res.send({code: 1, data: result})
    }
    else {

      res.send({code: 0, msg: '没有数据'})
    }
  })
})
module.exports = router;
