import React from 'react'
import Asidebar from '../../components/asidebar'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <>
<div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
  {/* Sidebar Start */}
    <Asidebar/>
  {/*  Sidebar End */}
  {/*  Main wrapper */}
  <div className="body-wrapper">
    {/*  Header Start */}
    <Header/>
    <div className="container-fluid">
      {/*  Row 1 */}
        <Outlet/>
      <Footer/>
    </div>
  </div>
</div>

    </>
  )
}

export default Home
