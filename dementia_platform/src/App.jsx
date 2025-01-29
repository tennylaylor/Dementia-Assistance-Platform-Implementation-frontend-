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
<div className="hero-overlay"></div>
<div className='container hero-content'>
  <h1 className='hero-title'>
Supporting Families and Caregivers of Dementia Patients 
  </h1>
  <p className='hero-subtitle'>
    Explore recources , connect with comnuites, and find finacial assistance.
  </p>
  <a href="#" className='button button-primary'>
    Get Started
    <CheveronRight className='icon' style={{marginleft: '0.5rem'}} />
  </a>
  </div>
  </div>

  {/*Search Section*/}
  <div className='search-section'>
    <div className='container'>
      <div className='search-container'>
        <div className='search-form'>
          <div className='search-inport-wrapper'>
            <Search className='search-icon' />
            <input 
            type='text' 
            className='search-input' 
            placeholder='Search for resources'/>
          </div>
          <button className='search-button'>Search</button>
        </div>
      </div>
    </div>
  </div>

  {/*Featured Resources Section*/}
<div className='features'>
  <div className='container'>
    <div className='features-grid'>
      <div className='feature-card'>
        <Book className='feature-icon' size={32}>
          <h3 className='feature-description'> Featured Books </h3>
          <p>
          Discover curated resources to help understand and manage Dementia.
          </p>
          <a href="#" className='feature-link'>
            Read or Purchase
          </a>
        </div>

        <div className='feature-card'>
          <Globe className='featured-icon' size={32}/>
          <h3 className='feature-title'> Organization </h3>
          <p className='feature-description'>
          Connect with leading dementia care organizations and support groups.
          </p>
          <a href="#" className='feature-link'>
            Find Support
          </a>
        </div>

        <div className='feature-card'>
          <DollarSign className='featured-icon' size={32}/>
          <h3 className='feature-title'> Financial Assistance </h3>
          <p className='feature-description'>
          Learn about available financial aid programs and resources.
          </p>
          <a href="#" className='feature-link'>
            Explore Options
          </a>
        </div>

        </div>
      </div>
    </div>
  </div>

  