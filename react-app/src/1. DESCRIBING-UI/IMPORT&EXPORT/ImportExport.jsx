import React from 'react'
import { Profile } from '../COMPONENT/Component.jsx';
import Gallery from '../COMPONENT/Component.jsx';

export default function ImportExport() {
  return (
    <div style={{
                  display : 'flex',
                  gap : '20px',
                  textAlign : 'center'
    }}>
      <div style={{border : '10px solid crimson'}}>
        <Profile/>
        <h1>Named Export</h1>
      </div>

      <div style={{border : '10px solid aqua'}}>
        <Gallery/>
        <h1>Default Export</h1>
      </div>
    </div>
    
  )
}
