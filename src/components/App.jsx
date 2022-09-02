import React from "react";
import contacts from "./contacts";
import Avatar from "./Avatar";
import Card from "./Card"

function ContactCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  )
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://avatars.githubusercontent.com/u/87582519?v=4" />

      {contacts.map(ContactCard)}
    </div>
  );
}

export default App;
