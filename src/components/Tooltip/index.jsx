import React from 'react';
import PropTypes from 'prop-types';
import FDS from 'lib/dictionary/js/styleConstants';
import LazyTippy from 'components/Popover/LazyTippy';

const Tooltip = ({
  trigger,
  message,
  position = 'bottom',
  maxWidth = 240,
  textAlign = 'center',
}) => (
  <LazyTippy
    arrow={false}
    theme="tooltip"
    delay={[350, 0]}
    maxWidth={maxWidth}
    content={message}
    placement={position}
    zIndex={FDS.ZINDEX_MODAL}
    appendTo={() => document.body}
    className={`bgColor--charcoal inverted align--${textAlign} padding--y--s  padding--x elevation--2 rounded--all fontSize--s fontWeight--bold`}
  >
    {trigger}
  </LazyTippy>
);

Tooltip.propTypes = {
  /** JSX - Acts as a positioning reference for the popover and triggers active state */
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),

  /** Content of the tooltip */
  message: PropTypes.string.isRequired,

  /** Maximum width of tooltip */
  maxWidth: PropTypes.number,

  /** Position preference of tooltip. */
  position: PropTypes.oneOf(['auto', 'top', 'right', 'bottom', 'left']),
  /** Text align for the message */
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Tooltip;
