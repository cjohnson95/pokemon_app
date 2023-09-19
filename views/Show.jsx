const React = require("react");

class Show extends React.Component {
  render() {
    const { pokemon } = this.props;
    console.log(pokemon);
    return (
      <div>
        <h1>Pokemon</h1>
      <p>{pokemon.name}</p>
      <img src= {pokemon.img + ".jpg"}/>
      </div>
    );
  }
}

module.exports = Show;
