import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIN from "./routes/sigin-in/sigin-in.component";

const Shop = () => {
  return <div>I am the shop component</div>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIN />} />
      </Route>
    </Routes>
  );
}

export default App;
