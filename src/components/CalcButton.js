import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $text from '../helpers/dom_selectors';

class CalcButton extends Component {
  constructor(props) {
    super(props);
    this.changeExpression = this.changeExpression.bind(this);
  }

  changeExpression({ target }) {
    const { changeExpression } = this.props;
    changeExpression($text(target));
  }

  render() {
    const { key, classes } = this.props;

    return (
      <button type="button" className={`calc-btn ${classes}`} onClick={this.changeExpression}>
        {key}
      </button>
    );
  }
}

CalcButton.propTypes = {
  key: PropTypes.string.isRequired,
  classes: PropTypes.string,
  changeExpression: PropTypes.func.isRequired,
};

CalcButton.defaultProps = { classes: '' };

export default CalcButton;
