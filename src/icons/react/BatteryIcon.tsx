/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Feb 16 2022 18:06:48 GMT-0500 (Eastern Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const BatteryIcon = ({
  size = 's',
  color,
  customSize,
}: IconProps): JSX.Element => (
  <div
    className={`fds-icon fds-icon--${size}`}
    style={{
      fill: color,
      width: customSize && `${customSize}px`,
      height: customSize && `${customSize}px`,
    }}
  >
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g fillRule="evenodd">
		<g>
			<path d="M9,2 L9,4 L8,4 C6.9,4 6,4.9 6,6 L6,20 C6,21.1 6.9,22 8,22 L16,22 C17.1,22 18,21.1 18,20 L18,6 C18,4.9 17.1,4 16,4 L15,4 L15,2 L9,2 Z M11,4 L13,4 L13,6 L15,6 L16,6 L16,20 L8,20 L8,6 L9,6 L11,6 L11,4 Z M13,7 L9,14 L11,14 L11,19 L15,12 L13,12 L13,7 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default BatteryIcon;
