import React from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';

import GoogleAuth from './GoogleAuth';

export const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        Streamy
      </Link>
      <div className='right menu'>
        <Link to='/' className='item'>
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

//const mapStateToProps = (state) => ({});

//const mapDispatchToProps = {};

export default Header;
