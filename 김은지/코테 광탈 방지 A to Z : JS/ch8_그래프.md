## Ch08. 그래프

### 그래프

: 정점과 정점 사이를 연결하는 간선으로 이루어진 비선형 자료구조

- 정점(Node) 집합과 간선(Edge) 집합으로 표현할 수 있다.

<img width="200" alt="image" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/49cc8295-9b08-4201-ba9d-94f7cba9d32c">

**그래프의 특징**

- 정점은 여러 개의 간선을 가질 수 있다.
- 크게 방향 그래프와 무방향 그래프로 나눌 수 있다.
- 간선은 가중치를 가질 수 있다.
- 사이클이 발생할 수 있다.

**무방향 그래프**

- 간선으로 이어진 정점끼리는 양방향으로 이동이 가능하다.
- 표현하기에 (A, B)와 (B, A)는 같은 간선으로 취급된다.
- ex) 양방향 통행 도로

<img width="200" alt="image" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/54b544ef-12ec-471b-930f-84a54d162efa">

**방향 그래프**

- 간선에 방향성이 존재하는 그래프.
- 양방향으로 갈 수 있더라도 <A, B>와 <B,A>는 다른 간선으로 취급된다.
- ex) 일방 통행

<img width="200" alt="image" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/d83f4164-db02-4e6c-b97d-0deb71ca406a">

**연결 그래프**

- 모든 정점이 서로 이동 가능한 상태인 그래프

<img width="200" alt="image" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/bd35fa88-a397-4156-9f16-8ea0a9721344">

**비연결 그래프**

- 특정 정점쌍 사이에 간선이 존재하지 않는 그래프

<img width="200" alt="image" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/73436c4a-c7e1-4dd8-b8f6-5004744aa72b">

**완전 그래프**

- 모든 정점끼리 연결된 상태인 그래프

<img width="200" alt="image" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/0b9ee0ca-aeca-404c-8139-4ab206bf0f08">

**사이클**

- 그래프의 정점과 간선의 부분 집합에서 순환이 되는 부분

<img width="200" alt="image" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/c0fec119-c915-4a7f-abba-4273dcb571b5">

### 그래프의 구현 방법

- 인접 행렬 방식 (2차원 배열)
- 인접 리스트 방식 (연결 리스트)

### JavaScript에서 사용법

- 인접 행렬

  <img width="500" alt="image" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/c2e4e4e3-f3ed-43cd-8f15-d01da6832df2">

  - 가중치를 넣고 싶으면 true/false 대신 null/가중치 값

- 인접 리스트
  <img width="500" alt="image-1" src="https://github.com/pipisebastian/algorithm-study/assets/78250089/ed66efa3-e25c-4238-8948-2ae0606ce63a">
