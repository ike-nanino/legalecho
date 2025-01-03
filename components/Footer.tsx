import Link from 'next/link'


export default function Footer() {
    return (
      <footer className="bg-black text-gray-200 py-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
          {/* Address Section */}
          <div>
            <h3 className="text-gold font-semibold uppercase mb-4">Address</h3>
            <p>EISEN & CO LEGAL PRACTITIONERS</p>
            <p>3RD DADE LINK, CANTONMENTS ACCRA</p>
            <p className="mt-4">INFO@LEGALECHO.ORG</p>
            <a href="tel:+233504375771">+233 504 375 771</a>
          </div>
  
          {/* Services Section */}
          <div>
            <h3 className="text-gold font-semibold uppercase mb-4">Services</h3>
            <ul>
              <li>Company Secretarial Services</li>
              <li>Registration of Trademark, etc.</li>
              <li>Investment Consultants</li>
              <li>Arbitration and Mediation</li>
              <li>Property Consultants</li>
              <li>Notary Public</li>
            </ul>
          </div>
  
          {/* Working Hours Section */}
          <div>
            <h3 className="text-gold font-semibold uppercase mb-4">Working Hours</h3>
            <p>Monday - Friday 08.00AM - 09.00PM</p>
            <p>Saturdays and Public Holidays - On Appointment</p>
            <div className="mt-4">
              <Link
              href='/contact'
              >
              <button className="px-4 py-2 bg-gold text-white rounded hover:bg-gold/70 transition">
                Contact Us
              </button>
              </Link>
              
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p>Copyright © Legal Echo</p>
          <p className="text-gray-400 text-sm mt-2">
            Developed and built by Nanino
          </p>
        </div>
      </footer>
    );
  }
  