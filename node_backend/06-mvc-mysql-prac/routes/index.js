// const express = require("express");
// const router = express.Router();
// const user = require('../controller/Cuser')   // user 선언!!!


// // 인덱스 페이지 렌더 
// router.get("/", (req, res) => {
//     res.render("index");
// });

// // 회원가입 페이지 렌더
// router.post("/signup", (req, res) => {
//     res.send("signup");
// });
// // 회원가입 -> user table에 insert를 실행시키는 api (회원가입 버튼을 눌렀을 때)

// // 로그인페이지 렌더 
// router.get("/signin", (req, res) => {
//     res.render("signin");
// });
// // 로그인 -> user table에서 회원 존재 여부를 판단하는 api (로그인 버튼을 눌렀을 때)

// // 회원정보 페이지 렌더 


// module.exports = router;





const express = require('express')
const user = require('../controller/Cuser')  // user 선언!!!
const router = express.Router()

router.get('/', user.index)     //index를 렌더

router.get('/signup', user.signup)      // 회원가입 페이지를 렌더
router.post('/signup', user.post_signup)        // 회원가입 버튼 클릭 시
    
router.get('/signin', user.signin)      // 로그인 페이지를 렌더
router.post('/signin', user.post_signin)    // 로그인 버튼 클릭 시

router.post('/profile', user.profile)   // 프로필 페이지를 렌더 (임시. 일반 POST 폼 전송. 왜냐? 아직 로그인을 유지 시킬 수 있는 기술을 모르기 때문에)
router.patch('/profile/edit/:id', user.profile_edit)  //user 회원정보 수텅 버튼 클릭 시   
router.delete('/profile/delete/:id', user.profile_delete) // 회원 탈퇴 버튼 클릭 시 

module.exports = router
