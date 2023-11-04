// const { User } = require('ejs')
const { User } = require('../model')

exports.index = (req, res) => {
  res.render('index')
}

exports.signup = (req, res) => {
  res.render('signup')
}

exports.post_signup = (req, res) => {
  User.create({
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name
  }).then((result ) => {
    console.log("result : ", result);
    res.send(result)
  })
}

exports.signin = (req, res) => {
  res.render('signin')
}

exports.post_signin = (req, res) => {
  User.findOne({         
    where: {                          
        userid: req.body.userid,
        pw: req.body.pw,
    }
  }).then((result)=> {
    if(result) res.send({ result: true, id: result.id });
    else res.send({ result: false});
  })
};



// exports.profile = (req, res) => {
//   User.get_user(req.body.id, function (result) {
//     console.log('profile', result)
//     if (result.length > 0) res.render('profile', { data: result[0] })
//     else res.redirect('/user/signin')
//   })
// }

exports.profile  = (req, res) => {
  User.findOne({         
    where: {                          
        id: req.body.id
    }
  }).then((result)=> {
    if(result) res.render("profile", {data : result});
    else res.send({ result: false});
  })
};


exports.profile_edit = (req, res) => {
  const data = {
    ...req.body,
    id: req.params.id,
  }
  User.update_profile(data, function () {
    res.send({ result: true })
  })
}

exports.profile_delete = (req, res) => {
  User.delete_user(req.params.id, function () {
    res.send({ result: true })
  })
}
