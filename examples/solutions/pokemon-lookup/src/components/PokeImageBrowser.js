import { useState } from 'react'

export const PokeImageBrowser = ({ images = {} }) => {
  const imageList = [];
  // useEffect(() => {
  let i = 0;
  for (var key in images) {
    imageList.push({ index: i++, name: key, imageUrl: images[key] });
  }
  console.log("Images:", imageList)
  // }, [images])
  const [currentIndex, setCurrentIndex] = useState(0);

  // if (!imageList[currentIndex]?.imageUrl)
  //   setCurrentIndex(incrementIndex())
  return (
    <section style={styles.wrapper}>
      <span onClick={decrementIndex} style={styles.back}>{"<"}</span>
      <div>
        <figure>
          <img src={imageList[currentIndex]?.imageUrl} alt="" style={styles.image} />
          <figcaption style={styles.caption}>{imageList[currentIndex]?.name}</figcaption>
        </figure>
      </div>
      <span onClick={incrementIndex} style={styles.next}>{">"}</span>
    </section>
  )
  function incrementIndex() {
    let newIndex;
    if (currentIndex + 1 > imageList.length)
      return;
    else {
      newIndex = currentIndex + 1
      while (typeof imageList[newIndex]?.imageUrl !== "string") {
        newIndex++;
        if (newIndex > imageList.length)
          return;
      }
    }
    console.log("newindex", newIndex)
    setCurrentIndex(newIndex)
  }
  function decrementIndex() {
    let newIndex;
    if (currentIndex <= 0) {
      return;
    } else {
      newIndex = currentIndex - 1;
      while (typeof imageList[newIndex]?.imageUrl !== "string") {
        newIndex--;
        if (newIndex <= 0)
          return;
      }
      console.log("dec index", newIndex);
      setCurrentIndex(newIndex)
    }
  }
}
const navigation = {
  fontSize: '3em',
  color: 'var(--liver-dogs)',
}
const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  back: {
    ...navigation,
  },
  next: {
    ...navigation,
  },
  image: {
    height: '200px',
  },
  caption: {
    textTransform: "capitalize",
    textAlign: 'center',
    fontSize: '1.5em',
  }
}