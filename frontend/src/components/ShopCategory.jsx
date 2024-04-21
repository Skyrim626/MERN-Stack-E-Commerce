import React from 'react'
import { Link } from 'react-router-dom'
import "../css/shopCategory.css";

/** It needs a Category Section */
/** Content Position */
export default function ShopCategory({ imageSrc, headerTitle, categoryName, toPath, colorType, textAlign }) {
  return (
      <div className="col-6">
        <div className="category">
          <img src={imageSrc} alt=""/>
          <div className={`category__content ${textAlign}`} style={{ "color": `${colorType}`}}>
            <p className='h3 fw-bolder'>{headerTitle}</p>
            <p className='fw-bold'>{categoryName}</p>
            <Link to={toPath}>
              <button className='btn' style={{ "color": `${colorType}`, "border": `1px solid ${colorType}`, "--hoverBackground": colorType}}>Go Here</button>
            </Link>
          </div>
        </div>
      </div>

  )
}

