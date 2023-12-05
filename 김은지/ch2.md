## Ch02-1. 자료구조의 종류

![Untitled 3](https://github.com/pipisebastian/algorithm-study/assets/78250089/1e017836-6680-426c-9269-9d3f4dfd25ae)

> 자료구조는 일차원인 컴퓨터 메모리를 현실에 대응되도록 구조를 만든 것이라 할 수 있다.

- 예시) 영화 예매 `Trie`, `Queue`, `HashTable`

![Untitled 4](https://github.com/pipisebastian/algorithm-study/assets/78250089/35d10b83-a62c-4079-873a-b9b301cc22a4)

**선형 구조**

- 한 원소 뒤에 하나의 원소 만이 존재하는 형태
- 자료들이 선형으로 나열되어 있는 구조를 가진다.
- 선형 구조에 해당되는 자료구조는 배열, 연결 리스트, 스택, 큐 등이 있다.

![Untitled 5](https://github.com/pipisebastian/algorithm-study/assets/78250089/791de496-49bf-40b7-96a0-0dac10373c57)

**비선형 구조**

- 원소 간 다대다 관계를 가지는 구조
- 계층적 구조나 망형 구조를 표현하기에 적절하다.
- 비선형 구조에 해당되는 자료구조는 트리와 그래프 등이 있다.

![Untitled 6](https://github.com/pipisebastian/algorithm-study/assets/78250089/c12958a8-63c4-4751-acd2-c5e60362ae83)

![Untitled 7](https://github.com/pipisebastian/algorithm-study/assets/78250089/d40f5e53-4cd2-4427-bf44-0a2c647ce963)

## Ch02-2. 시간복잡도

![Untitled 8](https://github.com/pipisebastian/algorithm-study/assets/78250089/feaa4202-d2d6-4e8f-8f1d-f42c54614d5f)
![Untitled 9](https://github.com/pipisebastian/algorithm-study/assets/78250089/388c8422-008d-47a4-9f36-d5a60a0097be)

![Untitled 10](https://github.com/pipisebastian/algorithm-study/assets/78250089/5213cdcb-7c17-4759-9c68-c7df720cd177)

[ 성능 측정 방법 ]

- Date 이용
  ![Untitled 11](https://github.com/pipisebastian/algorithm-study/assets/78250089/27e7ddd8-0324-4652-8bd1-1f7d0ee713f0)

## Ch02-3. 자바스크립트 9가지 코드 트릭

**1. 구조 분해 할당을 이용한 변수 swap**
`[a, b] = [b, a];`

**2. 배열 생성으로 루프 제거하기**

```jsx
const sum = Array.from(new Array(5), (_, k) => k + 5).reduce((acc, cur) => acc + cur, 0);
```

**3. 배열 내 같은 요소 제거하기**

```jsx
const names = ["Lee", "Kim", "Park", "Lee", "Kim"];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];
```

**4. Spread 연산자를 이용한 객체 병합**
`const leeSunHyoup = { ...person, ...company };`

**5. &&와 || 활용**

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

**6. 구조 분해 할당 사용하기**
`const { familyName, givenName } = person;`

**객체 생성시 키 생략하기**

```js
const name = "Lee Sun-Hyoup";
const company = "Cobalt";
const person = {
  name,
  company,
};
console.log(person);
// {
//   name: 'Lee Sun-Hyoup'
//   company: 'Cobalt',
// }
```

**7. 비구조화 할당 사용하기**

```jsx
const makeCompany = ({ name, address, serviceName }) => {
  return {
    name,
    address,
    serviceName,
  };
};
const cobalt = makeCompany({ name: "Cobalt. Inc.", address: "Seoul", serviceName: "Present" });
```

**8. 동적 속성 이름**

```jsx
const person = {
  [nameKey]: "Lee Sun-Hyoup",
  [emailKey]: "kciter@naver.com",
};
```

**9. !! 연산자를 사용하여 Boolean 값으로 바꾸기**
!! 연산자를 이용하여 `0, null, 빈 문자열, undefined, NaN`을 `false`로 그 외에는 `true`
로 변경할 수 있습니다.
