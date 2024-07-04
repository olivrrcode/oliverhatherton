import React from 'react';

function ProjectCard({ src, link, h3, p, width }) {
  return (
    <a href={link} target='_blank'>
      <div
        style={{
          width: '100%',
          height: '12rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          objectFit: 'cover',
        }}>
        <img
          className='hover'
          style={{ width: `${width}`, objectFit: 'cover' }}
          src={src}
          alt={`${h3} logo`}
        />
      </div>

      <h3 style={{ fontSize: '26px' }}>{h3}</h3>
      <p style={{ fontSize: '18px' }}>{p}</p>
    </a>
  );
}

export default ProjectCard;
