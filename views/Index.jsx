const React = require("react");
const DefaultLayout = require("./layouts/Default");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#BDC696",
};
class Index extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    console.log({props: this.props.pokemon})
    return (
      <div style={myStyle}>
        <DefaultLayout title={"Pokemon Index Page"}>
          <nav>
            <a href="/pokemon/new">Add a New Pokemon</a>
          </nav>
          <h1>Gotta catch'em all!!</h1>
          <ul>
            {this.pokemon.map((pokemon, i) => {
              return (
                <li key={i}>
                  <a href={`/pokemon/${pokemon.id}`}>
                    {pokemon.name}
                    {capitalizeFirstLetter(pokemon.name)}
                  </a>
                </li>
              );
            })}
          </ul>
          <a href="http://localhost:3000/pokemon/New">Add Pokemon</a>
          <form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE" />
          </form>
          <a href={`/pokemon/${pokemon._id}/edit`}>Edit this Pokemon</a>
        </DefaultLayout>
      </div>
    );
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = Index;
