import React from 'react'
import FilmList from '../film/filmList'
import commonStyles from '../../style/common'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchMovie } from '../actions/movies'
import { changeSortCriteria } from '../actions/criterias'

// todo remake movies via redux
import movies from '../../../public/test_data/movies.json'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.onChoose = this.onChoose.bind(this)
    this.keyword = this.props.match.params.keyword
    this.criteria = this.props.match.params.criteria
    this.state= {movies: []}
    debugger;
  }

  componentDidMount() {
    //this.searchMovies(this.props.match.params.keyword)
    
  }

  // componentDidUpdate() {  
  //   if (this.props.match.params.keyword !== this.keyword || this.criteria !== this.props.match.params.criteria) {
  //     this.keyword = this.props.match.params.keyword
  //     this.criteria = this.props.match.params.criteria
  //     this.searchMovies(this.keyword)
  //   }
  // }

  searchMovies(keyword) {
    // if (!this.criteria) {
    //   const criteris = this.props.searchCriteria.length ? this.props.searchCriteria : this.searchOptions
    //   this.criteria = criteris.filter(option => option.active === true)[0].prop
    // }
    // const foundMovies = movies.filter(movie => {
    //   return movie[this.criteria.prop].search(new RegExp(keyword, "i")) !== -1
    // })
    // this.setState({movies: foundMovies})
    // this.props.searchMovie(foundMovies)
  }

  onChoose(movie) {
    this.props.history.push('/film/' + encodeURIComponent(movie.show_title))
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div style={commonStyles.pageBlock}>
        <FilmList movies={this.props.movies} onChoose={this.onChoose} />
      </div>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    searchMovie,
    changeSortCriteria
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    search_criteria: state.search_criteria
  };
}


export default connect(mapStateToProps, matchDispatchToProps)(Search)
