import { useState } from "react";

function Semaforo() {

  const [color, SetColor] = useState('');

  return (
    <div className="container">
      <div className="row">
        <div className="col justify-content">
          <div
            className="bg-black mx-auto"
            style={{ width: "1rem", height: "7rem" }}
          ></div>
          <div className="rounded bg-black mx-auto d-flex flex-column align-items-center" style={{ width: "7rem" }}>
            <div className="rounded-circle bg-danger mt-1" onClick={()=> SetColor('danger')} style={{ width: "5rem", height:"5rem", boxShadow: color=='danger' ? '-10px 10px 100px 20px  red': ''}}></div>
            <div className="rounded-circle bg-warning mt-1" onClick={()=> SetColor('warning')} style={{ width: "5rem", height:"5rem", boxShadow: color=='warning' ? '-10px 10px 100px 20px  yellow': '' }}></div>
            <div className="rounded-circle bg-success my-1" onClick={()=> SetColor('succes')} style={{ width: "5rem", height:"5rem", boxShadow: color=='succes' ? '-10px 10px 100px 20px  green': '' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Semaforo;
