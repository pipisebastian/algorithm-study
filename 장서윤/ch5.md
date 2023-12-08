## 💡 1. 스택

- Last In First Out의 선형 자료 구조
- push(요소 추가), pop(요소 삭제), top(맨 위 요소)
- 대표적으로 스택 메모리가 존재함. 함수 호출은 스택 자료구조를 통해 이뤄짐.
  <img src="https://velog.velcdn.com/images/pipi/post/62b98507-d8e3-4cf5-9f6d-7ddf0f60a780/image.png" width="60%">

- **array**로 구현할 수 있다.

  - array에서 중간 요소 추가/삭제시 O(n)의 시간복잡도가 든다.
  - 그러나 스택의 경우 이러한 중간 요소에 접근하지 않기 때문에 👍
  - 또한 자바스크립트에서 배열의 크기는 유연하게 증감하며, 이미 `push`, `pop` 메서드를 제공한다.

- **linked list** 로 구현할 수 있디(c, java처럼 배열 크기가 유동적이지 않을 경우 사용)
  <img src="https://velog.velcdn.com/images/pipi/post/d33b7465-28a6-4a8d-a158-44e524ded695/image.png" width="90%">

## 💡 2. 연습 문제

### 프로그래머스 - 올바른 괄호

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12909)

```js
function solution(s) {
  let stack = [];
  for (let c of s) {
    if (c === "(") {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}
```
