const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};
class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <h1>Gotta catch'em all!!</h1>
        <ul>
          {pokemon.map((pokemon, i) => {
            return (
              <li>
                <a href={`/pokemon/${i}`}>
                  {capitalizeFirstLetter(pokemon.name)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = Index;
