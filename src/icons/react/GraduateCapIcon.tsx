/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Feb 16 2022 18:06:48 GMT-0500 (Eastern Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const GraduateCapIcon = ({
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
		<g fillRule="nonzero">
			<path d="M12,3 L1,8.86666667 L5,10.9982222 L5,16.8648889 L12,20.6 L19,16.8648889 L19,10.9982222 L21,9.93244444 L21,16.6888889 L23,16.6888889 L23,8.86666667 L12,3 M18.82,8.86666667 L12,12.504 L5.18,8.86666667 L12,5.22933333 L18.82,8.86666667 M17,15.7111111 L12,18.3706667 L7,15.7111111 L7,12.064 L12,14.7333333 L17,12.064 L17,15.7111111 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default GraduateCapIcon;
