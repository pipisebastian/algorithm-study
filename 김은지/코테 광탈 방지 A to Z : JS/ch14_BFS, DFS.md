## Ch12. BFS, DFS

### BFS (너비 우선 탐색)

- 그래프 탐색 알고리즘으로 같은 깊이에 해당하는 정점부터 탐색하는 알고리즘
- 특징
  - Queue를 이용하여 구현할 수 있다.
  - 시작 지점에서 가까운 정점부터 탐색한다.
  - V가 정점의 수, E가 간선의 수일 때 BFS의 시간복잡도는 O(V + E)다.

### DFS (깊이 우선 탐색)

- 그래프 탐색 알고리즘으로 최대한 깊은 정점부터 탐색하는 알고리즘
- 특징
  - Stack을 이용하여 구현할 수 있다.
  - 시작 정점에서 깊은 것 부터 찾는다.
  - V가 정점의 수, E가 간선의 수일 때 DFS의 시간복잡도는 O(V + E)다.

### BFS,DFS 가장 먼 노드 문제

```js
const graph = Array.from({ length: n + 1 }, () => []);

edge.forEach(([src, dest]) => {
  graph[src].push(dest);
  graph[dest].push(src);
});

const distance = Array(n + 1).fill(0);
distance[1] = 1;

const queue = [1];
while (queue.length > 0) {
  const src = queue.shift();
  graph[src].forEach((dest) => {
    if (distance[dest] === 0) {
      queue.push(dest);
      distance[dest] = distance[src] + 1;
    }
  });
}

const max = Math.max(...distance);
return distance.filter((item) => item === max).length;
```

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

  isEmpty() {
    return this.rear === this.front;
  }
}

const graph = Array.from({ length: n + 1 }, () => []);

edge.forEach(([src, dest]) => {
  graph[src].push(dest);
  graph[dest].push(src);
});

const distance = Array(n + 1).fill(0);
distance[1] = 1;

const queue = new Queue();
queue.enqueue(1);
while (!queue.isEmpty()) {
  const src = queue.dequeue();
  graph[src].forEach((dest) => {
    if (distance[dest] === 0) {
      queue.enqueue(dest);
      distance[dest] = distance[src] + 1;
    }
  });
}

const max = Math.max(...distance);
return distance.filter((item) => item === max).length;
```
