import { SectionHeader } from "../SectionHeader";
import { skillGroups } from "../../data/skills";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

export function SkillsSection() {
  return (
    <section id="skills" className="py-14 sm:py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Skills"
          title="Tools I use to ship."
          description="A portfolio is not a museum — it’s a delivery log. Here’s what I deliver with."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((g) => (
            <Card key={g.title} className="p-6">
              <h3 className="text-base font-semibold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <Badge key={it}>{it}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
