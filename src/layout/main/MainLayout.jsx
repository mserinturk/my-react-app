import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Menu from './Menu'

function MainLayout() {
  return (
    <div className="flex h-full">
      <div className="w-20">
        <Menu></Menu>
      </div>
      <div className="flex flex-col h-full w-full">
        <div className="h-20">
          <Header></Header>
        </div>
        <div className="h-full overflow-auto app-shadow rounded-tl-2xl">
          <Content></Content>
        </div>
      </div>
    </div>
    
  )
}

export default MainLayout