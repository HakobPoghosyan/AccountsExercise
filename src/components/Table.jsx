import React from "react";

const Table = ({ tableHeader, tableContext }) => {
  return (
    <div style={{paddingTop: 360}}>
      <table>
        {tableHeader}
        {tableContext}
      </table>
    </div>
  );
};

export default Table;
