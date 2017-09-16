const addtionalColor = '#F55263'
const primarColor = '#3C3C3C'


export default {
  nav_link: {
    color: addtionalColor,
    fontWeight: 'bold'
  },
  label: {
    color: 'white',
    fontSize: '14px',
    padding: '10px 0 5px 0'
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
    padding: '10px 0 10px 0'
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
  optionLabel: {
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
  optionLabelActive: {
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
    minHeight: '40px'
  }
}