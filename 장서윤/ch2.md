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
