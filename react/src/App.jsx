import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Img from "../src/assets/bg.jpg";
// import { MdDelete } from "react-icons/md";

import ListGroup from "./components/ListGroup";
function App() {
  const [data, setdata] = useState([
    // {
    //   id: 1,
    //   text: "hello",
    // },
  
  ]);
  const add = (value) => {
    // console.log(value)
    setdata([{ id: Date.now(), text: value }, ...data]);
  };
  const remove = (id) => {
    let filterdata = data.filter((item) => item.id !== id);
    console.log(filterdata);

    setdata(filterdata)

  };
  return (
  <div className="flex items-center flex-col h-auto bg-cover bg-center ">
      <div
      className=" flex items-center flex-col size-full h-[100vh] bg-cover bg-center  "
      // style={{ backgroundImage: `url(${Img})` }}
    >
      <Navbar />

      <ListGroup remove={remove} add={add} data={data} />
    </div>
  </div>
  );
}

export default App;
