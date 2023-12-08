> ### 🗂️ 목차
>
> - [Ch04. 연결 리스트](#ch04-연결-리스트)
>   - [연결 리스트](#연결-리스트)
>   - [배열 vs 연결 리스트](#배열-vs-연결-리스트)
>   - [Singly Linked List](#singly-linked-list)
>   - [Doubly Linked List](#doubly-linked-list)
>   - [Circular Linked List](#circular-linked-list)
>   - [JS 연결리스트 구현](#js-연결리스트-구현)

## Ch04. 연결 리스트

배열은 탐색에 유리한 자료구조이며, 요소 추가 삭제가 반복되는 로직에서는 배열의 시간 복잡도가 상당히 커지기 때문에 권장하지 않음
⇒ 연결리스트

### 연결 리스트

\: 각 요소를 포인터로 연결하여 관리하는 선형 자료구조

- 각 요소는 노드라고 부름
- 데이터 영역과 포인터 영역으로 구성

![Untitled 17](https://github.com/pipisebastian/algorithm-study/assets/78250089/05064ea9-272a-416e-aaed-59bd82cd6f62)

[ 특징 ]

- 메모리가 허용하는 한 요소를 제한 없이 추가할 수 있음
- 탐색은 O(n) 소요
- 요소 추가/제거 시 O(1) 소요
- `Singly Linked List`, `Doubly Linked List`, `Circular Linked List`

### 배열 vs 연결 리스트

![Untitled 18](https://github.com/pipisebastian/algorithm-study/assets/78250089/c8f98fe3-6640-456d-9aea-3419df678ef6)

- Array : 순차적으로 데이터가 들어가 메모리 영역 연속적으로 차지
- Linked List : 순차적이지 않아 각 데이터가 퍼져있음

|                                                         배열                                                          |                                                                                                                                                                                                                                                연결 리스트                                                                                                                                                                                                                                                |
| :-------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![Untitled 19](https://github.com/pipisebastian/algorithm-study/assets/78250089/a82330dd-934c-484d-bf89-2f14897574ce) | ![Untitled 21](https://github.com/pipisebastian/algorithm-study/assets/78250089/96e605c7-54ee-4a34-895d-d1dd1e3a2011) <br/> ![Untitled 22](https://github.com/pipisebastian/algorithm-study/assets/78250089/f022c090-bc7a-4832-8fa8-091548abc2b3) <br/> ![Untitled 23](https://github.com/pipisebastian/algorithm-study/assets/78250089/14e08be1-7fd2-4fac-a2ca-d60f69e2addb) <br/> ![Untitled 24](https://github.com/pipisebastian/algorithm-study/assets/78250089/06a6987e-d816-4feb-be06-2b45e0c4fa6c) |
| ![Untitled 20](https://github.com/pipisebastian/algorithm-study/assets/78250089/33b4a4fc-5866-45d1-9f89-eed02a69dc83) |  ![Untitled 25](https://github.com/pipisebastian/algorithm-study/assets/78250089/fa99eb6a-0277-4ae8-ad3d-e193cb5f599f)<br/> ![Untitled 26](https://github.com/pipisebastian/algorithm-study/assets/78250089/d543efb3-ec8e-44ed-9416-dc1409f1bf2a)<br/> ![Untitled 27](https://github.com/pipisebastian/algorithm-study/assets/78250089/b51116c9-e55e-4d55-b02b-93147620e975)<br/> ![Untitled 28](https://github.com/pipisebastian/algorithm-study/assets/78250089/5a47b43e-d369-4646-9d93-6e899a98134f)   |

### Singly Linked List

: Head에서 Tail까지 단방향으로 이어지는 연결 리스트

![Untitled 29](https://github.com/pipisebastian/algorithm-study/assets/78250089/a1e99249-4c04-4219-95d7-6fcce08f2eaa)

[ 핵심 로직 ]

- 요소 찾기 (ex. 4 찾기)
  ![Untitled 30](https://github.com/pipisebastian/algorithm-study/assets/78250089/71cf2724-6f56-4d43-b1db-f943487a0259)
  ![Untitled 31](https://github.com/pipisebastian/algorithm-study/assets/78250089/5ff5f628-2821-4551-b6a7-b8a03f4c8015)
  ![Untitled 32](https://github.com/pipisebastian/algorithm-study/assets/78250089/312499c1-e64c-4bb5-922e-5e3b489bb345)
  ![Untitled 33](https://github.com/pipisebastian/algorithm-study/assets/78250089/ec99ff2a-8a7a-4f5f-bc1f-f11f86713c24)
  ![Untitled 34](https://github.com/pipisebastian/algorithm-study/assets/78250089/34a297e0-c2d7-4376-a71d-bbbb02a511d3)
- 요소 추가 (ex. 3 중간에 추가)
  ![Untitled 35](https://github.com/pipisebastian/algorithm-study/assets/78250089/d5bbaf51-6d09-43f0-9c80-b28060be255f)
  ![Untitled 36](https://github.com/pipisebastian/algorithm-study/assets/78250089/c8950faa-d066-4d91-b9ca-7dd325bc3577)
  ![Untitled 37](https://github.com/pipisebastian/algorithm-study/assets/78250089/d08a81fa-63bc-4117-9c23-22f24700db5a)
- 요소 삭제 (ex. 2 삭제)
  ![Untitled 38](https://github.com/pipisebastian/algorithm-study/assets/78250089/27685a34-5937-47f2-80d1-f4514405812e)
  ![Untitled 39](https://github.com/pipisebastian/algorithm-study/assets/78250089/b28a8629-bae2-4fa4-a6cb-0af111aa9506)
  ![Untitled 40](https://github.com/pipisebastian/algorithm-study/assets/78250089/da193bab-a804-4826-80e8-4df2c1c645df)

### Doubly Linked List

: 양방향으로 이어지는 연결 리스트

- Singly Linked List보다 자료구조의 크기가 조금 더 큼.

![Untitled 41](https://github.com/pipisebastian/algorithm-study/assets/78250089/71b5e95f-d31f-4281-b9b8-e1e80e781cbb)

[ 핵심 로직 ]

- 요소 추가
  ![Untitled 42](https://github.com/pipisebastian/algorithm-study/assets/78250089/64939cd7-f5bb-4e4b-9907-d4b0a7283e01)
  ![Untitled 43](https://github.com/pipisebastian/algorithm-study/assets/78250089/316a0144-2ad9-4b5a-8e1a-6a5b925ee98f)
  ![Untitled 44](https://github.com/pipisebastian/algorithm-study/assets/78250089/f7769292-ea77-4d4d-9c7c-247e50ad219e)
  ![Untitled 45](https://github.com/pipisebastian/algorithm-study/assets/78250089/d917c2d9-af29-479a-a68d-11b3cd2e95c2)
  ![Untitled 46](https://github.com/pipisebastian/algorithm-study/assets/78250089/fa49f7cf-df0b-4b83-956c-09bd194efb74)
- 요소 삭제
  ![Untitled 47](https://github.com/pipisebastian/algorithm-study/assets/78250089/01db23d2-e496-4f17-b3ca-68826bb6ec0f)
  ![Untitled 48](https://github.com/pipisebastian/algorithm-study/assets/78250089/a2578099-e6c6-4614-a69e-c5a1174a2639)
  ![Untitled 49](https://github.com/pipisebastian/algorithm-study/assets/78250089/5d9f924d-79af-4e77-b3aa-ffea4648515a)
  ![Untitled 50](https://github.com/pipisebastian/algorithm-study/assets/78250089/e1941c56-4588-491f-ae3d-60c1156d03d5)

### Circular Linked List

: Singly 혹은 Doubly Linked List에서 Tail이 Head로 연결되는 연결 리스트

- 메모리를 아껴쓸 수 있음
- 원형 큐 등을 만들때도 사용됨

![Untitled 51](https://github.com/pipisebastian/algorithm-study/assets/78250089/e07bd0bd-9045-442a-9ca7-cae07213ae7b)

### JS 연결리스트 구현

- code - 코딩테스트에 직접적으로 코드를 작성해서 사용하는 경우는 거의 없기 때문에 외워둘 필요는 없지만 한 번쯤 작성해서 실행시켜보면 좋을 듯!

  ```js
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }

    find(value) {
      let currNode = this.head;
      while (currNode.value !== value) {
        currNode = currNode.next;
      }
      return currNode;
    }

    append(newValue) {
      const newNode = new Node(newValue);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }

    insert(node, newValue) {
      const newNode = new Node(newValue);
      newNode.next = node.next;
      node.next = newNode;
    }

    remove(value) {
      if (this.head.value === value) {
        this.head = this.head.next;
      } else {
        let prevNode = this.head;

        while (prevNode.next.value !== value) {
          prevNode = prevNode.next;
        }

        prevNode.next = prevNode.next.next;
      }
    }

    display() {
      let currNode = this.head;
      let displayString = "[";
      while (currNode !== null) {
        displayString += `${currNode.value}, `;
        currNode = currNode.next;
      }
      displayString = displayString.substr(0, displayString.length - 2);
      displayString += "]";
      console.log(displayString);
    }
  }

  const linkedList = new SinglyLinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(5);
  linkedList.display();
  console.log(linkedList.find(3));
  linkedList.remove(1);
  linkedList.display();
  linkedList.insert(linkedList.find(3), 10);
  linkedList.display();
  ```
