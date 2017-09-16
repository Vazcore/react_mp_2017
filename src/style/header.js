const backgroundImage = require('../../public/img/header.jpg');

export const HeaderBlock = {
  block: {
    display: 'block',
    width: '100%',
    backgroundImage: "url("+backgroundImage+")",
    backgroundPosition: '25px'
  },
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
  navigation: {
    padding: '10px',
    textAlign:'left'
  }
};