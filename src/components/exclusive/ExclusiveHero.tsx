import { motion } from "framer-motion";
import type { SawanCampaign } from "@/data/exclusive/sawanData";


const mahakalImage =
  "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/mahakal-image_isjlof.webp";

const mobileHeroImage = "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/home-mobile_ce44gg.png"

interface Props {
  hero: SawanCampaign["hero"];
}

const ExclusiveHero = ({ hero }: Props) => {
  const scrollTo = (sel: string) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full h-auto md:h-screen md:overflow-hidden bg-white">
      <img
        src={mobileHeroImage}
        alt="Mahakal – Sacred Shravan Campaign (Mobile)"
        className="block md:hidden w-full h-auto"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      <img
        src={mahakalImage}
        alt="Mahakal – Sacred Shravan Campaign"
        className="hidden md:block md:absolute md:inset-0 md:h-full md:object-cover md:w-full"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </section>
  );
};

export default ExclusiveHero;