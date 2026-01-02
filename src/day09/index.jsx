// 챌린지3
import { useState } from 'react';

function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </>
  )
}

function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo
}) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Task
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          onChange({
            ...todo,
            done: e.target.checked
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </label>
  );
}


let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    console.log(todos);
    setTodos([...todos, {
      id: nextId++,
      title: title,
      done: false
    }])
  }

  function handleChangeTodo(nextTodo) {
    const todo = todos.find(t =>
      t.id === nextTodo.id
    );
    todo.title = nextTodo.title;
    todo.done = nextTodo.done;
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}


// 챌린지2
// import { useState } from "react";

// const initialProducts = [
//   {
//     id: 0,
//     name: "Baklava",
//     count: 1,
//   },
//   {
//     id: 1,
//     name: "Cheese",
//     count: 5,
//   },
//   {
//     id: 2,
//     name: "Spaghetti",
//     count: 2,
//   },
// ];

// export default function ShoppingCart() {
//   const [products, setProducts] = useState(initialProducts);

//   function handleIncreaseClick(productId) {
//     setProducts(
//       products.map((product) => {
//         if (product.id === productId) {
//           return {
//             ...product,
//             count: product.count + 1,
//           };
//         } else {
//           return product;
//         }
//       })
//     );
//   }

//   function handleDecreaseClick(productId) {
//     setProducts(
//       products.map((product) => {
//         if (product.id === productId) {
//           return {
//             ...product,
//             count: product.count - 1,
//           };
//         } else {
//           return product;
//         }
//       }).filter(product => product.count > 0)
//     );
//   }

//   return (
//     <ul>
//       {products.map((product) => (
//         <li key={product.id}>
//           {product.name} (<b>{product.count}</b>)
//           <button
//             type="button"
//             onClick={() => {
//               handleIncreaseClick(product.id);
//             }}
//           >
//             +
//           </button>
//           <button
//             type="button"
//             onClick={() => {
//               handleDecreaseClick(product.id);
//             }}
//           >
//             -
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// 챌린지1
// import { useState } from "react";

// const initialProducts = [
//   {
//     id: 0,
//     name: "Baklava",
//     count: 1,
//   },
//   {
//     id: 1,
//     name: "Cheese",
//     count: 5,
//   },
//   {
//     id: 2,
//     name: "Spaghetti",
//     count: 2,
//   },
// ];

// export default function ShoppingCart() {
//   const [products, setProducts] = useState(initialProducts);

//   function handleIncreaseClick(productId) {
//     setProducts(products.map(product => {
//       if (product.id === productId) {
//         return {...product, count: product.count + 1}
//       } else {
//         return product
//       }
//     }))
//   }

//   return (
//     <ul>
//       {products.map((product) => (
//         <li key={product.id}>
//           {product.name} (<b>{product.count}</b>)
//           <button
//             onClick={() => {
//               handleIncreaseClick(product.id);
//             }}
//           >
//             +
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// import { useImmer } from 'use-immer';

// const initialList = [
//   { id: 0, title: 'Big Bellies', seen: false },
//   { id: 1, title: 'Lunar Landscape', seen: false },
//   { id: 2, title: 'Terracotta Army', seen: true },
// ];

// export default function BucketList() {
//   const [myList, updateMyList] = useImmer(
//     initialList
//   );
//   const [yourArtworks, updateYourList] = useImmer(
//     initialList
//   );

//   function handleToggleMyList(id, nextSeen) {
//     updateMyList(draft => {
//       const artwork = draft.find(a =>
//         a.id === id
//       );
//       artwork.seen = nextSeen;
//     });
//   }

//   function handleToggleYourList(artworkId, nextSeen) {
//     updateYourList(draft => {
//       const artwork = draft.find(a =>
//         a.id === artworkId
//       );
//       artwork.seen = nextSeen;
//     });
//   }

