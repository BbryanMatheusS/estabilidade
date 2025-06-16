'use client';

import { useState } from 'react';
import { VideoModal } from '@/components/VideoModal';
import { VideoCard } from '@/components/VideoCard';

const videos = [
    {
        id: 'oEoCeB0M2iA',
        title: 'Marshmello - Sozinho (Vídeo Oficial)',
        description: 'Descrição breve do vídeo 1.'
      },
      {
        id: 'm7Bc3pLyij0',
        title: 'Marshmello ft. Bastille - Happier (Clipe Musical Oficial)',
        description: 'Descrição breve do vídeo 2.'
      },
      {
        id: 'CY8E6N5Nzec',
        title: 'Marshmello & Anne-Marie - FRIENDS *HINO OFICIAL DA FRIENDZONE*',
        description: 'Descrição breve do vídeo 3.'
      },
      {
        id: '2vMH8lITTCE',
        title: 'Marshmello - Verão (Video Musical Oficial) com Lele Pons',
        description: 'Descrição breve do vídeo 4.'
      },
      {
        id: '1G4isv_Fylg',
        title: 'Coldplay - Paradise (Official Video)',
        description: 'Descrição breve do vídeo 5.'
      },
      {
        id: 'yKNxeF4KMsY',
        title: 'Coldplay - Yellow (Official Video)',
        description: 'Descrição breve do vídeo 6.'
      },
      {
        id: 'YykjpeuMNEk',
        title: 'Coldplay - Hymn For The Weekend (Official Video)',
        description: 'Descrição breve do vídeo 7.'
      },
      {
        id: 'VPRjCeoBqrI',
        title: 'Coldplay - A Sky Full Of Stars (Official Video)',
        description: 'Descrição breve do vídeo 8.'
      },
      {
        id: 'ALZHF5UqnU4',
        title: 'Marshmello - Sozinho (Vídeo Oficial)',
        description: 'Descrição breve do vídeo 1.'
      },
      {
        id: 'm7Bc3pLyij0',
        title: 'Marshmello ft. Bastille - Happier (Clipe Musical Oficial)',
        description: 'Descrição breve do vídeo 2.'
      },
      {
        id: 'CY8E6N5Nzec',
        title: 'Marshmello & Anne-Marie - FRIENDS *HINO OFICIAL DA FRIENDZONE*',
        description: 'Descrição breve do vídeo 3.'
      },
      {
        id: '2vMH8lITTCE',
        title: 'Marshmello - Verão (Video Musical Oficial) com Lele Pons',
        description: 'Descrição breve do vídeo 4.'
      },
      {
        id: '1G4isv_Fylg',
        title: 'Coldplay - Paradise (Official Video)',
        description: 'Descrição breve do vídeo 5.'
      },
      {
        id: 'yKNxeF4KMsY',
        title: 'Coldplay - Yellow (Official Video)',
        description: 'Descrição breve do vídeo 6.'
      },
      {
        id: 'YykjpeuMNEk',
        title: 'Coldplay - Hymn For The Weekend (Official Video)',
        description: 'Descrição breve do vídeo 7.'
      },
      {
        id: 'VPRjCeoBqrI',
        title: 'Coldplay - A Sky Full Of Stars (Official Video)',
        description: 'Descrição breve do vídeo 8.'
      },
      {
        id: 'ALZHF5UqnU4',
        title: 'Marshmello - Sozinho (Vídeo Oficial)',
        description: 'Descrição breve do vídeo 1.'
      },
      {
        id: 'm7Bc3pLyij0',
        title: 'Marshmello ft. Bastille - Happier (Clipe Musical Oficial)',
        description: 'Descrição breve do vídeo 2.'
      },
      {
        id: 'CY8E6N5Nzec',
        title: 'Marshmello & Anne-Marie - FRIENDS *HINO OFICIAL DA FRIENDZONE*',
        description: 'Descrição breve do vídeo 3.'
      },
      {
        id: '2vMH8lITTCE',
        title: 'Marshmello - Verão (Video Musical Oficial) com Lele Pons',
        description: 'Descrição breve do vídeo 4.'
      },
      {
        id: '1G4isv_Fylg',
        title: 'Coldplay - Paradise (Official Video)',
        description: 'Descrição breve do vídeo 5.'
      },
      {
        id: 'yKNxeF4KMsY',
        title: 'Coldplay - Yellow (Official Video)',
        description: 'Descrição breve do vídeo 6.'
      },
      {
        id: 'YykjpeuMNEk',
        title: 'Coldplay - Hymn For The Weekend (Official Video)',
        description: 'Descrição breve do vídeo 7.'
      },
      {
        id: 'VPRjCeoBqrI',
        title: 'Coldplay - A Sky Full Of Stars (Official Video)',
        description: 'Descrição breve do vídeo 8.'
      },
      // Adicione mais vídeos aqui...
];

export default function GaleriaPage() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
    return (
      <div className="relative overflow-hidden">
        {/* Imagem de fundo */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/fundo-galeria.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
        </div>
  
        {/* Conteúdo principal */}
        <main className="mt-6 pt-6 pb-12 px-4 max-w-7xl mx-auto backdrop-blur-sm bg-white/05 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-10 text-white">Galeria de Vídeos</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                videoId={video.id}
                title={video.title}
                description={video.description}
                onClick={() => setSelectedVideo(video.id)}
              />
            ))}
          </div>
  
          {selectedVideo && (
            <VideoModal
              videoId={selectedVideo}
              isOpen={!!selectedVideo}
              onClose={() => setSelectedVideo(null)}
            />
          )}
        </main>
      </div>
    );
  }
  