import React, { Component } from 'react';

export class Register extends Component {
  render() {
    return (
      <div>
        <h1>Register</h1>
        <section className="row">
          <form className="col s12">

            { /* name section */}
            <div className="row card-panel teal lighten-5">
              <div className="card-title">Name</div>
              <div className="input-field col s2">
                <input id="title" type="text" className="validate" />
                <label htmlFor="title" className="active">Title</label>
              </div>
              <div className="input-field col s5">
                <input id="first_name" type="text" className="validate" />
                <label htmlFor="first_name" className="active">First Name</label>
              </div>
              <div className="input-field col s5">
                <input id="last_name" type="text" className="validate" />
                <label htmlFor="last_name" className="active">Last Name</label>
              </div>
            </div>

            { /* login section */}
            <div className="row card-panel teal lighten-5">
              <div className="card-title">Login credentials</div>
              <div className="input-field col s6">
                <input id="username" type="text" className="validate" />
                <label htmlFor="username" className="active">Preferred username</label>
              </div>
              <div className="input-field col s6">
                <input id="password" type="password" className="validate" />
                <label htmlFor="password" className="active">Password</label>
              </div>
            </div>

            { /* location section */}
            <div className="row card-panel teal lighten-5">
              <div className="card-title">Location</div>
              <div className="input-field col s12">
                <input id="street" type="text" className="validate" />
                <label htmlFor="street" className="active">Street</label>
              </div>
              <div className="input-field col s5">
                <input id="city" type="text" className="validate" />
                <label htmlFor="city" className="active">City</label>
              </div>
              <div className="input-field col s5">
                <input id="state" type="text" className="validate" />
                <label htmlFor="state" className="active">State</label>
              </div>
              <div className="input-field col s2">
                <input onBlur={this.fetchCityAndState} id="postcode" type="text" className="validate" />
                <label htmlFor="postcode" className="active">Post code</label>
              </div>
            </div>

            { /* contact (email, phone) section */}
            <div className="row card-panel teal lighten-5">
              <div className="card-title">Contact Information</div>
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label htmlFor="email" className="active">Email</label>
              </div>
              <div className="input-field col s12">
                <input id="cell" type="text" className="validate" />
                <label htmlFor="cell" className="active">Cell</label>
              </div>
            </div>

            { /* other (gender, dob) section */}
            <div className="row card-panel teal lighten-5">
              <div className="card-title">Optional information</div>
              <div className="input-field col s2">
                <input id="gender" type="text" className="validate" />
                <label htmlFor="gender" className="active">Gender</label>
              </div>
              <div className="input-field col s4">
                <input id="dob" type="text" className="validate" />
                <label htmlFor="dob" className="active">Date of birth</label>
              </div>
              <div className="input-field col s6">
                <input id="nationality" type="text" className="validate" />
                <label htmlFor="nationality" className="active">Nationality</label>
              </div>
            </div>

            <div className="row card-panel teal lighten-5">
              <button onClick={this.handleClick}>Register</button>
            </div>
          </form>
        </section>
      </div>
    );
  }

  handleClick() {
  }

  fetchCityAndState() {
  }
}