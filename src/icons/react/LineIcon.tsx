/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Feb 16 2022 18:06:48 GMT-0500 (Eastern Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const LineIcon = ({
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
			<path d="M16.7065845,8.70762901 L8.70762901,16.7065845 C8.89504784,17.0982198 9,17.5368535 9,18 C9,19.6568542 7.65685425,21 6,21 C4.34314575,21 3,19.6568542 3,18 C3,16.3431458 4.34314575,15 6,15 C6.46314653,15 6.90178018,15.1049522 7.29341545,15.292371 L15.292371,7.29341545 C15.1049522,6.90178018 15,6.46314653 15,6 C15,4.34314575 16.3431458,3 18,3 C19.6568542,3 21,4.34314575 21,6 C21,7.65685425 19.6568542,9 18,9 C17.5368535,9 17.0982198,8.89504784 16.7065845,8.70762901 L16.7065845,8.70762901 Z M6,19.25 C6.69035594,19.25 7.25,18.6903559 7.25,18 C7.25,17.3096441 6.69035594,16.75 6,16.75 C5.30964406,16.75 4.75,17.3096441 4.75,18 C4.75,18.6903559 5.30964406,19.25 6,19.25 Z M18,7.25 C18.6903559,7.25 19.25,6.69035594 19.25,6 C19.25,5.30964406 18.6903559,4.75 18,4.75 C17.3096441,4.75 16.75,5.30964406 16.75,6 C16.75,6.69035594 17.3096441,7.25 18,7.25 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default LineIcon;
