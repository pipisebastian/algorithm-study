## Ch05-1. 스택

**스택**
\: Last In First Out이라는 개념을 가진 선형 자료구조

![Untitled 52](https://github.com/pipisebastian/algorithm-study/assets/78250089/34422349-0d20-4ccd-abba-e9a11f8cde3e)

- 스택 메모리
  <img width="200" alt="image" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/afa06707-86b1-49b8-9b75-44bb15f52605">

가장 먼저 sum함수 실행됨 → 실행 완료 되면 pop

<img width="200" alt="image" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/85d0bd66-9701-445d-89c9-f39905cb0a33"> <img width="200" alt="image" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/afa06707-86b1-49b8-9b75-44bb15f52605">

이후 print 함수 실행 → 내부의 console.log 함수 실행

<img width="200" alt="image" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/cf58e5ed-9d5a-48a1-8185-9f64ee33fe6c"> <img width="200" alt="image" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/0f80ed7f-8bfa-4178-808a-d8e989703ada">

실행 마친 후 console.log 제거 print 함수 제거
<img width="200" alt="image" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/cf58e5ed-9d5a-48a1-8185-9f64ee33fe6c"> <img width="200" alt="image" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/afa06707-86b1-49b8-9b75-44bb15f52605">

**Stack을 Array로 표현하기**

![Untitled 57](https://github.com/pipisebastian/algorithm-study/assets/78250089/df4c316b-5481-40be-a6bc-ca1272d5123b)

- js
  push, pop 사용하면 됨

**Stack을 Linked List로 표현하기**
![Untitled 58](https://github.com/pipisebastian/algorithm-study/assets/78250089/0b4d5688-7162-4f7a-95b7-14ea817e4ee8)

- js

  ```js
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class Stack {
    constructor() {
      this.top = null;
      this.size = 0;
    }

    push(value) {
      const node = new Node(value);
      node.next = this.top;
      this.top = node;
      this.size += 1;
    }

    pop() {
      const value = this.top.value;
      this.top = this.top.next;
      this.size -= 1;
      return value;
    }

    size() {
      return this.size;
    }
  }
  ```

## Ch05-2. 스택\_올바른 괄호 실습

[실습 링크](https://school.programmers.co.kr/learn/courses/13213/lessons/91074)

```js
function solution(s) {
  const stack = [];

  [...s].map((value) => {
    if (stack.at(-1) === "(" && value === ")") {
      stack.pop();
    } else {
      stack.push(value);
    }
  });

  if (stack.length === 0) return true;
  return false;
}
```

## Ch05-3. 스택\_올바른 괄호 문제 풀이

스택이 비어있을 때 닫는 괄호가 들어가면 바로 false 판단 가능

```js
function solution(s) {
  const stack = [];

  for (const c of s) {
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

```js
function solution(s) {
  let count = 0;

  for (const c of s) {
    if (c === "(") {
      count += 1;
    } else {
      if (count === 0) {
        return false;
      }
      count -= 1;
    }
  }

  return count === 0;
}
```
