import type { Doctor } from "@/lib/types";
import chaitanyaPhoto from "@/components/gallery/doctors/dr-chaitanya.jpeg";
import sainathPhoto from "@/components/gallery/doctors/dr-sainath.jpeg";
import abhiramPhoto from "@/components/gallery/doctors/dr-abhiram.png";
import samataPhoto from "@/components/gallery/doctors/dr-samata-avula.jpeg";
import sravaniPhoto from "@/components/gallery/doctors/dr-sravani.jpeg";

export const doctors: Doctor[] = [
  {
    slug: "venigalla-chaitanya",
    name: "Dr. Krishna Chaitanya Venigalla",
    initials: "VC",
    specialty: "Dental Surgeon & Implantologist",
    category: "Dental Surgeons",
    qualifications: ["BDS"],
    experienceYears: 30,
    languages: ["Telugu", "English", "Hindi"],
    tone: "sky",
    bio: "Dr. Krishna Chaitanya Venigalla founded Chaitanya Dental Care with a vision to redefine dental care through clinical excellence, precision, and ethical patient-centred treatment. With over 30 years of experience, his expertise spans dental implants, oral surgery, and full-mouth rehabilitation.",
    philosophy: "Dentistry should be driven by clinical judgement and the individual needs of every patient — not commercial targets. The patient's well-being comes first.",
    treatments: ["Dental Implants", "Full-Mouth Rehabilitation", "CAD/CAM Prosthetics", "Oral Surgery"],
    education: [
      { degree: "BDS", institute: "Dental College, Andhra Pradesh", year: "2015" },
    ],
    photo: chaitanyaPhoto,
  },
  {
    slug: "dhanya-abhiram-kamireddy",
    name: "Dr. Dhanya Abhiram Kamireddy",
    initials: "DA",
    specialty: "Orthodontist & Dentofacial Orthopedist",
    category: "Orthodontists",
    qualifications: ["BDS", "MDS"],
    experienceYears: 25,
    languages: ["Telugu", "English"],
    tone: "coral",
    bio: "Dr. Dhanya Abhiram Kamireddy is a highly experienced orthodontist and dentofacial orthopedist with 25 years of practice. He corrects bite discrepancies and aligns smiles with both fixed and removable appliances, with exceptional attention to facial balance and occlusion.",
    philosophy: "Great orthodontic treatment isn't just about straight teeth — it's about harmony between the teeth, jaw, and face.",
    treatments: ["Braces", "Aligners", "Jaw Correction", "Space Management", "Interceptive Orthodontics"],
    education: [
      { degree: "MDS (Orthodontics)", institute: "Dental College, Andhra Pradesh", year: "2020" },
      { degree: "BDS", institute: "Dental College, Andhra Pradesh", year: "2016" },
    ],
    photo: abhiramPhoto,
  },
  {
    slug: "samata-avula",
    name: "Dr. Samata Avula",
    initials: "SA",
    specialty: "Associate Doctor — Orthodontist & Dentofacial Orthopedist",
    category: "Orthodontists",
    qualifications: ["BDS", "MDS (Orthodontics)"],
    experienceYears: 5,
    languages: ["Telugu", "English"],
    tone: "lavender",
    bio: "Dr. Samata Avula is a certified Invisalign provider with 5 years of experience in orthodontics and dentofacial orthopedics. She combines advanced aligner technology with traditional braces expertise to deliver precise, aesthetic results.",
    philosophy: "Every smile is unique — treatment should be tailored to the individual, not a one-size-fits-all protocol.",
    treatments: ["Invisalign", "Metal Braces", "Ceramic Braces", "Dentofacial Orthopedics", "Retainers"],
    education: [
      { degree: "MDS (Orthodontics)", institute: "Dental College, Andhra Pradesh", year: "2021" },
      { degree: "BDS", institute: "Dental College, Andhra Pradesh", year: "2018" },
    ],
    photo: samataPhoto,
  },
  {
    slug: "sai-nath-bhukya",
    name: "Dr. Sai Nath Bhukya",
    initials: "SN",
    specialty: "Associate Doctor — General Dentist",
    category: "Dental Surgeons",
    qualifications: ["BDS"],
    experienceYears: 3,
    languages: ["Telugu", "English", "Hindi"],
    tone: "sky",
    bio: "Dr. Sai Nath Bhukya is a dedicated general dentist providing comprehensive oral care with a gentle, reassuring approach. He handles a broad range of routine and restorative procedures with precision and care.",
    philosophy: "Every patient deserves to leave the clinic more comfortable than when they arrived — both physically and emotionally.",
    treatments: ["Tooth Fillings", "Extractions", "Scaling", "Fluoride Treatment", "Preventive Dentistry"],
    education: [
      { degree: "BDS", institute: "Dental College, Andhra Pradesh", year: "2022" },
    ],
    photo: sainathPhoto,
  },
  {
    slug: "sravani-chodagudi",
    name: "Dr. Sravani Chodagudi",
    initials: "SC",
    specialty: "Associate Doctor — General Dentist",
    category: "Dental Surgeons",
    qualifications: ["BDS"],
    experienceYears: 5,
    languages: ["Telugu", "English"],
    tone: "pink",
    bio: "Dr. Sravani Chodagudi brings 5 years of experience in general dentistry, with a focus on preventive care, restorations, and patient education. Her calm, patient approach is especially appreciated by anxious patients.",
    philosophy: "Prevention is always better than cure. Helping patients understand and maintain their oral health is the most rewarding part of the job.",
    treatments: ["Routine Check-ups", "Tooth Fillings", "Scaling & Polishing", "Tooth Extractions", "Preventive Care"],
    education: [
      { degree: "BDS", institute: "Dental College, Andhra Pradesh", year: "2021" },
    ],
    photo: sravaniPhoto,
  },
  {
    slug: "bhagya-sri-v",
    name: "Dr. Bhagya Sri V",
    initials: "BS",
    specialty: "Associate Doctor — Endodontist & Root Canal Specialist",
    category: "Dental Surgeons",
    qualifications: ["BDS", "MDS (Endodontics)"],
    experienceYears: 4,
    languages: ["Telugu", "English"],
    tone: "lavender",
    bio: "Dr. Bhagya Sri V is a skilled endodontist specialising in root canal treatments, including complex multi-rooted cases. Her precise technique and use of rotary instrumentation ensure comfortable, long-lasting results.",
    philosophy: "A painless root canal is not a myth — with the right technique and care, it can be as comfortable as a routine filling.",
    treatments: ["Root Canal Treatment", "Re-treatment", "Pulpotomy", "Apexification", "Post & Core"],
    education: [
      { degree: "MDS (Endodontics)", institute: "Dental College, Andhra Pradesh", year: "2022" },
      { degree: "BDS", institute: "Dental College, Andhra Pradesh", year: "2019" },
    ],
  },
  {
    slug: "sai-venkat-nimmagadda",
    name: "Dr. Sai Venkat Nimmagadda",
    initials: "SV",
    specialty: "Associate Doctor — Oral & Maxillofacial Surgery",
    category: "Dental Surgeons",
    qualifications: ["BDS", "MDS (Pursuing)"],
    experienceYears: 2,
    languages: ["Telugu", "English"],
    tone: "coral",
    bio: "Dr. Sai Venkat Nimmagadda is an oral and maxillofacial surgery resident, bringing advanced surgical training to complex extractions, jaw procedures, and minor oral surgeries. His dedication to learning and precision makes him a valued member of the team.",
    philosophy: "Surgery is as much about judgement as it is about skill — knowing when and how to intervene makes all the difference.",
    treatments: ["Complex Extractions", "Wisdom Tooth Removal", "Minor Oral Surgery", "Jaw Procedures", "Pre-prosthetic Surgery"],
    education: [
      { degree: "MDS (Oral & Maxillofacial Surgery) — Pursuing", institute: "Dental College, Andhra Pradesh", year: "2026" },
      { degree: "BDS", institute: "Dental College, Andhra Pradesh", year: "2023" },
    ],
  },
];

export function getDoctorBySlug(slug: string) {
  return doctors.find((d) => d.slug === slug);
}

export const doctorCategories = Array.from(new Set(doctors.map((d) => d.category)));
