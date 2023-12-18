import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InputField from "./components/InputField";
import "bootstrap-icons/icons/arrow-down-up.svg";
import "bootstrap";
import "bootstrap-icons/icons/car-front-fill.svg";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 m-5">
            <InputField />
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
