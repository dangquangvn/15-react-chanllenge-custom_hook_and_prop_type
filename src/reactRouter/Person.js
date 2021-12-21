import React, { useState, useEffect } from "react";
import { data } from "../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const { id } = useParams();
  const [name, setName] = useState("default name");
  useEffect(() => {
    // if (data) {
    const newPerson = data.find((person) => {
      console.log(person);
      return person.id === parseInt(id);
    });
    setName(newPerson.name);
    // }
  }, [id]);
  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people">Back To People</Link>
    </div>
  );
};

export default Person;
