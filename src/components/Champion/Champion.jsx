import champions from "../../utils/champions";
import { useDispatch } from "react-redux";
import {  updateSelectedChampion} from "../../features/championSlice";
import "./Champion.css";

const Champion = () => {
  const dispatch = useDispatch();
  return (
    <div className="champions-container">
      <ul>
        {champions.map((champion) => {
          return (
            <li
              key={champion.id}
              onClick={() => dispatch(updateSelectedChampion(champion))}
            >
              <img src={champion.img}></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Champion;
