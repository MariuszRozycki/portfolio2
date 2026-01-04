import { Badge } from "./ui/Badge";

export function SectionHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <Badge className="mb-3">{eyebrow}</Badge>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
