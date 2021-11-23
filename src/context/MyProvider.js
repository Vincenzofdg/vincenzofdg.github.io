import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [ language, setLanguage ] = useState('english');
  const [ loading, setLoading ] = useState(true);

  const contextConteiner = {
    language, setLanguage,
    loading, setLoading }
  
  return(
    <MyContext.Provider value={ contextConteiner }>
      {children}
    </MyContext.Provider>
    );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
