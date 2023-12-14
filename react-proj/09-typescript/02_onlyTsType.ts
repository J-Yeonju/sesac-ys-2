// or
type gender = "Men" | "Women";
// const lily: gender = "abcd"
const lily: gender = "Women";

// [상품명, 가격]
type productInfo = [string, number];
const cola: productInfo = ["cola", 2500];

// 객체에 대한 타입을 지정할 경우
interface ProductInfo2 {
  productName: string;
  price: number;
}
const cider: ProductInfo2 = { productName: "cider", price: 2500 };
// const cider: ProductInfo2 = { productName: "cider", price: 2500, sale: 10 };

type ProductInfo3 = {
  productName: string;
  price: number;
  sale?: number;
};
const beer: ProductInfo3 = { productName: "cider", price: 2500 };
console.log(beer.sale);

interface Seller {
  name: string;
}

interface ProductInfo4 {
  productName: string;
  price: number;
  sale?: object;
  seller?: Seller;
}

const soju: ProductInfo4 = {
  productName: "soju",
  price: 2000,
  seller: { name: "lily" },
};

// 옵셔널 체이닝
console.log(soju.seller?.name);

interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  studentID: string;
  eat: () => void;
}

const person: Person = { name: "lily", age: 88 };

const stu: Student = {
  name: "lily",
  age: 88,
  studentID: "000000000",
  eat: () => console.log("밥을 먹는다."),
};