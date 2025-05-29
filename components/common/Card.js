import Link from 'next/link';
import React from 'react';
import { TitleSm } from './Title';
import { HiOutlineArrowRight } from 'react-icons/hi';

const Card = ({ data, caption, show, path }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={data.cover} alt={data.title} />
      </div>
      <div className="card-details">
        <Link href={`${path}/${data.id}`} className="title-link">
          <TitleSm title={data.title} />
        </Link>

        {caption && (
          <Link href={`${path}/${data.id}`} className="title-link">
            {caption} <HiOutlineArrowRight className="link-icon" />
          </Link>
        )}

        <div className="flex">
          <span>{data.catgeory}</span>
          {data.date && <span> / {data.date}</span>}
        </div>

        {show && (
          <ul>
            {data.desc.map((text, i) => (
              <li key={i}>- {text.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
