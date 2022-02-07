import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [ language, setLanguage ] = useState(true); // true = english || false = portgueses
  const [ loading, setLoading ] = useState(true);
  const [ toggle, setToggle ] = useState(false);
  // Filters:
  const [ framework, setFramework ] = useState("");
  const [ type, setType ] = useState("");
  const [ institution, setInstitution ] = useState("");

  const contextConteiner = {
    language, setLanguage,
    loading, setLoading,
    toggle, setToggle,
    type, setType,
    framework, setFramework,
    institution, setInstitution
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
