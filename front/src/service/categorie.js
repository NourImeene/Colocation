import http from "./axioscontext"
const createcategorie=(data)=>{
    return http.post('/categorie/',data)
}
const getCategorie=()=>{
    return http.get('/categorie/')
}
const deleteCategorie=(id)=>{
    return http.delete(`/categorie/${id}`
        )
}
const updateCategorie=(id,data)=>{
    return http.put(`/categorie/${id}`,data)
}
const getCategorieById=(id)=>{
    return http.get(`/categorie/${id}`)
}

export default{createcategorie,getCategorie,deleteCategorie,updateCategorie,getCategorie}