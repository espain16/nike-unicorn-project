import React from 'react';
import { HashLink } from 'react-router-hash-link';

const WomenBtn = () => {
  const forNow = () => {
    console.log(`Hey this click works!`);
  }

  return (
    <div>
      <HashLink onClick={forNow}>Women</HashLink>
    </div>
  )
}

export default WomenBtn;