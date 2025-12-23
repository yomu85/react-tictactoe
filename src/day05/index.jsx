// 챌린지4
import { Fragment } from "react";
const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => {
        return (
          <Fragment key={index}>
            {index > 0 && <hr />}
            <p>
              {line}
            </p>
          </Fragment>
        )
      })}
    </article>
  );
}


// 챌린지3
// import { recipes } from './data_2.js'

// function Recipe({id, name, ingredients}) {
//   return (
//     <>
//       <h2>{name}</h2>
//       <ul>
//         {ingredients.map((ingredient, index) =>
//           <li key={index}>
//             {ingredient}
//           </li>
//         )}
//       </ul>
//     </>
//   )
// }

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {
//         recipes.map(recipe => (
//           <Recipe key={recipe.id} {...recipe} />
//         ))
//       }
//     </div>
//   );
// }

// 챌린지2
// import React from 'react';
// import { recipes } from './data_2.js'

// // 이 배열에서 레시피 리스트를 만들어 보세요! 
// // 배열의 각 레시피에 대해 이름을 <h2>로 표시하고 재료를 <ul>에 나열합니다.

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map(recipe => (
//         <React.Fragment key={recipe.id}>
//           <h2>{recipe.name}</h2>
//           <ul>
//             {recipe.ingredients.map((ingredient, index) => (
//               <li key={`ingredient-${index}`}>{ingredient}</li>
//             ))}
//           </ul>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }


// 챌린지1
// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

// let chemists = [];
// let everyoneElse = [];

// people.forEach(person => {
//   if(person.profession === 'chemist') {
//     chemists.push(person)
//   } else {
//     everyoneElse.push(person)
//   }
// })

// function ListSection({people, title}) {
//   let listItems = people.map(person => (
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   ))
//   return (
//     <>
//       <h2>{title}</h2>
//       <ul>{listItems}</ul>
//     </>
//   )
// }

// export default function List() {
//   return (
//     <article>
//       <ListSection people={chemists} title="Chemists" />
//       <ListSection people={everyoneElse} title="Everyone Else" />
//     </article>
//   );
// }

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