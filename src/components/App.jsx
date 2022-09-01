import React from "react";
import contacts from "./contacts";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar.img" />
      </div>
      <div className="bottom ">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
      
    </div>
  );
}

function Details(props){
  return (
    <div className="bottom ">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
  )
}

function GetContacts() {
  const a = [];
  for (let i = 0; i < contacts.length; i++) {
    a.push(
      <Card
        name={contacts[i].name}
        img={contacts[i].imgURL}
        tel={contacts[i].phone}
        email={contacts[i].email}
      />
    );
  }
  return a;
}

function GetDetails() {
  const a = [];
  for (let i = 0; i < contacts.length; i++) {
    a.push(
      <Details
        
        tel={contacts[i].phone}
        email={contacts[i].email}
      />
    );
  }
  return a;
}

console.log(GetDetails());



function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <GetContacts />
      
    </div>
  );
}

export default App;
