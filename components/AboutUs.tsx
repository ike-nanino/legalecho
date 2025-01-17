import Image from 'next/image'
import React from 'react'

function AboutUs() {
  return (
    <section className='bg-gray-300 flex flex-col justify-center items-center py-28'>

        <div className='px-4 text-center w-full md:max-w-[500px] relative'>
          <div className='absolute inset-0 left-8 bottom-24 -top-5 right-[230px] lg:-top-5 lg:right-[320px] lg:bottom-10 md:-left-8 '>
          <Image 
            src='/assets/images/textwrap.png'
            alt='textwrap'
            width={160}
            height={160}
            className='object-cover animate-spin-slow'
            />

          </div>
          <div>
            <h1 className='mb-8 font-semibold text-sm text-gold'>About US</h1>
          </div>

          <h1 className='mb-8 font-trajanPro text-xl md:text-3xl font-medium text-gray-400'>
            WELCOME TO LEGAL ECHO
          </h1>

          <p>
          We Are Devoted to providing solutions and are driven by a genuine desire for excellence. We have experience in a number of important professional areas, including litigation, arbitration, corporate, commercial, real estate, property and conveyance, family law, debt recovery, banking, and insurance
          </p>
            
        </div>
      
    </section>
  )
}

export default AboutUs
