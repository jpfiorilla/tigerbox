import React from 'react';

const Private = ({ fill }) => {
    if (!fill) fill = '#4a4a4a';
    return(<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4878.449 -2004.298 93.712 77.555">
      {/*<defs>
        <style>
          .cls-1 {
            fill: #4a5157;
          }
        </style>
      </defs>*/}
      <path id="Union_15" data-name="Union 15" fill={fill} d="M0,77.555v-7.54H6.463V28.006H0v-7.54l18.312-3.621V9.964L47.045,0,75.4,9.964v6.792l18.312,3.71v7.54H87.249V70.015h6.463v7.54Zm77.016-7.54V28.006H16.7V70.015h7V30.43H34.469V70.015h7V30.43H52.242V70.015h7V30.43H70.015V70.015Z" transform="translate(-4878.449 -2004.298)"/>
    </svg>
  )
}

export default Private;