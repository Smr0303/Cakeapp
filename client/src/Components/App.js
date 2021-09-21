import Cakecontainer from "./Cakecontainer";
import {Provider} from "react-redux";
import store from "../redux/store"
import HooksCakeContainer from "./HooksCakeContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
