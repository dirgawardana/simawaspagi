import React from 'react'
import "../css/Home.css"
import logo79 from '../Images/logo79.png'

function Home() {
  return (
      <section id="home">
      <div className="wrapper">
         <div className="left">
            <div className='logo'>
              <a href="/">
                 <img src={logo79} alt="logo79"/></a>
            </div>
            <h1>Temukan data Ketahanan Pangan di Jawa Barat dengan cepat, tepat, dan akurat</h1>
            <p>Mulai dari stok, harga, hingga distribusi semuanya ada disini!
             Dari data beras, bawang merah, hingga daging sapi bisa kamu temukan hanya dengan satu kali klik!</p>
            <div className="btn">
              <a>Cari Dataset dan Informasi</a>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Home
