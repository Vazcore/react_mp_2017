import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SearchBar = () => (
  <div>
    <TextField
      hintText="Hint Text"/>
    <RaisedButton label="secondary" secondary={true} />
  </div>
)

export default SearchBar
