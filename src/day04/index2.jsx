// 챌린저3
function Card({children, title}) {
  return (
    <div className="card">
      <div className="className">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  )
}

export default function Profile() {
  return (
    <div>
      <Card title="Photo">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card title="About">
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  );
}


// 챌린저2
// import { getImageUrl } from './utils.js';

// function Avatar({ person, size }) {
//   let rquestSize = 's'
//   if(size > 90) {
//     rquestSize = "b" 
//   }
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person, rquestSize)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <>
//       <Avatar
//         size={40}
//         person={{
//           name: 'Gregorio Y. Zara',
//           imageId: '7vQD0fP'
//         }}
//       />
//       <Avatar
//         size={120}
//         person={{
//           name: 'Gregorio Y. Zara',
//           imageId: '7vQD0fP'
//         }}
//       />
//     </>
//   );
// }


// 챌린저1
// import Profile from './Profile.jsx';

// const PROFILES = [

//   {name : "", imgId: "szV5sdG", profession: "", awardsNum: 4, awards: "()", discovered: ""},
// ]

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile name="Katsuko Saruhashi" imgId= "YfeOqp2" profession= "geochemist" awards= {["Miyake Prize for geochemistry", "Tanaka Prize"]} discovered= "a method for measuring carbon dioxide in seawater" />
//       <Profile name="Maria Skłodowska-Curie" imgId= "szV5sdG" profession= "physicist and chemist" awards= {["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"]} discovered= "polonium (chemical element)" />
//     </div>
//   );
// }


// import Avatar from './Avatar.jsx';

// function Card({ children }) {
//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }

// export default function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={100}
//         person={{
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//     </Card>
//   );
// }
