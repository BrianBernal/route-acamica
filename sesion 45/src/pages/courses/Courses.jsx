/**
 * Dependencies
 */
import React from "react";
import { Link } from "react-router-dom";

/**
 * Styles
 */
import "./Courses.css";

const cursos = [
  {
    id: "1",
    name: "UX/UI",
    className: "ux",
  },
  {
    id: "2",
    name: "Data Science",
    className: "ds",
  },
  {
    id: "3",
    name: "Desarrollo Back-end",
    className: "fsv",
  },
  {
    id: "4",
    name: "Desarrollo Front-end",
    className: "fa",
  },
];

function Courses() {
  return (
    <div>
      <h2>Cursos</h2>
      <ul className="curso">
        {cursos.map(({ id, name, className }) => (
          <li key={id}>
            <Link to={`cursos/${className}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
