import black from "../assets/black.png";
import IconSelector from "../IconSelector";

function Cell(props) {
  const selected = props.solved || props.val < 0;
  const number = Math.abs(props.val);
  return (
    <img
      el={number}
      className={`cell ${selected ? "selected" : ""}`}
      src={selected ? IconSelector(number) : black}
      onClick={props.select}
    />
  );
}

export default Cell;
