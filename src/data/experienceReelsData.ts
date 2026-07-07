// =============================================================
// Experience Reels — Home + Explore (Category) sections
// -------------------------------------------------------------
// HOW TO ADD A NEW EXPERIENCE REEL (3 simple steps):
//   1. Drop your video in: src/assets/reels/experience/your-video.mp4
//   2. (optional) Drop a thumbnail in the same folder
//   3. Import below and append a new object to `experienceReelsData`
//
// TAGS drive category filtering site-wide. Allowed values:
//   "nature" | "heritage" | "wildlife" | "spiritual"
// =============================================================


import type { ReelItem } from "@/data/reelTypes";

export const experienceReelsData: ReelItem[] = [
  {
    id: "light-sound-show",
    title: "Light & Sound Show",
    location: "Madhya Pradesh",
    video: "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/videos/light-sound-show_fp1xkt.mp4",
    tags: ["heritage"],
  },
  {
    id: "bhimbetka-cave-paintings",
    title: "Bhimbetka Cave Paintings",
    location: "Bhimbetka",
    video: "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/bhimbetka-cave-paintings_lfo153.mp4",
    tags: ["heritage"],
  },
  {
    id: "dhuandhar-falls-ropeway",
    title: "Dhuandhar Falls Ropeway",
    location: "Jabalpur",
    video: "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/videos/dhuandhar-falls-ropeway_qo3egh.mp4",
    tags: ["nature"],
  },
  {
    id: "heritage-walk-gwalior",
    title: "Heritage Walk Tour",
    location: "Gwalior",
    video: "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/heritage-walk-gwalior_vwipsy.mp4",
    tags: ["heritage"],
  },
  {
    id: "snorkeling-trek",
    title: "snorkeling-Trek",
    location: "Pachmarhi",
    video: "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/videos/Snorkeling-Trek_w6kakt.mp4",
    tags: ["nature"],
  },
  {
    id: "meditation-pachmarhi",
    title: "meditation-pachmarhi",
    location: "Pachmarhi",
    video: "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/videos/meditation-pachmarhi_wqecbv.mp4",
    tags: ["nature"],
  },
  {
    id: "tribal-museum",
    title: "tribal-museum",
    location: "Bhopal",
    video: "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/videos/Tribal-Museum_xffjhx.mp4",
    tags: ["heritage"],
  },
  {
    id: "birds-watching",
    title: "birds watching",
    location: "Madhya Pradesh",
    video: "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/videos/birds-watching-madhya-pradesh_ksj91d.mp4",
    tags: ["wildlife"],
  },
  {
    id: "harsiddhi-aarti",
    title: "Harsiddhi Mata Aarti",
    location: "Ujjain",
    video: "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/videos/harsiddhi-aarti-ujjain_buzqgm.mp4",
    tags: ["spiritual"],
  },
  {
    id: "bhasma-aarti",
    title: "Bhasma Aarti",
    location: "Ujjain",
    video: "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/bhasm-aarti-ujjain_z30cod.mp4",
    tags: ["spiritual"],
  },
  {
    id: "chitrakoot-spiritual-sites",
    title: "Chitrakoot Spirituals Sites",
    location: "Chitrakoot",
    video: "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/images/chitrakoot-spiritual-sites_q8ehz5.mp4",
    tags: ["spiritual"],
  },
  {
    id: "narmada-aarti",
    title: "Narmada Aarti",
    location: "Jabalpur",
    video: "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/videos/narmada-aarti-gwarighat_dkdmhv.mp4",
    tags: ["spiritual"],
  },
  {
    id: "abhiskhekam",
    title: "Abhiskhekam",
    location: "Omkareswar",
    video: "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/videos/abhiskekam-omkareswar_j2kzv2.mp4",
    tags: ["spiritual"],
  },
  {
    id: "mahakal-corridor",
    title: "Mahakal Corridor",
    location: "Ujjain",
    video: "https://mtctadcawavnibzrhkin.supabase.co/storage/v1/object/public/media/videos/mahakal-corridor_dx4j21.mp4",
    tags: ["spiritual"],
  },
];
