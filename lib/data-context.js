import React from 'react'

const DataContext = React.createContext({
  setData: null,
  setToggledSidebarItem: null,
  toggledSidebarItem: null
})

export default DataContext
