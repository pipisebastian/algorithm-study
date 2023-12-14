## 💡 1. 트리

- 방향 그래프으로, 정점을 가리키는 간선이 하나밖에 없는 구조
- `level` : root로 부터 몇번째 깊이인가?
- `degree` : 한 `Node`에서 뻗어나가는 `Edge` 수
  ![](https://velog.velcdn.com/images/pipi/post/a5b4a7f9-cc07-43f8-8ff9-b78f14404220/image.png)

- root `Node`를 제외한, 모든 `Node`는 하나의 부모 `Node`를 가진다.
- `Node`가 N개인 트리는 반드시 N-1개의 `Edge`를 가진다.
- root 에서 특정 정점으로 가는 경로는 유일하다

### ✨ 1.1 이진 트리

- 각 `Node`가 최대 2개의 자식을 가지는 트리
  ![](https://velog.velcdn.com/images/pipi/post/2e232f2e-3c78-43a0-818d-08f32b7ff3f6/image.png)

- 정점(`Node`)이 N개인 이진 트리는 최악의 경우 높이가 N이 될 수 있다.
- 정점(`Node`)이 N개인 포화 또는 완전 이진 트리의 높이는 log N이다.
- 높이가 h인 포화 이진 트리는 2^h - 1개의 정점을 가진다.
- 일반적인 이진 트리를 사용하는 경우는 많지 않다. 다음 자료구조에 응용된다.
  - 이진 탐색 트리
  - 힙
  - AVL 트리
  - 레드 블랙 트리

## 💡 2. 구현 방법

![](https://velog.velcdn.com/images/pipi/post/44f796ef-8011-4a10-b325-492a7d1c4028/image.png)

- **일반트리** 그래프와 동일하게 인접 행렬, 인접 리스트로 구현가능하다.
- 그러나 **이진트리**의 경우, 자식이 2개 이하이기에, 최적화된 방법으로 구현 가능하다

### ✨ 2.1 이진 트리 - 배열

![](https://velog.velcdn.com/images/pipi/post/4e84247d-1124-481e-b57d-7771eff2bd17/image.png)

### ✨ 2.2 이진 트리 - 연결 리스트

![](https://velog.velcdn.com/images/pipi/post/7abc1d3a-8dcc-4ef6-8e13-8febabccc9b4/image.png)
