import type { ComponentType, SVGProps } from "react";

export type CardProps = {
  title: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const Card = ({ title, description, Icon }: CardProps) => {
  return (
    <div className="rounded-xl border border-green-300/70 bg-white/95 shadow-sm p-6 md:p-8 text-left">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-lg bg-green-50 p-3">
          <Icon
            className="h-8 w-8 md:h-10 md:w-10 text-green-500"
            aria-hidden="true"
          />
        </div>
        <h3 className="font-headline text-xl md:text-2xl font-bold tracking-wide uppercase text-green-500">
          {title}
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-slate-700 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};
