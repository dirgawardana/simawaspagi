import React from 'react'
import baris from '../Images/baris.png'
import tekssimawas from '../Images/tekssimawas.png'
import logomawaspagi from '../Images/logomawaspagi.png'
import bulatbiru from '../Images/bulatbiru.png'
import "../css/Simawas.css"
import "../css/index.css"

function About() {
  return (
    <section id="about">
        <div className="grid2">
          <div>
          <p>Sistem Informasi Pengawasan Pangan dan Gizi SIMAWASPAGI merupakan aplikasi inovasi digital dari Pusat Komando Ketahanan Pangan dan Peternakan Jawa Barat yang menyediakan data dan sistem informasi terkait parameter Ketahanan Pangan dan Gizi dari setiap kabupaten/kota di Jawa Barat secara terintegrasi dan intuitif untuk memberikan arah dan rekomendasi bagi para pembuat keputusan dalam penyusunan program, kebijakan, serta pelaksanaan intervensi di tingkat provinsi dan kota/kabupaten.</p>
          </div>
        </div>
          <div >
            <img src={logomawaspagi} className="right" alt="logomawaspagi"/>
          </div>
          <div>
            <img src={baris} className="baris" alt="baris"/>
          </div>
          <div>
            <img src={tekssimawas} className="tekssimawas" alt="tekssimawas"/>
          </div>
          <div>
            <img src={bulatbiru} className="bulat" alt="bulatbiru"/>
          </div>
    </section >
  )
}

export default About
