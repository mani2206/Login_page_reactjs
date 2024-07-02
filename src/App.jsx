import Login from "./components/pageComponents/Login";
import "./App.css";
import useWindowSize from "./hooks/useWindowSize";
import { DataProvider } from "./context/DataContext";

function App() {
  const { width } = useWindowSize();
  return (
    <>
      <DataProvider>
        <Login
          width={width}
          title={"Login to your Account"}
          subtitle={"see what is going with your applicationz"}
        />
      </DataProvider>
    </>
  );
}

export default App;
