exports.getUser = () => {
  // const id = "lily";
  // const pw = "12345";
  // return { id, pw };
  //   {id: "lily", pw: "12345"}
  let users = 
`spretics//12341234//코딩온
codee//4321//코디
lily//1234//릴리`;

  usersArr = users.split("\n")
  usersArr1 = usersArr[0].split("//")
  usersArr2 = usersArr[1].split("//")
  usersArr3 = usersArr[2].split("//")

  return [
      {
          id: usersArr1[0],
          pw: usersArr1[1],
          name: usersArr1[2]
      },
      {
          id: usersArr2[0],
          pw: usersArr2[1],
          name: usersArr2[2]
      },
      {
          id: usersArr3[0],
          pw: usersArr3[1],
          name: usersArr3[2]
      }
  ];
};