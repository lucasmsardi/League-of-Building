import champions from "../../utils/champions";

const Champion = () => {
  return (
    <div className="champions-container">
      <ul>
        {champions.map((champ) => {
          return <li key={champ.id}>
            <img src={champ.img}></img>
          </li>;
        })}
      </ul>
    </div>
  );
};


export default Champion;