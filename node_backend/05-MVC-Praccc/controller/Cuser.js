const User = require("../model/User");
// User = { getUesr: () => {} }

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  // const id = "lily";
  // const pw = "12345";
  // const userData = User.getUser();
  // //   userData = {id: "lily", pw: "12345"}
  // let data;
  // if (req.body.userid == userData.id && req.body.password == userData.pw) {
  //   data = {
  //     isSuccess: true,
  //     msg: "로그인 성공!",
  //   };
  // } else {
  //   data = {
  //     isSuccess: false,
  //     msg: "로그인 실패!",
  //   };
  // }
  // // console.log(req.body);
  // res.send(data);

  const userData = User.getUser();
  console.log(userData)
  
  for(let i = 0; i < userData.length; i++) {
    //id, pw 둘 다 일치하는 경우
    if(userData[i].id == req.body.userid && userData[i].pw == req.body.password) {
      data = {
        isSuccess: true,
        msg: `${userData[i].name}님 환영합니다`
      }
      break;
    }
    else {
      data = {
        isSuccess: false,
        msg: "로그인 실패"
      }    
    }
  }
  res.send(data);
};







