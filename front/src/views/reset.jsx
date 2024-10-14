import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Reset = () => {
    const navigate=useNavigate()
    const [password,setpassword]=useState()
    const [cpassword,setcpassword]=useState()
    const {token}=useParams()
    const onsubmithandler=(e)=>{
        e.preventDefault()
        if(password!== cpassword){
            alert("password not match")
            return
        }
        axios.post(`http://127.0.0.1:3000/auth/${token}`,{password}).then((res)=>{
            console.log(res)
            navigate('/login')
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
                  <label htmlFor="exampleInputEmail1" className="form-label">New Password</label>
                  <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='password' onChange={(e)=>setpassword(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='password' onChange={(e)=>setcpassword(e.target.value)} />
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
                      Go to Login
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

export default Reset
