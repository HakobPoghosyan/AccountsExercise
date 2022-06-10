import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../Context";
import Table from "./Table";
import TableHeader from "./TableHeader";
import ViewPageTableContext from "./ViewPageTableContext";
import "../styles/Page.css";

const ViewPage = () => {
  const { id } = useParams();

  console.log(id);
  const { getSingleUserData } = useContext(UserContext);

  const [singleUserData, setSingleUserData] = useState({});

  useEffect(() => {
    getSingleUserData(id).then((data) => {
      setSingleUserData(data);
    });
  }, [id]);

  console.log(singleUserData);
  return (
    <div className="pageStyle">
      <Table
        tableHeader={<TableHeader />}
        tableContext={
          <>
            <ViewPageTableContext contextData={singleUserData} />
          </>
        }
      />
    </div>
  );
};

export default ViewPage;
