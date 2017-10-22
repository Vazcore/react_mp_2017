import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import commonStyles from '../../style/common'
import FilmCard from './filmCard'

class FilmList extends React.Component {
  constructor(props) {
    super(props)
  }
  
  renderList(items) {
    return items.map(item => {
      item.c_id = !item.c_id ? item.id : item.c_id;
      return <FilmCard key={item.c_id} movie={item} onChoose={this.props.onChoose} />
    })
  }  

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          {this.props.movies ? this.renderList(this.props.movies) : null}
        </Row>
      </Grid>
    )
  }
}

export default FilmList