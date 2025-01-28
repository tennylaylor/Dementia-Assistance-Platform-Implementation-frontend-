import { useState } from 'react'
import {book, Globe, DollarSign, Facebook, Twitter,LinkedIn, Search, CheveronRight}
from 'lucide-react-'

fucition App(){
return(
  <div>
    {/*Header*/}
    <header className='header'>
      <div className='container header-content'>
      <div className='logo'> Dementia Care Resource <div>
    <nav className='nav'>
      <a href="#" className='nav-link'> Home    </a>
      <a href="#" className='nav-link'> About Us    </a>
      <a href="#" className='nav-link'> Resources    </a>
      <a href="#" className='nav-link'> Community     </a>
      <a href="#" className='nav-link'> Contact Us    </a>
    </nav>
    </div>
    </header>

{/*Hero Section*/}
<div className='hero'>
  <img 
  className='hero-image'
  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
  alt="Elderly care"/>
</div>