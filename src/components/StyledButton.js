import React from 'react'

class StyledButton extends React.Component {
  render() {
    return (
      <button onClick = {this.props.onClickHandler}>
        {this.props.buttonName}
      </button>
      );
    }
}

export default StyledButton