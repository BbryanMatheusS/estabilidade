import { FC } from 'react';
import { PlayCircle } from 'lucide-react';

interface VideoCardProps {
  videoId: string;
  title: string;
  description: string;
  onClick: () => void;
}

export const VideoCard: FC<VideoCardProps> = ({ videoId, title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Thumbnail do vídeo */}
      <div className="relative">
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />

        {/* Ícone de play no hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
          <PlayCircle className="text-white w-12 h-12 drop-shadow-lg" />
        </div>
      </div>

      {/* Informações com efeito glass */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/60 backdrop-blur-sm p-3">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">{title}</h3>
        <p className="text-xs text-gray-700 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};
