// 챌린지3
import { useState, useEffect } from 'react';

function StoryTray({ stories }) {
  let nextStories = [...stories, {
    id: 'create',
    label: 'Create Story'
  }]
  return (
    <ul>
      {nextStories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}

const initialStories = [
  {id: 0, label: "Ankit's Story" },
  {id: 1, label: "Taylor's Story" },
];

export default function App() {
  const [stories, setStories] = useState([...initialStories])
  const time = useTime();

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        textAlign: 'center',
      }}
    >
      <h2>It is {time.toLocaleTimeString()} now.</h2>
      <StoryTray stories={stories} />
    </div>
  );
}

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}


// 챌린지2
// import Profile from './Profile.js';

// export default function App() {
//   return (
//     <>
//       <Profile person={{
//         imageId: 'lrWQx8l',
//         name: 'Subrahmanyan Chandrasekhar',
//       }} />
//       <Profile person={{
//         imageId: 'MK3eW3A',
//         name: 'Creola Katherine Johnson',
//       }} />
//     </>
//   )
// }

// 챌린지1
// export default function Clock() {
//   const time = new Date();
//   const hours = time.getHours()
//   let isNight;
//   if(hours >= 0 && hours <= 6) {
//     isNight = "night"
//   } else {
//     isNight = "day"
//   }

//   return (
//     <h1 id="time" className={isNight}>
//       {time.toLocaleTimeString()}
//     </h1>
//   );
// }

// function Cup({ guest}) {
//   return <h2>Tea cup for guest #{guest}</h2>
// }

// export default function TeaGathering() {
//   const cups = [];
//   for (let i = 1; i <= 12; i++) {
//     cups.push(<Cup key={i} guest={i} />)
//   }
//   return cups
// }

// function Cup({guest}) {
//   return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaSet() {
//   return (
//     <>
//       <Cup guest={1} />
//       <Cup guest={2} />
//       <Cup guest={3} />
//     </>
//   );
// }


// function Recipe({ drinkers }) {
//   return (
//     <ol>
//       <li>Boil {drinkers} cups of water.</li>
//       <li>
//         Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
//       </li>
//       <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
//     </ol>
//   );
// }

// export default function App() {
//   return (
//     <section>
//       <h1>Spiced Chai Recipe</h1>
//       <h2>for two</h2>
//       <Recipe drinkers={2} />
//       <h2>For a gathering</h2>
//       <Recipe drinkers={4} />
//     </section>
//   )
// }
