import React from 'react';
import stores from './index';

export const StoresContext = React.createContext(stores);

const StoresProvider = ({children}: any) => {
  return <StoresContext.Provider value={stores}>{children}</StoresContext.Provider>;
};

/**
 * useStores
 * @return {[type]} [description]
 */
export const useStores = () => React.useContext(StoresContext);

export default StoresProvider;
