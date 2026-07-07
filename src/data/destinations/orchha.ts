import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to orchhaattraction1..4
  orchhaattraction1:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/orchhaattraction1_x3z81g.jpg",
  orchhaattraction2:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/orchhaattraction2_rusemq.jpg",
  orchhaattraction3:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/orchhaattraction3_t1gx8t.jpg",
  orchhaattraction4:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/orchhaattraction4_ik8wwu.jpg",

  // Gallery images – mapped to orchhagallary1..11
  orchhagallary1:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/orchhagallary1_rmlfyr.jpg",
  orchhagallary2:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/orchhagallary2_zbmkzm.jpg",
  orchhagallary3:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/orchhagallary3_zrdkkt.jpg",
  orchhagallary4:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/orchhagallary4_qqs4p0.jpg",
  orchhagallary5:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/orchhagallary5_lhpcoe.jpg",
  orchhagallary6:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/orchhagallary6_pwcmym.jpg",
  orchhagallary7:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/orchhagallary7_rixrof.jpg",
  orchhagallary8:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/orchhagallary8_rnwbpx.jpg",
  orchhagallary9:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/orchhagallary9_yxwokk.jpg",
  orchhagallary10:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/orchhagallary10_qv731e.jpg",
  orchhagallary11:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/orchhagallary11_djtdzo.jpg",
};

const orchha: DestinationContent = {
  overviewParagraphs: [
    "Orchha — a hidden heritage gem of Madhya Pradesh — is known for its majestic palaces, riverside cenotaphs and timeless Bundela architecture.",
    "Nestled on the banks of the Betwa River, Orchha feels like a living medieval town where history, spirituality and tranquility blend beautifully.",
    "From grand forts and royal temples to peaceful ghats and sunset views, Orchha offers a regal yet soulful travel experience.",
  ],

  attractions: [
    {
      title: "Orchha Fort Complex",
      description:
        "A magnificent collection of palaces and courtyards showcasing Bundela-era architecture.",
      image: images.orchhaattraction1,
    },
    {
      title: "Jahangir Mahal",
      description:
        "A stunning royal palace built to honor Emperor Jahangir's visit to Orchha.",
      image: images.orchhaattraction2,
    },
    {
      title: "Chaturbhuj Temple",
      description:
        "A towering temple admired for its grand structure and panoramic town views.",
      image: images.orchhaattraction3,
    },
    {
      title: "Betwa River Cenotaphs",
      description:
        "Iconic royal chhatris lining the Betwa River, especially magical at sunset.",
      image: images.orchhaattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Fort Exploration",
      description: "Walk through ancient palaces, halls and royal courtyards.",
      icon: "🏰",
    },
    {
      title: "Sunset by Betwa River",
      description: "Enjoy peaceful golden-hour views near the cenotaphs.",
      icon: "🌅",
    },
    {
      title: "Temple Visits",
      description: "Explore sacred temples and spiritual landmarks.",
      icon: "🛕",
    },
    {
      title: "River Rafting",
      description: "Experience adventure activities on the Betwa River.",
      icon: "🚣",
    },
    {
      title: "Heritage Photography",
      description: "Capture timeless architecture and scenic landscapes.",
      icon: "📸",
    },
    {
      title: "Light & Sound Show",
      description: "Discover Orchha's royal history through evening storytelling.",
      icon: "🎇",
    },
  ],

  experiences: [
    {
      title: "Royal Heritage",
      description:
        "Feel the grandeur of Bundela kings while exploring ancient palaces.",
    },
    {
      title: "Peaceful Riverside Evenings",
      description:
        "Relax beside the Betwa River surrounded by historic cenotaphs.",
    },
    {
      title: "Architectural Beauty",
      description:
        "Admire intricate murals, domes and medieval craftsmanship.",
    },
    {
      title: "Spiritual Atmosphere",
      description:
        "Experience the calm and devotion of Orchha's temples and ghats.",
    },
  ],

  gallery: [
    images.orchhagallary1,
    images.orchhagallary2,
    images.orchhagallary3,
    images.orchhagallary4,
    images.orchhagallary5,
    images.orchhagallary6,
    images.orchhagallary7,
    images.orchhagallary8,
    images.orchhagallary9,
    images.orchhagallary10,
    images.orchhagallary11,
  ],

  travelInfo: {
    bestTime: "October to March — pleasant weather for heritage walks and sightseeing",
    road:
      "Well-connected by road from Jhansi, Gwalior and nearby cities.",
    rail:
      "Jhansi Railway Station (~18 km) is the nearest major railhead.",
    air:
      "The nearest airport is Gwalior Airport, with connectivity to major Indian cities.",
  },

  duration: "2 Days / 1 Night",
};

export default orchha;