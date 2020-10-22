import React from 'react';
import { useHistory } from 'react-router-dom';


export function Landing(props) {
  const history = useHistory();
  const goToDetails = (article_number) => {
    history.push(`/article/${article_number}`);
  }

  return (
    <div>
      <h1>Today's News Stories</h1>
      {props.articles.map((a, i) => <article key={i} onClick={() => goToDetails(i)} style={styles.article}>
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