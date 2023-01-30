import React from 'react'
import "./Form.css";
function ViewTable(props) {
  return (
    <>
      <table border={1} width="30%" cellPadding={10}>
        <tbody>
          <tr>
            <th>Equipment No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile Phone</th>
            <th>Email</th>
            <th>Category</th>
            <th>Sales Tax Code</th>
            <th>Invoice Method</th>
            <th>Invoice Type</th>
          </tr>
          {props.inputarr.map((info, ind) => {
            return (
              <tr key={ind}>
                <td>{info.equipmentNo}</td>
                <td>{info.firstName}</td>
                <td>{info.lastName}</td>
                <td>{info.mobilePhone}</td>
                <td>{info.email}</td>
                <td>{info.category}</td>
                <td>{info.salesTaxCode}</td>
                <td>{info.invoiceMethod}</td>
                <td>{info.invoiceType}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ViewTable