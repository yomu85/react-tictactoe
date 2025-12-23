// 챌린지3
function Drink({ name }) {
  let part, caffeine, age;
  if(name === 'tea') {
    part = 'leaf'
    caffeine = '15-70 mg/cup'
    age = '4,000+ years'
  } else if (name === 'coffee') {
    part = 'bean'
    caffeine = '80-185 mg/cup'
    age = '1,000+ years'
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}


// 챌린지2
// function Item({ name, importance }) {
//   let italics = importance > 0 && (
//     <span style={{fontStyle: 'italic'}}>
//       {`(importance: ${importance})`}
//     </span>
//   )
//   return (
//     <li className="item">
//       {name} {italics}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item
//           importance={9}
//           name="Space suit"
//         />
//         <Item
//           importance={0}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           importance={6}
//           name="Photo of Tam"
//         />
//       </ul>
//     </section>
//   );
// }


// 챌린지1
// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {name} {isPacked ? "✅" : "❌"}
//     </li>
//   )
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit" />
//         <Item isPacked={true} name="Helmet with a golden leaf" />
//         <Item isPacked={false} name="Photo of Tam" />
//       </ul>
//     </section>
//   );
// }

// function Item({ name, isPacked }) {
//   let itemContent = name;
//   if(isPacked) {
//     itemContent = <del>{name + ' ✅'}</del>;
//   }
//   return (
//     <li className="item">
//       {itemContent}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item
//           isPacked={true}
//           name="Space suit"
//         />
//         <Item
//           isPacked={true}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           isPacked={false}
//           name="Photo of Tam"
//         />
//       </ul>
//     </section>
//   );
// }
