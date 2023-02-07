import React, { useEffect, useState } from "react";
import axios from "axios";

const ComA = () => {
  const [id, setID] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  const [frontphoto, setFrontPhoto] = useState();
  const [backphoto, setBackPhoto] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [message, setMessage] = useState();

  const checkNum = (input) => {
    if (input > 1012) {
      setMessage("Cannot be more than 1012");
    }
    if (input < 1) {
      setMessage("Cannot be less than 0");
    }
  };

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      setName(res.data.name);
      setMoves(res.data.moves.length);
      setFrontPhoto(res.data.sprites.front_default);
      setBackPhoto(res.data.sprites.back_default);
      setHeight(res.data.height);
      setWeight(res.data.weight);
    }

    getData();
  });

  return (
    <div className="bg-white text-black">
      <div className="py-4 bg-yellow-300 flex flex-col items-center">
        <input
          placeholder="Input pokemon number: "
          value={id}
          onChange={(event) => {
            setID(event.target.value);
            checkNum(event.target.value);
          }}
          className="border rounded-lg w-56 outline-none border-yellow-600 py-3 px-5"
        />
        <div className="text-blue-500">{message}</div>
      </div>
      <div className=" flex flex-col md:flex-row">
        <div className="flex flex-col text-2xl px-4 py-6">
          <div>ID : {id}</div>
          <div>Name : {name}</div>
          <div>Moves : {moves}</div>
          <div>Height : {height}</div>
          <div>Moves : {moves}</div>
          <div>Weight : {weight}</div>
        </div>
        <div className="flex flex-col" >
          <img src={frontphoto} alt={name} width="400px" height="400px" className="" />
          <img src={backphoto} alt={name} width="400px" height="400px" className=""/>
        </div>
      </div>
    </div>
  );
};

export default ComA;
