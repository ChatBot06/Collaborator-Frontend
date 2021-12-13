import React from 'react';

const Dashboard = props => {
  return (
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Task Name</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-primary">
      <th scope="row">Primary</th>
      <td>Column content</td>
    </tr>
    <tr class="table-primary">
      <th scope="row">Primary</th>
      <td>Column content</td>
    </tr>
    <tr class="table-primary">
      <th scope="row">Primary</th>
      <td>Column content</td>
    </tr>
    <tr class="table-primary">
      <th scope="row">Primary</th>
      <td>Column content</td>
    </tr>
  </tbody>
</table>
  );
};


export default Dashboard;
