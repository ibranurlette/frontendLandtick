import React from "react";
import { Table } from "react-bootstrap";
function DataTable() {
  return (
    <div className="container mb-5">
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama kereta</th>
            <th>Berangkat</th>
            <th>Durasi</th>
            <th>Harga / Orang</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default DataTable;
