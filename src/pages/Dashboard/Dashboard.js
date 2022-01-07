import React from 'react';

const Dashboard = props => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Task Name</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-primary">
          <th scope="row">Primary</th>
          <td>Column content</td>
        </tr>
        <tr className="table-primary">
          <th scope="row">Primary</th>
          <td>Column content</td>
        </tr>
        <tr className="table-primary">
          <th scope="row">Primary</th>
          <td>Column content</td>
        </tr>
        <tr className="table-primary">
          <th scope="row">Primary</th>
          <td>Column content</td>
        </tr>
      </tbody>
    </table>
  );
};


export default Dashboard;
