import React, { createContext, useState } from 'react';


export const DataContext = createContext();


export const DataProvider = ({ children }) => {
  const [dataList, setDataList] = useState([]); 

  return (
    <DataContext.Provider value={{ dataList, setDataList }}>
      {children}
    </DataContext.Provider>
  );
};
