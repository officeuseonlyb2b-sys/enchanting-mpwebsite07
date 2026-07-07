import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to sonagiriattraction1..4
  sonagiriattraction1:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/sonagiriattraction1_qb1w3u.jpg",
  sonagiriattraction2:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/sonagiriattraction2_q860t9.jpg",
  sonagiriattraction3:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/sonagiriattraction3_ex0nxt.jpg",
  sonagiriattraction4:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/sonagiriattraction4_bat2zc.jpg",

  // Gallery images – mapped to sonagirigallary1..6
  sonagirigallary1:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/sonagirigallary1_ifdhbc.jpg",
  sonagirigallary2:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/sonagirigallary2_uy0ery.jpg",
  sonagirigallary3:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/sonagirigallary3_iyp8uf.jpg",
  sonagirigallary4:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/sonagirigallary4_nhwzpk.jpg",
  sonagirigallary5:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/sonagirigallary5_fsbtio.jpg",
  sonagirigallary6:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/sonagirigallary6_dehofw.jpg",
};

const sonagiri: DestinationContent = {
  overviewParagraphs: [
    "Sonagiri is one of the most important Jain pilgrimage destinations in India, renowned for its hilltop temples and spiritual significance.",
    "Located near Datia in Madhya Pradesh, Sonagiri is home to more than 100 beautifully crafted Jain temples spread across a sacred hill.",
    "The serene atmosphere, white marble temples and panoramic views make Sonagiri a remarkable destination for spirituality and heritage exploration.",
  ],

  attractions: [
    {
      title: "Sonagiri Jain Temple Complex",
      description:
        "A magnificent group of white Jain temples spread across the sacred Sonagiri Hill.",
      image: images.sonagiriattraction1,
    },
    {
      title: "Chandraprabhu Temple",
      description:
        "The main temple dedicated to the 8th Jain Tirthankara, Lord Chandraprabhu.",
      image: images.sonagiriattraction2,
    },
    {
      title: "Hilltop Temple Viewpoint",
      description:
        "A scenic viewpoint offering breathtaking panoramic views of the temple complex and surrounding landscape.",
      image: images.sonagiriattraction3,
    },
    {
      title: "Ancient Jain Shrines",
      description:
        "Historic shrines showcasing beautiful Jain architecture and spiritual heritage.",
      image: images.sonagiriattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Temple Darshan",
      description: "Visit the sacred Jain temples and seek spiritual peace.",
      icon: "🛕",
    },
    {
      title: "Hill Climb",
      description: "Climb the sacred hill to explore the temple complex.",
      icon: "🥾",
    },
    {
      title: "Meditation",
      description: "Experience tranquility in the peaceful surroundings.",
      icon: "🧘",
    },
    {
      title: "Photography",
      description: "Capture stunning views of white temples and landscapes.",
      icon: "📸",
    },
    {
      title: "Heritage Exploration",
      description: "Discover the rich history and architecture of Jain culture.",
      icon: "🏛️",
    },
    {
      title: "Spiritual Retreat",
      description: "Enjoy the serene and devotional atmosphere.",
      icon: "🪔",
    },
  ],

  experiences: [
    {
      title: "Jain Pilgrimage",
      description:
        "Experience one of the holiest Jain pilgrimage sites in India.",
    },
    {
      title: "Architectural Beauty",
      description:
        "Admire the elegant white temples and intricate craftsmanship.",
    },
    {
      title: "Spiritual Serenity",
      description:
        "Find peace amidst sacred temples and tranquil surroundings.",
    },
    {
      title: "Hilltop Views",
      description:
        "Enjoy breathtaking panoramic views from the temple hill.",
    },
  ],

  gallery: [
    images.sonagirigallary1,
    images.sonagirigallary2,
    images.sonagirigallary3,
    images.sonagirigallary4,
    images.sonagirigallary5,
    images.sonagirigallary6,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal weather for pilgrimage and sightseeing",
    road:
      "Well-connected by road from Datia, Gwalior and Jhansi.",
    rail:
      "Sonagir Railway Station is located near the temple complex.",
    air:
      "The nearest airport is Gwalior Airport.",
  },

  duration: "1 Day",
};

export default sonagiri;