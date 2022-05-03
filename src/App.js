import { useState } from "react";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { List } from "./components/list";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const searching = (value) => {
    setSearch(value);
  }

  const catSelection = (value) => {
    setCategory(value);

  };
  return (
    <main>
      <Header searching={searching} /> 
      <div className="flex">
        <Sidebar catSelection = {catSelection} />
        <List category = {category} search= {search} />
      </div>
    </main>
  );
}

export default App;
