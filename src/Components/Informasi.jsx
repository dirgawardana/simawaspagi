import React from 'react'
import "../css/Informasi.css"
import diagram from "../Images/diagram.png"

function Pricing() {
  return (
    <section id="pricing">
      <div>
        <img src={diagram} className="diagram" alt="diagram"/>
      </div>
      <div className="kata">
        <a>Cek informasi pangan ter up to date lewat dashboard </a>
      </div>
      <div className="kata2">
        <a>Dapatkan informasi ketahanan pangan yang berasal dari analisis para ahli ketahanan pangan. </a>
      </div>
      <div className="kata3">
        <a>Cek Informasi Via Dashboard Disini</a>
      </div>
    </section>
  )
}

export default Pricing
