import React from 'react'
import "../css/Alamat.css"
import rumah from "../Images/rumah.png"
import logomawaspagi from "../Images/logomawaspagi.png"
import teksmawas from "../Images/teksmawas.png"
import dkpp from "../Images/dkpp.png"
import jabar from "../Images/jabar.png"
import silinda from "../Images/silinda.png"
import alamat from "../Images/alamat.png"
import telepon from "../Images/telepon.png"
import email from "../Images/email.png"

function Alamat() {
  return (
    <section id="getInTouch">
      <div className="wrapper">
        <div>
          <img src={rumah} className="rumah" alt="rumah"/>
        </div>
        <div>
          <img src={logomawaspagi} className="mawaspagi" alt="mawaspagi"/>
        </div>
        <div>
          <img src={teksmawas} className="teksmawas" alt="teksmawas"/>
        </div>
        <div>
          <img src={dkpp} className="dkpp" alt="dkpp"/>
        </div>
        <div>
          <img src={jabar} className="jabar" alt="jabar"/>
        </div>
        <div>
          <img src={silinda} className="silinda" alt="silinda"/>
        </div>
        <div>
          <img src={alamat} className="alamat" alt="alamat"/>
        </div>
        <div>
          <img src={telepon} className="telepon" alt="telepon"/>
        </div>
        <div>
          <img src={email} className="email" alt="email"/>
        </div>
        <div className="si">
          <a>Sistem Informasi</a>
        </div>
        <div className="kewaspadaan">
          <a>Kewaspadaan Pangan dan Gizi</a>
        </div>
        <div className="teksalamat">
          <a>Alamat</a>
        </div>
        <div className="jalan">
          <a>Jl. Kawaluyaan Indah Raya No.6 Lt.5 Soekarno-Hatta</a>
        </div>
        <div className="tekstelepon">
          <a>Telepon</a>
        </div>
        <div className="notelepon">
          <a>022-87327711</a>
        </div>
        <div className="teksfaks">
          <a>Faks</a>
        </div>
        <div className="nofaks">
          <a>022-87354100</a>
        </div>
        <div className="teksemail">
          <a>Email</a>
        </div>
        <div className="namaemail">
          <a>dkpp@jabarprov.go.id</a>
        </div>
      </div>
    </section>
  )
}

export default Alamat
