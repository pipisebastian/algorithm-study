## Ch09. 트리

### 트리

- 방향 그래프의 일종으로 정점을 가리키는 간선이 하나 밖에 없는 구조

<img width="500" alt="image" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/969a098c-bd87-4c95-8f47-da3decb422c9">

**트리의 특징**

- 루트 정점을 제외한 모든 정점은 반드시 하나의 부모 정점을 가진다.
- 정점이 N개인 트리는 반드시 N-1개의 간선을 가진다.
- 루트에서 특정 정점으로 가는 경로는 유일하다

### 이진트리

- 각 정점이 최대 2개의 자식을 가지는 트리

<img width="500" alt="image-1" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/e0f66b20-e3cd-40fd-bb63-7e448df6f1e2">

**이진 트리의 특징**

- 정점이 N개인 이진 트리는 최악의 경우 높이가 N이 될 수 있다.
- 정점이 N개인 포화 또는 완전 이진 트리의 높이는 log N이다.
- 높이가 h인 포화 이진 트리는 2^h - 1개의 정점을 가진다.
- 일반적인 이진 트리를 사용하는 경우는 많지 않다. 다음 자료구조에 응용된다.
  - 이진 탐색 트리
  - 힙
  - AVL 트리
  - 레드 블랙 트리

### 트리 구현 방법

- 인접 행렬 방식 (2차원 배열)
- 인접 리스트 방식 (연결 리스트)

### 이진 트리 구현 방법

- 배열
- 요소에 링크가 2개 존재하는 연결 리스트

### JavaScript에서 사용법

- 이진 트리 (Array)
  <img width="500" alt="image-2" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/45bf5450-29fc-42d8-a43f-906b37c7b456">

- 이진 트리 (Linked List)
  <img width="500" alt="image-3" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/1a06eeeb-f612-47a9-ba8e-e6e98f2ed06f">
