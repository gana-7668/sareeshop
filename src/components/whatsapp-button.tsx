
'use client';
import Link from 'next/link';
import { WhatsAppIcon } from './icons/whatsapp-icon';

type WhatsAppButtonProps = {
  phoneNumber: string;
  message?: string;
};

export default function WhatsAppButton({ phoneNumber, message }: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <Link 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </Link>
  );
}
