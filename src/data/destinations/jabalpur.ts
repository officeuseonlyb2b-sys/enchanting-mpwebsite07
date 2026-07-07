import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to the exact variable names
  jabalpurattraction1:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/jabalpurattraction1_dlpipk.jpg",
  jabalpurattraction2:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/jabalpurattraction2_zcktyn.jpg",
  jabalpurattraction3:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/jabalpurattraction3_rzvfas.jpg",
  jabalpurattraction4:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/jabalpurattraction4_btsy28.jpg",

  // Gallery images – mapped to jabalpurgallary1..12
  jabalpurgallary1:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/jabalpurgallary1_wducsg.jpg",
  jabalpurgallary2:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/jabalpurgallary2_uvxngw.jpg",
  jabalpurgallary3:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/jabalpurgallary3_zknusp.jpg",
  jabalpurgallary4:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/jabalpurgallary4_xturlg.jpg",
  jabalpurgallary5:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/jabalpurgallary5_yw3yum.jpg",
  jabalpurgallary6:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/jabalpurgallary6_cvecpf.jpg",
  jabalpurgallary7:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/jabalpurgallary7_ibvkrb.jpg",
  jabalpurgallary8:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/jabalpurgallary8_brz3jq.jpg",
  jabalpurgallary9:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/jabalpurgallary9_htzdxe.jpg",
  jabalpurgallary10:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/jabalpurgallary10_rprza2.jpg",
  jabalpurgallary11:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/jabalpurgallary11_ohb6ws.jpg",
  jabalpurgallary12:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/jabalpurgallary12_zgtnkn.jpg",
};

const jabalpur: DestinationContent = {
  overviewParagraphs: [
    "Jabalpur — the cultural capital of Mahakoshal — is renowned for its marble cliffs, waterfalls, spiritual landmarks and rich heritage.",
    "Situated on the banks of the sacred Narmada River, Jabalpur offers a perfect blend of natural beauty, history and adventure.",
    "From the iconic Marble Rocks and Dhuandhar Falls to ancient temples and scenic viewpoints, Jabalpur promises an unforgettable travel experience.",
  ],

  attractions: [
    {
      title: "Gwarighat",
      description:
        "A sacred ghat on the banks of the Narmada River, famous for its spiritual atmosphere and evening Narmada Aarti.",
      image: images.jabalpurattraction1,
    },
    {
      title: "Dhuandhar Falls",
      description:
        "A spectacular waterfall where the Narmada plunges dramatically through marble cliffs.",
      image: images.jabalpurattraction2,
    },
    {
      title: "Chausath Yogini Temple",
      description:
        "An ancient hilltop temple offering panoramic views of the Narmada valley.",
      image: images.jabalpurattraction3,
    },
    {
      title: "Balancing Rock",
      description:
        "A unique natural rock formation that has remained balanced for centuries.",
      image: images.jabalpurattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Boat Ride",
      description: "Enjoy a scenic boat ride through the Marble Rocks at Bhedaghat.",
      icon: "🚤",
    },
    {
      title: "Waterfall Viewing",
      description: "Witness the power and beauty of Dhuandhar Falls.",
      icon: "🌊",
    },
    {
      title: "Temple Visit",
      description: "Explore ancient temples and spiritual landmarks.",
      icon: "🛕",
    },
    {
      title: "Photography",
      description: "Capture stunning landscapes, waterfalls and marble cliffs.",
      icon: "📸",
    },
    {
      title: "Cable Car Ride",
      description: "Enjoy breathtaking aerial views of Dhuandhar Falls.",
      icon: "🚡",
    },
    {
      title: "Local Food Experience",
      description: "Taste authentic street food and regional delicacies.",
      icon: "🍴",
    },
  ],

  experiences: [
    {
      title: "Natural Wonders",
      description:
        "Discover the beauty of marble cliffs, waterfalls and river landscapes.",
    },
    {
      title: "Spiritual Heritage",
      description:
        "Visit ancient temples and sacred sites along the Narmada.",
    },
    {
      title: "Adventure & Exploration",
      description:
        "Enjoy boating, sightseeing and scenic experiences.",
    },
    {
      title: "Photography Paradise",
      description:
        "Capture unforgettable moments of Jabalpur’s iconic attractions.",
    },
  ],

  gallery: [
    images.jabalpurgallary1,
    images.jabalpurgallary2,
    images.jabalpurgallary3,
    images.jabalpurgallary4,
    images.jabalpurgallary5,
    images.jabalpurgallary6,
    images.jabalpurgallary7,
    images.jabalpurgallary8,
    images.jabalpurgallary9,
    images.jabalpurgallary10,
    images.jabalpurgallary11,
    images.jabalpurgallary12,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal weather for sightseeing and outdoor activities",
    road:
      "Well-connected by road with major cities across Madhya Pradesh.",
    rail:
      "Jabalpur Junction is a major railway station with excellent connectivity.",
    air:
      "The nearest airport is Jabalpur Airport (Dumna Airport).",
  },

  duration: "2 Days / 1 Night",
};

export default jabalpur;