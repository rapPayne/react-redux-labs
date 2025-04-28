import React from 'react';
import editIcon from 'material-design-icons/image/2x_web/ic_edit_black_48dp.png'

export function ShowArticle(props) {
  return (
    <article className="mdl-card mdl-card-border mdl-shadow--8dp" style={styles.article}>
      <div className="mdl-card__title" style={styles.titleDiv}>
        <h2 style={styles.titleH2}>{props.article.title}</h2>
      </div>
      {props.article.urlToImage && <div className="mdl-card__media">
        <img src={props.article.urlToImage} alt="" style={styles.articleImage} />
      </div>}
      <div className="mdl-card__supporting-text">
        <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" onClick={(article) => props.toggleEditMode(article)}><img src={editIcon} alt="edit" style={styles.icon} /></button>
        <p>{props.article.description}</p>
      </div>
      <div className="mdl-card__actions mdl-card__supporting-text">
        {props.article.author && <p>Author: {props.article.author}</p>}
        {props.article.url && <p><a href={props.article.url} className="mdl-button mdl-button--colored">More details</a></p>}
      </div>
    </article>
  )
}

const styles = {
  article: {
    width: "200px",
    margin: "10px",
  },
  titleDiv: {
  },
  titleH2: {
    fontSize: "1.1em", lineHeight: "1.1em",
  },
  articleImage: {
    width: "200px",
    objectFit: "cover",
  },
  icon: {
    width: "50%",
    objectFit: "cover",
  }
}