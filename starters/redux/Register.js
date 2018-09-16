import React, { Component } from 'react';

export class Register extends Component {
  constructor(props) {
    super(props)
    this.state = { ...props };
  }
  render() {
    return (
      <div>
        <h1>Maintain Account</h1>
        <section className="">
          <h4>Current information</h4>
          <div>
            <h6>Name</h6>
            <p>{this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}</p>
          </div>
          <div>
            <h6>Location</h6>
            {this.state.person.location.street} <br />
            {this.state.person.location.city},
            {this.state.person.location.state}
            {this.state.person.location.postcode}
          </div>
          <div>
            <h6>Contact Info</h6>
            Email: {this.state.person.email}<br />
            Cell: {this.state.person.cell}
          </div>
        </section>
        <section className="row">
          <form className="col s12">

            { /* name section */}
            <div className="row card-panel teal lighten-5">
              <div className="card-title">Name</div>
              <div className="input-field col s2">
                <input onChange={this.changePersonName} value={this.state.person.name.title} id="title" type="text" className="validate" />
                <label htmlFor="title" className="active">Title</label>
              </div>
              <div className="input-field col s5">
                <input id="first" onChange={this.changePersonName} value={this.state.person.name.first} type="text" className="validate" />
                <label htmlFor="first" className="active">First Name</label>
              </div>
              <div className="input-field col s5">
                <input id="last" onChange={this.changePersonName} value={this.state.person.name.last} type="text" className="validate" />
                <label htmlFor="last" className="active">Last Name</label>
              </div>
            </div>

            { /* location section */}
            <div className="row card-panel teal lighten-5">
              <div className="card-title">Location</div>
              <div className="input-field col s12">
                <input id="street" onChange={this.changePersonLocation} value={this.state.person.location.street} type="text" className="validate" />
                <label htmlFor="street" className="active">Street</label>
              </div>
              <div className="input-field col s5">
                <input id="city" onChange={this.changePersonLocation} value={this.state.person.location.city} type="text" className="validate" />
                <label htmlFor="city" className="active">City</label>
              </div>
              <div className="input-field col s5">
                <input id="state" onChange={this.changePersonLocation} value={this.state.person.location.state} type="text" className="validate" />
                <label htmlFor="state" className="active">State</label>
              </div>
              <div className="input-field col s2">
                <input onChange={this.changePersonLocation} onBlur={this.fetchCityAndState} value={this.state.person.location.postcode} id="postcode" type="text" className="validate" />
                <label htmlFor="postcode" className="active">Post code</label>
              </div>
            </div>

            { /* contact (email, phone) section */}
            <div className="row card-panel teal lighten-5">
              <div className="card-title">Contact Information</div>
              <div className="input-field col s12">
                <input id="email" onChange={this.changePerson} value={this.state.person.email} type="email" className="validate" />
                <label htmlFor="email" className="active">Email</label>
              </div>
              <div className="input-field col s12">
                <input id="cell" onChange={this.changePerson} value={this.state.person.cell} type="text" className="validate" />
                <label htmlFor="cell" className="active">Cell</label>
              </div>
            </div>

          </form>
        </section>
      </div>
    );
  }

  changePersonName = (e) => {
    const { id, value } = e.target;
    const obj = { person: { ...this.state.person, name: { ...this.state.person.name } } }
    obj.person.name[id] = value;
    this.setState(obj);
  }

  changePersonLocation = (e) => {
    const { id, value } = e.target;
    const obj = { person: { ...this.state.person, location: { ...this.state.person.location } } }
    obj.person.location[id] = value;
    this.setState(obj);
  }

  changePerson = (e) => {
    const { id, value } = e.target;
    const obj = { person: { ...this.state.person } };
    obj.person[id] = value;
    this.setState(obj);
    console.log("changePerson() ran", obj);
  }

  fetchCityAndState() {
  }
}