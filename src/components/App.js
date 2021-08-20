import {Provider} from "react-redux"
import {store} from "../state/store"

function App() {
  return (
    <Provider store={store}>
<div className="App"></div>;
    </Provider>
  )
}

export default App;
