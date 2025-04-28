import React from 'react'

const styles = {
  article: {
    width: "200px",
    margin: "10px",
  },
  icon: {
    width: "50%",
    objectFit: "cover",
  }
}

export function EditArticle(props) {
  return (
    <section className="mdl-card mdl-card-border mdl-shadow--8dp" style={styles.article}>
      <form onSubmit={props.changeArticle} autoComplete="false">
        <div className="mdl-textfield mdl-js-textfield">
          <input id="title" onChange={props.changeText} value={props.article.title || ""} className="mdl-textfield__input" />
          <label className="mdl-textfield__label" htmlFor="title">Title</label>
        </div>
        <div className="mdl-textfield">
          <textarea id="description" onChange={props.changeText} value={props.article.description || ""} className="mdl-textfield__input" />
          <label className="mdl-textfield__label" htmlFor="description">Description</label>
        </div>
        <div className="mdl-textfield">
          <input id="author" onChange={props.changeText} value={props.article.author || ""} className="mdl-textfield__input" />
          <label className="mdl-textfield__label" htmlFor="author">Author</label>
        </div>
        <div className="mdl-textfield">
          <input id="urlToImage" onChange={props.changeText} value={props.article.urlToImage || ""} className="mdl-textfield__input" />
          <label className="mdl-textfield__label" htmlFor="urlToImage">Url to Image</label>
        </div>
        <div className="mdl-button">
          <input type='submit' value="Update" />
        </div>
      </form>
    </section>
  )
}