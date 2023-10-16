import React, { useState } from "react";
import { suppliersData } from "./data/suppliersData";

function StateSample2() {
    
  const [suppliers, setSuppliers] = useState(suppliersData);
  const [isAscending, setIsAscending] = useState(true);

  const deleteSuppliers = (id) => {
    const result = window.confirm("Want to delete?");
    if (result) {
      const filteredSuppliers = suppliers.filter((q) => q.id !== id);
      setSuppliers([...filteredSuppliers]);
    }
  };

  const sortByName = () => {
    const sortedSuppliers = [...suppliers].sort((a, b) => {
      if (a.companyName < b.companyName) return isAscending ? -1 : 1;
      if (a.companyName > b.companyName) return isAscending ? 1 : -1;
      return 0;
    });

    setSuppliers(sortedSuppliers);
    setIsAscending(!isAscending);
  };

  return (
    <>
      <h1>Length: {suppliers.length}</h1>
      <table className="w3-table w3-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th onClick={() => sortByName()}>Company Name</th>
            <th>Contact Name</th>
            <th>Contact Title</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.companyName}</td>
              <td>{item.contactName}</td>
              <td>{item.contactTitle}</td>
              <td>
                <button
                  onClick={() => deleteSuppliers(item.id)}
                  className="w3-button w3-red"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default StateSample2;
