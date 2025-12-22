import { getImageUrl } from "./utils.js";

export default function Profile({
  name,
  imgId,
  profession,
  awards,
  discovered,
  age = 70
}) {
  console.log(name, profession);
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imgId)}
        alt={name}
        width={age}
        height={age}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}
