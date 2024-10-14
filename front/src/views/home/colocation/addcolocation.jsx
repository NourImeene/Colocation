import React, { useEffect, useState } from 'react'
import colocation from '../../../service/colocation'
import annonce from '../../../service/annonce'

const Addcolocation = () => {
  const[ann,setann]=useState([])

    const[data,setdata]=useState({})
    const changehandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})//chnte5ou les données mta3k bch taaml aleha l modification . amalna 3 points bch à chaque fois tsir modification
    }
    const getannonce =()=>{
      annonce.getAnnonce().then((res)=>{
        setann(res.data.annonce)
        console.log(res.data)
      }).catch((erreur)=>{
        console.log(erreur)
      })
    }
    useEffect(()=>{
      getannonce()

    },[])
    const onsubmithandler=(e)=>{
        e.preventDefault()
        const colocationdata={...data,avance:Number(data.avance)}
        colocation.createcolocation(colocationdata).then((res)=>{
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
        <h5 className="card-title fw-semibold mb-4">Colocation</h5>
        <div className="card">
          <div className="card-body">
            <form onSubmit={onsubmithandler}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Type du payement</label>
                <input type="text" name="typePaiement" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={changehandler} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Avance</label>
                <input type="number" name="avance" className="form-control" id="description" onChange={changehandler}/>
              </div>
              <div className="mb-3">
              <select name="annonce" id="annonce"onChange={changehandler}value={data?.annonce}  className="form-select" aria-label="Default select example">

              <option selected disabled>lister annonce</option>
              {
                  ann?.map((item)=>{
                      return <option value={item._id}>{item.title}</option>})

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

export default Addcolocation
