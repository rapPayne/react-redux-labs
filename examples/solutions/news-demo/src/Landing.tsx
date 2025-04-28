import React, { CSSProperties } from 'react';
import { useHistory } from 'react-router-dom';


export function Landing(props:any) {
  const history = useHistory();
  const goToDetails = (article_number: any) => {
    history.push(`/article/${article_number}`);
  }

  return (
    <div>
      <h1>Today's News Stories</h1>
      {props.articles.map((a:any, i:number) => <article key={i} onClick={() => goToDetails(i)} style={styles.article}>
        <div>
          <h2>{a.title}</h2>
          <div>{a.description}</div>
        </div>
        {
          !a.urlToImage ?
            <img style={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsRljlZkNTGRkwy7CbtGWxrslrieImA0CKGOwWUqC-EvciEpxj" alt="" />
            :
            <img style={styles.image} src={a.urlToImage} alt="" />
        }
      </article>)}
    </div>
  );
}

// The following says "styles is an object of objects, each of which must be of type CSSProperties"
// Note that CSSProperties is imported from React.
const styles: {[P: string]: CSSProperties} = {
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
  },
}