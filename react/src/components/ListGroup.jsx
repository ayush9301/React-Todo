import React, { useState } from "react";
import ListItem from "./ListItem";

const ListGroup = (props) => {
  const [text, settext] = useState();
  // console.log(text)
  const send = () => {
    if (!text.trim()) {
      alert("Input cannot be empty!");
      return;
    }
    props.add(text);
    settext("");
  };
  return (
    <div
      className="w-[80%] mt-[3rem] sm:w-[80%] md:w-[50%] lg:w-[40%] flex-col flex gap-[1rem] p-[2rem] pb-[3em] pt-[3em] inset-0 bg-opacity-80 backdrop-blur-sm rounded-2xl bg-[#0d182d9f]"
      style={{ boxShadow: "4.95px 4.95px 6.6px rgba(0, 0, 0, 0.9)" }}
    >
      <div className="flex flex-row min-h-auto">
        <span className="flex flex-row w-[100%] sm:w-full">
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                send();
              }
            }}
            value={text}
            onChange={(e) => settext(e.target.value)}
            type="text"
            placeholder="Add Text"
            className="font-sans border-b-[1.4px] border-white-900 p-1 placeholder-gray-50 outline-none bg-transparent h-[2.7rem] w-[100%] pl-4 text-white"
            id="input"
            
          />
          <button
            onClick={send}
            id="btn"
            className="text-white font-semibold font-sans text-[0.9rem] bg-[#1f1d4b68] border-[0px] w-[6rem] h-[2.7rem] rounded-tl-3xl rounded-tr-3xl rounded-br-3xl"
          >
            Add Text
          </button>
        </span>
      </div>
      <ul className="text-white">
        {props.data.map((val) => (
          <ListItem del={props.remove} key={val.id} val={val} />
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
