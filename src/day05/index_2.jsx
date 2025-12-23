// 챌린지1
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person => person.profession === 'chemist')
  const everyoneElse = people.filter(person => person.profession !== 'chemist')
  function getListItems(people) {
    const listItems = people.map(person =>
      <li key={person.id}>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>
    );
    return listItems;
  }
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{getListItems(chemists)}</ul>
      <h1>Everyone Else</h1>
      <ul>{getListItems(everyoneElse)}</ul>
    </article>
  );
}



// import { peoples } from './data.js';
// import { getImageUrl } from './utils.js';

// export default function App() {
//   const chemists = peoples.filter(people => people.profession === 'chemist')
//   console.log(chemists);
//   const listItems = chemists.map(item => (
//     <li key={item.id}>
//       <img src={getImageUrl(item)} alt={item.name} />
//       <p>
//         <b>{item.name}</b>
//         {' '+item.profession+' '}
//         known for {item.accomplishment}
//       </p>
//     </li>
//   ))
//   return (
//     <ul>{listItems}</ul>
//   )
// }