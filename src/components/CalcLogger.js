import PropTypes from 'prop-types';

const CalcLogger = ({ total, operation, next }) => (
  <div className="calc-logger">
    <div>
      {total}
      {operation}
      {next}
    </div>
  </div>
);

const validatePropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.any,
  PropTypes.number,
]);

CalcLogger.propTypes = {
  next: validatePropType,
  total: validatePropType,
  operation: validatePropType,
};

CalcLogger.defaultProps = {
  next: null,
  total: null,
  operation: null,
};

export default CalcLogger;
