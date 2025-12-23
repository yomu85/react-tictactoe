import { getImageUrl } from './utils.js';
import { useState } from 'react';

function Panel({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <section className="panel">
      <button onClick={() => setOpen(!open)}>
        {open ? 'Collapse' : 'Expand'}
      </button>
      {open && children}
    </section>
  );
}

export default function Profile({ person }) {
  return (
    <Panel>
      <Header {...person} />
      <Avatar {...person} />
    </Panel>
  )
}

function Header(currentPerson) {
  return <h1>{currentPerson.name}</h1>;
}

function Avatar(currentPerson) {
  return (
    <img
      className="avatar"
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}
