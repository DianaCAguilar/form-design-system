/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Dec 22 2021 09:31:30 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const CaretRightIcon = ({
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
			<polygon points="8 20 16 12 8 4"/>
		</g>
	</g>
</svg>
  </div>
);

export default CaretRightIcon;
