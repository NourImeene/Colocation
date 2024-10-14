import React, { useEffect, useState } from 'react'
import contrat from '../../../service/contrat'
import colocation from '../../../service/colocation'

const Addcontrat = () => {
  const[col,setcol]=useState([])

    const[data,setdata]=useState({})
    const changehandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})//chnte5ou les données mta3k bch taaml aleha l modification . amalna 3 points bch à chaque fois tsir modification
    }
    const getcolocation =()=>{
      colocation.getColocation().then((res)=>{
        setcol(res.data.colocation)
        console.log(res.data)
      }).catch((erreur)=>{
        console.log(erreur) 
      })
    }
    useEffect(()=>{
      getcolocation()

    },[])
    const onsubmithandler=(e)=>{
        e.preventDefault()
        const contratdata={...data,ref:Number(data.ref),description:String(data.description),remise:Number(data.remise)}
        contrat.createcontrat(contratdata).then((res)=>{
            console.log(res.data)

        }
       ).catch((erreur)=>{
        console.log(erreur)
       }
    )
    }


  return (
   <div className="container-fluid">
  <div className="container-fluid">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title fw-semibold mb-4">Contrat</h5>
        <div className="card">
          <div className="card-body">
            <form onSubmit={onsubmithandler}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Référence</label>
                <input type="number" name="ref" className="form-control" id="ref" aria-describedby="emailHelp" onChange={changehandler} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" name="description" className="form-control" id="description" onChange={changehandler}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Remise</label>
                <input type="number" name="remise" className="form-control" id="remise" aria-describedby="emailHelp" onChange={changehandler} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
              <select name="colocation" id="colocation"onChange={changehandler}value={data?.colocation}  className="form-select" aria-label="Default select example">

              <option selected disabled>lister colocation</option>
              {
                  col?.map((item)=>{
                      return <option value={item._id}>{item.annonce}</option>})

              }
              </select>
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

export default Addcontrat
