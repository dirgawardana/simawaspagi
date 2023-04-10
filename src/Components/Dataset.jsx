import React from 'react'
import "../css/Dataset.css"
import "../css/index.css"
import data from "../Images/data.png"

function Dataset() {
  return (
      <section id="dataset">
      <div>
        <img src={data} className="data" alt="data"/>
      </div>
          <div className="word">
            <h3>Apa itu Dataset?</h3>
          </div>
          <div className='paragraf'>
            <p>Dapatkan berbagai koleksi data tentang ketahanan pangan yang bisa kamu download dan olah kembali lewat Dataset. Koleksi dataset ini berasal dari berbagai Organisasi Perangkat Daerah Jawa Barat.</p>
          </div>
          <div className="word2">
            <h3>Cek Data Lengkapnya Disini</h3>
          </div>
    </section>
  )
}

export default Dataset
