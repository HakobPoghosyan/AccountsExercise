import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context";
import IndexPageTableContext from "./IndexPageTableContext";
import Table from "./Table";
import TableHeader from "./TableHeader";
import "../styles/Page.css";

const IndexPage = () => {
  const { getAllUsersData } = useContext(UserContext);

  const [allUsersData, setAllUsersData] = useState([]);

  useEffect(() => {
    getAllUsersData().then((data) => {
      setAllUsersData(data);
    });
  });

  return (
    <div className="pageStyle">
      <Table
        tableHeader={<TableHeader />}
        tableContext={<IndexPageTableContext contextData={allUsersData} />}
      />
    </div>
  );
};

export default IndexPage;
