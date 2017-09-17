import React from 'react'
import FilmList from '../film/filmList'

// todo remake movies via redux
import movies from '../../../public/test_data/movies.json'

class Film extends React.PureComponent {
  constructor(props) {
    super(props)
    this.onChoose = this.onChoose.bind(this)
  }
  onChoose(movie) {
    this.props.history.push('/film/' + encodeURIComponent(movie.show_title))
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <FilmList movies={movies} onChoose={this.onChoose} />
      </div>
    )
  }
}

export default Film
