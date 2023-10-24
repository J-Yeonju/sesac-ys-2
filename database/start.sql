show databases;

-- 데이터 베이스 생성하는 명령어  
CREATE DATABASE db_test DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

-- 데이터 베이스 선택하는 명령어 
use db_test;

-- 테이블을 생성하는 명령어 
CREATE TABLE user(
	id varchar(10) primary key not null,
    password varchar(20) not null, 
    age int unsigned
);

-- 만들어진 테이블에
-- 1) 컬럼을 추가하는 명령어
ALTER TABLE user add gender enum('여자', '남자') not null;
-- 2) 컬럼을 삭제하는 명령어
ALTER TABLE user drop column age;
-- 3) 컬럼을 수정하는 명령어
ALTER TABLE user modify gender varchar(2) not null;


-- 테이블을 삭제하는 명령어 
drop table user;


select * from user;


-- 테이블 구조를 확인하는 명령어
desc member;




-- 테이블을 조회하는 명령어 (데이터베이스가 선택이 되어 있어야 한다)
show tables;

-- insert문 (데이터를 추가)
insert into user (id, password) values ('yeonju', '1234');
insert into user values ('yeonju2', '1234', 97);

-- select문 (데이터를 조회)
-- select [속성...] from [테이블이름] [where [조건]]
-- user라는 테이블의 모든 값을 조회하겠다. *은 모든 속성 조회
select * from user;
--user 테이블의 id속성을 모두 조회
select id, age password from user;



CREATE TABLE customer 
( 
  custid CHAR(10) NOT NULL PRIMARY KEY,
  custname VARCHAR(10) NOT NULL, 
  addr CHAR(10) NOT NULL, 
  phone CHAR(11), 
  birth DATE 
);

CREATE TABLE orders 
(  orderid   INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
   custid    CHAR(10) NOT NULL, 
   prodname  CHAR(6) NOT NULL, 
   price     INT  NOT NULL, 
   amount    SMALLINT  NOT NULL,
   FOREIGN KEY (custid) REFERENCES customer(custid)
);

INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('kiwi', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍지수', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

select * from customer;

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

select * from orders;


select * from customer;
-- custid 가 bunny인 회원
select * from customer where custid = 'bunny';
-- custid 가 bunny가 아닌 회원
select * from customer where custid != 'bunny';
select * from customer where not custid = 'bunny';
-- 2000-01-01 이후에 태어난 회원 조회
select * from customer where birth >= '2000-01-01';
-- 2000-01-01 ~ 2005-01-01 사이에 태어난 회원 조회
select * from customer where birth between '2000-01-01' and '2005-01-01';
-- addr 가 대한민국 서울, 미국 로스앤젤레스 둘 중 하나라면 조회
select * from customer where addr in ('대한민국 서울', '미국 로스앤젤레스');
-- addr가 대한민국을 포함한 회원 조회 (like 이용)
select * from customer where addr like '%대한민국%';
select * from customer where custname like '__수';
select * from customer where custname like '%해_';
-- is null 사용 예시 
select * from customer where custname is null;
-- AND, OR, NOT -- 
select * from customer where addr like '%대한민국%' AND birth <= '2000-05-05';
select * from customer where addr like '%대한민국%' OR birth <= '2000-05-05';

-- customer를 custname을 기준으로 내림차순 정렬하여 조회
select * from customer order by custname desc;

-- addr에 대한민국 포함하고 있는 회원 조회. custname 기준으로 내림차순 정렬 하여 조회
select * from customer where addr like '%대한민국%' order by custname desc;

-- addr에 대한민국 포함하고 있는 회원 조회. custname 기준으로 내림차순 정렬 하여 두명만 조회
select * from customer where addr like '%대한민국%' order by custname desc limit 2;





--  update 문 
update customer set custname = '강해란' where custid = 'bunny';
select * from customer;

-- delete
delete from customer where custid = 'wow123';
-- 오류 발생. 이유? wow123 값을 참조하고 있는 데이터가 있어서 삭제할 수 없음.
-- 만약 customer 삭제할 때 참조하고 있는 데이터도 같이 삭제하고 싶다면, foreign key를 걸 때 on delete cascade를 해주면 된다.
-- CREATE TABLE orders 
-- (  orderid   INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
--    custid    CHAR(10) NOT NULL, 
--    prodname  CHAR(6) NOT NULL, 
--    price     INT  NOT NULL, 
--    amount    SMALLINT  NOT NULL,
--    FOREIGN KEY (custid) REFERENCES customer(custid) on delete cascade
-- );

-- 그게 아니라면? foreign key가 걸린 테이블(orders)에서 먼저 custid = 'wow123' 인 것을 삭제하고,
delete from orders where custid = 'wow123';
-- customer 테이블에서 삭제 
delete from customer where custid = 'wow123';




select * from customer;

select addr from customer;
select distinct addr from customer;

select * from orders;



-- < selet문 심화 >
-- customer 테이블에 존재하는 addr의 종류를 알고 싶다.
select distinct addr from customer;

-- orders 테이블에 존재하는 주문 개수 
select count(*) as 'total_orders' from orders;

-- 사람별 주문 건수
-- select에서 group by를 쓸 때, group by뒤에 쓴 속성과 집계함수로 새로 만든 속성만 출력. (다른 prodname 등등의 속성은 출력 X)
select custid, count(*) as 'count' from orders group by custid;

-- 사람별로 구매한 상품의 개수
select * from orders;
select custid, sum(amount) as 'total_amount' from orders group by custid;

-- 사람별로 구매한 상품의 개수 조회하는데, 구매한 상품의 개수가 5개 이상인 경우만 조회 (custid != 'bunny'인 사람)
select custid, sum(amount) as 'total_amount' from orders 
where custid != 'bunny' 
group by custid 
having sum(amount) >= 5;

-- 사람별로 결제한 금액
select custid, sum(amount*price) as 'total_price' from orders group by custid;

-- customer, orders을 inner join > 주문별로 배송지를 알고 싶어서
select customer.addr, orders.* from customer inner join orders on customer.custid = orders.custid;








use db_test2;

CREATE TABLE user(
	id varchar(10) not null primary key,
    pw varchar(20) not null, 
    name varchar(5) not null,
    gender enum( 'F', 'M', '' ) default '',
    birthday DATE not null,
    age int(3) not null default 0
);


insert into user value('hong1234', '804bkf', '', 'M', '1990-01-31', 33); 
insert into user value('sexysung', '87awjkdf', '', 'F', '1992-03-31', 31); 
insert into user value('power70', 'qxur8sda', '', '', '1970-05-02', 53); 
insert into user value('hanjo', '1234', '', 'M', '1984-10-18', 39); 
insert into user value('widowmaker', '1234', '', 'F', '1976-06-27', 47); 
insert into user value('dvadva', '1234', '', 'F', '2001-06-03', 22); 
insert into user value('jungkrat', '1234', '', '', '1999-11-11', 24);


-- 1. 모든 회원목록을 가져오는데, 이때 birtday 컬럼의 값을 기준으로 오름차순 정렬하여 가져오시오.
select * from user order by birthday;
-- 2. 회원 목록 중 gender 컬럼의 값이 "M" 인 회원목록을 가져오는데, 이때 name 컬럼의 값을 기준으로 내림차순 정렬하여 가져오시오. 
select * from user where gender = 'M' order by name desc;
-- 3. 1990 년대에 태어난 회원의 id, name 컬럼을 가져와 목록으로 보여주시오.
select id, name from user where birthday between '1990-01-01' and '1990-12-31';
-- 4. 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오시오.
select * from user where birthday like '%-06-%' order by birthday;
-- 5. gender 컬럼의 값이 "H" 이고, 1970 년대에 태어난 회원의 목록을 가져오시오.
select * from user where gender = 'M' and birthday between '1970-01-01' and '1970-12-31'; 
-- 6. 모든 회원목록 중 age를 기준으로 내림차순 정렬하여 가져오는데, 그때 처음 3개의 레코드만 가져오시오.
select * from user order by age desc limit 3;
-- 7. 모든 회원 목록 중 나이가 25 이상 50 이하인 회원의 목록을 출력하시오.
select * from user where age between 25 and 50;
-- 8. id 컬럼의 값이 hong1234 인 레코드의 pw 컬럼의 값을 12345678로 변경하시오.
update user set pw = '12345678' where id= 'hong1234';
-- 9. id 컬럼의 값이 jungkrat인 레코드를 삭제하시오.
delete from user where id = 'jungkrat';



select * from user;