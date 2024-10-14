import React from 'react'
import { Link } from 'react-router-dom'
const Asidebar = () => {
  return (
    <div>
        <aside className="left-sidebar">
    {/* Sidebar scroll*/}
    <div>
      <div className="brand-logo d-flex align-items-center justify-content-between">
        <Link to="./index.html" className="text-nowrap logo-img">
          <img src="../assets/images/logos/dark-logo.svg" width={180} alt />
        </Link>
        <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
          <i className="ti ti-x fs-8" />
        </div>
      </div>
      {/* Sidebar navigation*/}
      <nav className="sidebar-nav scroll-sidebar" data-simplebar>
        <ul id="sidebarnav">
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">Home</span>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="./index.html" aria-expanded="false">
              <span>
                <i className="ti ti-layout-dashboard" />
              </span>
              <span className="hide-menu">Dashboard</span>
            </Link>
          </li>
          <li className="nav-small-cap">

            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">Catégorie </span>
          </li>

          <li className="sidebar-item">

            <Link className="sidebar-link" to="/add" aria-expanded="false">
              <span>
                <i className="ti ti-article" />
              </span>
              <span className="hide-menu">Ajouter catégorie</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/liste" aria-expanded="false">
              <span>
                <i className="ti ti-alert-circle" />
              </span>
              <span className="hide-menu">Lister catégorie</span>
            </Link>
          </li>
         
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">Annonce</span>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/addann" aria-expanded="false">
              <span>
                <i className="ti ti-login" />
              </span>
              <span className="hide-menu">Ajoute Annonce</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/listann" aria-expanded="false">
              <span>
                <i className="ti ti-user-plus" />
              </span>
              <span className="hide-menu">Lister annonce</span>
            </Link>
          </li>
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">Contrat</span>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/addcon" aria-expanded="false">
              <span>
                <i className="ti ti-login" />
              </span>
              <span className="hide-menu">Ajouer Contrat</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/listcon" aria-expanded="false">
              <span>
                <i className="ti ti-user-plus" />
              </span>
              <span className="hide-menu">Lister contrat</span>
            </Link>
          </li>
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">Colocation</span>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/addco" aria-expanded="false">
              <span>
                <i className="ti ti-mood-happy" />
              </span>
              <span className="hide-menu">Ajouter Colocation</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/listeco" aria-expanded="false">
              <span>
                <i className="ti ti-aperture" />
              </span>
              <span className="hide-menu">Lister colocations</span>
            </Link>
          </li>
        </ul>
        <div className="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded">
          <div className="d-flex">
            <div className="unlimited-access-title me-3">
              <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">Upgrade to pro</h6>
              <Link to="https://adminmart.com/product/modernize-bootstrap-5-admin-template/" target="_blank" className="btn btn-primary fs-2 fw-semibold lh-sm">Buy Pro</Link>
            </div>
            <div className="unlimited-access-img">
              <img src="../assets/images/backgrounds/rocket.png" alt className="img-fluid" />
            </div>
          </div>
        </div>
      </nav>
      {/* End Sidebar navigation */}
    </div>
    {/* End Sidebar scroll*/}
  </aside>
    </div>
  )
}

export default Asidebar
