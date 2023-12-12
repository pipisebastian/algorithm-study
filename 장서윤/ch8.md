## 💡 1. 그래프

- 정점(`Node`) <-> 정점(`Node`)사이를 연결하는 간선(`Edge`)으로 이루어진 비선형 자료구조

- 정점(`Node`)은 여러 개의 간선을 가질 수 있다.
- 크게 방향 그래프와 무방향 그래프로 나눌 수 있다.
- 간선(`Edge`)은 가중치를 가질 수 있다.
- 사이클이 발생할 수 있다.

### ✨ 1.0 사이클?

- 그래프의 정점, 간선의 부분 집합에서 순환이 되는 부분
  <img src="https://velog.velcdn.com/images/pipi/post/59a519a6-21fd-4c4a-bc4b-0c864c4e2bb3/image.png" width="70%">

### ✨ 1.1 무방향 그래프

- 간선으로 이어진 정점끼리는 양방향으로 이동이 가능하다.
- (A, B)와 (B, A)는 같은 간선으로 취급된다. ex) `양방향 통행 도로`
  <img src="https://velog.velcdn.com/images/pipi/post/3a73c4f8-a84b-40f8-bd68-9e6d9a7fa13b/image.png" width="70%">

### ✨ 1.2 방향 그래프

- 간선에 방향성이 존재하는 그래프.
- 양방향으로 갈 수 있더라도 <A, B>와 <B, A>는 다른 간선으로 취급된다. ex) `일방 통행`
  <img src="https://velog.velcdn.com/images/pipi/post/fd1afeb2-3e10-4489-9f48-c63345026e70/image.png" width="70%">

### ✨ 1.3 연결 그래프

- 모든 정점이 서로 이동 가능한 상태인 그래프
  <img src="https://velog.velcdn.com/images/pipi/post/f24d7b2a-86c0-472d-beb4-b682cd067f5b/image.png" width="70%">

### ✨ 1.4 비연결 그래프

- 특정 정점쌍 사이에 간선이 존재하지 않는 그래프 ex. `친한 친구 설문 그래프`
  <img src="https://velog.velcdn.com/images/pipi/post/9ce500e3-ff80-459a-b253-c1cb1d99906d/image.png" width="70%">

### ✨ 1.5 완전 그래프

- 모든 정점끼리 연결된 상태인 그래프
  <img src="https://velog.velcdn.com/images/pipi/post/344af14e-5208-4fde-96fa-668ad5119a3b/image.png" width="70%">

## 💡 2. 구현 방법

![](https://velog.velcdn.com/images/pipi/post/c9befabe-402a-4696-8bd0-ce9fc309ba58/image.png)

### ✨ 2.1 인접 행렬

![](https://velog.velcdn.com/images/pipi/post/f9a7bd11-35de-4a90-855a-d372049158aa/image.png)

- 만약 가중치를 넣고 싶다면 true/false -> null/가중치 값 넣어주면 됨.
- 만약 무방향 그래프 -> 모든 값을 대칭으로 넣어주면 됨.

### ✨ 2.2 인접 리스트

![](https://velog.velcdn.com/images/pipi/post/80cfbd47-c499-4c70-9f42-299360b7178f/image.png)
