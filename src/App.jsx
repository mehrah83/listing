import { useState } from "react";
import AddForm from "./Components/AddForm";
import Header from "./Components/Header";
import List from "./Components/List";

const App = () => {
  const [listing, setListing] = useState([]);
  const addData = (data) => {
    setListing([...listing, data]);
  }
  return (
    <>
     <Header/>
     <AddForm addData={addData}/>
     <List listing={listing}/>
    </>
  )
}

export default App;
