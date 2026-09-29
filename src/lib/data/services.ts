import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "dental-implants",
    name: "Dental Implants",
    tagline: "Permanent, natural-looking tooth replacement",
    description:
      "Titanium root-form implants fused with your jawbone to support a crown, bridge, or full-arch restoration that looks, feels, and functions like a natural tooth.",
    variant: "implant",
    tone: "sky",
    duration: "1–3 sessions over 3–6 months",
    symptoms: ["Missing one or more teeth", "Loose or failing bridge", "Difficulty chewing", "Bone loss from an old extraction"],
    process: [
      { title: "3D Scan & Planning", description: "Digital imaging maps your jaw density and nerve position to plan exact implant placement." },
      { title: "Implant Placement", description: "The titanium post is placed under local anaesthesia in a precise, minimally invasive procedure." },
      { title: "Osseointegration", description: "Over 8–16 weeks, the implant fuses naturally with your jawbone for a stable foundation." },
      { title: "Crown Fitting", description: "A custom-shaded crown is fitted, matched to your bite and neighbouring teeth." },
    ],
    benefits: ["Looks and feels like a natural tooth", "Preserves jawbone density", "Doesn't affect neighbouring teeth", "Built to last decades with proper care"],
    faqs: [
      { question: "Does implant placement hurt?", answer: "The procedure is done under local anaesthesia, so you'll feel pressure but not pain. Mild soreness afterwards is managed with routine pain relief." },
      { question: "How long do implants last?", answer: "With good oral hygiene and regular check-ups, implants can last 20+ years, often a lifetime." },
      { question: "Am I a candidate if I've lost bone?", answer: "In many cases yes — bone grafting can rebuild the site before or during implant placement." },
    ],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    tagline: "Save the natural tooth, remove the pain",
    description:
      "Gentle, rotary-assisted root canal therapy that clears infection from the tooth's inner pulp and seals it to stop pain and prevent extraction.",
    variant: "tooth",
    tone: "pink",
    duration: "1–2 visits, 45–60 minutes each",
    symptoms: ["Sharp pain when biting", "Prolonged sensitivity to hot or cold", "Swollen or tender gums", "Darkening of a single tooth"],
    process: [
      { title: "Diagnosis", description: "Digital X-ray confirms the extent of infection inside the tooth's root canals." },
      { title: "Cleaning", description: "Infected pulp is gently removed and each canal is cleaned and shaped under magnification." },
      { title: "Sealing", description: "Canals are filled with a biocompatible material to prevent reinfection." },
      { title: "Restoration", description: "A crown is placed to protect and strengthen the treated tooth long-term." },
    ],
    benefits: ["Relieves pain within days", "Saves your natural tooth", "Prevents infection spreading", "Restores normal biting function"],
    faqs: [
      { question: "Is root canal treatment painful?", answer: "Modern techniques and local anaesthesia make the procedure itself comfortable — most patients say it feels like a routine filling." },
      { question: "Will the tooth need a crown?", answer: "Usually yes, to protect the tooth from fracture since it becomes more brittle after treatment." },
    ],
  },
  {
    slug: "crowns-and-bridges",
    name: "Crowns & Bridges",
    tagline: "Restore strength, shape, and confidence",
    description:
      "Custom-crafted ceramic and zirconia crowns and bridges that rebuild damaged or missing teeth with a precise, natural fit.",
    variant: "crown",
    tone: "gold",
    duration: "2 visits, 1–2 weeks apart",
    symptoms: ["Cracked or heavily filled tooth", "Worn-down or misshapen teeth", "Gap from one missing tooth", "Discoloured old restoration"],
    process: [
      { title: "Preparation", description: "The tooth is gently reshaped and a precise digital impression is taken." },
      { title: "Temporary Crown", description: "A temporary restoration protects the tooth while your custom piece is crafted." },
      { title: "Lab Fabrication", description: "Your crown or bridge is milled and shaded to match your smile exactly." },
      { title: "Final Fitting", description: "The permanent restoration is bonded and polished for a seamless bite." },
    ],
    benefits: ["Matches natural tooth shade", "Restores full chewing strength", "Protects weakened teeth", "Durable for 10–15+ years"],
    faqs: [
      { question: "What material is used?", answer: "We primarily use monolithic zirconia and layered ceramic for strength combined with a natural translucent finish." },
      { question: "Can a bridge replace multiple teeth?", answer: "A bridge typically replaces one to three consecutive missing teeth, anchored by crowns on either side." },
    ],
  },
  {
    slug: "orthodontics",
    name: "Orthodontics",
    tagline: "Precision-guided teeth alignment",
    description:
      "Traditional braces and modern bracket systems that gradually and comfortably align teeth and correct bite issues for every age group.",
    variant: "brace",
    tone: "sky",
    duration: "12–24 months",
    symptoms: ["Crowded or overlapping teeth", "Visible gaps between teeth", "Overbite, underbite, or crossbite", "Jaw discomfort while chewing"],
    process: [
      { title: "Orthodontic Assessment", description: "Photographs, scans, and X-rays map your bite and tooth movement plan." },
      { title: "Appliance Fitting", description: "Brackets and wires are placed and calibrated to begin gentle, guided movement." },
      { title: "Progress Adjustments", description: "Monthly visits fine-tune tension as your teeth shift into position." },
      { title: "Retention", description: "A custom retainer holds your new alignment in place long-term." },
    ],
    benefits: ["Corrects bite and alignment", "Improves long-term gum health", "Boosts confidence in your smile", "Options for every age"],
    faqs: [
      { question: "At what age can treatment start?", answer: "We assess children from age 7 for early intervention, though most active treatment begins around ages 11–14." },
      { question: "Do braces affect speech or eating?", answer: "There's a short adjustment period, but most patients adapt within one to two weeks." },
    ],
  },
  {
    slug: "clear-aligners",
    name: "Clear Aligners",
    tagline: "Invisible, removable straightening",
    description:
      "A series of custom, near-invisible aligner trays that discreetly shift teeth into place — removable for eating, brushing, and special occasions.",
    variant: "aligner",
    tone: "lavender",
    duration: "6–18 months",
    symptoms: ["Mild to moderate crowding", "Minor gaps or spacing", "Relapse after previous orthodontics", "Preference for discreet treatment"],
    process: [
      { title: "Digital Smile Scan", description: "An intraoral scanner captures a precise 3D model of your teeth — no messy impressions." },
      { title: "Treatment Simulation", description: "You preview your projected result before committing to treatment." },
      { title: "Aligner Series", description: "You wear each custom tray for 20–22 hours a day, changing every 1–2 weeks." },
      { title: "Refinement & Retainer", description: "Final refinements are made, followed by a clear retainer to preserve results." },
    ],
    benefits: ["Virtually invisible", "Removable for meals and brushing", "Fewer in-clinic visits", "Comfortable, smooth plastic edges"],
    faqs: [
      { question: "How many hours a day should I wear them?", answer: "For best results, aligners should be worn 20–22 hours daily, removed only for eating and brushing." },
      { question: "Are clear aligners as effective as braces?", answer: "For mild-to-moderate cases, results are comparable; more complex bites may still need traditional braces." },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    tagline: "Artistry meets dental precision",
    description:
      "Veneers, bonding, and full smile makeovers designed with facial harmony in mind — refining shape, shade, and symmetry.",
    variant: "sparkle",
    tone: "pink",
    duration: "1–3 visits depending on scope",
    symptoms: ["Chipped or uneven teeth", "Stubborn discolouration", "Gaps you'd like closed", "Overall smile makeover interest"],
    process: [
      { title: "Smile Design Consultation", description: "We map facial proportions and your goals into a digital smile preview." },
      { title: "Mock-Up Approval", description: "You review and approve a trial version of your new smile shape." },
      { title: "Precision Application", description: "Veneers or bonding are shaped, shaded, and bonded with meticulous detail." },
      { title: "Final Polish", description: "Contouring and polishing complete a natural, light-reflecting finish." },
    ],
    benefits: ["Natural, personalised results", "Minimally invasive options available", "Long-lasting stain resistance", "Boosts everyday confidence"],
    faqs: [
      { question: "How long do veneers last?", answer: "Porcelain veneers typically last 10–15 years with good care and regular check-ups." },
      { question: "Will treatment look natural?", answer: "Our smile design process is built around your facial features for a result that looks like you, only refined." },
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    tagline: "Brighter smiles, safely accelerated",
    description:
      "Professional-grade, dentist-supervised whitening that lifts years of staining in a single visit, or gradually with take-home trays.",
    variant: "whitening",
    tone: "gold",
    duration: "60–90 minutes in-clinic",
    symptoms: ["Coffee, tea, or wine staining", "Yellowing with age", "Uneven shade across teeth", "Wanting a brighter smile for an event"],
    process: [
      { title: "Shade Assessment", description: "We record your baseline shade and check suitability for whitening." },
      { title: "Gum Protection", description: "A protective barrier shields gums before the whitening gel is applied." },
      { title: "Activation", description: "A safe, high-concentration gel lifts stains, often assisted by gentle light activation." },
      { title: "Shade Check", description: "Results are measured and compared against your starting shade." },
    ],
    benefits: ["Visible results in one session", "Dentist-supervised for safety", "Take-home top-up kits available", "Minimal sensitivity with our protocol"],
    faqs: [
      { question: "How much whiter will my teeth get?", answer: "Most patients see a lift of 4–8 shades, depending on starting colour and staining causes." },
      { question: "Is whitening safe for enamel?", answer: "Yes, when supervised by a dentist and used at recommended concentrations, it does not damage enamel." },
    ],
  },
  {
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    tagline: "Gentle, friendly care for growing smiles",
    description:
      "A calm, playful approach to children's dental health — from first check-ups to sealants and early orthodontic monitoring.",
    variant: "child",
    tone: "sky",
    duration: "20–40 minutes per visit",
    symptoms: ["First tooth eruption check-up", "Cavity risk in baby teeth", "Thumb-sucking or habit concerns", "Anxiety about dental visits"],
    process: [
      { title: "Friendly Welcome", description: "A calm, colourful environment helps children feel safe before treatment begins." },
      { title: "Gentle Examination", description: "Age-appropriate techniques make check-ups quick and comfortable." },
      { title: "Preventive Care", description: "Fluoride treatments and sealants protect against early decay." },
      { title: "Habit & Growth Monitoring", description: "We track jaw development and flag orthodontic needs early." },
    ],
    benefits: ["Builds positive dental habits early", "Prevents childhood cavities", "Reduces dental anxiety long-term", "Monitors jaw and bite development"],
    faqs: [
      { question: "When should my child's first visit be?", answer: "We recommend a first visit by their first birthday or within six months of the first tooth appearing." },
      { question: "Do you use sedation for anxious children?", answer: "Most visits need no sedation — our gentle, playful approach keeps children calm and cooperative." },
    ],
  },
  {
    slug: "gum-treatment",
    name: "Gum Treatment",
    tagline: "Healthy gums, stable foundation",
    description:
      "Deep cleaning and periodontal therapy that treats gum disease at its source, protecting the bone and tissue supporting your teeth.",
    variant: "shield",
    tone: "pink",
    duration: "1–4 sessions",
    symptoms: ["Bleeding gums when brushing", "Persistent bad breath", "Receding gum line", "Loose teeth in adulthood"],
    process: [
      { title: "Periodontal Assessment", description: "Gum pocket depths are measured to grade the stage of gum disease." },
      { title: "Deep Cleaning", description: "Scaling and root planing remove plaque and tartar below the gumline." },
      { title: "Therapy", description: "Localised treatment targets inflamed or infected pockets." },
      { title: "Maintenance Plan", description: "A tailored recall schedule keeps gum health stable long-term." },
    ],
    benefits: ["Stops gum disease progression", "Reduces bleeding and inflammation", "Protects supporting bone", "Freshens breath"],
    faqs: [
      { question: "Is gum disease reversible?", answer: "Early-stage gingivitis is fully reversible with treatment; more advanced periodontitis can be effectively managed and stabilised." },
      { question: "Will deep cleaning hurt?", answer: "We use local anaesthesia when needed, so the procedure is comfortable, with only mild sensitivity afterwards." },
    ],
  },
  {
    slug: "oral-surgery",
    name: "Oral Surgery",
    tagline: "Advanced surgical care, expertly handled",
    description:
      "Wisdom tooth extraction, bone grafting, and minor oral surgery performed with precision and a focus on fast, comfortable recovery.",
    variant: "syringe",
    tone: "lavender",
    duration: "30–90 minutes",
    symptoms: ["Impacted wisdom teeth", "Persistent jaw pain", "Need for bone grafting before implants", "Complex tooth extraction"],
    process: [
      { title: "Surgical Planning", description: "3D imaging maps roots, nerves, and bone before any procedure is scheduled." },
      { title: "Anaesthesia", description: "Local or sedation anaesthesia ensures comfort throughout the procedure." },
      { title: "Procedure", description: "The surgery is performed with minimally invasive, precise technique." },
      { title: "Recovery Guidance", description: "Clear aftercare instructions and follow-up support fast healing." },
    ],
    benefits: ["Prevents future complications", "Minimally invasive techniques", "Clear pain-management plan", "Fast, monitored recovery"],
    faqs: [
      { question: "Do all wisdom teeth need removal?", answer: "Only when impacted, infected, or causing crowding — we assess each case individually with imaging." },
      { question: "How long is recovery?", answer: "Most patients return to normal activity within 2–3 days, with full healing over one to two weeks." },
    ],
  },
  {
    slug: "preventive-dentistry",
    name: "Preventive Dentistry",
    tagline: "Stop problems before they start",
    description:
      "Routine cleanings, check-ups, and diagnostics designed to catch issues early and keep your whole family cavity-free.",
    variant: "toothbrush",
    tone: "sky",
    duration: "30–45 minutes",
    symptoms: ["Due for a routine check-up", "Plaque build-up or tartar", "Family history of cavities", "General maintenance and hygiene"],
    process: [
      { title: "Full Examination", description: "A comprehensive check of teeth, gums, and bite health." },
      { title: "Digital Diagnostics", description: "Low-radiation digital X-rays catch issues invisible to the eye." },
      { title: "Professional Cleaning", description: "Plaque and tartar are removed and teeth are polished." },
      { title: "Personalised Plan", description: "You leave with a tailored home-care and recall schedule." },
    ],
    benefits: ["Catches issues before they escalate", "Reduces long-term treatment costs", "Keeps breath fresh and gums healthy", "Recommended twice yearly"],
    faqs: [
      { question: "How often should I visit?", answer: "We recommend a check-up and clean every six months, or more often if you have ongoing gum concerns." },
      { question: "Are digital X-rays safe?", answer: "Yes — they use significantly less radiation than traditional film X-rays and are taken only when clinically needed." },
    ],
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    tagline: "Fast relief, when you need it most",
    description:
      "Same-day emergency appointments for sudden pain, trauma, or breakages — with a dedicated line for after-hours urgent care.",
    variant: "cross",
    tone: "gold",
    duration: "Same-day priority slots",
    symptoms: ["Sudden, severe tooth pain", "Knocked-out or broken tooth", "Lost filling or crown", "Facial swelling with pain"],
    process: [
      { title: "Priority Triage", description: "Call our emergency line and we'll assess urgency and guide immediate first aid." },
      { title: "Same-Day Assessment", description: "You're seen promptly with imaging to identify the cause of pain or trauma." },
      { title: "Immediate Relief", description: "Pain is addressed first, followed by treatment planning for lasting repair." },
      { title: "Follow-Up Care", description: "A full recovery and restoration plan is scheduled as needed." },
    ],
    benefits: ["Same-day appointments", "24/7 emergency phone line", "Pain relief prioritised first visit", "Full follow-up treatment plan"],
    faqs: [
      { question: "What should I do with a knocked-out tooth?", answer: "Keep it moist (in milk or saliva), avoid touching the root, and call us immediately — timing matters greatly for reattachment." },
      { question: "Is emergency care available on weekends?", answer: "Yes, our emergency line is monitored 24/7, including weekends and public holidays." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
