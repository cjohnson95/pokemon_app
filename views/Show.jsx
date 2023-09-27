const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Show extends React.Component {
  render() {
    const { pokemon } = this.props;
    console.log(pokemon);
    return (
      <DefaultLayout title={"Pokemon Show Page"}>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.img + ".jpg"} />
        <a href="http://localhost:3000/pokemon">Back</a>
      </DefaultLayout>
    );
  }
}

module.exports = Show;
