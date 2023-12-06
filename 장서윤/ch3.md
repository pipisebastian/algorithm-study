## 💡 배열

- 연관된 데이터를 연속적인 형태로 구성된 구조
- **자바스크립트 : 배열 크기 동적으로 변경** 가능 <-> c언어 : 고정된 배열 크기
- 순서대로 번호(index)가 붙는다. index는 number가 아니어도 되나, 추천하지 않는다!
  - index를 알고 있다면, O(1)로 원소를 찾을 수 있다.
- 요소 추가/삭제할 경우, 순서를 맞추기 위해 O(n)이 소요됨.
  - 🚨 **추가, 삭제가 반복된다면 배열 사용을 권장하지 않는다**
  - 🚨 배열은 탐색이 많을 경우 유리하다.

### ✨ 선언 및 접근

```js
let arr = [1, 2, 3];

arr[0];
```

### ✨ 배열 index는 number가 아니어도 된다

- 그러나 추천하지 않으며, number가 아닐 경우, 이는 배열 length에 포함되지 않는다

```js
let arr = [1, 2, 3];
arr["hoho"] = 4;
//  [1, 2, 3, hoho: 4]
console.log(arr.length); // 3
```

배열 함수는 [해당 포스팅](https://velog.io/@pipi/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4-%ED%95%A8%EC%88%98-%EB%AA%A8%EC%9D%8C)을 참고한다.

## 💡 객체

- 이름`name`과 값`value`으로 구성된 프로퍼티(property)의 정렬되지 않은 집합

### ✨ 선언 및 접근

```js
let obj = { name: "pipi" };

obj.name = "pipisebastian";
obj["phone"] = "010-1234-5678";

delete obj.phone;
```

### ✨ 프로퍼티 존재 확인

- 객체 내, 특정 프로퍼티가 존재하는가
- **상속받는 모든 프로토타입의 프로퍼티를 확인한다.**

```js
const person = { name: "Lee" };

console.log("name" in person); // true
console.log("toString" in person); // true. Object.prototype의 메서드
```

- ES6에서 도입된 `Reflect.has`메서드도 사용가능. (`in 연산자`와 동일)

```js
const person = { name: "Lee" };

console.log(Reflect.has(person, "name")); // true
console.log(Reflect.has(person, "toString")); // true
```

### ✨ 객체 순회

```js
const person = {
  name: "Lee",
  address: "Seoul",
};

for (const key in person) {
  console.log(key + ": " + person[key]);
}
```

### ✨ Object.keys/values/entries 메서드

- `Object.keys` 열거 가능한 프로퍼티 키를 배열로 반환
- `Object.valeus` 열거 가능한 프로퍼티 값 배열로 반환
- `Object.entries` 열거 가능한 프로퍼티 키, 쌍을 배열로 반환

더 자세한 내용은 [해당 포스팅](https://velog.io/@pipi/%EB%AA%A8%EB%8D%98-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Deep-Dive-19.719.9%EC%9E%A5#-19142-objectkeysvaluesentries-%EB%A9%94%EC%84%9C%EB%93%9C)을 참고한다.
