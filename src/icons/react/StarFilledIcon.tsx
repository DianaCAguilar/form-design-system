/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Nov 11 2021 14:32:55 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const StarFilledIcon = ({
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
			<polygon points="12 1.5 8.5878906 8.4121094 0.9609375 9.5214844 6.4804688 14.902344 5.1777344 22.5 12 18.912109 18.822266 22.5 17.519531 14.902344 23.039062 9.5214844 15.412109 8.4121094"/>
		</g>
	</g>
</svg>
  </div>
);

export default StarFilledIcon;

