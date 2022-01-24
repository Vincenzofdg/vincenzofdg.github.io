import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [ language, setLanguage ] = useState(true); // true = english || false = portgueses
  const [ loading, setLoading ] = useState(true);
  const [ toggle, setToggle ] = useState(false);

  const contextConteiner = {
    language, setLanguage,
    loading, setLoading,
    toggle, setToggle,
  };
  
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
