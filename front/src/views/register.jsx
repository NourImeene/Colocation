import React, { useState } from 'react'
import auth from '../service/auth'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate=useNavigate()
    const[data,setdata]=useState({})
    const changehandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    const onsubmithandler=(e)=>{

        e.preventDefault()
        const userdata={...data,name:String(data.name),email:String(data.email),password:String(data.password),phone:Number(data.phone)}
        auth.createadmin(data).then((res)=>{
            console.log(res.data)
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
                <a href="" className="text-nowrap logo-img text-center d-block py-3 w-100">
                  <img src="../assets/images/logos/dark-logo.svg" width={180} alt />
                </a>
                <p className="text-center">Your Social Campaigns</p>
                <form onSubmit={onsubmithandler}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputtext1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" name='name' onChange={changehandler}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={changehandler}/>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={changehandler} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"  name='phone' onChange={changehandler}/>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Ville</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name='ville' onChange={changehandler} />
                  </div>
                  <button  className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2" >Sign Up</button>
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="fs-4 mb-0 fw-bold">Already have an Account?</p>
                    <a className="text-primary fw-bold ms-2" href="/login">Sign In</a>
                  </div>
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

export default Register
