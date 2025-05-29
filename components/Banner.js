import React from 'react'
import { Title, TitleLogo } from './common/Title'

const banner = () => {
  return (
    <div>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="We're looking forward to start a new project" />
            <TitleLogo title="Let's take your business to the next leve!l" />
          </div>
          <div>
            <button className="button-primary">Request a call back</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default banner