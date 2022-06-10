import React from "react";
import "../styles/Table.css";

const ViewPageTableContext = ({ contextData }) => {
  return (
    <tr>
      {
        <div className="tableBorder">
          <td className="tablePadding">{contextData.id}</td>
          <td className="tablePadding">{contextData.name}</td>
          <td className="tablePadding">{contextData.createdOn}</td>
          <td className="tablePadding">{contextData.Owner}</td>
          <td className="tablePadding">{contextData.Action}</td>
        </div>
      }
    </tr>
  );
};

export default ViewPageTableContext;
