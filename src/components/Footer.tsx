import { Instagram, Linkedin, Youtube, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Nome temporário como logo */}
        <div className="text-xl font-bold text-gray-800 mb-4 md:mb-0">stabilidade</div>

        {/* Ícones sociais à direita */}
        <div className="flex space-x-6">
          <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram">
            <Instagram className="w-5 h-5 text-gray-600 hover:text-purple-700 transition" />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 text-gray-600 hover:text-purple-700 transition" />
          </Link>
          <Link href="https://www.youtube.com" target="_blank" aria-label="YouTube">
            <Youtube className="w-5 h-5 text-gray-600 hover:text-purple-700 transition" />
          </Link>
          <Link href="https://wa.me/5511999999999" target="_blank" aria-label="WhatsApp">
            <Phone className="w-5 h-5 text-gray-600 hover:text-purple-700 transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
