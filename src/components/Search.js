import React, { Component } from 'react';
import glamorous from 'glamorous';

const SearchContainer = glamorous.div({
  height: '5rem',
  width: '100%',
  background: 'red',
})

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    event.persist();
    this.setState(() => ({
      value: event.target.value
    }));
  }
  render = () => (
    <SearchContainer>
      <h5>What movie are you looking for?</h5>
      <form onSubmit={this.props.getMovie}>
        <input 
          name="test"
          // value={this.state.value} 
          // onChange={this.handleChange}
        />
        <input 
          type="submit"
          value="Search"
        />
      </form>
    </SearchContainer>
  )
}

export default Search;


