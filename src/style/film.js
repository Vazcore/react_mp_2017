import { colors } from './variables'

const styles = {
  block: {
    padding: '15px',
    display: 'inline-block',
    float: 'none',
    cursor: 'pointer'
  },
  poster: {
    width:'100%'
  },
  filmYear: {
    
  },
  filmYearEdge: {
    border: '1px solid ' + colors.noteColor,
    borderRadius: '2px',
    width: '50px',
    textAlign:'center',
    float: 'right'
  },
  previewInfo: {
    paddingTop: '10px'
  },
  category: {
    fontSize: '12px',
    color: colors.infoColor
  },
  infoBlock: {
    paddingLeft: '40px'
  },
  title: {
    fontSize: '34px',
    color: colors.addtionalColor
  },
  rating: {
    display: 'inline-block',
    width: '50px',
    height: '50px',
    fontSize: '20px',
    padding: '10px',
    textAlign: 'center',
    border: '1px solid ' + colors.green,
    color: colors.green,
    borderRadius: '50px',
    verticalAlign: 'middle'
  },
  description: {
    color: colors.noteColor,
    fontSize: '19px'
  },
  info: {
    fontSize: '19px',
    color: 'white',
    fontWeight: 'bold'
  }
}

export default styles