import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to the exact variable names
  kanhaattraction1:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/kanhaattraction1_mzb7dg.jpg",
  kanhaattraction2:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/kanhaattraction2_hqahwz.jpg",
  kanhaattraction3:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/kanhaattraction3_pcmvir.jpg",
  kanhaattraction4:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/kanhaattraction4_af9gse.jpg",

  // Gallery images – mapped to kanhagallary1..10
  kanhagallary1:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/kanhagallary1_xs4hrc.jpg",
  kanhagallary2:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/kanhagallary2_v9wndt.jpg",
  kanhagallary3:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/kanhagallary3_aazjsj.jpg",
  kanhagallary4:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/kanhagallary4_dbb3aa.jpg",
  kanhagallary5:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/kanhagallary5_w8lteu.jpg",
  kanhagallary6:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/kanhagallary6_ujwgzc.jpg",
  kanhagallary7:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/kanhagallary7_s1jpgs.jpg",
  kanhagallary8:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/kanhagallary8_wfpsgt.jpg",
  kanhagallary9:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/kanhagallary9_ocdpih.jpg",
  kanhagallary10:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/kanhagallary10_hewlf4.jpg",
};

const kanha: DestinationContent = {
  overviewParagraphs: [
    "Kanha National Park — one of India’s finest wildlife reserves — is famous for its lush sal forests, open meadows and majestic Royal Bengal Tigers.",
    "Located in Madhya Pradesh, Kanha inspired Rudyard Kipling’s famous Jungle Book with its rich biodiversity and natural beauty.",
    "From thrilling jeep safaris and rare wildlife sightings to scenic forest landscapes, Kanha offers an unforgettable jungle adventure.",
  ],

  attractions: [
    {
      title: "Kanha National Park",
      description:
        "A world-famous tiger reserve known for its rich biodiversity and scenic forest landscapes.",
      image: images.kanhaattraction1,
    },
    {
      title: "Jeep Safari",
      description:
        "Experience thrilling jungle safaris through Kanha’s dense forests and wildlife zones.",
      image: images.kanhaattraction2,
    },
    {
      title: "Bamni Dadar",
      description:
        "A beautiful sunset point offering breathtaking panoramic views of Kanha’s forests and meadows.",
      image: images.kanhaattraction3,
    },
    {
      title: "Barasingha Conservation Area",
      description:
        "A special zone dedicated to the rare hard-ground swamp deer, the pride of Kanha.",
      image: images.kanhaattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Jungle Safari",
      description: "Explore dense forests and wildlife-rich safari routes.",
      icon: "🛻",
    },
    {
      title: "Tiger Spotting",
      description: "Witness majestic Royal Bengal Tigers in their natural habitat.",
      icon: "🐅",
    },
    {
      title: "Bird Watching",
      description: "Observe colorful birds and diverse wildlife species.",
      icon: "🦜",
    },
    {
      title: "Nature Photography",
      description: "Capture breathtaking wildlife and forest landscapes.",
      icon: "📸",
    },
    {
      title: "Sunset Viewing",
      description: "Enjoy mesmerizing sunset views from Bamni Dadar.",
      icon: "🌅",
    },
    {
      title: "Forest Exploration",
      description: "Experience peaceful nature trails and scenic greenery.",
      icon: "🌿",
    },
  ],

  experiences: [
    {
      title: "Wildlife Adventure",
      description:
        "Feel the thrill of exploring one of India’s top tiger reserves.",
    },
    {
      title: "Natural Beauty",
      description:
        "Enjoy lush forests, grasslands and peaceful jungle surroundings.",
    },
    {
      title: "Rare Wildlife",
      description:
        "Spot Barasingha, leopards, deer species and exotic birds.",
    },
    {
      title: "Photography Paradise",
      description:
        "Capture unforgettable moments of wildlife and scenic landscapes.",
    },
  ],

  gallery: [
    images.kanhagallary1,
    images.kanhagallary2,
    images.kanhagallary3,
    images.kanhagallary4,
    images.kanhagallary5,
    images.kanhagallary6,
    images.kanhagallary7,
    images.kanhagallary8,
    images.kanhagallary9,
    images.kanhagallary10,
  ],

  travelInfo: {
    bestTime:
      "October to June — ideal season for wildlife safaris and tiger sightings",
    road:
      "Well-connected by road from Jabalpur, Nagpur and nearby cities.",
    rail:
      "The nearest railway station is Gondia Junction (~145 km).",
    air:
      "The nearest airport is Jabalpur Airport.",
  },

  duration: "2 Days / 1 Night",
};

export default kanha;