const root = document.querySelector("#root");
function Title() {
  return (
    <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
      Hello I'm title
    </h3>
  );
}

//     오래된 방식
// const h3 = React.createElement(
//   "h3",
//   {
//     onMouseEnter: () => console.log("mouse enter"),
//   },
//   "Hello I'm Title"
// );

// arrow function으로 함수 정의
const Button = () => (
  <button
    style={{ backgroundColor: "tomato" }}
    onClick={() => console.log("im clicked")}
  >
    Click me
  </button>
);
// const btn = React.createElement(
//   "button",
//   {
//     onClick: () => console.log("im clicked"),
//     style :,
//   },
//   "Click me"
// );
const Container = () => (
  <div>
    <Title />
    <Button />
  </div>
);
// const container = React.createElement("div", null, [Title, Button]);  // 여러개는 div를 만들어서 모두 넣고 render하면 된다.
ReactDOM.render(<Container />, root);
