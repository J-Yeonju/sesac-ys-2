const User = require('../model/User')

exports.index = (req, res) => {
  res.render('index')
}

exports.signup = (req, res) => {
  res.render('signup')
}
exports.post_signup = (req, res) => {
  // 모델과 연결하여, user 테이블에 회원가입 정보 insert
  User.post_signup(req.body, function () {
    res.send({ result: true })
  });
  // send({result: true})
}

exports.signin = (req, res) => {
  res.render('signin')
}

exports.post_signin = (req, res) => {
  // 모델과 연결 해서 실제로 회원이 존재하는지 검색 (해야하므로 모델과 연결해야 한다)
  User.post_signin(req.body,  (rows) => {
    console.log(rows[0])
    if (rows.length > 0) {
      res.send({ result: true, id: rows[0].id });     // 무조건 한명만 조회된다는 조건...(이게 맞기 위해서 데이터 검색 잘 해야함)
    } else {
      res.send({ result: false });
    }
  })
  // 성공 : {result: true, id: 숫자}
  // 실패 : {result: false}
}

exports.profile = (req, res) => {
  // req.body{ id(number) }  아이디를 이용해서 조회
  // id에 해당하는 user를 select
  // 프로필 페이지를 렌더할 때 유저 한명을 조회해서 프로필 페이지에 보여줄 수 있도록 데이터에 넘겨준다. 
  // 데이터란 변수로 ejs에서 사용할 수 있다. 
  User.get_user(req.body.id, (row)=>{      // 푸로필 페이지 렌더
    res.render("profile", { data: row });
  });
}

exports.profile_edit = (req, res) => {
  // model 연결 해서 update]
  const data = {
    ...req.body,
    id: req.params.id,
  }
  User.update_profile(data, () => {       //콜백   매개변수 없음
    res.send({ result: true });
  })
}

exports.profile_delete = (req, res) => {
  User.delete_user(req.params.id, () => {
    res.send({ result: true });
  });
};