//   return (
//     <>
//       <h1>Art Bucket List</h1>
//       <h2>My list of art to see:</h2>
//       <ItemList
//         artworks={myList}
//         onToggle={handleToggleMyList} />
//       <h2>Your list of art to see:</h2>
//       <ItemList
//         artworks={yourArtworks}
//         onToggle={handleToggleYourList} />
//     </>
//   );
// }

// function ItemList({ artworks, onToggle }) {
//   return (
//     <ul>
//       {artworks.map(artwork => (
//         <li key={artwork.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={artwork.seen}
//               onChange={e => {
//                 onToggle(
//                   artwork.id,
//                   e.target.checked
//                 );
//               }}
//             />
//             {artwork.title}
//           </label>
//         </li>
//       ))}
//     </ul>
//   );
// }

// import { useState } from 'react';

// const initialList = [
//   { id: 0, title: 'Big Bellies', seen: false },
//   { id: 1, title: 'Lunar Landscape', seen: false },
//   { id: 2, title: 'Terracotta Army', seen: true },
// ];

// export default function BucketList() {
//   const [myLists, setMyLists] = useState(initialList);
//   const [yourLists, setYourLists] = useState(initialList);

//   function myListOntoggle(artworkId, nextSeen) {
//     setMyLists(myLists.map(artwork => {
//       if (artwork.id === artworkId) {
//         return { ...artwork, seen: nextSeen }
//       } else {
//         return artwork
//       }
//     }))
//   }

//   function yourListOntoggle(artworkId, nextSeen) {
//     setYourLists(yourLists.map(artwork => {
//       if (artwork.id === artworkId) {
//         return { ...artwork, seen: nextSeen }
//       } else {
//         return artwork
//       }
//     }))
//   }
//   return (
//     <>
//       <h1>Art Bucket List</h1>
//       <h2>My list of art to see:</h2>
//       <ItemList artworks={myLists} onToggle={myListOntoggle} listId="myLists" />
//       <h2>Your list of art to see:</h2>
//       <ItemList artworks={yourLists} onToggle={yourListOntoggle} listId="yourLists" />
//     </>
//   )
// }

// function ItemList({ artworks, onToggle, listId }) {
//   return (
//     <ul>
//       {artworks.map(artwork => (
//         <li key={artwork.id}>
//           <label htmlFor={`${listId}-${artwork.id}`}>
//             <input type="checkbox" id={`${listId}-${artwork.id}`} name={artworks} checked={artwork.seen} onChange={e => onToggle(artwork.id, e.target.checked)} />
//             {artwork.title}
//           </label>
//         </li>
//       ))}
//     </ul>
//   )
// }

// import { useState } from 'react';

// const initLists = [
//   { id: 0, title: 'Big Bellies' },
//   { id: 1, title: 'Lunar Landscape' },
//   { id: 2, title: 'Terracotta Army' },
// ]

// export default function List() {
//   const [lists, setLists]= useState(initLists);

//   function handleClick() {
//     let nextList = [...lists];
//     nextList.reverse();
//     // setLists(nextList)
//   }

//   return (
//     <>
//       <button type='button' onClick={handleClick}>뒤집기</button>
//       <ul>
//         {lists.map(list => (
//           <li key={list.id}>{list.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// import { useState } from "react";

// const initArtists = [
//   { id: 0, name: 'Marta Colvin Andrade' },
//   { id: 1, name: 'Lamidi Olonade Fakeye'},
//   { id: 2, name: 'Louise Nevelson'},
// ]
// let nextId = 3;

// export default function List() {
//   const [artists, setArtists] = useState(initArtists);
//   const [name, setName] = useState('');

//   function handleClick() {
//     const betweenIndex = 1;
//     const nextArtists = [
//       ...artists.slice(0, betweenIndex),
//       { id: nextId++, name: name },
//       ...artists.slice(betweenIndex),
//     ]
//     setArtists(nextArtists);
//     setName('');
//   }

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input type="text" onChange={e => setName(e.target.value)} value={name} />
//       {' '}<button type="button" onClick={handleClick}>
//         추가
//       </button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>
//             {artist.name}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

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
