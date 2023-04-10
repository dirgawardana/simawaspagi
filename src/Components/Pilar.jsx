import React from 'react'
import "../css/Pilar.css"
import "../css/index.css"
import padi from '../Images/padi.png'
import peta from '../Images/peta.png'

function Pilar() {
  return (
    <section id="service">
      <div>
        <img src={padi} className="padi" alt="padi" />
      </div>
      <div>
        <img src={peta} className="peta" alt="peta"/>
      </div>
      <div className="wrapper">
        <h2>Pilar Ketahanan Pangan</h2>
        <div className="a">
            <a>Ketahanan Pangan adalah kondisi terpenuhinya kebutuhan masyarakat akan tiga pilar ketahanan pangan</a>
        </div>
        <div className="a2">
            <a>yaitu ketersediaan, akses, dan pemanfaatan pangan masyarakat di suatu wilayah.</a>
        </div>
          <div className="kotak">
            <a>Ketersediaan</a>
          </div>
          <div className="kalimat">
            <a>Pilar ini menopang tersedianya pangan secara fisik pada suatu daerah yang didapatkan dari produksi domestik, impor, ataupun bantuan pangan.</a>
          </div>
          <div className="kotak2">
            <a>Keterjangkauan</a>
          </div>
          <div className="kalimat2">
            <a>Pilar ini mengukur kemampuan rumah tangga dalam memperoleh kecukupan pangan baik berasal dari produksi sendiri maupun pembelian, barter, hadiah, pinjaman, serta bantuan.</a>
          </div>
          <div className="kotak3">
            <a>Pemanfaatan</a>
          </div>
          <div className="kalimat3">
            <a>Pilar ini mengukur penggunaan pangan oleh anggota keluarga pada masyarakat.</a>
          </div>
          <div className="uu">
            <a>* UU Pangan No. 18 tahun 2012</a>
          </div>
      </div>
    </section>
  )
}

export default Pilar