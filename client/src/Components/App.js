import Cakecontainer from "./Cakecontainer";
import {Provider} from "react-redux";
import store from "../redux/store"
import HooksCakeContainer from "./HooksCakeContainer";
import HooksIceContainer from "./HooksIceContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
        <HooksIceContainer/>
      </div>
    </Provider>
  );
}

export default App;
