import React from 'react';

const styles = {
  article: {
    backgroundColor: 'pale-blue',
    display: 'flex',
    flexDirection: 'row',
    margin: '20px',
    padding: '10px',
    border: '2px solid blue',
    borderRadius: '5px',
  },
  image: {
    maxHeight: '200px',
    padding: '5px',
  }
}
export function Landing(props) {
  const goToDetails = (article) => {
    // Show the NewDetails component with props
    props.history.push("/details", { article: article })
  }

  return (
    <div>
      <h1>Today's News Stories</h1>
      {props.articles.map((a, i) => <article key={i} onClick={() => goToDetails(a)} style={styles.article}>
        <div>
          <h2>{a.title}</h2>
          <div>{a.description}</div>
        </div>
        {
          !a.urlToImage ?
            <img style={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsRljlZkNTGRkwy7CbtGWxrslrieImA0CKGOwWUqC-EvciEpxj" />
            :
            <img style={styles.image} src={a.urlToImage} alt="" />
        }
      </article>)}
    </div>
  );
}