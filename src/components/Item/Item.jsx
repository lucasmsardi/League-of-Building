import items from "../../utils/items";
import { useSelector, useDispatch } from "react-redux";
import {
  updateSelectedItem,
  removeSelectedItem,
} from "../../features/itemsSlice";
import { calculateItemsAS } from '../../features/mathSlice'
import "./Item.css";

const Item = () => {
  const dispatch = useDispatch();
  const isSelected = useSelector((state) => state.selectedItem.value);
  const isSelectedChamp = useSelector((state) => state.selectedChampion.value);
  return (
    <div className="items-container">
      <ul>
        {items.map((item) => {
          const isSelectedItem = isSelected.some(
            (selectedItem) => selectedItem.id === item.id
          );
          
          return (
            <li
              key={item.id}
              onClick={() => {
                if(Object.keys(isSelectedChamp).length == 0) {
                  alert('Please select a champion first')
                  return;
                }
                if (!isSelectedItem) {
                  dispatch(updateSelectedItem(item));
                  dispatch(calculateItemsAS(item));
                } else {
                  dispatch(removeSelectedItem(item));
                  dispatch(calculateItemsAS(item));
                }
                 
              }}
              className={isSelectedItem ? "selected-item" : undefined}
            >
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Item;
