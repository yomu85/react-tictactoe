import { useState } from 'react';

let nextId = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(
    initialArtists
  );

  function handleClick() {
    const insertAt = 1; // 모든 인덱스가 될 수 있습니다.
    const nextArtists = [
      // 삽입 지점 이전 항목
      ...artists.slice(0, insertAt),
      // 새 항목
      { id: nextId++, name: name },
      // 삽입 지점 이후 항목
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>
        Insert
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}


// import { useState } from "react";

// const initCounters = [0, 0, 0]

// export default function CounterList() {
//   const [counters, setCounters] = useState(initCounters);

//   function handleIncrementClick(index) {
//     const nextCounters = counters.map((counter, i) => {
//       if(i === index) {
//         return counter + 1
//       } else {
//         return counter
//       }
//     })
//     setCounters(nextCounters);
//   }
//   return (
//     <ul>
//       {counters.map((counter, i) => {
//         return (
//           <li key={i}>
//             {counter}
//             <button type="button" onClick={() => handleIncrementClick(i)}>+1</button>
//           </li>
//         )
//       })}
//     </ul>
//   );
// }


// import { useState } from 'react';

// let initShapes = [
//   { id: 0, type: 'circle', x: 50, y: 100 },
//   { id: 1, type: 'square', x: 150, y: 100 },
//   { id: 2, type: 'circle', x: 250, y: 100 },
// ];

// export default function ShapeEditor() {
//   const [shapes, setShapes] = useState(initShapes);

//   function handleClick() {
//     setShapes(shapes.map(shape => {
//       if(shape.type === 'square') {
//         return shape
//       } else {
//         return {
//           ...shape,
//           y: shape.y + 50
//         }
//       }
//     }))
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         Move circles down!
//       </button>
//       {shapes.map(shape => (
//         <div key={shape.id} style={{
//           background: 'purple',
//           position: 'absolute',
//           left: shape.x,
//           top: shape.y,
//           borderRadius:
//             shape.type === 'circle'
//               ? '50%' : '',
//           width: 20,
//           height: 20,
//         }} />
//       ))}
//     </>
//   );
// }


// import { useState } from 'react';

// let initArtists = [
//   { id: 0, name: 'Marta Colvin Andrade' },
//   { id: 1, name: 'Lamidi Olonade Fakeye'},
//   { id: 2, name: 'Louise Nevelson'},
// ]

// export default function List() {
//   const [ artists, setArtists ] = useState(initArtists);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <ul>
//         {artists.map(artist => {
//           return (
//             <li key={artist.id}>{artist.name}{' '}
//               <button type="button" onClick={() => {
//                 setArtists(artists.filter(reArtist => reArtist.id !== artist.id))
//               }}>Delete</button>
//             </li>
//           )
//         })}
//       </ul>
//     </>
//   );
// }

// import { useState } from 'react';

// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState('');
//   const [sculptors, setSculptors] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input type="text" onChange={ e => {
//         setName(e.target.value)
//       }} />
//       <button type="button" onClick={() => {
//         setSculptors([
//           ...sculptors,
//           { id: nextId++, name: name}
//         ])
//       }}>
//         저장
//       </button>
//       <ul>
//         {
//           sculptors.map(sculptor => (
//             <li>
//               {sculptor.name}
//             </li>
//           ))
//         }
//       </ul>
//     </>
//   );
// }
