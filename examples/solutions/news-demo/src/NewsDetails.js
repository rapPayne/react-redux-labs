import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


export function NewsDetails() {
  const articles = useSelector(state => state.articles);
  const { article_number } = useParams();
  const { author, title, description, url, urlToImage, publishedAt, content, source} = articles[+article_number] || {};
  return (
    <article style={styles.article}>
      <h1>{title}</h1>
      <div style={styles.content}>{description}</div>
      <div style={styles.content}><a href={url}>{source?.name}</a></div>
      <div style={{textAlign:'center'}}>
      <img src={urlToImage} alt={title} style={styles.image} />
      </div>
      <div style={styles.content}>{content}</div>
      {author && <div style={styles.content}>By {author}</div>}
      <div style={styles.content}>Originally published: {publishedAt}</div>
    </article>
  )
}

const styles = {
  article: {
    padding: '40px',
  },
  content: {
    margin: '10px',
  },
  image: {
    width: '95%',
    maxWidth: '800px',
    borderRadius: '10px',
    margin: '20px',
  }
}