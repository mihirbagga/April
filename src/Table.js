import React from 'react'
import './Table.css'

import MaterialTable from "material-table";
const data = [
    { name: "Mihir", email: "mihirbagga@gmail.com", age: 21, game: "Valorant" },
    { name: "Biswas", email: "biswas@gmail.com", age: 24, game: "Leauge Of legends" },
    { name: "Mrinal", email: "mrinal@gmail.com", age: 18, game: "CS-GO" },
    { name: "Dhanisha", email: "dharjai@gmail.com", age: 25, game: "Valorant" },
    { name: "Ananya", email: "ananya@gmail.com", age: 19, game: "CS-GO" },
    { name: "Ritika", email: "ritika@gmail.com", age: 16, game: "Valorant" },
  ];
  const columns = [
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Email",
      field: "email",
    },
    {
      title: "Age",
      field: "age",
    },
    {
      title: "Game",
      field: "game",
    },
  ];
export default function Table(){
    return (
      <div className="app">
        <div className="containers">
        <MaterialTable title="Employee Details" data={data} columns={columns} options={{ search: true, paging: false, filtering: true, exportButton: true }} />
        </div>
      </div>
       
      );
    
  };
  

 