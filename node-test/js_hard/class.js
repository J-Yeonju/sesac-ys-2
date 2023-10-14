const cat = {
    name: "나비",
    age: 2,
    mew: function () {
      console.log("야옹");
    },
  };
  
  const cat2 = {
    name: "장화",
    age: 80,
    mew: function () {
      console.log("야옹");
    },
  };
  
  const cat3 = {    //cat을 이용해서 객체를 만든다. 
    name: "코코",
    age: 4,
    mew: function () {
      console.log("야옹");
    },
  };
  
  // cat3.mew();
  
  // PascalCase 규칙을 이용해서 식별자 생성
  // camelCase에서 첫글자도 대문자인 방식
  class Cat {
    // 생성자 : 메소드의 일종.
    // (메소드 중에서) Cat 클래스를 이용해서 객체를 만드는 순간에 호출되는 메소드
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // 메소드
    mew() {
      console.log("야옹");
    }
  
    // 고양이의 정보를 콘솔로 찍는 메소드
    info() {
      console.log(`이름은 : ${this.name}, 나이는 : ${this.age}살`);
    }
  }
  
  // Cat 클래스를 이용해서 새로운 객체를 만들겠다.
  const cat4 = new Cat("나비", 2);
  const cat5 = new Cat("장화", 80);
  console.log(cat4.name, cat5.name);
  cat4.mew();
  cat4.info();