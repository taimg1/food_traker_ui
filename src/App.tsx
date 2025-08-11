import { Provider } from "react-redux";
import { store } from "./store";
import BasicDataRouter from "./routes/BasicDataRouter.tsx";

function App() {

  return (
    <>
        <Provider store={store}>
            <BasicDataRouter />
        </Provider>
    </>
  )
}

export default App
