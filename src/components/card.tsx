import type { ComponentType, SVGProps } from "react";

export type CardProps = {
  title: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const Card = ({ title, description, Icon }: CardProps) => {
  return (
    <div className="rounded-2xl bg-card border border-border shadow-xl p-6 md:p-8 text-left">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full bg-primary/10 p-4">
          <Icon
            className="h-8 w-8 md:h-10 md:w-10 text-primary"
            aria-hidden="true"
          />
        </div>
        <h3 className="font-headline text-lg font-bold uppercase tracking-widest text-foreground text-center">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground text-center">
          {description}
        </p>
      </div>
    </div>
  );
};
