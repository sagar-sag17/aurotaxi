import Image from "next/image";
import { buildWhatsAppLink } from "@/lib/config";

export default function WhatsAppFloatButton() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 rounded-full bg-whatsapp p-4 text-white shadow-lg shadow-whatsapp/30 transition-all hover:gap-2 hover:pr-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp sm:bottom-6 sm:right-6"
    >
      <Image src="/icons/whatsapp.svg" alt="" width={28} height={28} className="h-7 w-7 shrink-0 invert" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-200 group-hover:max-w-xs">
        Chat with us
      </span>
    </a>
  );
}
