import React from "react";
import "../styles/Table.css";

const TableHeader = () => {
  return (
    <div className="tableBorder">
        <tr className="tableDisplay">
          <th className="tablePadding">{"ID"}</th>
          <th className="tablePadding">{"Name"}</th>
          <th className="tablePadding">{"CreatedOn"}</th>
          <th className="tablePadding">{"Owner"}</th>
          <th className="tablePadding">{"Action"}</th>
        </tr>
    </div>
  );
};

export default TableHeader;
