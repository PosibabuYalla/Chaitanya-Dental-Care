import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ClayVisual from "@/components/three/ClayVisual";
import type { ClayVariant } from "@/lib/types";

export const metadata: Metadata = pageMetadata({
  title: "Icon QA",
  description: "Internal visual QA page.",
  path: "/qa",
  noIndex: true,
});

const variants: ClayVariant[] = [
  "tooth", "implant", "crown", "brace", "mirror", "toothbrush", "chair", "cross",
  "scanner", "xray", "aligner", "syringe", "book", "pin", "building", "shield",
  "sparkle", "child", "heart",
];

export default function QAPage() {
  return (
    <div className="grid grid-cols-4 gap-6 p-10 pt-32">
      {variants.map((v) => (
        <div key={v} className="glass flex flex-col items-center gap-2 p-4">
          <div className="h-40 w-40">
            <ClayVisual variant={v} tone="pink" scale={1} />
          </div>
          <p className="text-sm font-bold">{v}</p>
        </div>
      ))}
    </div>
  );
}
