import React,{useEffect,useState} from 'react'
import annonce from '../../../service/annonce'
import categorie from '../../../service/categorie'
import Swal from 'sweetalert2'
const Addannonce = () => {
    const[data,setdata]=useState({})
    const changehandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})//chnte5ou les données mta3k bch taaml aleha l modification . amalna 3 points bch à chaque fois tsir modification
        
    }
    const [gal,setgal]=useState([])
    const [categ,setcateg]=useState([])
    const handlerimage=(e)=>{
        setgal(e.target.files)
    }
    const getcategorie =()=>{
        categorie.getCategorie().then((res)=>{
            setcateg(res.data.categorie)
            console.log(res.data)
        }).catch((error)=>{
            console.log(error)}
        )
    }
    useEffect(() => {
        getcategorie()
        }, [])//bch données mykounouch kn fl console w yo5rjoulk hatta fl interface
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
            const formdata=new FormData()
        formdata.append("ref",data.ref)
        formdata.append("title",data.title)
        formdata.append("description",data.description)
        for (let i=0;i<gal.length;i++){
            formdata.append("files",gal[i])
        }
        formdata.append("price",data.price)
        formdata.append("categorie",data.categorie)
        annonce.createAnnonce(formdata).then((res)=>{
            console.log(res)
        })
            Swal.fire("Saved!", "", "success");

          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });

    }
    
  return (
    <div>
         <div className="container-fluid">
  <div className="container-fluid">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title fw-semibold mb-4">Annonce</h5>
        <div className="card">
          <div className="card-body">
            <form onSubmit={onsubmithandler}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">ref</label>
                <input type="number" name="ref" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={changehandler} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">title</label>
                <input type="text" name="title" className="form-control" id="title" onChange={changehandler}/>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">description</label>
                <input type="text" name="description" className="form-control" id="description" onChange={changehandler}/>
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">image</label>
                <input type="file" name="files" className="form-control" id="image" onChange={handlerimage}/>
              </div>
              
              <div className="mb-3">
                <label htmlFor="price" className="form-label">price</label>
                <input type="text" name="price" className="form-control" id="price" onChange={changehandler}/>
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">categorie</label>
                <select name="categorie" id="categorie"onChange={changehandler}value={data?.categorie}  className="form-select" aria-label="Default select example">

                <option selected disabled>lister categories</option>
                {
                    categ?.map((item)=>{
                        return <option value={item._id}>{item.name}</option>})

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
    </div>
  )
}

export default Addannonce
