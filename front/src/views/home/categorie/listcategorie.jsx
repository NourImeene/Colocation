import React, { useEffect, useState } from 'react'
import categorie from '../../../service/categorie'
import { Link, useParams } from 'react-router-dom'
import  Swal  from 'sweetalert2'

const Listcategorie = () => {
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
                categorie.deleteCategorie(id).then((res)=>{
                getcategorie()
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


    const [data, setdata] = useState()
    const getcategorie = () => {
        categorie.getCategorie().then((res) => {
            setdata(res.data.categorie)
            console.log(res.data)
        }).catch((erreur) => {
            console.log(erreur)
        })
    }
    useEffect(() => {
        getcategorie()
    }, [])
    return (
        <div classname="row">
            <div className="col-lg-8 d-flex align-items-stretch">
                <div className="card w-100">
                    <div className="card-body p-4">
                        <h5 className="card-title fw-semibold mb-4">Recent Transactions</h5>
                        <div className="table-responsive">
                            <table className="table text-nowrap mb-0 align-middle">
                                <thead className="text-dark fs-4">
                                    <tr>
                                        <th className="border-bottom-0">
                                            <h6 className="fw-semibold mb-0">Numéro</h6>
                                        </th>
                                        <th className="border-bottom-0">
                                            <h6 className="fw-semibold mb-0">Name</h6>
                                        </th>
                                        <th className="border-bottom-0">
                                            <h6 className="fw-semibold mb-0">Description</h6>
                                        </th>
                                        <th className="border-bottom-0">
                                            <h6 className="fw-semibold mb-0"> Action </h6>
                                        </th>
                                        <th className="border-bottom-0">
                                            <h6 className="fw-semibold mb-0"> </h6>
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="border-bottom-0"><h6 className="fw-semibold mb-0">{index+1}</h6></td>
                                                    <td className="border-bottom-0">
                                                        <h6 className="fw-semibold mb-1">{item.name}</h6>                                                    </td>
                                                    <td className="border-bottom-0">
                                                        <p className="mb-0 fw-normal">{item.description}</p>
                                                    </td>
                                                    <td className="border-bottom-0">
                                                    <Link to={`/updatecateg/${item._id}`}>
                                                    <button className='btn btn-primary m-2'>Update</button>
                                                    </Link>
                                                    <button onClick={()=>handledelete(item._id)} className='btn btn-danger'>Delete</button>
                                                   
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Listcategorie
