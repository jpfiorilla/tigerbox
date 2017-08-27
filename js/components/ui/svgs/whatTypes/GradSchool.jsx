import React from 'react';

const College = ({ fill }) => {
    if (!fill) fill = '#4a4a4a';
    return(<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4878.552 -2304.357 94.393 94.393">
  {/*<defs>
    <style>
      .cls-1 {
        <!--fill: none;-->
      }

      .cls-2 {
        <!--fill: #4a5157;-->
      }
    </style>
  </defs>*/}
  <g id="Group_440" data-name="Group 440" transform="translate(-5793 -2740)">
    <path id="Path_415" data-name="Path 415" fill="none" d="M0,0H94.393V94.393H0ZM39.33,19.665H55.063v7.866H39.33Zm0,0H55.063v7.866H39.33Z" transform="translate(914.448 435.643)"/>
    <path id="Path_416" data-name="Path 416" fill={fill} d="M33.464,54.13V50.2H5.972L5.933,65.929A7.839,7.839,0,0,0,13.8,73.795H68.862a7.839,7.839,0,0,0,7.866-7.866V50.2H49.2V54.13Zm39.33-35.4H57.023V10.866L49.157,3H33.425l-7.866,7.866v7.866H9.866A7.889,7.889,0,0,0,2,26.6V38.4a7.839,7.839,0,0,0,7.866,7.866h23.6V38.4H49.2v7.866h23.6A7.889,7.889,0,0,0,80.661,38.4V26.6A7.889,7.889,0,0,0,72.795,18.732Zm-23.6,0H33.464V10.866H49.2Z" transform="translate(920.314 444.442)"/>
  </g>
</svg>

    )
}

export default College;