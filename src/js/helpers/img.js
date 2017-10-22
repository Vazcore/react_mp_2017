import React from 'react'
import API from './api'
import filmStyles from '../../style/film'

const logo_404 = require('../../../public/img/logo_404.jpg');

export default {
  getImg(path) {
    if (path) {
      return (
        <img src={API.imageHost + 'w300/' + path} style={filmStyles.poster} />
      );
    } else {
      return (
        <img src={logo_404} style={filmStyles.poster} />
      );
    }
  }
}