import { useDispatch } from "react-redux";
import "./App.css";
import HeartWarming from "./Component/HeartWarming";
import Languages from "./Component/Languages";
import Navbar from "./Component/Navbar";
import Trailers from "./Component/Trailers";
import { useEffect } from "react";
import {
  getHeartWarmingAction,
  getLanguageAction,
  getTrailersAction,
} from "./Reducers/asyncReducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrailersAction());
    dispatch(getHeartWarmingAction());
    dispatch(getLanguageAction());
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Trailers />
      <HeartWarming />
      <Languages />
    </div>
  );
}

export default App;
