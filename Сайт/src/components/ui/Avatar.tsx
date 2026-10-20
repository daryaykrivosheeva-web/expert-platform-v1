import Image from "next/image";
import { cn } from "@/lib/utils";
import { getInitials } from "@/lib/utils";

export function Avatar({
  src,
  name,
  className,
  imgClassName,
}: {
  src?: string;
  name: string;
  className?: string;
  imgClassName?: string;
}) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={src}
          alt={name}
          fill
          className={cn("object-cover", imgClassName)}
          sizes="(max-width: 768px) 100vw, 480px"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white",
        className
      )}
    >
      <span className="font-heading text-4xl font-semibold tracking-tight">
        {getInitials(name)}
      </span>
    </div>
  );
}
