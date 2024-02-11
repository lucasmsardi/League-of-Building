import champions from "../../utils/champions";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedChampion } from "../../features/championSlice";
import "./Champion.css";

const Champion = () => {
  const dispatch = useDispatch();
  const isSelected = useSelector((state) => state.selectedChampion.value);
  return (
    <div className="champions-container">
      <ul>
        {champions.map((champion) => {
          return (
            <li
              key={champion.id}
              onClick={() => dispatch(updateSelectedChampion(champion))}
            >
              <img
                src={champion.img}
                className={
                  champion.id == isSelected.id ? "selected-champion" : undefined
                }
              ></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Champion;
