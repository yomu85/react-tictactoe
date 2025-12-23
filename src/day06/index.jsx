// 챌린저2
import { useState } from 'react';
import ColorSwitch from './ColorSwitch.js';

export default function App() {
  const [clicks, setClicks] = useState(0);

  function handleClickOutside() {
    setClicks(c => c + 1);
  }

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }

  return (
    <div style={{ width: '100%', height: '100%' }} onClick={handleClickOutside}>
      <ColorSwitch onChangeColor={handleChangeColor} />
      <br />
      <br />
      <h2>Clicks on the page: {clicks}</h2>
    </div>
  );
}


// 챌린저1
// export default function LightSwitch() {
//   function handleClick() {
//     let bodyStyle = document.body.style;
//     if (bodyStyle.backgroundColor === 'black') {
//       bodyStyle.backgroundColor = 'white';
//     } else {
//       bodyStyle.backgroundColor = 'black';
//     }
//   }

//   return (
//     <button onClick={() => handleClick()}>
//       Toggle the lights
//     </button>
//   );
// }

// export default function Signup() {
//   return (
//     <form onSubmit={e => {
//         e.preventDefault()
//         alert('Submitting!')
//       }}>
//       <input />
//       <button>Send</button>
//     </form>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div className="Toolbar" onClick={(e) => {
//       alert('You clicked on the toolbar!');
//     }}>
//       <button onClick={(e) => {
//         e.stopPropagation();
//         alert('Playing!')
//       }}>
//         Play Movie
//       </button>
//       <button onClick={() => alert('Uploading!')}>
//         Upload Image
//       </button>
//     </div>
//   );
// }

// export default function Capture() {
//   return (
//     <div onClickCapture={() => alert('div 캡처')}
//         onClick={() => alert('div 버블')}>
//       <button onClickCapture={() => alert('button 캡처')}
//               onClick={() => alert('button 버블')}>
//         클릭
//       </button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert('Playing!')}
//       onUploadImage={() => alert('Uploading!')}
//     />
//   );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <div>
//       <Button onClick={onPlayMovie}>
//         Play Movie
//       </Button>
//       <Button onClick={onUploadImage}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function Button({ onSmash, children }) {
//   return (
//     <button onClick={onSmash}>
//       {children}
//     </button>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Button onSmash={() => alert('Playing!')}>
//         Play Movie
//       </Button>
//       <Button onSmash={() => alert('Uploading!')}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }


// function Button({onClick, children}) {
//   return (
//     <button type="button" onClick={onClick}>
//       {children}
//     </button>
//   )
// }

// function PlayButton({movieName}) {
//   function handler() {
//     alert(`1: ${movieName}`)
//   }
//   return (
//     <Button onClick={handler}>
//       {movieName}
//     </Button>
//   )
// }

// function UploadButton() {
//   return (
//     <Button onClick={()=> {alert('업로드 버튼이야')}}>업로드 버튼이야!</Button>
//   )
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <PlayButton movieName="Kiki's Delivery Service" />
//       <UploadButton />
//     </div>
//   );
// }


// function AlertButton({ children, message}) {
//   return (
//     <button type="button" onClick={() => alert(message)}>
//       {children}
//     </button>
//   )
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <AlertButton message="Playing!">
//         Play Movie
//       </AlertButton>
//       <AlertButton message="Uploading!">
//         Upload Image
//       </AlertButton>
//     </div>
//   )
// }

// export default function Button() {
//   return (
//     <button type="button" onClick={() => {
//       alert('You clicked me!')
//     }}>
//       I don't do anything
//     </button>
//   );
// }
