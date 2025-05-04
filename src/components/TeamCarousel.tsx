'use client';

import Slider from 'react-slick';

import { TeamMemberCard } from './TeamMemberCard';

const team = [
  {
    name: 'Maria Silva',
    role: 'Sócia Fundadora',
    imageUrl: '/images/Edson.jpeg',
  },
  {
    name: 'João Andrade',
    role: 'Desenvolvedor Sênior',
    imageUrl: '/images/Edson.jpeg',
  },
  {
    name: 'Clara Souza',
    role: 'Designer UX/UI',
    imageUrl: '/images/Edson.jpeg',
  },
  // Adicione mais membros...
];

export function TeamCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id='equipe' className="py-16 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Nossa equipe</h2>
      <Slider {...settings}>
        {team.map((member, idx) => (
          <div key={idx} className="px-3">
            <TeamMemberCard {...member} />
          </div>
        ))}
      </Slider>
    </section>
  );
}
