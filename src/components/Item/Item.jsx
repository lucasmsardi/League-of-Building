import items from "../../utils/items";
import { useDispatch } from "react-redux";
import { updateSelectedItem } from "../../features/itemsSlice";
import "./Item.css";

const Item = () => {
    const dispatch = useDispatch();
    return (
        <div className="items-container">
            <ul>
                {items.map((item) => {
                    return (
                        <li
                            key={item.id}
                            onClick={() => dispatch(updateSelectedItem(item))}
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
