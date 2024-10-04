import React from 'react'
import Header from './Header'
export default function CategoryPage() {
  return (
    <div className="container-fluid ">
      <div class="d-flex justify-content-end"  >
      <button type="button" className="btn  " onClick={()=>("/omnipilote")} style={{
        backgroundColor:"#70330a",
        color:"white",
        margin:"15px",
        

      }}>Retour</button>
      </div>

    <div className="d-flex justify-content-between">
      <Header title={"Rechercher"} />
      <Header title={"Enregistrer"} />
    </div>

    <table className="table table-bordered bg-primary">
      <thead className="bg-danger">
        <tr>
          <th
            className="bg-dark fs-8 fw-semibold"
            style={{ color: "#828894" }}
          >
            Catégories produits
          </th>
          <th
            className="bg-dark fs-8 fw-semibold"
            style={{ color: "#828894" }}
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Copieurs, imprimantes & multifonctions</td>
          <td>
            <button className="btn btn-success btn-sm me-2">
              <i class="bi bi-pencil-square"></i>
            </button>
            <button className="btn btn-danger btn-sm ">
              <i class="bi bi-x-lg"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td>Smartphone, Tablette, PC, Laptop, PDA</td>
          <td>
            <button className="btn btn-success btn-sm me-2 ">
              <i class="bi bi-pencil-square"></i>
            </button>
            <button className="btn btn-danger btn-sm">
              <i class="bi bi-x-lg"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}
