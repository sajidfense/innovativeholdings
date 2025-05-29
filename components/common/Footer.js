import React from 'react'
import { TitleLogo } from './Title'
import Link from 'next/link'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title="Holdings" caption="Innovative" className='logobg' />
              <br />
              <span>Questions? Reach us</span>
              <span>Monday - Friday from 9 am to 6 pm</span>
              <br />
              <br />
              <h3>+61 38 753 555</h3>
              <br />
              <button className='button-primary'>Request For Quote</button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li><Link href="/">About Agency</Link></li>
              <li><Link href="/">Our Team</Link></li>
              <li><Link href="/">Showcase</Link></li>
              <li><Link href="/">Blog</Link></li>
              <li><Link href="/">Demo System</Link></li>
              <li><Link href="/">Contact</Link></li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li><Link href="/">About Agency</Link></li>
              <li><Link href="/">Our Team</Link></li>
              <li><Link href="/">Showcase</Link></li>
              <li><Link href="/">Blog</Link></li>
              <li><Link href="/">Demo System</Link></li>
              <li><Link href="/">Contact</Link></li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li><Link href="/"><BsLinkedin size = {25} /></Link></li>
                <li><Link href="/"><BsFacebook size = {25} /></Link></li>
                <li><Link href="/"><BsInstagram size = {25} /></Link></li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>2025 SNJPROJECTS. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>INNOVATIVE HOLDINGS</span>
              <span>&nbsp; |&nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer