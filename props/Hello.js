class Hello extends React.Component {
  render() {
    const { a, b, c } = this.props;
    const winner = a === b && b === c;
    const color = { fontSize: "50px", backgroundColor: "purple" };
    return (

      <div className="Hello">
        <h1 style={color}>{a}{b}{c}</h1>
        <h1 className={winner ? "win" : "lose"}>
          {winner ? "WINNER" : "LOSER"}</h1>
      </div>
    )
  }
}