/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Mon Dec 06 2021 14:25:44 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const FunnelIcon = ({
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
			<path d="M9,12.3333333 L3,3 L21,3 L15,12.3333333 L15,17 L9,21 L9,12.3333333 Z M11,11.7090909 L11,17.2 L13,15.9 L13,11.7090909 L17.5,5 L6.5,5 L11,11.7090909 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default FunnelIcon;
