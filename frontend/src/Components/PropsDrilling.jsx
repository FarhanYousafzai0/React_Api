import React, { createContext, useContext, useState } from "react";
import { user } from "./Data";

// ✅ Create Context Outside Component
const UserContext = createContext();

const PropsDrilling = () => {
  const [data, setData] = useState(user);

  const remove = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <UserContext.Provider value={remove}>
      <div className="text-center flex flex-col">
        {data.map((item, index) => (
          <Single key={index} {...item} />
        ))}
      </div>
    </UserContext.Provider>
  );
};

const Single = ({ name, id, email }) => {
  return <List name={name} id={id} email={email} />;
};

const List = ({ name, id, email }) => {
  const remove = useContext(UserContext); // ✅ Correctly retrieve function

  return (
    <div className="p-3 shadow rounded-2 m-2">
      <h2 className="font-semibold">{name}</h2>
      <p>{email}</p>
      <button
        onClick={() => remove(id)}
        className="bg-red-700 cursor-pointer text-white rounded-md p-3 mt-2"
      >
        Delete
      </button>
    </div>
  );
};

export default PropsDrilling;
