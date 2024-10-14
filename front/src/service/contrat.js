import http from "./axioscontext"
const createcontrat=(data)=>{
    return http.post('/contrat/',data)
}
const getContrat=()=>{
    return http.get('/contrat/')
}
const deleteContrat=(id)=>{
    return http.delete(`/contrat/${id}`
        )
}
const updateContrat=(id,data)=>{
    return http.put(`/contrat/${id}`,data)
}
const getContratById=(id)=>{
    return http.get(`/contrat/${id}`)
}

export default{createcontrat,getContrat,deleteContrat,updateContrat,getContrat}