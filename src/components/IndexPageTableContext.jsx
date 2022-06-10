import React from "react";
import { Link } from "react-router-dom";
import "../styles/Table.css";

const IndexPageTableContext = ({ contextData }) => {
  return (
    <div className="tableBorder">
      {contextData.map((elem) => (
        <>
        <td key={elem} className="tableDisplay">
          <td className="tablePadding">{elem.id}</td>
          <td className="tablePadding">{elem.name}</td>
          <td className="tablePadding">{elem.createdOn}</td>
          <td className="tablePadding">{elem.Owner}</td>
          <td className="tablePadding">{<Link to={`/viewpage/${elem.id}`}>{elem.Action}</Link>}</td>
        </td>
        </>
      ))}
    </div>
  );
};

export default IndexPageTableContext;
