import { Provider } from "react-redux";
import "./App.css";
import AllComponents from "./Components/AllComponents";
import store from "./Components/Redux/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AllComponents />
      </Provider>
    </div>
  );
}

export default App;
