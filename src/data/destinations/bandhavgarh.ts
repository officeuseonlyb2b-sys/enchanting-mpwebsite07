import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  attraction1:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/bandhavgarhattraction1_qtcdt6.jpg",
  attraction2:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/bandhavgarhattraction2_dk8sab.jpg",
  attraction3:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/bandhavgarhattraction3_mtrtea.jpg",
  attraction4:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/bandhavgarhattraction4_fxaqqx.jpg",

  gallery1:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/bandhavgarhgallary1_mzcgpy.jpg",
  gallery2:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/bandhavgarhgallary2_jxqxuv.jpg",
  gallery3:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/bandhavgarhgallary3_arlqiz.jpg",
  gallery4:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/bandhavgarhgallary4_pmhw11.jpg",
  gallery5:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/bandhavgarhgallary5_lecmqj.jpg",
  gallery6:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/bandhavgarhgallary6_yvishy.jpg",
  gallery7:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/bandhavgarhgallary7_ei4ndj.jpg",
  gallery8:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/bandhavgarhgallary8_oivluf.jpg",
  gallery9:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/bandhavgarhgallary9_txlhsa.jpg",
  gallery10:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/bandhavgarhgallary10_zsoeri.jpg",
  gallery11:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/bandhavgarhgallary11_obnjx8.jpg",
};

const bandhavgarh: DestinationContent = {
  overviewParagraphs: [
    "Bandhavgarh — one of India’s most famous wildlife destinations — is renowned for its dense forests, rich biodiversity and majestic Royal Bengal Tigers.",
    "Located in the Vindhya Hills of Madhya Pradesh, Bandhavgarh National Park offers thrilling jungle safaris and breathtaking natural landscapes.",
    "From tiger sightings and ancient caves to scenic forest trails and historic ruins, Bandhavgarh promises an unforgettable wildlife adventure.",
  ],

  attractions: [
    {
      title: "Bandhavgarh National Park",
      description:
        "A world-famous tiger reserve known for its rich wildlife, dense forests and frequent Royal Bengal Tiger sightings.",
      image: images.attraction1,
    },
    {
      title: "Jeep Safari",
      description:
        "An exciting jungle safari experience through the dense forests and wildlife zones of Bandhavgarh.",
      image: images.attraction2,
    },
    {
      title: "Shesh Shaiya",
      description:
        "A gigantic reclining statue of Lord Vishnu located amidst the lush forest landscape.",
      image: images.attraction3,
    },
    {
      title: "Climbers Point",
      description:
        "A scenic viewpoint offering breathtaking panoramic views of Bandhavgarh’s forests and hills.",
      image: images.attraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Jungle Safari",
      description: "Experience thrilling jeep safaris through dense forests.",
      icon: "🛻",
    },
    {
      title: "Tiger Spotting",
      description: "Witness majestic Royal Bengal Tigers in their natural habitat.",
      icon: "🐅",
    },
    {
      title: "Bird Watching",
      description: "Observe exotic birds and vibrant wildlife species.",
      icon: "🦜",
    },
    {
      title: "Nature Photography",
      description: "Capture stunning wildlife and scenic jungle moments.",
      icon: "📸",
    },
    {
      title: "Fort Exploration",
      description: "Discover ancient ruins and historic caves inside the forest.",
      icon: "🏰",
    },
    {
      title: "Forest Walks",
      description: "Enjoy peaceful natural surroundings and forest landscapes.",
      icon: "🌿",
    },
  ],

  experiences: [
    {
      title: "Wildlife Adventure",
      description:
        "Feel the excitement of exploring one of India’s top tiger reserves.",
    },
    {
      title: "Natural Beauty",
      description:
        "Enjoy lush forests, scenic valleys and peaceful wilderness.",
    },
    {
      title: "Historic Exploration",
      description:
        "Discover ancient forts, caves and mythological landmarks.",
    },
    {
      title: "Photography Paradise",
      description:
        "Capture unforgettable moments of wildlife and nature.",
    },
  ],

  gallery: [
    images.gallery1,
    images.gallery2,
    images.gallery3,
    images.gallery4,
    images.gallery5,
    images.gallery6,
    images.gallery7,
    images.gallery8,
    images.gallery9,
    images.gallery10,
    images.gallery11,
  ],

  travelInfo: {
    bestTime:
      "October to June — best season for wildlife safaris and tiger sightings",
    road: "Well-connected by road from Jabalpur, Katni and nearby cities.",
    rail: "The nearest railway station is Umaria Railway Station (~35 km).",
    air: "The nearest airport is Jabalpur Airport.",
  },

  duration: "2 Days / 1 Night",
};

export default bandhavgarh;