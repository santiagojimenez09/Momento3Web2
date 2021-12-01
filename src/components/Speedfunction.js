import React, { useState } from "react";

export default function Speedfunction(prosp){
    // estados
    const[dataform, setData]=useState({
        distance:'',
        time:''
    
    })
    // Metodos
    const handleInputChange = (event) => {
        console.log(event.target.value)
        setData({
            ...dataform,
            [event.target.name]:event.target.value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        
    }
    return(
        <div className="container">
            <h1>Hallar velocidad</h1>
            <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-4">
              <label><b>Ingresar distancia recorrida</b></label>
              <input
                type="number"
                className="form-control"
                name="distance"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <label><b>Ingresar el tiempo del recorrido</b></label>
              <input
                type="number"
                className="form-control"
                name="time"
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div className="row">
            <div className="col-4">
              <label><b>Velocidad</b></label>
              <input
                type="number"
                className="form-control"
                readOnly
                value={dataform.distance/dataform.time}
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-4">
              <button className="btn btn-success">Calcular</button>
            </div>
          </div>
        </form>
        </div>
    );

}