import React from "react";

export default function Header({ title }) {
  return (
    <>
      <div className="row g-2">
        <div className="col-auto  p-3">
          <input
            type="password"
            className="form-control border border-dark text-black text-truncate border border-dark"
            id="inputPassword2"
            placeholder="Categorie"
          />
        </div>
        <div className="col-auto  p-3 ">
          <button
            type="submit"
            className="btn btn-primary mb-3 "
            style={{
              backgroundColor: "#008082",
            }}
          >
            {title}
          </button>
          <button
            type="submit"
            className="btn btn-primary mb-3 ms-2 "
            style={{
              backgroundColor: "#008082",
            }}
          >
            Annuler
          </button>
        </div>
      </div>
    </>
  );
}
