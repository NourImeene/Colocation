import http from "./axioscontext"
const createcolocation=(data)=>{
    return http.post('/colocation/',data)
}
const getColocation=()=>{
    return http.get('/colocation/')
}
const deleteColocation=(id)=>{
    return http.delete(`/colocation/${id}`
        )
}
const updateColocation=(id,data)=>{
    return http.put(`/colocation/${id}`,data)
}
const getColocationById=(id)=>{
    return http.get(`/colocation/${id}`)
}

export default{createcolocation,getColocation,deleteColocation,updateColocation,getColocation}