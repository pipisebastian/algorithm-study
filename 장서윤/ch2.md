## 💡 1. Big-O notation 빅오 표기법(시간 복잡도)

- 우리는 프로그램 성능을 정확하게 알 수 있는가? => 불가능
  - 입력크기, 하드웨어, 운영체제 성능, 컴파일러 최적화, 비동기 로직 등등 고려할 부분이 많음.
  - **빅오 표기법**으로 구하자!

<img src="https://velog.velcdn.com/images/pipi/post/b4fe101d-1063-4d87-ac00-11e2615e44fd/image.png" width="80%">

<img src="https://velog.velcdn.com/images/pipi/post/00ee44fb-cef9-4ac1-84c4-3f7d7d63e5ca/image.png" width="80%">

- 빅오 표기법은 점근적 표기법을 따른다.
  <img src="https://velog.velcdn.com/images/pipi/post/6d69bb1b-6ae2-4a6b-8053-126ea8824035/image.png" width="50%">

## 💡 2. Big-O notation 법칙

### ✨ 2.1 계수 법칙 - n이 무한에 가까울 수록, k의 크기는 의미가 없다.

<img src="https://velog.velcdn.com/images/pipi/post/49e2ff63-527e-4e45-ae96-69bfb40d45fa/image.png" width="50%">

### ✨ 2.2 합의 법칙 - 빅오는 더해질 수 있다.

<img src="https://velog.velcdn.com/images/pipi/post/3a87e668-8551-4c7f-be0f-7aba34006e84/image.png" width="50%">

### ✨ 2.3 곱의 법칙 - 빅오는 곱해질 수 있다.

<img src="https://velog.velcdn.com/images/pipi/post/2c0fb744-56a3-43f0-987f-1fd9276cfa5b/image.png" width="50%">

### ✨ 2.4 다항 법칙

<img src="https://velog.velcdn.com/images/pipi/post/c322cd0d-7040-4f10-b576-384f857974b0/image.png" width="50%">

---

- 기억해야할 것!
  <img src="https://velog.velcdn.com/images/pipi/post/b1808223-55e0-4464-a2ff-294191cf7df9/image.png" width="70%">

- **자바스크립트에서 성능을 측정**하려면? `Date` 객체 이용!

```js
const start = new Date().getTime();
const end = new Date().getTime();

console.log(end - start);
```

---

### ✨ 구조 분해 할당을 이용한 변수 swap

```
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b); // 10 5
```

### ✨ 배열 생성으로 루프 제거하기

```js
let sum = 0;
for (let i = 5; i < 10; i += 1) {
  sum += i;
}
```

- 함수형 프로그래밍 방식

```js
const sum = Array.from(new Array(5), (_, k) => k + 5).reduce(
  (acc, cur) => acc + cur,
  0
);
```

### ✨ 배열 내 같은 요소 제거하기 - set

```js
const names = ["Lee", "Kim", "Park", "Lee", "Kim"];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];
```

### ✨ Spread 연산자를 이용한 객체 병합

```js
const person = {
  name: "Lee Sun-Hyoup",
  familyName: "Lee",
  givenName: "Sun-Hyoup",
};

const company = {
  name: "Cobalt. Inc.",
  address: "Seoul",
};

const leeSunHyoup = { ...person, ...company };
console.log(leeSunHyoup);
// {
//   address: “Seoul”
//   familyName: “Lee”
//   givenName: “Sun-Hyoup”
//   name: "Cobalt. Inc." // 같은 키는 마지막에 대입된 값으로 정해진다.
// }
```

### ✨ &&와 || 활용

```js
/// ||
// 기본값을 넣어주고 싶을 때 사용할 수 있습니다.
// participantName이 0, undefined, 빈 문자열, null일 경우 'Guest'로 할당됩니다.
const name = participantName || "Guest";

/// &&
// flag가 true일 경우에만 실행됩니다.
flag && func();

// 객체 병합에도 이용할 수 있습니다.
const makeCompany = (showAddress) => {
  return {
    name: "Cobalt. Inc.",
    ...(showAddress && { address: "Seoul" }),
  };
};
console.log(makeCompany(false));
// { name: 'Cobalt. Inc.' }
console.log(makeCompany(true));
// { name: 'Cobalt. Inc.', address: 'Seoul' }
```

### ✨ 구조 분해 할당 사용하기

- 필요한 프로퍼티만 뽑고 싶을 때

```js
const person = {
    name: 'Lee Sun-Hyoup',
    familyName: 'Lee',
    givenName: 'Sun-Hyoup'
    company: 'Cobalt. Inc.',
    address: 'Seoul',
}

const { familyName, givenName } = person;
```

- 객체 생성시 key 생략 가능

```js
const name = "Lee Sun-Hyoup";
const company = "Cobalt";
const person = {
  name,
  company,
};
```

### ✨ 비구조화 할당 사용하기

- 함수에 객체를 넘길 경우 필요한 것만 꺼내 쓸 수 있다

```js
const makeCompany = ({ name, address, serviceName }) => {
  return {
    name,
    address,
    serviceName,
  };
};
const cobalt = makeCompany({
  name: "Cobalt. Inc.",
  address: "Seoul",
  serviceName: "Present",
});
```

### ✨ 동적 속성 이름

- ES6에 추가된 기능으로 객체의 키를 동적으로 생성

```js
const nameKey = "name";
const emailKey = "email";
const person = {
  [nameKey]: "Lee Sun-Hyoup",
  [emailKey]: "kciter@naver.com",
};
console.log(person);
// {
//   name: 'Lee Sun-Hyoup',
//   email: 'kciter@naver.com'
// }
```

### ✨ !! 연산자를 사용하여 Boolean 값으로 바꾸기

- !! 연산자를 이용하여 0, null, 빈 문자열, undefined, NaN을 false로 그 외에는 true로 변경 가능

```js
function check(variable) {
  if (!!variable) {
    console.log(variable);
  } else {
    console.log("잘못된 값");
  }
}
check(null); // 잘못된 값
check(3.14); // 3.14
check(undefined); // 잘못된 값
check(0); // 잘못된 값
check("Good"); // Good
check(""); // 잘못된 값
check(NaN); // 잘못된 값
check(5); // 5
```
