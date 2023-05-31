import React from "react";

import Table from "../components/Table";
import { data } from "./mockData";
import { tableConstants } from "./tableConstant";

const Dashboard = () => {
  const handleEdit = (item) => () => {
    // write your logic
    alert(JSON.stringify(item));
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <h4>Table</h4>
        <Table cols={tableConstants(handleEdit)} data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
