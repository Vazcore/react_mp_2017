import React from 'react'
import styled from 'styled-components'

const ListWrapper = styled.ul`
  position: absolute;
  top: 40px;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  list-style: none;
  padding-left: 0px;
  padding: 10px;
  width: 100%;  
`;

const ListItem = styled.li`
  padding: 3px 10px;
  cursor: pointer;
  &:hover {
    background-color: silver;
    font-weight: bold;
  }
`;

class DropDownList extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  renderList(list) {
    return list.map(el => <ListItem onClick={this.props.onDropDownItemClick} data-id={el.id} data-name={el.name} key={el.id}>{el.name}</ListItem>);
  }
  render() {
    return (
      <ListWrapper>
        {this.renderList(this.props.list)}
      </ListWrapper>
    );
  }
}

export default DropDownList;