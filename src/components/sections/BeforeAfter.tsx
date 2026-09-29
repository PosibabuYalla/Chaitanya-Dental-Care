import ClaySection, { SectionHeading } from "@/components/ui/ClaySection";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { beforeAfterPairs } from "@/lib/data/gallery";

const featured = beforeAfterPairs[0];

export default function BeforeAfter() {
  return (
    <ClaySection>
      <SectionHeading kicker="Transformations" title="Real Results. Confident Smiles." />

      <div className="glass-lg glass-highlight relative mx-auto mt-14 max-w-3xl overflow-hidden p-3 sm:p-4">
        <BeforeAfterSlider before={featured.before} after={featured.after} />
      </div>
    </ClaySection>
  );
}
