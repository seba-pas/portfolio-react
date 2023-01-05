import React from 'react'
import CVeng from '../../assets/CV Sebastian Pastorenzi - (English).pdf'
import CVspa from '../../assets/CV Sebastian Pastorenzi - (Español).pdf'


const CTA = () => {
  return (
    <div className="cta">
        <a href={CVspa} className='btn' download='Sebastian Pastorenzi CV (Spanish)'>CV (Spanish)</a>
        <a  href={CVeng} className='btn' download='Sebastian Pastorenzi CV (English)'>CV (English)</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
