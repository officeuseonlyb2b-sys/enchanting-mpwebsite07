import type { DestinationContent } from "./types";

// All images served from Cloudinary
const images = {
  // Attraction images – mapped to parsiliattraction1..4
  parsiliattraction1:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/parsiliattraction1_bhdsmg.jpg",
  parsiliattraction2:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/parsiliattraction2_qgwzya.jpg",
  parsiliattraction3:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/parsiliattraction3_ayovwn.jpg",
  parsiliattraction4:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/parsiliattraction4_vhyk8m.jpg",

  // Gallery images – mapped to parsiligallary1..5
  parsiligallary1:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/parsiligallary1_somnvc.jpg",
  parsiligallary2:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/parsiligallary2_tvx86k.jpg",
  parsiligallary3:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/parsiligallary3_vvjmuq.jpg",
  parsiligallary4:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/parsiligallary4_im7eul.jpg",
  parsiligallary5:
    "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/parsiligallary5_fbce63.jpg",
};

const parsili: DestinationContent = {
  overviewParagraphs: [
    "Parsili is a hidden eco-tourism destination located on the banks of the Banas River near Sanjay Dubri Tiger Reserve in Madhya Pradesh.",
    "Surrounded by dense forests, river landscapes and rich wildlife, Parsili offers a peaceful escape for nature lovers and adventure seekers.",
    "Known for its riverside camping, wildlife experiences and untouched natural beauty, Parsili is often called the 'Mini Goa of Madhya Pradesh'.",
  ],

  attractions: [
    {
      title: "Banas River",
      description:
        "A scenic river flowing through Parsili, famous for its crystal-clear waters and tranquil surroundings.",
      image: images.parsiliattraction1,
    },
    {
      title: "Riverside Camping Area",
      description:
        "A picturesque camping destination where visitors can enjoy nature beside the river.",
      image: images.parsiliattraction2,
    },
    {
      title: "Sanjay Dubri Tiger Reserve",
      description:
        "A wildlife-rich forest reserve known for tigers, leopards, deer and diverse birdlife.",
      image: images.parsiliattraction3,
    },
    {
      title: "Forest Nature Trails",
      description:
        "Beautiful trails through dense forests offering opportunities for wildlife spotting and exploration.",
      image: images.parsiliattraction4,
    },
  ],

  thingsToDo: [
    {
      title: "Riverside Camping",
      description: "Enjoy a memorable stay beside the scenic Banas River.",
      icon: "🏕️",
    },
    {
      title: "Nature Walks",
      description: "Explore forest trails and natural landscapes.",
      icon: "🥾",
    },
    {
      title: "Wildlife Watching",
      description: "Spot birds and wildlife in nearby forest areas.",
      icon: "🦌",
    },
    {
      title: "Photography",
      description: "Capture stunning river, forest and wildlife scenes.",
      icon: "📸",
    },
    {
      title: "Bonfire Experience",
      description: "Relax with a campfire under the stars.",
      icon: "🔥",
    },
    {
      title: "Bird Watching",
      description: "Observe numerous resident and migratory bird species.",
      icon: "🦜",
    },
  ],

  experiences: [
    {
      title: "Riverside Escape",
      description:
        "Unwind amidst peaceful river views and untouched natural beauty.",
    },
    {
      title: "Forest Adventure",
      description:
        "Explore the wilderness surrounding Sanjay Dubri Tiger Reserve.",
    },
    {
      title: "Camping Experience",
      description:
        "Enjoy nights under the stars in one of Madhya Pradesh's most scenic camping destinations.",
    },
    {
      title: "Wildlife & Nature",
      description:
        "Experience rich biodiversity, forests and tranquil landscapes.",
    },
  ],

  gallery: [
    images.parsiligallary1,
    images.parsiligallary2,
    images.parsiligallary3,
    images.parsiligallary4,
    images.parsiligallary5,
  ],

  travelInfo: {
    bestTime:
      "October to March — ideal for camping, wildlife experiences and nature exploration",
    road:
      "Well-connected by road from Sidhi, Rewa and nearby towns.",
    rail:
      "The nearest railway station is Sidhi Railway Station.",
    air:
      "The nearest airport is Prayagraj Airport.",
  },

  duration: "2 Days / 1 Night",
};

export default parsili;