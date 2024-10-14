import React, { useState } from 'react'
import categorie from '../../../service/categorie'
import { useNavigate, useParams } from 'react-router-dom'
const Updatecategorie = () => {
    const{id}=useParams()
    const navigate=useNavigate()
    const[data,setdata]=useState({})
    const changehandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})//chnte5ou les données mta3k bch taaml aleha l modification . amalna 3 points bch à chaque fois tsir modification
    }
    const onsubmithandler=(e)=>{
        e.preventDefault()
        categorie.updateCategorie(id,data).then((res)=>{
            console.log(res)
            navigate('/liste')
        }
       ).catch((erreur)=>{
        console.log(erreur)
       }
    )
    
    //const [gal,setgal]=useState([])
    //const [categ,setcateg]=useState([])
   /* const handlerimage=(e)=>{
        setgal(e.target.files)
    }*/
    }

  return (
   <div className="container-fluid">
  <div className="container-fluid">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title fw-semibold mb-4">Categorie</h5>
        <div className="card">
          <div className="card-body">
            <form onSubmit={onsubmithandler}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={changehandler} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" name="description" className="form-control" id="description" onChange={changehandler}/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Updatecategorie
