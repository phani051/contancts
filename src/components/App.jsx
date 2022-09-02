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
        {/* <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p> */}
        <Details detailinfo={props.tel} />
        <Details detailinfo={props.email} />
      </div>
    </div>
  );
}

function Details(props) {
  return <p className="info">{props.detailinfo}</p>;
}

function GetContacts() {
  const a = [];
  for (let i = 0; i < contacts.length; i++) {
    a.push(
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
    );
  }
  return a;
}

function Avatar(props) {
  return <img className="circle-img" src={props.img} alt="avatar_img" />;
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://avatars.githubusercontent.com/u/87582519?v=4" />

      {/* <GetContacts /> */}
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
