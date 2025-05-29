import React from 'react';
import { Title } from './common/Title';
import Card from './common/Card';
import { expertise } from '@/assets/data/dummydata';

const Expertise = () => {
  return (
    <section className="expertise">
      <div className="container">
        <div className="heading-title">
          <Title title="The last digital agency you'll ever need" />
          <p>
            Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellus ut magna porttitor scelerisque.
          </p>
        </div>
        <div className="hero-content grid-4">
          {expertise.map((item, i) => (
            <div className="box" key={i}>
              <Card data={item} caption="learn more" show />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
