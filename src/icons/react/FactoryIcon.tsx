/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Feb 16 2022 18:06:48 GMT-0500 (Eastern Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const FactoryIcon = ({
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
			<path d="M15,3 L15,7 L15,9 L15,11 L13,11 L12,8 L8,11 L7,8 L3,11 L3,22 L21,22 L21,3 L15,3 Z M17,5 L19,5 L19,7 L17,7 L17,5 Z M17,9 L19,9 L19,20 L17,20 L17,19 L15,19 L15,20 L13,20 L13,19 L11,19 L11,20 L9,20 L9,19 L7,19 L7,20 L5,20 L5,12 L5.9804688,11.265625 L6.1035156,11.632812 L6.9804688,14.265625 L9.1992188,12.599609 L10.980469,11.265625 L11.103516,11.632812 L11.558594,13 L13,13 L15,13 L17,13 L17,11 L17,9 Z M7,15 L7,17 L9,17 L9,15 L7,15 Z M11,15 L11,17 L13,17 L13,15 L11,15 Z M15,15 L15,17 L17,17 L17,15 L15,15 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default FactoryIcon;

