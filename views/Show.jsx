const React = require("react");

class Show extends React.Component {
  render() {
    const { pokemon } = this.props;
    console.log(pokemon);
    return (
      <div>
        <h1>Gotta Catche 'Em All</h1>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.img + ".jpg"} />
        <a href="http://localhost:3000/pokemon">Back</a>
      </div>
    );
  }
}

module.exports = Show;
