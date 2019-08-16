import React, { Component } from "react";
const faker = require('faker');

class Contact extends Component {

  constructor(props) {
    super(props);

    this.fakeMe = faker.helpers.userCard();
  }

  render() {
    return (
      <div className="contact">
        <h1>Contact page</h1>
        {console.log(this.fakeMe)}
        <p>Name: {this.fakeMe.name}</p>
        <p>Address: {this.fakeMe.address.street} 101, {this.fakeMe.address.zipcode} {this.fakeMe.address.city}</p>
        <p>Phone: {this.fakeMe.phone}</p>
        <p>Email: {this.fakeMe.email}</p>
      </div>
    )
  }
}

export default Contact;