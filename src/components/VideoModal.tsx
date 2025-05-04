'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';

interface VideoModalProps {
  videoId: string;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ videoId, isOpen, onClose }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" onClick={onClose} />

      <div className="relative z-10 w-[90%] md:w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white/80 hover:bg-white text-black p-1 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </Dialog>
  );
}