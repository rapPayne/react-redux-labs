import React, { Component } from 'react';
import { store } from './store/store';
import { actions } from './store/actions';

export class Register extends Component {
  render() {
    return (
      <div>
        <h1>Maintain Account</h1>
        <section className="row card-panel teal lighten-5">
          <h4 className="card-title">Current information</h4>
          <div>
            <h6>Name</h6>
            {this.props.person.name.title} {this.props.person.name.first} {this.props.person.name.last}</div>
          <div>
            <h6>Location</h6>
            {this.props.person.location.street} <br />
            {this.props.person.location.city},
            {this.props.person.location.state}
            {this.props.person.location.postcode}
          </div>
          <div>
            <h6>Contact Info</h6>
            Email: {this.props.person.email}<br />
            Cell: {this.props.person.cell}
          </div>
        </section>
        <section className="row">
          <form autoComplete="off" className="col s12">

            { /* name section */}
            <div className="row card-panel teal lighten-5">
              <div className="card-title">Name</div>
              <div className="input-field col s2">
                <input onChange={this.changePerson} value={this.props.person.name.title} id="title" type="text" className="validate" />
                <label htmlFor="title" className="active">Title</label>
              </div>
              <div className="input-field col s5">
                <input id="first_name" onChange={this.changePerson} value={this.props.person.name.first} type="text" className="validate" />
                <label htmlFor="first_name" className="active">First Name</label>
              </div>
              <div className="input-field col s5">
                <input id="last_name" onChange={this.changePerson} value={this.props.person.name.last} type="text" className="validate" />
                <label htmlFor="last_name" className="active">Last Name</label>
              </div>
            </div>

            { /* location section */}
            <div className="row card-panel teal lighten-5">
              <div className="card-title">Location</div>
              <div className="input-field col s12">
                <input id="street" onChange={this.changePerson} value={this.props.person.location.street} type="text" className="validate" />
                <label htmlFor="street" className="active">Street</label>
              </div>
              <div className="input-field col s5">
                <input id="city" onChange={this.changePerson} value={this.props.person.location.city} type="text" className="validate" />
                <label htmlFor="city" className="active">City</label>
              </div>
              <div className="input-field col s5">
                <input id="state" onChange={this.changePerson} value={this.props.person.location.state} type="text" className="validate" />
                <label htmlFor="state" className="active">State</label>
              </div>
              <div className="input-field col s2">
                <input onChange={this.changePerson} onBlur={this.fetchCityAndState} value={this.props.person.location.postcode} id="postcode" type="text" className="validate" />
                <label htmlFor="postcode" className="active">Post code</label>
              </div>
            </div>

            { /* contact (email, phone) section */}
            <div className="row card-panel teal lighten-5">
              <div className="card-title">Contact Information</div>
              <div className="input-field col s12">
                <input id="email" onChange={this.changePerson} value={this.props.person.email} type="email" className="validate" />
                <label htmlFor="email" className="active">Email</label>
              </div>
              <div className="input-field col s12">
                <input id="cell" onChange={this.changePerson} value={this.props.person.cell} type="text" className="validate" />
                <label htmlFor="cell" className="active">Cell</label>
              </div>
            </div>

          </form>
        </section>
      </div>
    );
  }

  changePerson = (e) => {
    switch (e.target.id) {
      case "title":
        break;
      case "first_name":
        store.dispatch(actions.setNameFirst(e.target.value));
        break;
      case "last_name":
        store.dispatch(actions.setNameLast(e.target.value));
        break;
      case "street":
        store.dispatch(actions.setLocationStreet(e.target.value));
        break;
      case "city":
        break;
      case "state":
        break;
      case "postcode":
        break;
      case "email":
        store.dispatch(actions.setEmail(e.target.value ));
        break;
      case "cell":
        store.dispatch(actions.setCell(e.target.value));
        break;
    }
  }

  fetchCityAndState(e) {
  }
}