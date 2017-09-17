import React from 'react'
import FilmList from '../film/filmList'
import commonStyles from '../../style/common'

// todo remake movies via redux
import movies from '../../../public/test_data/movies.json'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.onChoose = this.onChoose.bind(this)
  }
  onChoose(movie) {
    this.props.history.push('film/' + encodeURIComponent(movie.show_title))
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div style={commonStyles.pageBlock}>
        <FilmList movies={movies} onChoose={this.onChoose} />
      </div>
    )
  }
}

export default Search
