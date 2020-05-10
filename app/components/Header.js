import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        {" "}
        | <Link to="/about">About</Link>
      </span>
      <span>
        {" "}
        | <Link to="/content1">Content1</Link>
      </span>
      <span>
        {" "}
        | <Link to="/content2">Content2</Link>
      </span>
      <span>
        {" "}
        | <Link to="/content3">Content3</Link>
      </span>
    </>
  );
};
export default Header;
