import React, { useState } from 'react'
import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

function New({inputs, title}) {

  const [file, setFile] = useState("")

  return (
    <div className='new'>
      <Sidebar />

      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://almparts.co.za/wp-content/uploads/2021/12/no-image-available-icon.jpg"} alt="" />
          </div>
          <div className="right">
            <form action="">

              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className='icon'/>
                </label>
                <input onChange={e=>setFile(e.target.files[0])} type="file" id='file' style={{display:"none"}}/>
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label htmlFor="">{input.lable}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>send</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New