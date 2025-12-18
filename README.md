// === 단계 1: 초기 상태 ===
Board 렌더링
squares = [null, null, null, null, null, null, null, null, null]

// === 단계 2: 첫 번째 Square 클릭 ===
<Square 
  value={null}  // squares[0]
  onSquareClick={() => handleClick(0)}  // 화살표 함수
/>
내부의 <button onClick={onSquareClick}> 클릭!

// === 단계 3: 이벤트 전파 ===
Square의 button onClick 트리거
  → onSquareClick() 실행
  → () => handleClick(0) 실행
  → handleClick(0) 실행

// === 단계 4: State 변경 ===
handleClick(0) {
  copySquares = [null, null, ...].slice()
  copySquares[0] = "x"  // [x, null, null, ...]
  setSquares(copySquares)  // React야, 업데이트!
}

// === 단계 5: 리렌더링 ===
Board 다시 렌더링
squares = [x, null, null, null, null, null, null, null, null]

<Square value="x" onSquareClick={() => handleClick(0)} />
                ↑ 이제 "x"!

Square 컴포넌트:
<button>x</button>  // 화면에 "x" 표시!

``` javascript
//✅ 헬퍼 함수 - 외부에 두기
function calculateWinner(squares) {
  // - state/props 사용 안 함
  // - 순수 함수 (같은 입력 → 같은 출력)
  // - 재사용 가능
}

//❌ 이벤트 핸들러 - 컴포넌트 내부
function handleClick(i) {
  // - state/props 사용
  // - 컴포넌트에 종속적
  setSquares(nextSquares);
  setXIsNext(!xIsNext);
}
```