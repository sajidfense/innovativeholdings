import React from 'react'
import Link from 'next/link'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { Title } from "./common/Title";
import { showcase } from "@/assets/data/dummydata"
import Card from "./common/Card"

const ShowCase = () => {
  return (
    <>
      <section className='showcase'>
    <div className='container'>
      <div className='heading-title'>
        <Title title='Selected Cases' />
      </div>
      <div className='hero-content grid-3'>
        {showcase.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      <div className='card links'>
        <Link href='/#'>
          VIEW CASE <HiOutlineArrowRight className='link-icon' />
        </Link>
      </div>
    </div>
  </section>
  </>
  )
}

export default ShowCase