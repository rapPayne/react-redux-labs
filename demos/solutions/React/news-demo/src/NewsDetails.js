import React from 'react';

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
export function NewsDetails(props) {
  const { author, title, description, url, urlToImage, publishedAt, content, source} = props.location.state.article;
  return (
    <article style={styles.article}>
      <h1>{title}</h1>
      <div style={styles.content}>{description}</div>
      <div style={styles.content}><a href={url}>{source.name}</a></div>
      <div style={{textAlign:'center'}}>
      <img src={urlToImage} alt={title} style={styles.image} />
      </div>
      <div style={styles.content}>{content}</div>
      {author && <div style={styles.content}>By {author}</div>}
      <div style={styles.content}>Originally published: {publishedAt}</div>
    </article>
  )
}