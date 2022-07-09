import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { $text } from '../helpers/dom_selectors';

class CalcButton extends Component {
  constructor(props) {
    super(props);
    this.onKeydown = this.onKeydown.bind(this);
  }

  onKeydown({ target }) {
    const { handlePress } = this.props;
    handlePress($text(target));
  }

  render() {
    const { name, classes } = this.props;

    return (
      <button type="button" className={`calc-btn ${classes}`} onClick={this.onKeydown}>
        {name}
      </button>
    );
  }
}

CalcButton.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
  handlePress: PropTypes.func.isRequired,
};

CalcButton.defaultProps = { classes: '' };

export default CalcButton;
