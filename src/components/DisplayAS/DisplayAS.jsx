import { useSelector } from "react-redux";

const DisplayAS = () => {
  const math = useSelector((state) => state.itemsMath.math);
  return (
    <div className="math-container">
        <h1>AS: {math}</h1>
    </div>
  );
};

export default DisplayAS;
