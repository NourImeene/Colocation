import React, { useState } from 'react'
import categorie from '../../../service/categorie'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
const Addcategorie = () => {
    const[data,setdata]=useState({})
    const changehandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})//chnte5ou les données mta3k bch taaml aleha l modification . amalna 3 points bch à chaque fois tsir modification
    }
    const navigate=useNavigate()
    const onsubmithandler=(e)=>{
        e.preventDefault()
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            categorie.createcategorie(data).then((res)=>{
              console.log(res)
          }
         )
            Swal.fire("Saved!", "", "success");
            navigate('/liste')
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
    
    
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

export default Addcategorie
