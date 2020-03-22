<section style={styles.wrapper}>
  <p style={styles.headline}>Showing times for {currentDate.toShowingDateString()}</p>
  <div style={styles.showingTimesWrapper}>
    {showingsForDateAndFilm.map(st => (
      <span style={styles.tile} key={st.id}>
        {st.showing_time.toShowingTimeString()}</span>
    )
    )}
  </div>
</section>