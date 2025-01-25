import React from "react";

const ListItem = ({ val, del }) => {
  return (
    <div className="flex flex-row justify-end">
      <li className="h-[2.5rem] font-sans font-[400] text-gray-50 flex items-center pl-[1rem] pr-[1rem] bg-[#45427a5e] rounded-3xl font-bold pl-[2rem] mt-[0.5rem] w-full justify-between end">
        {val.text}
        <button onClick={() => del(val.id)} className=" text-white">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            // className="bg-white "
            fill="white"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        </button>
      </li>
    </div>
  );
};

export default ListItem;
