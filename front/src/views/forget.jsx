import React, { useState } from 'react'
import auth from '../service/auth'

const Forget = () => {
    const[data,setdata]=useState({email:''})
    const changehandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    } 
    const onsubmithandler=(e)=>{
        e.preventDefault()
        auth.forget(data).then((res)=>{
            console.log(res)
        }).catch((erreur)=>{
            console.log(erreur)
        })
    }


  return (
    <div>
      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6 col-xxl-3">
            <div className="card mb-0">
              <div className="card-body">
                <a href="./index.html" className="text-nowrap logo-img text-center d-block py-3 w-100">
                  <img src="../assets/images/logos/dark-logo.svg" width={180} alt />
                </a>
                <p className="text-center">Your Social Campaigns</p>
                <form onSubmit={onsubmithandler}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={changehandler} />
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check">
                      <input className="form-check-input primary" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                      <label className="form-check-label text-dark" htmlFor="flexCheckChecked">
                        Remeber this Device
                      </label>
                      
                    </div>
                    <a className="text-primary fw-bold ms-2" href="/register">Create an account</a>
                    
                  </div>
                  <button type="submit"
                        className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
                      >
                        Send Verification
                      </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Forget
