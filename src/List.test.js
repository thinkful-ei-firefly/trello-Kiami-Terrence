import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import renderer from "react-test-renderer";

//this is the test case
it("renders without crashing", () => {
  const div = document.createElement("div");
  const cards = [];
  const header = "First list";

  ReactDOM.render(<List cards={cards} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const cards = [
    { id: "l", title: "Twelfth card", content: "lorem ipsum" },
    { id: "m", title: "Thirteenth card", content: "lorem ipsum" }
  ];
  const header = "First list";
  const tree = renderer.create(<List cards={cards} header={header} />).toJSON();
  expect(tree).toMatchSnapshot();
});
