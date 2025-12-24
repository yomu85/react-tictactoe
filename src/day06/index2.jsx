// 챌린저4
export default function FeedbackForm() {
  function handleClick() {
    const name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}


// 챌린저3
// import { useState } from 'react';

// export default function FeedbackForm() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('');
//   if (isSent) {
//     return <h1>Thank you!</h1>;
//   } else {
//     return (
//       <form onSubmit={e => {
//         e.preventDefault();
//         alert(`Sending: "${message}"`);
//         setIsSent(true);
//       }}>
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={e => setMessage(e.target.value)}
//         />
//         <br />
//         <button type="submit">Send</button>
//       </form>
//     );
//   }
// }

// 챌린저2
// import { useState } from "react";

// export default function Form() {
//   let [firstName, setFirstName] = useState('');
//   let [lastName, setLastName] = useState('');

//   function handleReset() {
//     setFirstName('');
//     setLastName('');
//   }

//   return (
//     <form onSubmit={e => e.preventDefault()}>
//       <input
//         placeholder="First name"
//         value={firstName}
//         onChange={e => setFirstName(e.target.value)}
//       />
//       <input
//         placeholder="Last name"
//         value={lastName}
//         onChange={e => setLastName(e.target.value)}
//       />
//       <h1>Hi, {firstName} {lastName}</h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }


// 챌린저1
// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);
  
//   let hasPrev = index > 0;
//   let hasNext = index < sculptureList.length - 1;

//   function handlePrevClick() {
//     if(hasPrev) {
//       setIndex(index - 1);
//     }
//   }

//   function handleNextClick() {
//     if(hasNext) {
//       setIndex(index + 1);
//     }
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handlePrevClick} disabled={!hasPrev}>
//         Prev
//       </button>
//       <button onClick={handleNextClick} disabled={!hasNext}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }


// import Gallery from './Gallery.js';

// export default function Page() {
//   return (
//     <div className="Page">
//       <Gallery />
//       <Gallery />
//     </div>
//   );
// }

// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleNextClick() {
//     setIndex(index + 1);
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleNextClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }


// import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [currentIndex, setCurrntIndex] = useState(0);

//   function handleClick() {
//     let nextIndex = (currentIndex + 1)%sculptureList.length;
//     setCurrntIndex(nextIndex);
//   }

//   let sculpture = sculptureList[currentIndex];
//   return (
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({currentIndex + 1} of {sculptureList.length})
//       </h3>
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
//     </>
//   );
// }
