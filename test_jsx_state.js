const root = document.querySelector("#root");
let counter = 0;

function countUp() {
  counter = counter + 1;
  render(); // counter가 ++될때마다 리랜더링 하기 근데 좋은 방법이 아님
  //여기서 특이점은 전체가 아니라 react는 알아서 필요한 부분만 렌더링을 한다.
}
function render() {
  ReactDOM.render(<App />, root);
}

const App = () => {
  const [value1, value2] = React.useState(0); // 2개의 값을 가진 배열이 나온다. 0인덱스는 초기값 1인덱스는 값을 바꾸는 함수
  //React.useState(0)으로 value1에 초기값 0값을 주고 있다.

  const onClick = () => {
    // value2(value1 + 1); // 이렇게 value2가 하는 역할은 value1 + 1 한것을 리렌더링 하는 것이다.
    // let 으로 선언하고 ++value1을 해줘도 동일
    // 근데 이 방법은 현재 state를 계산하는데 어쩌다가 값이 다른 곳에서 바뀔 수도 있고 문제가 있다.
    value2((current) => current + 1); // 다른방법
    // 현재의 state를 가지고 새로운 값을 계산해 내는건 동일하지만 이 방법이 더 안전
    // 리액트가 이 current가 확실하게 현재 값이라는 것을 보장하기 때문에
  };
  return (
    <div>
      <h3>Total Clicks : {value1}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
render(); // 처음 렌더링 할때는 counter값이 0
