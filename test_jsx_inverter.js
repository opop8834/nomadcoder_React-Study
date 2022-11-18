const root = document.querySelector("#root");
function render() {
  ReactDOM.render(<App />, root);
}
const M_to_H = () => {
  const [amount, setAmount] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const onChange = (event) => {
    // console.log(event.target.value); // 자바 스크립트 처럼 event로 input을 확인 할 수도 있다.
    setAmount(event.target.value); // event발생하면 값을 바꾸고 UI에 렌더링
  };
  const reset = () => {
    setAmount(0);
  };
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };

  return (
    <div>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          id="minutes"
          value={flipped ? amount * 60 : amount}
          placeholder="Minutes"
          type="number"
          onChange={onChange} // event를 들어주는 기능
          disabled={flipped}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          id="hours"
          value={flipped ? amount : amount / 60}
          placeholder="Hours"
          type="number"
          onChange={onChange} // event를 들어주는 기능
          disabled={!flipped}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>{flipped ? "Turn back" : "invert"}</button>
      {/* for 는 지비스크립트 용어이다. 마찬가지로 class도 react에서는 다르게 정의해야 된다.*/}
      {/* 즉 htmlFor, className 으로 사용해야 된다. */}
    </div>
  );
};
const KM_to_Miles = () => {
  const [amount, setAmount] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const onChange = (event) => {
    // console.log(event.target.value); // 자바 스크립트 처럼 event로 input을 확인 할 수도 있다.
    setAmount(event.target.value); // event발생하면 값을 바꾸고 UI에 렌더링
  };
  const reset = () => {
    setAmount(0);
  };
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };

  return (
    <div>
      <div>
        <label htmlFor="KM">KM</label>
        <input
          id="KM"
          value={flipped ? amount * 1.609 : amount}
          placeholder="KM"
          type="number"
          onChange={onChange} // event를 들어주는 기능
          disabled={flipped}
        />
      </div>
      <div>
        <label htmlFor="miles">Miles</label>
        <input
          id="miles"
          value={flipped ? amount : amount / 1.609}
          placeholder="Miles"
          type="number"
          onChange={onChange} // event를 들어주는 기능
          disabled={!flipped}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>{flipped ? "Turn back" : "invert"}</button>
      {/* for 는 지비스크립트 용어이다. 마찬가지로 class도 react에서는 다르게 정의해야 된다.*/}
      {/* 즉 htmlFor, className 으로 사용해야 된다. */}
    </div>
  );
};

const App = () => {
  const [index, setIndex] = React.useState("xx");
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1 className="hi">Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your units</option>
        <option value="0">Minutes & Hours</option>
        // 여기서 value는 string 이어야함
        <option value="1">Km & Miles</option>
      </select>
      {index === "xx" ? "Please select your units" : null}
      {index === "0" ? <M_to_H /> : null}
      {index === "1" ? <KM_to_Miles /> : null}
    </div>
  );
};

render();
