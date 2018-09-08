import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ShowingsTimes extends Component {

  componentWillReceiveProps(nextProps) {
    //this.setState(nextProps);
    console.log("props", nextProps);
  }
  render() {
    return (
      <div>
        <div>{this.props.currentFilm && this.props.currentFilm.title}</div>
        {this.props.showings ? (
          <ul>
            {this.props.showings.map(s => (<li key={s.id}><Link to={"/PickSeats/"+s.id}>{s.showing_time.toLocaleString([], { hour: "numeric", minute: "2-digit" })}</Link></li>))}
          </ul>
    ) : (<div>Darn! No showings for that date.</div>)}
      </div>);
  }
}