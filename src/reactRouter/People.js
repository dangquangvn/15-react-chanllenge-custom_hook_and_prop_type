import React, { useState } from "react";
import { data } from "../data";
import { Link } from "react-router-dom";
import Person from "./Person";
const People = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h1>People Page</h1>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <Link to={`/person/${person.id}`}>Learn more</Link>
            {/* <Link to={`/person`}>Learn more</Link> */}
          </div>
        );
      })}
    </div>
  );
};

export default People;
