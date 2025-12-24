// 챌린지1
import { useState } from 'react';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);
  
  function handleClick() {
    setWalk(!walk);
    alert(walk ? 'Stop is next' : 'Walk is next');
  }
  
  return (
    <>
      <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}

// import { useState } from 'react';

// export default function Form() {
//   const [to, setTo] = useState('Alice');
//   const [message, setMessage] = useState('Hello');

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTimeout(() => {
//       alert(`You said ${message} to ${to}`);
//     }, 5000);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         To:{' '}
//         <select
//           value={to}
//           onChange={e => setTo(e.target.value)}>
//           <option value="Alice">Alice</option>
//           <option value="Bob">Bob</option>
//         </select>
//       </label>
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={e => setMessage(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }


// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 5);
//         setTimeout(() => {
//           alert(number);
//         }, 1500);
//       }}>+5</button>
//     </>
//   )
// }

// import { useState } from 'react';

// export default function Form() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('Hi!');
//   if (isSent) {
//     return <h1>Your message is on its way!</h1>
//   }
//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       setIsSent(true);
//       sendMessage(message);
//     }}>
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={e => setMessage(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// function sendMessage(message) {
//   // ...
// }


// import { useState, useEffect } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
//   }

//   return <button onClick={handleClick}>Count: {count}</button>;
// }

// export default function Clock() {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());
  
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);
  
//   return (
//     <>
//       <h1>{time}</h1>
//       <input placeholder="타이핑 해보세요" />
//     </>
//   );
// }


// export default function Gallery() {
//   return (
//     <section>
//       <h1>Inspiring Sculptures</h1>
//       <Image />
//       <Image />
//       <Image />
//     </section>
//   );
// }

// function Image() {
//   return (
//     <img
//       src="https://i.imgur.com/ZF6s192.jpg"
//       alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
//     />
//   );
// }