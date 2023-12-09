## 💡 1. 큐

- First In First Out의 선형 자료 구조
- EnQueue(요소 추가), DeQueue(요소 삭제), Front(맨 위 요소), Rear(맨 뒤 요소)
- 자바스크립트 `shift` 함수로 큐를 구현하지 말자!

  - `shift` 는 배열 값을 제거할때, 배열을 앞당긴다. 즉 O(n) 소모되어 원하는 성능을 기대할 수 없다.

- **array**로 구현할 수 있다.
  <img src="https://velog.velcdn.com/images/pipi/post/12bb50d7-9c5c-4074-9ed9-b6250cfcbf23/image.png" width="70%">
  - Array로 표현 가능, EnQueue, DeQueue 할때 순차적으로 값을 담는다.
  - => 배열 Front, Rear index가 무한으로 커질 수 있음
  - => 그렇다면 배열을 앞당긴다면? => O(n) 소모!

```js
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}
```

- **linked list** 로 구현할 수 있다. 👍
  <img src="https://velog.velcdn.com/images/pipi/post/6a6a64ca-503f-487a-a0ce-539428f99519/image.png" width="70%">

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}
```

- 앞서 말한 건 모두 Linear Queue인데, 배열 길이가 한정적일 경우,Front, Rear가 이어진 **Circular Queue**로도 구현가능하다.

## 💡 2. 연습 문제

### 프로그래머스 - 프로세스

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12909)

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i += 1) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);

  let count = 0;
  while (true) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }

  return count;
}
```
