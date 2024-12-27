"use client"; 
import React from 'react'
import { store } from '../store/store';
import { Provider } from 'react-redux';
const AppProviders = ({children} : {children: React.ReactNode}) => {
  return (
     <Provider store={store}>{children}</Provider>
  )
}

export default AppProviders
