## Ch06-1. 큐

### 큐

: First In First Out이라는 개념을 가진 선형 자료구조

- Linear Queue
- Circular Queue

![Untitled 59](https://github.com/pipisebastian/algorithm-study/assets/78250089/eefa15f6-9a9a-4ce5-bfa7-860f574ebd9c)

### Linear Queue를 Array로 표현하기

![Untitled 60](https://github.com/pipisebastian/algorithm-study/assets/78250089/b8fd28de-c04c-4794-8f4e-01476180a828)
0번 index front, 3번 index rear

![Untitled 61](https://github.com/pipisebastian/algorithm-study/assets/78250089/85701594-ded3-4c5c-9c5e-f98d1c0db6e3)
배열이기 때문에 DeQueue 해도 빈공간은 메워지지 않음

![Untitled 62](https://github.com/pipisebastian/algorithm-study/assets/78250089/946afa9d-9467-4904-8e67-c85f7f52c117)
배열이 꽉 찬다면 더이상 추가할 수 없음 (JS에서는 자유롭게 증감되기 때문에 이런 문제는 없겠지만 front나 rear index 값이 무한정 커질 수 있음)
→ 이런 문제 때문에 앞당기는 작업이 필요한데 이는 선형 시간이 걸림
⇒ 이런 문제를 해결하기 위해 Linked List 사용할 수 있음

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
    this.front += 1;
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

### Linear Queue를 Linked List로 표현하기

![Untitled 63](https://github.com/pipisebastian/algorithm-study/assets/78250089/80a89eff-9000-4cf3-9981-3270bf0f1fea)

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

주의) shift는 사용하지 마라!

- shift는 선형시간(O(n))이 걸리기 때문에 queue에서 기대하는 로직이 수행되지 않음

### Circular Queue

: Front와 Rear가 이어져있는 Queue

- Linked List로 구현했을 때 이점이 없다

### Circular Queue를 Array로 구현하기

```jsx
class Queue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }
  enqueue(value) {
    if (this.isFull()) {
      console.log("Queue is full.");
      return;
    }
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxSize;
    this.size += 1;
  }
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize;
    this.size -= 1;
    return value;
  }
  isFull() {
    return this.size === this.maxSize;
  }
  peek() {
    return this.queue[this.front];
  }
}
```

## Ch06-2. 큐\_프린터 실습

```js
function solution(priorities, location) {
  let turn = 0;

  while (priorities.length !== 0) {
    if (Math.max(...priorities) === priorities[0]) {
      turn += 1;
      if (location === 0) {
        return turn;
      } else {
        priorities.shift();
      }
    } else {
      priorities.push(priorities.shift());
    }
    location = location === 0 ? priorities.length - 1 : location - 1;
  }
}
```

## Ch06-3. 큐\_프린터 문제 풀이

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
    if (currentValue[0] < priorites[count]) {
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
