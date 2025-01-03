import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <section className="relative bg-cover bg-center h-[600px] md:h-[850px] lg:h-screen" style={{ backgroundImage: `url('/assets/images/indexhero.jpg')` }}>
        <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 left-6 md:left-[80px] right-0  lg:right-[686px] top-60 bottom-[120px] flex items-center">
        <div className="text-white text-start">
          <h1 className='text-sm font-nespressoMed text-gold mb-4'>BEST LAWYERS</h1>
          <h1 className="text-xl lg:text-4xl font-normal font-trajanPro mb-4">Experienced Attorneys With <br /> Over 15 Years of Practice.</h1>
          <p className="text-xs mb-8 font-nespresso">We have experience in a number of important professional areas, including litigation, <br /> arbitration, corporate, commercial, real estate, property and transfer, family law, debt <br /> collection, banking, and insurance.</p>
          <Link
          href='/about'
          >
          <button className="bg-gold text-white text-xs py-3 px-6 rounded-md hover:bg-opacity-90 font-trajanPro">
            Learn More
          </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
