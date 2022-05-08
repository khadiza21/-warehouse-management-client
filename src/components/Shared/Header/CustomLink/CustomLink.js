import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });


  return (

    
    <div className="mx-4">
      <Link
        className="fw-bold"
        style={{
          color: match ? "#dc3545" : "#23252b",
          textDecoration: match ? "underline" : "none",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </div>


  );


}

export default CustomLink;
