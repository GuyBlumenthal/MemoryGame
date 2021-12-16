import IconSelector from "../IconSelector";

function Cell(props) {
  const selected = props.solved || props.val < 0;
  const number = Math.abs(props.val);
  const styling = {};
  if (selected) {
    styling["backgroundImage"] = IconSelector(number);
  }
  console.log(styling);
  return (
    <div
      className={`cell ${selected ? "selected" : ""}`}
      onClick={props.select}
      style={styling}
    >
      <img src={selected ? IconSelector(number) : ""} />
    </div>
  );
}

export default Cell;
