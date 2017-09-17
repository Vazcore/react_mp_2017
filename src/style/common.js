const addtionalColor = '#F55263'
const primarColor = '#3C3C3C'
const noteColor = '#C8C8C8'
const textColor = '#4E4E4E'

export default {
  nav_link: {
    color: addtionalColor,
    fontWeight: 'bold'
  },
  label: {
    color: 'white',
    fontSize: '14px',
    padding: '10px 0 5px 0',
    textTransform: 'uppercase'
  },
  formGroup: {
    paddingLeft: '10px',
    paddingRight: '10px',
    position: 'relative'
  },
  searchForm: {
    paddingTop: '20px',
    paddingBottom: '20px'
  },
  searchInput: {
    backgroundColor: 'black',
    opacity: 0.8,
    color: 'white',
    borderColor: 'black',
    borderBottom: '2px solid ' + addtionalColor
  },
  searchButton: {
    backgroundColor: addtionalColor,
    borderColor: addtionalColor,
    color: 'white',
    fontWeight: 'bold',
    width: '200px',
    float: 'right'
  },
  noPadding: {
    padding: 0
  },
  overflowHidden: {
    overflow: 'hidden'
  },
  block: {
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft:'10px'
  },
  pageBlock: {
    minWidth: '200px'
  },
  icon: {
    width: '20px',
    height: '20px'
  },
  absoluteRight: {
    position: 'absolute',
    right: '20px',
    top: '7px'
  },
  relative: {
    position: 'relative'
  },
  searchLabel: {
    display: 'inline-block',
    padding: '1px 20px 1px 20px',
    margin: '0 7px 0 7px',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    border: '1px solid transparent',
    borderRadius: '5px',
    backgroundColor: primarColor,
    cursor: 'pointer'
  },
  searchLabelActive: {
    backgroundColor: addtionalColor
  },
  padding_right_m: {
    paddingRight: '20px'
  },
  padding_right_sm: {
    paddingRight: '10px'
  },
  subheader: {
    backgroundColor: '#F5F5F5',
    minHeight: '40px',
    paddingTop: '10px'
  },
  panelDescription: {
    marginTop: '100px',
    color: noteColor,
    fontSize: '34px',
    textAlign: 'center'
  },
  footer: {
    padding: '10px',
    backgroundColor: primarColor,
    color: 'white',
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%'
  },
  text_block: {
    fontWeight: 'bold',
    color: textColor
  },
  sortOption: {
    color: textColor,
    fontWeight: 'bold',
    padding: '0 10px 0 10px',
    cursor: "pointer"
  },
  activeSortLabel: {
    color: addtionalColor
  },
  sortLabel: {
    color: textColor,
    fontWeight: 'bold'
  }
}