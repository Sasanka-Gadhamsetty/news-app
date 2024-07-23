import { useState } from "react";
import NewsList from "./Components/NewsList";
import NavBar from "./Components/NavBar";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <NavBar setCategory={setCategory} />
      <NewsList category={category} />
    </div>
  );
};
export default App;
