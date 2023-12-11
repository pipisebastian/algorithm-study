## Ch07-1. 해시 테이블

### 해시 테이블

: 키와 값을 받아 키를 해싱하여 나온 index에 값을 저장하는 선형 자료구조

- 삽입은 `O(1)`
- 키를 알고 있다면 삭제, 탐색도 `O(1)`

### 해시 함수

: 입력 받은 값을 특정 범위 내 숫자로 변경하는 함수
![image](https://github.com/pipisebastian/algorithm-study/assets/78250089/af92501f-066d-4ce4-83c6-1350c3cd4333)

- 문제점 - 해시 함수의 결과가 동일하여 겹친다면?

### Hash Collision

- 선형 탐사법
  - 충돌이 발생하면 옆으로 한 칸 이동
  - 단순하지만 특정 영역에 데이터가 모일 수 있다는 단점이 있음
  - 최악의 경우 탐색에 선형시간이 걸릴 수 있음
- 제곱 탐사법
  - 충돌이 발생하면 충돌이 발생한 횟수의 제곱만큼 옆으로 이동
  - 특정 영역에 데이터가 모이는 걸 해소해줌
- 이중 해싱
  - 충돌이 발생하면 다른 해시 함수 이용
- 분리 연결법
  - 버킷의 값을 연결 리스트로 사용하여 충돌이 발생하면 리스트에 값을 추가
  - 최악의 경우 하나의 버켓의 배열이 무한정 늘어날 수 있음

### Hash Table을 어디에 사용하는 가?

- 학생 정보를 탐색할 때
  - 연결리스트 사용 - `O(n)`
  - 배열 인덱스 모를 경우 - `O(n)`
  - 해시 테이블 - `O(1)`
    ⇒ 빠르게 값을 찾아야하는 경우 해시 테이블 사용

### JavaScript에서 사용법

```js
const table = [];
table["key"] = 100;
table["key2"] = "Hello";
console.log(table["key"]); // 100
table["key"] = 349;
console.log(table["key"]); // 349
delete table["key"];
console.log(table["key"]); // undefined
```

- JavaScript Array ≈ Hash Table
  올바른 사용법은 아니라 추천 X

```js
const table = {};
table["key"] = 100;
table["key2"] = "Hello";
console.log(table["key"]); // 100
table["key"] = 349;
console.log(table["key"]); // 349
delete table["key"];
console.log(table["key"]); // undefined
```

- JavaScript Object ≈ Hash Table
  젤 간단한 방법

```js
const table = new Map();
table.set("key", 100);
table.set("key2", "Hello");
console.log(table["key"]); // undefined
console.log(table.get("key")); // 100
const object = { a: 1 };
table.set(object, "A1"); // Map은 0bject도 Key로 쓸 수 있다
console.log(table.get(object)); // A1
table.delete(object);
console.log(table.get(object)); // undefined
console.log(table.keys()); // { 'key', 'key2' }
console.log(table.values()); // { 100, 'Hello' }
table.clear();
console.log(table.values()); // { }
```

- Map
  키값으로 object나 배열 같은 복잡한 타입도 사용할 수 있음 (문자열로 바꿔버림)
  → 다양한 타입 넣기 가능
  여러 메소드 제공

```js
const table = new Set();
table.add("key"); // Key와 Value가 동일하게 들어간다
table.add("key2");
console.log(table.has("key")); // true
console.log(table.has("key3")); // false
table.delete("key2");
console.log(table.has("key2")); // false
table.add("key3");
console.log(table.size); // 2
table.clear();
console.log(table.size); // 0
```

- Set
  키와 값이 동일하게 들어감

## Ch07-2. 해시 테이블\_베스트 앨범 실습

```js
function solution(genres, plays) {
  const genreObject = {};

  genres.forEach((genre, i) => {
    if (!genreObject[genre]) {
      genreObject[genre] = { total: 0, songs: [] };
    }
    genreObject[genre].songs.push({ i, play: plays[i] });
    genreObject[genre].total += plays[i];
  });

  const compareSong = (a, b) => {
    const playDiff = b.play - a.play;

    if (playDiff === 0) return a.i - b.i;
    return playDiff;
  };

  const compareAlbum = (a, b) => {
    return b.total - a.total;
  };

  const bestAlbums = [];

  Object.values(genreObject)
    .sort(compareAlbum)
    .forEach((value) => {
      value.songs.sort(compareSong);

      if (value.songs[1]) {
        bestAlbums.push([value.songs[0], value.songs[1]]);
        return;
      }
      bestAlbums.push([value.songs[0]]);
    });

  return bestAlbums.reduce((acc, curr) => [...acc, ...curr.map((c) => c.i)], []);
}
```

## Ch07-3. 해시 테이블\_베스트 앨범 문제 풀이

```js
function solution(genres, plays) {
  const genreMap = new Map();
  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }].sort((a, b) => b.play - a.play).slice(0, 2),
      });
    });

  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);
}
```
