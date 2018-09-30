import { Image, Text, TouchableHighlight, View } from 'react-native';
import { store } from './store/store';

export function FilmDetails(props) {
  return (
      <View>
        <Image source={{ uri: `http://localhost:5000/${film.poster_path}` }} style={{ height: 100, width: 100 }} />
        <Text>{props.film.title}</Text>
        <Text>{props.film.tagline}</Text>
        <Text>{props.film.homepage}</Text>
        <Text>{props.film.overview}</Text>
        <Text>{props.film.release_date}</Text>
        <Text>{props.film.runtime}</Text>
        <Text>{props.film.vote_average}</Text>
        <Text>{props.film.vote_count}</Text>
      </View>
  )

}