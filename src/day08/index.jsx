// setState 호출만 React 업데이트 큐에 쌓임

import { useState } from "react";

// 챌린지2
function getFinalState(baseState, queue) {
  let finalState = baseState;

  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];

    if (typeof item === 'function') {
      // 함수인 경우
      finalState = item(finalState)
    } else {
      finalState = item;
    }
  }

  return finalState;
}


function increment(n) {
  return n + 1;
}

increment.toString = () => 'n => n + 1';

export default function App() {
  return (
    <>
      <TestCase
        baseState={0}
        queue={[1, 1, 1]}
        expected={1}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          increment,
          increment,
          increment
        ]}
        expected={3}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          5,
          increment,
        ]}
        expected={6}
      />
      <hr />
      <TestCase
        baseState={0}
        queue={[
          5,
          increment,
          42,
        ]}
        expected={42}
      />
    </>
  );
}

function TestCase({
  baseState,
  queue,
  expected
}) {
  const actual = getFinalState(baseState, queue);
  return (
    <>
      <p>Base state: <b>{baseState}</b></p>
      <p>Queue: <b>[{queue.join(', ')}]</b></p>
      <p>Expected result: <b>{expected}</b></p>
      <p style={{
        color: actual === expected ?
          'green' :
          'red'
      }}>
        Your result: <b>{actual}</b>
        {' '}
        ({actual === expected ?
          'correct' :
          'wrong'
        })
      </p>
    </>
  );
}


// 챌린지1
// import { useState } from 'react';

// export default function RequestTracker() {
//   const [pending, setPending] = useState(0);
//   const [completed, setCompleted] = useState(0);

//   function handleClick() {
//     setPending(n => n + 1);
//     delay(3000).then(() => {
//       setPending(n => n - 1);
//       setCompleted(n => n + 1);
//     })
//   }

//   return (
//     <>
//       <h3>
//         Pending: {pending}
//       </h3>
//       <h3>
//         Completed: {completed}
//       </h3>
//       <button onClick={handleClick}>
//         Buy
//       </button>
//     </>
//   );
// }

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms)
//   });
// }


// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 5); // set 5
//         setNumber(42); // set 42
//         setNumber(n => n + 1); // set 43
//       }}>Increase the number</button>
//     </>
//   )
// }

// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 5);
//         setNumber(n => n + 1);
//       }}>Increase the number</button>
//     </>
//   )
// }


// 실제 동작 과정
// <button onClick={() => {
//   setNumber(n => n + 1);  // 첫 번째 함수
//  setNumber(n => n + 1);  // 두 번째 함수 (완전히 다른 n!)
//  setNumber(n => n + 1);  // 세 번째 함수 (또 다른 n!)
// }}></button>

// 1단계: 큐에 쌓임 (함수 실행 X)
// // 클릭 시점에 number = 0

// // React 내부 큐
// updateQueue = [
//   (n => n + 1),  // 함수1 (아직 실행 안 됨!)
//   (n => n + 1),  // 함수2 (아직 실행 안 됨!)
//   (n => n + 1)   // 함수3 (아직 실행 안 됨!)
// ]

// // 이 시점엔 n이 어디에도 없음!

// 2단계: React가 큐를 순서대로 실행
// // React 내부 (의사 코드)
// let currentValue = 0;  // number의 현재 값

// // 첫 번째 함수 실행
// currentValue = (n => n + 1)(currentValue);
// //              ↑            ↑
// //              함수1        0을 넣어서 호출
// //              n = 0
// //              return 0 + 1 = 1
// // currentValue = 1

// // 두 번째 함수 실행
// currentValue = (n => n + 1)(currentValue);
// //              ↑            ↑
// //              함수2        1을 넣어서 호출
// //              n = 1 (이전 결과!)
// //              return 1 + 1 = 2
// // currentValue = 2

// // 세 번째 함수 실행
// currentValue = (n => n + 1)(currentValue);
// //              ↑            ↑
// //              함수3        2를 넣어서 호출
// //              n = 2 (이전 결과!)
// //              return 2 + 1 = 3
// // currentValue = 3

// // 최종: number = 3으로 렌더링

// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(function(a) { return a + 1});
//         setNumber(b => b + 1);
//         setNumber(c => c + 1);
//       }}>+3</button>
//     </>
//   )
// }