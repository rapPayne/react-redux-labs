import React from 'react';
import { Article } from './Article';
import 'material-design-lite/material.js'
import addIcon from 'material-design-icons/content/2x_web/ic_add_black_48dp.png'
import { PropTypes } from 'prop-types';


class NewsList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>

        {this.state.addingMode ?

          <section>
            <div style={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "white", }}>
              <div style={{ position: "relative", top: "10%", left: "10%", width: "80%", height: "80%", padding: "50px", }}>
                <h1>Adding goes here {this.state.addingMode}</h1>
                <form onSubmit={this.addArticle} autoComplete="off">
                  <div className="mdl-textfield">
                    <input className="mdl-textfield__input" id="title" type="text" />
                    <label className="mdl-textfield__label" htmlFor="title">Title</label>
                  </div>
                  <div className="mdl-textfield">
                    <input className="mdl-textfield__input" id="description" />
                    <label className="mdl-textfield__label" htmlFor="description">Description</label>
                  </div>
                  <div className="mdl-textfield">
                    <input className="mdl-textfield__input" id="author" />
                    <label className="mdl-textfield__label" htmlFor="author">Author</label>
                  </div>
                  <div className="mdl-textfield">
                    <input className="mdl-textfield__input" id="urlToImage" />
                    <label className="mdl-textfield__label" htmlFor="urlToImage">Url to Image</label>
                  </div>
                  <div>
                    <input type='submit' value="Add" />
                  </div>
                </form>
              </div>
            </div>
          </section>

          :

          <div>
            <header style={styles.newsHeader}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/One-news-logo.jpg" style={styles.ourLogo} alt="logo" />
              <h1>{this.getTitle()}</h1>
            </header>
            <button onClick={this.showAddArticle} className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored"><img src={addIcon} style={styles.icon} alt="Add" /></button>

            <p>Here are the top {this.props.articles.length} stories for today</p>
            <section style={styles.articlesLayout}>
              {
                this.props.articles.map(article => <Article article={article} key={article.publishedAt} />)
              }
            </section>
          </div>
        }

      </div>
    )
  }

  showAddArticle = () => {
    console.log("you clicked")
    this.setState({ addingMode: true })
  }

  addArticle = (e) => {
    e.preventDefault();
    console.log("Adding the article");
    this.setState({ addingMode: false })
  }
  getTitle() {
    return "Today's top stories"
  }

}
NewsList.propTypes = {
  articles: PropTypes.array.isRequired,
}
export default NewsList

const styles = {
  newsHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'space-around',
  },
  ourLogo:  { 
    height: "100px",
    width: "100px",
    margin: "10px",
   },
  articlesLayout: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  addingModal: {

  },
  icon: {
    width: "50%",
    objectFit: "cover",
  }
}