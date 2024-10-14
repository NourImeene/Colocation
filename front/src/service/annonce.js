import http from "./axioscontext"
const createAnnonce=(data)=>{
    return http.post('/annonce/',data)
}
const getAnnonce=()=>{
    return http.get('/annonce/')
}
const deleteAnnonce=(id)=>{
    return http.delete(`/annonce/${id}`
        )
}
const updateAnnonce=(id,data)=>{
    return http.put(`/annonce/${id}`,data)
}
const getAnnonceById=(id)=>{
    return http.get(`/annonce/${id}`)
}

export default{createAnnonce,getAnnonce,deleteAnnonce,updateAnnonce,getAnnonce}