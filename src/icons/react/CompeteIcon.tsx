/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Feb 16 2022 18:06:48 GMT-0500 (Eastern Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const CompeteIcon = ({
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
			<path d="M7,3 C5.34314575,3 4,4.34314575 4,6 C4,7.65685425 5.34314575,9 7,9 C8.65685425,9 10,7.65685425 10,6 C10,4.34314575 8.65685425,3 7,3 Z M17,3 C15.3431458,3 14,4.34314575 14,6 C14,7.65685425 15.3431458,9 17,9 C18.6568542,9 20,7.65685425 20,6 C20,4.34314575 18.6568542,3 17,3 Z M7,10 C4,10 2,12 2,12 L2,21 L22,21 L22,12 C22,12 20,10 17,10 C14,10 12,11.699219 12,11.699219 C12,11.699219 10,10 7,10 Z M15,12.875 C16.468,12.875 17,14.146 17,15 L16.5,15 L16,15.003906 C15.998,14.815906 15.938,13.875 15,13.875 C14.097,13.875 14.006,14.359766 14,14.509766 C14,14.910766 14.462609,15.171734 15.224609,15.552734 C16.015609,15.947734 17,16.441 17,17.5 C17,17.952 16.641,19.125 15,19.125 C13.532,19.125 13,17.854 13,17 L14,17 C14.002,17.186 14.062,18.125 15,18.125 C15.903,18.125 15.994,17.640234 16,17.490234 C16,17.089234 15.537391,16.828266 14.775391,16.447266 C13.984391,16.052266 13,15.559 13,14.5 C13,14.048 13.359,12.875 15,12.875 Z M5.9628906,13 L7.0058594,13 L8.5,17.25 L9.9628906,13 L11.001953,13 L9.0019531,19 L8,19 L5.9628906,13 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default CompeteIcon;
