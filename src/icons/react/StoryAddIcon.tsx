/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Feb 16 2022 18:06:48 GMT-0500 (Eastern Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const StoryAddIcon = ({
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
			<path d="M23,2 L23,4 L22,4 L22,14 C22,15.0547727 21.1845145,15.9182025 20.1493158,15.9945168 L20,16 L13,16 L13.0009007,18.1710242 C14.1656226,18.5831148 15,19.6941178 15,21 C15,22.6568542 13.6568542,24 12,24 C10.3431458,24 9,22.6568542 9,21 C9,19.6937479 9.8348501,18.5824856 11.0000889,18.1706743 L11,16 L4,16 C2.94522727,16 2.08179752,15.1845145 2.00548319,14.1493158 L2,14 L2,4 L1,4 L1,2 L23,2 Z M12,20 C11.4477153,20 11,20.4477153 11,21 C11,21.5522847 11.4477153,22 12,22 C12.5522847,22 13,21.5522847 13,21 C13,20.4477153 12.5522847,20 12,20 Z M20,4 L4,4 L4,13.5454545 C4,13.7963636 4.224,14 4.5,14 L4.5,14 L19.5,14 C19.776,14 20,13.7963636 20,13.5454545 L20,13.5454545 L20,4 Z M11,6 L11,8 L9,8 L9,10 L11,10 L11,12 L13,12 L13,10 L15,10 L15,8 L13,8 L13,6 L11,6 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default StoryAddIcon;

