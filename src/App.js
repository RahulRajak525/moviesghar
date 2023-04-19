import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./Component/Navbar";
import React, { Suspense, useEffect } from "react";
import {
  getHeartWarmingAction,
  getLanguageAction,
  getTrailersAction,
} from "./Reducers/asyncReducer";
const Trailers = React.lazy(() => import("./Component/Trailers"));
const HeartWarming = React.lazy(() => import("./Component/HeartWarming"));
const Languages = React.lazy(() => import("./Component/Languages"));
const Infinitee = React.lazy(() => import("./Component/Infinite"));
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrailersAction());
    dispatch(getHeartWarmingAction());
    dispatch(getLanguageAction());
  }, []);
  return (
    <div>
      <Navbar />
      <Suspense fallback={<h1>Loading..</h1>}>
        <Trailers />
        <HeartWarming />
        <Languages />
        <Infinitee />
      </Suspense>
    </div>
  );
}

export default App;
