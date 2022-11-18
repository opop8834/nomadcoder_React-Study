const DOM = ReactDOM.createRoot(document.getElementById("root"))
function render() {
  DOM.render(<App />);
}
// const Btn = (props) => {
//   return (
//     <button
//       style={{
//         backgroundColor: "tomato",
//         border: "1px solid black",
//       }}
//     >
//       {props.banana}
//     </button>
//   );
// };
const Btn = ({text,onClick,fontSize = 10}) => {   // props
  // fontsize를 정의하지 않으면 자동으로 10으로 정해준다.
  // 아예 object로부터 banana로 받을 수도 있다.
  console.log(text + "was rendered");
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "tomato",
        border: "1px solid black",
        // fontSize: big ? 18 : 16,
        fontSize : fontSize
      }}
    >
      {text}
    </button>
  );
};
const MemorizedBtn = React.memo(Btn);   // React memo로 props가 내용이 바뀌지 않는 컴포넌트를 굳이 리랜더링 하는 것을 막아준다
MemorizedBtn.propTypes = {   //script proptype를 정의해서 type이 다르면 오류류
  text: PropTypes.string,
  onClick: PropTypes.func,
  fontSize: PropTypes.number,
  // fontSize: PropTypes.number.isRequired
}
const App = () => {
  const [value, setValue] = React.useState("Save Changes");
  const changeValue = () => {
    setValue("Revert Changes");
  }
  return (
    <div>
      {/* <Btn banana="Save Changes" big={true} /> */}
      <MemorizedBtn text = {value} onClick={changeValue} fontSize={18}/>
      <MemorizedBtn text="Continue" />
    </div>
  );
};
// 전달인자 argument 정의해서 props파라미터로 확인 가능
// 이렇게 부모 컴포넌트 App에서 자식 컴포넌트로 props를 이용해서 넘겨 줄 수 있다.
render();
