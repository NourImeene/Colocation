import React, { useEffect, useState } from 'react'
import annonce from '../../../service/annonce'
import Swal from 'sweetalert2'
import { Link, useParams } from 'react-router-dom'
const Listerannonce = () => {
  const{id}=useParams()
  const handledelete=(id)=>{
      const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
          },
          buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
              annonce.deleteAnnonce(id).then((res)=>{
                getAnnonce()
              console.log(res.data)
      })
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your imaginary file is safe :)",
              icon: "error"
            });
          }
        });
      
      
  }




    const [data, setdata] = useState([])
    const getAnnonce=()=>{
        annonce.getAnnonce().then((res)=>{
            setdata(res.data.annonce)
            console.log(res.data)
        }
        ).catch((erreur)=>{
            console.log(erreur)
        })

    }
    useEffect(() => {
        getAnnonce()
    }, [])
  return (
<div>
  <div className="container-fluid">
    <div className="container-fluid">
      <div className="card">
        <div className="card-body">
          <div className="row">
            {data?.map((item)=>{
                return(
                    <>
                    <div className="col-md-4">
                    <h5 className="card-title fw-semibold mb-4">référence : {item.ref} </h5>
                    <div className="card">
                    {item.image && item.image.length > 0 && (
                                  <img src={`http://localhost:3000/upload/${item.image[0]}`} className="card-img-top" alt={item.image} />
                                )}
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">price/Month{item.price}DT</p>
                        <Link to ={`/updateAnn/${item._id}`}>
                        <button className="btn btn-primary m-2" >Update</button>
                        </Link>
                        <button className="btn btn-danger m-2" onClick={()=>handledelete(item._id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                 
                  </>
                )
            })}

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Listerannonce
