function BoilingVerdict(props) {
  if (props.ceils >= 100) {
    return <p style={{ color: "green", fontWeight: "bold" }}>Вода закипит.</p>;
  }

  return <p style={{ color: "red", fontWeight: "bold" }}>Вода не закипит.</p>;
}

export default BoilingVerdict;
