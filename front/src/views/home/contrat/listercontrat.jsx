import React, { useEffect, useState } from 'react'
import contrat from '../../../service/contrat'

const Listcontrat = () => {
    const [data, setdata] = useState()
    const getcontrat = () => {
        contrat.getContrat().then((res) => {
            setdata(res.data.contrat)
            console.log(res.data)
        }).catch((erreur) => {
            console.log(erreur)
        })
    }
    useEffect(() => {
        getcontrat()
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
                                            <h6 className="fw-semibold mb-0">ID</h6>
                                        </th>
                                        <th className="border-bottom-0">
                                            <h6 className="fw-semibold mb-0">Référence</h6>
                                        </th>
                                        <th className="border-bottom-0">
                                            <h6 className="fw-semibold mb-0">Description</h6>
                                        </th>
                                        <th className="border-bottom-0">
                                            <h6 className="fw-semibold mb-0">Remise</h6>
                                        </th>
                                        <th className="border-bottom-0">
                                            <h6 className="fw-semibold mb-0">Colocation</h6>
                                        </th>
                                        <th className="border-bottom-0">
                                            <h6 className="fw-semibold mb-0"> </h6>
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
                                                        <h6 className="fw-semibold mb-1">{item.ref}</h6>                                                    </td>
                                                    <td className="border-bottom-0">
                                                        <p className="mb-0 fw-normal">{item.description}</p>
                                                    </td>
                                                    <td className="border-bottom-0">
                                                        <p className="mb-0 fw-normal">{item.remise}</p>
                                                    </td>
                                                    <td className="border-bottom-0">
                                                        <p className="mb-0 fw-normal">{item.colocation}</p>
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

export default Listcontrat
