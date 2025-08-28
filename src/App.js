import "./styles.css";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p className="paragraph">test</p>
      <MyButton />
      <br />
      <br />
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Фото " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
}

function MyButton() {
  return <button>Я кнопка</button>;
}
