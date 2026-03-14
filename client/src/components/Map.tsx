import { cn } from "@/lib/utils";

interface MapViewProps {
  className?: string;
}

export function MapView({ className }: MapViewProps) {
  return (
    <div className={cn("w-full h-[500px] rounded-lg overflow-hidden", className)}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.34803841749!2d77.71381680815439!3d12.96628395152025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae130042b0ab61%3A0x96198778dfb67fd2!2sThyme%20Woodfired%20Pizzeria!5e0!3m2!1sen!2sin!4v1773473512041!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}