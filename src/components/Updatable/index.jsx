import React from 'react';
import PropTypes from 'prop-types';
import Indicator from 'components/Indicator';

const Updatable = ({ message, children, showDot = false }) => (
  <div className="updatable">
    {children}
    {(message || showDot) && (
      <div className="updatable-indicator">
        <Indicator label={message} type="update" />
      </div>
    )}
  </div>
);

Updatable.propTypes = {
  /** Count or message for the updates bubble */
  message: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),

  /** When true, an indicator dot will be rendered when the `message` is empty */
  showDot: PropTypes.bool,

  /** React children */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Updatable;
