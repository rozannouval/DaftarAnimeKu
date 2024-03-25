import React from 'react';

function FormatNumber({ number }) {
  const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return <>{formattedNumber}</>;
}

export default FormatNumber;
