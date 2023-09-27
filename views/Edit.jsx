const React = require("react");
// As you can see we are using the app layout
const DefaultLayout = require("./layouts/Default.jsx");

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Pokemon Edit Page">
        {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
        {/* form is not complete we will do that below*/}
        <form
          action={`/pokemon/${this.props.pokemon._id}?_method=PUT`}
          method="POST"
        >
          Name:{" "}
          <input
            type="text"
            name="name"
            defaultValue={this.props.pokemon.name}
          />
          <input type="submit" value="Submit Changes" />
          <a href="http://localhost:3000/pokemon">Back</a>
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;
