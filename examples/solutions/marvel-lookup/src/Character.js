import React from 'react';

export const Character = ({character}) => {
 //const character = props.character;
 //const {character} = props;

 if (! character ) return null;
 
 const { path, extension } = character.thumbnail || {};
 const { urls } = character;
 const backgroundImage = "url('" + path + "/landscape_incredible." + extension + "') center / cover";

 return (
  <section style={styles.heroCard} className="mdl-card mdl-shadow--2dp">
   <div style={{
    color: "#fff",
    height: "261px",
    background: backgroundImage
   }} className="mdl-card__title">
    <h2 className="mdl-card__title-text">{character.name}</h2>
   </div>
   <div className="mdl-card__supporting-text">
    {character.description}
   </div>
   <div className="mdl-card__actions mdl-card--border">
    {urls && urls.map(reference => (
     <a key={reference.type} href={reference.url} target="detailsTab" className="mdl-chip">
      <span className="mdl-chip__text">{reference.type}</span>
     </a>))}
   </div>
  </section>
 )
}

const styles = {
 error: {
   backgroundColor: "pink",
   color: "red",
   fontWeight: "bolder",
   padding: "1em",
   border: "1px solid red",
   borderRadius: "10px",
   margin: "5px",
 },
 heroCard: {
   width: "100%",
   padding: "20px",
 },
 heroCardMenu: {
   color: "white",
 },
 heroCardName: {
   height: "52px",
   padding: "16px",
   background: "rgba(0, 0, 0, 0)",
 },
 cardsLayout: {
   display: "grid",
   gridTemplateColumns: "1fr 1fr",
   gridRowGap: "2em",
   gridColumnGap: "2em",
 }
}