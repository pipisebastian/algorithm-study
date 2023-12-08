## 💡 1. 연결 리스트

- 각 요소(노드)를 포인터로 연결하여 관리하는 선형 자료구조.
- 노드는 `데이터 영역` + `포인터 영역` 으로 구성됨.
- 메모리가 허용하는한 요소를 제한없이 추가 가능

### ✨ 1.1 연결 리스트 종류

#### ✨ Singly Linked List

<img src="https://velog.velcdn.com/images/pipi/post/2f1ed01a-0b90-4b6d-a0f5-a46cd2d49c65/image.png" width="60%">

- 요소 추가 `O(1)`
  - 만약 2를 갖는 요소, 4를 갖는 요소가 이미 탐색되어있다는 가정하에 `O(1)`임. 아닐 경우 탐색 로직이 수행되어야 함.
    <img src="https://velog.velcdn.com/images/pipi/post/30545a9e-ccc4-4a89-ae5f-02140e86d1a8/image.png" width="60%">

#### ✨ Doubly Linked List

- 포인터 변수가 추가됨. 양방향으로 이어짐.(이전 노드 + 다음 노드)

<img src="https://velog.velcdn.com/images/pipi/post/81b62383-f07d-4978-b82a-066bd6156f99/image.png" width="60%">

- 요소 추가 `O(1)`

 <img src="https://velog.velcdn.com/images/pipi/post/ca69d4d1-092d-4488-999d-62d2480717e3/image.png" width="60%">
 
#### ✨ Circular Linked List
<img src="https://velog.velcdn.com/images/pipi/post/bc94b5f8-21d3-4ca1-b8bb-1a2a0a5c1d93/image.png" width="60%">

### ✨ 1.2 배열과의 차이

**1. 메모리 차이**

- `배열`
  - 메모리 영역 순차적으로, 연속적으로 사용
- `연결 리스트`
  - 연속적으로 사용 x. 퍼져있으며 이를 포인터로 찾음.

**2. 시간 복잡도**

- `배열`
  - 요소 추가/삭제 `O(n)`
  - 요소 탐색 `O(1)`
- `연결 리스트`
  - 요소 추가/삭제 `O(1)`
  - 요소 탐색 `O(n)`. 연결 리스트를 처음부터 순차적으로 돌기 때문.

### ✨ 1.3 자바스크립트 코드

![](https://velog.velcdn.com/images/pipi/post/b86be691-f817-48ad-ae0b-cd55d617c8dd/image.png)
