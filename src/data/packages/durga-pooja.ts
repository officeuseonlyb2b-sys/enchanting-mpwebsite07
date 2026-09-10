/**
 * Durga Pooja Exclusive – 6 packages imported from the operator's Excel sheet.
 * Source: Durga_Pooja_Exclusive_program.xlsx
 */
import type { PackageData } from "./types";
import ancientMadhyaPradesh from "@/assets/package-banners/ancient-madhya-pradesh.webp.asset.json";
import essenceOfMadhyaPradesh from "@/assets/package-banners/essence-of-madhya-pradesh.webp.asset.json";
import historicalSagaOfMadhyaPradesh from "@/assets/package-banners/historical-saga-of-madhya-pradesh.webp.asset.json";
import excitingMadhyaPradesh from "@/assets/package-banners/exciting-madhya-pradesh.webp.asset.json";
import kingdomOfMahakal from "@/assets/package-banners/kingdom-of-mahakal.webp.asset.json";
import thrillingMadhyaPradesh from "@/assets/package-banners/thrilling-madhya-pradesh.webp.asset.json";

export const durgaPoojaPackages: PackageData[] = [
  {
    id: "ancient-madhya-pradesh",
    name: "Ancient Madhya Pradesh",
    location:
      "Gwalior - Orchha - Khajuraho - Sanchi - Bhopal - Bhimbetka - Bhojpur - Ujjain - Omkareshwar - Maheshwar - Mandu - Indore",
    duration: "9 Days / 8 Nights",
    days: 9,
    price: 28000, // lowest slab (06 Pax)
    originalPrice: 38700, // 02 Pax rate
    category: "Heritage",
    tourCategory: "Durga Pooja Exclusive",
    programCategory: "Durga Pooja Exclusive",
    validity: "Oct to 10 Nov",
    categories: ["Heritage", "Spiritual"],
    image: ancientMadhyaPradesh.url,
    highlights: [
      "Discover Gwalior's enduring glory as the 'Pearl Among the Fortresses of Hind.'",
      "Encounter spiritual transcendence amidst the majestic Jain statues of Siddhanchal and Parvat.",
      "Experience the breathtaking sunrise vista from Gwalior Fort's ramparts.",
      "Experience witnessing one of the top 10 most intricately carved temples dedicated to Lord Vishnu, the Sahasrabahu Temple.",
      "Marvel at Jai Vilas Palace's grandeur with the world's largest chandelier and silver toy train",
      "Step into the exquisite craftsmanship of Tomb of Ghaus Mohammad's intricate jaalis.",
      "Discover Orchha: where legends meet adventure along the Betwa River, with thrilling rafting, rich heritage, and vibrant bird sanctuary.",
      "Experience the timeless beauty of Khajuraho's UNESCO-listed temples, adorned with exquisite sculptures and rich historical tales.",
      "At Chaturbhuj Temple in Khajuraho, catch the mesmerizing sight of the last sunbeam touching the feet of Lord Vishnu.",
      "Sanchi Stupa: Timeless marvel of Buddhist grandeur, a symbol of serenity and architectural brilliance, captivating travelers with its spiritual aura.",
      "Bhimbetka Rock Shelters: Ancient cave art unveiling humanity's earliest creativity, a mesmerizing journey through time.",
      "A colossal testament to ancient engineering, housing the unfinished marvel of one of the world's largest Shiva lingam, leaving travelers in awe of its architectural ambition.",
      "The Kingdom of Mahakaal, where ancient spirituality reigns supreme, beckoning travelers with its sacred shrines and mystical allure.",
      "Harsiddhi Mata Temple Aarti: A mesmerizing spectacle of devotion and reverence, illuminating hearts with the divine energy of the sacred ritual.",
      "Omkareshwar: Sacred island retreat, where the divine Om symbol is etched naturally, evoking spiritual wonder amidst scenic Narmada vistas.",
      "Maheshwar: Ancient kingdom of Maheshmati, where echoes of regal splendor and timeless charm resonate through majestic forts and sacred riverside ghats.",
      "Maheshwar's sunset boat ride: Glide along the Narmada, as dusk paints the sky, weaving a tapestry of tranquility and awe, etching memories that linger forever.",
      "Mandu: Where history whispers through magnificent ruins, weaving tales of romance and valor, enchanting every traveler who walks its ancient pathways.",
      "Sunset at Rani Roopmati Pavilion, Mandu: Experience the ethereal beauty as the sun paints the sky in golden hues, illuminating the historic ruins with a mesmerizing glow, etching memories that transcend time.",
      "Indore: City of flavors and flair, where bustling markets, rich heritage, and culinary delights captivate every traveler's senses.",
    ],
    description:
      "Ancient Madhya Pradesh — a 9‑day heritage & spiritual journey across the heart of India, curated under our Durga Pooja Exclusive program (valid Oct to 10 Nov).",
    itinerary: [
      {
        day: 1,
        title: "Arrive Gwalior - TOUR BEGINS",
        description:
          "Upon arrival at Gwalior airport or railway station, you will be met by our driver cum company representative who will greet you and will transfer you to hotel.\nIn the afternoon, visit Jai Vilas Palace, renowned for its stunning architecture and the iconic Durbar Hall, adorned with magnificent chandeliers and gold furnishings. The museum showcases neo-classical rooms, crystal furniture, and a unique silver train dining table.\n\nExplore the Tomb of Ghaus Mohammad & Tansen, showcasing exquisite early Mughal architecture. The tomb of Ghaus Mohammad, an Afghan prince, is a fine example of Mughal design, while the smaller tomb of Tansen, the famous musician from Emperor Akbar’s court, adds to the historical significance of the site. Conclude your tour with a visit to Maharaj Bada, the central market square of Gwalior, surrounded by historical buildings and bustling with local vendors, offering a vibrant glimpse into the city's daily life and culture. Later return to your hotel. Overnight at Gwalior.\n\nMeals : NA",
      },
      {
        day: 2,
        title: "Gwalior - Orchha by road (121 kms & 2.5 Hours approx)",
        description:
          "Early morning begin your visit to Gwalior Fort at sunrise, experiencing the breathtaking views and serene ambiance as the first light illuminates this majestic hilltop fort. Start with a stroll through the fort's significant sites, including the Jain Statues of Siddhanchal Parvat, Sahastra Bahu Temple, Teli Ka Mandir, Gurudwara Data Bandi Chod, Mansingh Palace, and Karan Mahal. The early morning light enhances the intricate details of these architectural marvels, offering a unique and peaceful exploration before the crowds arrive. This sunrise visit provides a tranquil and awe-inspiring start to your day in Gwalior.\n\nAfter visits return to hotel & have breakfast. Later check-out from the hotel and drive to Orchha. Arrive Orchha & check in at the hotel.\nAfternoon embark on a captivating half-day city tour of Orchha, where history and spirituality intertwine seamlessly. Explore the majestic Orchha Fort Complex and delve into the 17th-century Chaturbhuj Temple's rich history. Admire the serene beauty of the ancient Chhatris by the Betwa River. Conclude your day with the unique guard of honor ceremony at Ram Raja Temple since it's the only place where Lord Ram is considered as King, just before the soul-stirring Aarti ceremony. Immerse yourself in Orchha's timeless charm and cultural heritage, creating memories to cherish for a lifetime. Later return to your hotel & Overnight in Orchha.\n\nMeals : Breakfast",
      },
      {
        day: 3,
        title: "Orchha - Khajuraho by road (172 kms & 3 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel & drive to Khajuraho. Arrive Khajuraho & check in at the hotel.\n\nEmbark on a captivating half-day city tour of Khajuraho, where ancient history and exquisite artistry await. Begin your morning exploration at the Western Group of Temples, home to some of Khajuraho's most iconic structures, including the awe-inspiring Kandariya Mahadev, Lakshmana, and Vishvanath temples. Marvel at the intricate carvings and architectural brilliance that adorn these sacred sites, each telling a story of devotion and craftsmanship from centuries past.\n\nContinue your journey to the Eastern Group of Temples, where a serene ambiance and lesser-known treasures await. Discover hidden gems such as the Jain Group, Parsvanath, and Ghantai temples, each offering a glimpse into Khajuraho's spiritual and artistic legacy. Later return to your hotel. Overnight at Khajuraho.\n\nMeals : Breakfast",
      },
      {
        day: 4,
        title: "Khajuraho - Sanchi - Bhopal by road  (372 kms & 8 Hours approx)",
        description:
          "Morning after breakfast check-out from the hotel & drive to Bhopal in route visiting Sanchi Stupa.\n\nExplore the ancient marvel of Sanchi, a UNESCO World Heritage Site renowned for its Great Stupa, commissioned by Emperor Ashoka in the 3rd century BCE. Discover the intricately carved gateways depicting Buddha's life and Jataka tales, and wander through the vast monastic complex with its stupas, temples, and pillars. Sanchi's rich history and stunning Buddhist art make it an essential destination for heritage and spiritual enthusiasts. After visiting Sanchi continue drive to Bhopal. Arrive Bhopal & check in at the hotel. Overnight at Bhopal.\n\nMeals : Breakfast",
      },
      {
        day: 5,
        title: "Bhopal (Excursion to Bhojpur & Bhimbetka)",
        description:
          "Morning after breakfast proceed to explore the ancient rock shelters of Bhimbetka, a UNESCO World Heritage Site renowned for its prehistoric rock art dating back 30,000 years. Nestled in the Vindhya mountains, Bhimbetka showcases over 750 rock shelters with diverse paintings depicting hunting, dancing, and daily life. This site, named after Bhima from the Mahabharata, offers a unique glimpse into the evolution of human culture and the natural beauty of its surroundings, making it an unmissable destination for history and nature enthusiasts.\n\nLater discover the historical marvel of Bhojpur, renowned for the magnificent, unfinished Bhojeshwar Temple, which houses one of India's largest lingams, measuring 7.5 feet high and 17.8 feet in circumference. Attributed to the legendary Raja Bhoj, this site showcases advanced medieval engineering with its monolithic constructions and ancient dam remnants. Additionally, explore intricate Jain temples and enjoy the serene natural beauty of the surrounding landscapes, making Bhojpur a must-visit destination for history and architecture enthusiasts.\n\nAfternoon drive back to the city to embark on an exploration of Bhopal, starting with the majestic Taj-ul-Masajid, one of India's largest mosques, showcasing its impressive architecture and expansive courtyard. Continue to Bharat Bhavan, a multi-arts complex designed by Charles Correa, where you can delve into tribal and folk art. Conclude your tour at Bhojtal (Upper Lake), enjoying a serene boat ride (On direct payment basis) amidst the beautiful surroundings, making for a perfect end to your Bhopal city tour. Latewr return to ypur hotel & Overnight at Bhopal.\nMeals : Breakfast",
      },
      {
        day: 6,
        title: "Bhopal - Ujjain by road (195 kms & 4 Hours approx)",
        description:
          "Morning after breakfast check-out from the hotel & drive to Ujjain \"The Kingdom of Mahakaal\". Arrive Ujjain & check in at the hotel.\n\nAfternoon embark on a spiritual journey through Ujjain, starting with the historic Sandipani Ashram and the tranquil Mangal Nath Temple on the banks of the Shipra River. Explore the unique Kaal Bhairav Temple known for its ritual of offering liquor to the deity, and then visit the revered Mahakaleshwar Temple, a major pilgrimage site. Discover the newly developed Mahakaal Corridor with its captivating murals and sculptures before heading to Ram Ghat, a sacred riverside spot. Conclude your day at the Harsiddhi Mata Temple, renowned for its architecture and spiritual ambiance. As the sun sets, witness the mesmerizing Aarti ceremony at Harsiddhi Mata Temple, where 1051 earthen lamps illuminate the evening sky, creating a divine spectacle of light and sound. Later return to your hotel. Overnight at Ujjain.\n\nMeals : Breakfast",
      },
      {
        day: 7,
        title: "Ujjain - Omkareshwar - Maheshwar by road (213 kms & 5.5 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel and drive to Maheshwar via visiting Omkareshwar.\nAfternoon enjoy half-day tour of Omkareshwar, a serene enclave on the banks of the Narmada River. Begin at the revered Omkareshwar Temple, dedicated to Lord Shiva, soaking in its divine ambiance and intricate architecture. Then, explore the ancient Mamleshwar Temple across the river, steeped in religious significance. Conclude with an optional tranquil boat ride along the Narmada, offering scenic views of the temple town (available on direct payment basis). This spiritual journey promises a serene retreat amidst sacred shrines and the gentle flow of the river.\n\nEmbark on an enchanting journey through Maheshwar, where the timeless beauty of the Narmada River awaits. Begin your exploration by marveling at the grandeur of Maheshwar Fort, adorned with intricate carvings that echo tales of bygone eras. As the sun begins its descent, head to the serene ghats lining the riverbank, where the golden hues of sunset cast a mesmerizing glow over the landscape. Here, immerse yourself in the tranquil ambiance, watching as the sky transforms into a canvas of vibrant colors.\n\nBut the adventure doesn't end there. Step aboard a traditional boat and set sail on the gentle waters of the Narmada, as the last rays of sunlight illuminate the horizon. As you glide along the river, witness the silhouette of Maheshwar Fort against the backdrop of the setting sun, creating a breathtaking scene that will remain etched in your memory. (boat ride available on direct payment basis). After visits return to your hotel. Overnight at Maheshwar.\n\nMeals : Breakfast & (Dinner In 3 Star, 3 Star Deluxe & 4 Star Hotel)",
      },
      {
        day: 8,
        title: "Maheshwar - Mandu by road (40 kms & 1 Hour approx)",
        description:
          "Morning after breakfast check out from the hotel and drive to Mandu. Arrive Mandu & check in at the hotel.\n\nEmbark on a full day journey through Mandu's architectural wonders and scenic landscapes, beginning with a morning exploration of its iconic landmarks. Start your day at Jahaz Mahal, a palace resembling a ship floating on water, followed by a visit to Hindola Mahal, known for its sloping walls and unique design. Discover the grandeur of Jama Masjid, one of India's largest mosques, and marvel at Hoshang Shah's Tomb, India's first marble structure. Then, immerse yourself in the blend of Hindu and Afghan architecture at Nilkanth Mahal.\n\nAs the afternoon unfolds, continue your adventure with a visit to Rewa Kund, a tranquil reservoir nestled amidst lush greenery. Explore Baz Bahadur's Palace, once the residence of Mandu's last independent ruler, renowned for its stunning architecture. Delve into history at Roopmati's Palace, offering panoramic views of the Narmada River and countryside. Conclude your day with a mesmerizing sunset experience at Rupmati's Pavilion, where legends come to life against the backdrop of Mandu's timeless beauty. With its rich heritage and captivating landscapes, Mandu promises an unforgettable journey into history and nature's embrace. After visits return to your hotel. Overnight at Mandu.\n\nMeals : Breakfast",
      },
      {
        day: 9,
        title: "Mandu - Indore by road (98 kms & 2.5 Hours approx) & Departure  from Indore - END TOUR",
        description:
          "Morning, after breakfast check out from the hotel & drive to Indore, Arrive Indore.\n\nEmbark on a captivating half-day journey through the cultural heart of Indore, beginning with a visit to the iconic Rajwada, a splendid architectural marvel steeped in history. Continue your exploration at Bada Ganpati Temple, where the colossal idol of Lord Ganesh inspires awe and devotion. Then, seek blessings at Khajrana Ganesh Temple, known for its spiritual ambiance and revered deity.\n\nExperience the serene beauty of Kanch Mandir, adorned with exquisite mirror work that reflects the city's artistic heritage. Delve into the historical significance of Boliya Chattri, a testament to the regal legacy of Indore's rulers. Finally, immerse yourself in the vibrant ambiance of 56 Dukaan Street, a bustling marketplace offering a plethora of local delights, from handicrafts to street food delicacies.\n\nLater visits in time transfer to railway station or airport to board train or flight for onward Journey.\n\nMeals : Breakfast",
      },
    ],
    included: [
      "Meeting and assistance on arrival/departure at Airport/hotel by our representative.",
      "08 nights on a Double/Triple-sharing basis with breakfast.",
      "▪ In Gwalior: Includes with Breakfast",
      "▪ In Orchha: Includes with Breakfast",
      "▪ In Khajuraho: Includes with Breakfast",
      "▪ In Bhopal: Includes with Breakfast",
      "▪ In Ujjain: Includes with Breakfast",
      "▪ In Maheswhar: Includes with (Breakfast & Dinner)",
      "▪ In Mandu: Includes with Breakfast",
      "Meals Included:",
      "▪ 08 Breakfast",
      "▪ 01 Dinner",
      "✓ Transfers and Travel: Arrival/departure transfers, sightseeing, and travel by air-conditioned vehicle as per itinerary.",
      "✓ In-Vehicle Amenities: 2 Water Bottles (250 ml) Per Person Per Day, Tissues, Hand Sanitizers & masks.",
      "✓ Taxes: 5% GST Aplicable on Total Bill.",
    ],
    excluded: [
      "Any services other than the ones mentioned above or air fares, train or flight tickets, guides, entrances fee, activities, meals other than those mentioned above or any items of Personal nature like, telephone calls, laundry, drinks, Camera fees or tips etc.",
    ],
    paxPricing: [
      { pax: "02 Pax", vehicle: "AC Sedan Car", price: 38700 },
      { pax: "04 Pax", vehicle: "AC Ertiga", price: 32900 },
      { pax: "06 Pax", vehicle: "AC Ertiga", price: 28000 },
    ],
    featured: true,
    offer: false,
  },
  {
    id: "essence-of-madhya-pradesh",
    name: "Essence Of Madhya Pradesh",
    location:
      "Gwalior - Morena - Datia - Orchha - Khajuraho - Jabalpur - Kanha National Park - Nagpur",
    duration: "7 Days / 6 Nights",
    days: 7,
    price: 26500,
    originalPrice: 45500,
    category: "Wildlife",
    tourCategory: "Durga Pooja Exclusive",
    programCategory: "Durga Pooja Exclusive",
    validity: "Oct to 10 Nov",
    categories: ["Heritage", "Spiritual", "Wildlife & Nature"],
    image: essenceOfMadhyaPradesh.url,
    highlights: [
      "Discover Gwalior's enduring glory as the 'Pearl Among the Fortresses of Hind.'",
      "Encounter spiritual transcendence amidst the majestic Jain statues of Siddhanchal and Parvat.",
      "Experience the breathtaking sunrise vista from Gwalior Fort's ramparts.",
      "Experience witnessing one of the top 10 most intricately carved temples dedicated to Lord Vishnu, the Sahasrabahu Temple.",
      "Marvel at Jai Vilas Palace's grandeur with the world's largest chandelier and silver toy train",
      "Step into the exquisite craftsmanship of Tomb of Ghaus Mohammad's intricate jaalis.",
      "Unveil Mitaoli's Chausath Yogini Temple, whose circular design and architectural brilliance inspired the iconic Parliament House in New Delhi.",
      "Explore Padavali fortress, guarded by majestic lions, where history and divine worship converge amidst intricately inscribed stones echoing tales of ancient eras.",
      "Discover Bateshwar's nearly 200 majestic sandstone temples amidst lush hills, serenaded by colorful birds, including the iconic peacock.",
      "Datia Palace: a marvel of Bundela Dynasty architecture, blending Mughal and Rajput styles, offering a captivating glimpse into rich history and cultural opulence.",
      "Discover Orchha: where legends meet adventure along the Betwa River, with thrilling rafting, rich heritage, and vibrant bird sanctuary.",
      "Experience the timeless beauty of Khajuraho's UNESCO-listed temples, adorned with exquisite sculptures and rich historical tales.",
      "At Chaturbhuj Temple in Khajuraho, catch the mesmerizing sight of the last sunbeam touching the feet of Lord Vishnu.",
      "Jabalpur: Where majestic marble cliffs, thundering waterfalls, and rich history converge to captivate every traveler's soul.",
      "Bhedaghat's boat ride: A journey through nature's masterpiece, where marble cliffs and cascading waterfalls create a breathtaking symphony of wonder and awe.",
      "Kanha National Park: A wildlife paradise where Bengal tigers roam, rare barasingha thrive, and breathtaking landscapes captivate every explorer.",
      "Jeep Safari at Tiger Reserve: Dive into the heart of the wild, roaring through untamed terrain in pursuit of majestic predators.",
    ],
    description:
      "Essence Of Madhya Pradesh — a 7‑day heritage, spiritual & wildlife journey, curated under our Durga Pooja Exclusive program (valid Oct to 10 Nov).",
    itinerary: [
      {
        day: 1,
        title: "Arrive Gwalior - TOUR BEGINS",
        description:
          "Upon arrival at Gwalior airport or railway Station, you will be met by our company representative who will greet you and will transfer you to hotel.\nAfternoon exploring the iconic Gwalior Fort, which includes significant sites such as the Jain Statues of Siddhanchal Parvat, Sahastra Bahu Temple, Teli Ka Mandir, Gurudwara Data Bandi Chod, Mansingh Palace, and Karan Mahal. Later return to your Hotel & Overnight at Gwalior.\n\nMeals : NA",
      },
      {
        day: 2,
        title: "Gwalior (Excursion to Morena)",
        description:
          "Morning after breakfast, embark on an excursion to Mitawali Temple, Garhi Padavali, and the Bateswara Group of Temples. Begin with a visit to the Chausath Yogini Temple at Mitawali, perched atop a hill with stunning views. Its circular design inspired the Parliament House in New Delhi. Next, explore the 18th-century Padavali fortress, featuring a temple for Lord Shiva with ancient inscriptions and details. Continue to the Bateshwar complex, where nearly 200 sandstone temples dedicated to Shiva and Vishnu, built between the 8th and 10th centuries, have been reclaimed by the Archaeological Survey of India since 1988. The site is also a haven for wildlife. Post visits drive back to the city.\n\nAfternoon Visit Jai Vilas Palace, renowned for its stunning architecture and the iconic Durbar Hall, adorned with magnificent chandeliers and gold furnishings. The museum showcases neo-classical rooms, crystal furniture, and a unique silver train dining table. Then, explore the Tomb of Ghaus Mohammad & Tansen, showcasing exquisite early Mughal architecture. The tomb of Ghaus Mohammad, an Afghan prince, is a fine example of Mughal design, while the smaller tomb of Tansen, the famous musician from Emperor Akbar’s court, adds to the historical significance of the site. Conclude your tour with a visit to Maharaj Bada, the central market square of Gwalior, surrounded by historical buildings and bustling with local vendors, offering a vibrant glimpse into the city's daily life and culture. Later visits return to your hotel. Overnight in Gwalior.\n\nMeals : Breakfast",
      },
      {
        day: 3,
        title: "Gwalior - Sonagiri - Datia - Orchha by road (132 kms & 3 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel & drive to Orchha en route visiting Sonagiri Jain Temple & Datia Palace.\n\nThe Jain Temples of Sonagir, located 15 km from Datia, are a renowned pilgrimage site featuring 77 marble-clad temples built on the slopes of a hill, dating back to the 17th century. These temples are a testament to the rich Jain architectural heritage and spiritual significance. The most prominent temple is dedicated to Chandranatha, the 8th Tirthankara, known for its exquisite carvings and serene ambiance. The hilltop offers a breathtaking view of the surrounding landscape, adding to the tranquil and spiritual experience of visitors. Every April, Sonagir comes alive with an annual fair, attracting thousands of devotees and tourists who gather to celebrate and participate in various religious rituals. This fair not only showcases the vibrant culture and traditions of the Jain community but also provides an opportunity for visitors to immerse themselves in the spiritual and historical essence of Sonagir.\n\nAfter visit drive to Datia arrive Datia proceed to visit Bir Singh Palace / The Datia Palace is built in 1620 by Bundela king Raja Bir Singh Deo, an architectural marvel, intricately weaves geometric patterns throughout its design, embodying a perfect fusion of symmetry and symbolism. Its unique Swastika-like plan, resonating with spiritual significance in Hindu culture, forms the very essence of its layout, symbolizing harmony and auspiciousness. Each facet of the palace, meticulously adorned with ornate facades and elegant courtyards, bears witness to the masterful incorporation of geometric shapes and motifs. Rooted in the ancient principles of Vastu Shastra, the palace's geometric precision not only captivates the eye but also evokes a profound sense of cultural heritage. Through its meticulous craftsmanship and symbolic depth, the Datia Palace stands as a timeless testament to the enduring beauty and spiritual significance of geometric design in architecture, inviting visitors to immerse themselves in its divine symmetry and architectural splendor. Later visits drive to Orchha. arrive Orchha & check in at the hotel.\nAfternoon embark on a captivating half-day city tour of Orchha, where history and spirituality intertwine seamlessly. Explore the majestic Orchha Fort Complex and delve into the 17th-century Chaturbhuj Temple's rich history. Admire the serene beauty of the ancient Chhatris by the Betwa River. Conclude your day with the unique guard of honor ceremony at Ram Raja Temple since it's the only place where Lord Ram is considered as King, just before the soul-stirring Aarti ceremony. Immerse yourself in Orchha's timeless charm and cultural heritage, creating memories to cherish for a lifetime. Later return to your hotel. Overnight in Orchha.\n\nMeals : Breakfast",
      },
      {
        day: 4,
        title: "Orchha - Khajuraho by road (172 kms & 3 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel & drive to Khajuraho. Arrive Khajuraho & check in at the hotel.\n\nAfternoon embark on a captivating half-day city tour of Khajuraho, where ancient history and exquisite artistry await. Begin your morning exploration at the Western Group of Temples, home to some of Khajuraho's most iconic structures, including the awe-inspiring Kandariya Mahadev, Lakshmana, and Vishvanath temples. Marvel at the intricate carvings and architectural brilliance that adorn these sacred sites, each telling a story of devotion and craftsmanship from centuries past.\n\nContinue your journey to the Eastern Group of Temples, where a serene ambiance and lesser-known treasures await. Discover hidden gems such as the Jain Group, Parsvanath, and Ghantai temples, each offering a glimpse into Khajuraho's spiritual and artistic legacy.\n\nAs the day draws to a close, make your way to Chaturbhuj Temple and witness the enchanting sunset, where the last light of the day bathes the beautiful statue of Lord Vishnu in a golden glow, creating a moment of serenity and spiritual reflection. One can also enjoy the sound and light show at the Western Group of Temples (on a direct payment basis). Later return to your hotel. Overnight at Khajuraho.\n\nMeals : Breakfast",
      },
      {
        day: 5,
        title: "Khajuraho - Jabalpur by road (257 kms & 6 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel & drive to Jabalpur. Arrive Jabalpur check in at the hotel.\n\nAfternoon, delve into the historical and cultural treasures of Jabalpur. Begin your exploration with a visit to the Rani Durgavati Museum, which is home to a treasure trove of artifacts showcasing the region's rich heritage. Next, discover the iconic Madan Mahal Fort, a historic landmark perched atop a hill, offering panoramic views of the surrounding landscape. Marvel at the famous Balancing Rock, a geological wonder that defies gravity. Conclude your afternoon with a serene retreat to Pisan Hari Ki Madhaiya, nestled amidst tranquil landscapes.\n\nAs evening descends, head to Gwarighat to conclude your day with an experience of spiritual ambiance. Here, on the banks of the Narmada River, devotees gather for evening rituals. Witness the serene rituals and immerse yourself in the tranquil atmosphere as you reflect on the day's adventures. This comprehensive tour offers a perfect blend of natural beauty, cultural exploration, and spiritual experiences, leaving you with lasting memories of Jabalpur's diverse attractions. Later return to your hotel. Overnight at Jabalpur.\n\nMeals : Breakfast",
      },
      {
        day: 6,
        title: "Jabalpur - Kanha National Park by road (125 kms & 3 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel & drive to Kanha National Park. Arrive Kanha National Park check in at the hotel. Enjoy the rest of the day at leisure, enjoy facilities available at the lodge.\n\nEmbark on an exhilarating afternoon jeep safari through Kanha National Park, renowned as the Tiger Capital of the world. As the day unfolds, prepare for captivating wildlife sightings, including Bengal tigers, leopards, wild dogs, and the majestic gharial. Traverse diverse landscapes, from dense forests to sprawling grasslands, each offering a glimpse into the park's rich biodiversity. Feel the anticipation building as you venture deeper into the heart of the wilderness, with every turn revealing new surprises. Keep your camera ready to capture the beauty of nature in its rawest form. It's an adventure filled with excitement and wonder, promising memories that will last a lifetime. Overnight at Kanha National Park.\n\nMeals : Breakfast, Lunch & Dinner",
      },
      {
        day: 7,
        title: "Kanha National Park - Nagpur by road (254 kms & 5.5 Hours approx) & Departure from Nagpur -TOUR END",
        description:
          "Early morning embark on a captivating morning jeep safari through Kanha National Park, the Tiger Capital of the world. As the sun rises, anticipate thrilling encounters with Bengal tigers, leopards, wild dogs, and the elusive gharial. Traverse diverse habitats, from dense forests to open grasslands, soaking in the sights and sounds of the wilderness. Feel the cool breeze on your face and listen to the calls of birds echoing through the trees. Catch your breath as you spot your first tiger, a sight that epitomizes the park's allure. It's an adventure you'll never forget, leaving you with a deeper appreciation for nature's wonders. enjoy packed breakfast during the safari.\n\nLater return to your hotel & later check out from the hotel drive to Nagpur. Arrive Nagpur & In time transfer to railway station or airport to board train or flight for onward Journey.\n\nMeals : Breakfast",
      },
    ],
    included: [
      "Meeting and assistance on arrival/departure at Airport/hotel by our representative.",
      "Accommodation and Meals",
      "▪ 06 nights on a Double/Triple-sharing basis with breakfast.",
      "▪ In Gwalior: Includes with Breakfast",
      "▪ In Orchha: Includes with Breakfast",
      "▪ In Khajuraho: Includes Breakfast",
      "▪ In Jabalpur: Includes with Breakfast",
      "▪ In Kanha National Park: Includes with (Breakfast, Lunch & Dinner)",
      "o Meals Included:",
      "▪ 06 Breakfasts",
      "▪ 01 Lunch",
      "▪ 01 Dinner",
      "✓ Transfers and Travel: Arrival/departure transfers, sightseeing, and travel by air-conditioned vehicle as per itinerary.",
      "✓ Experience 01 Afternoon Jeep Safari at Kanha National Park on private basis with naturalist",
      "✓ Experience 01 early morning Jeep Safari at Kanha National Park on private basis with naturalist",
      "✓ Enjoy boat ride through the 100 feet high white Marble rocks of Bhedaghat.",
      "✓ In-Vehicle Amenities: 2 Water Bottles (250 ml) Per Person Per Day, Tissues, Hand Sanitizers & masks.",
      "Mineral water 02 (250 Ml.) Water bottles Per Person, Per Day, Tissues, Hand Sanitizers, Masks etc. in vehicle during the tour.",
      "✓ Taxes: 5% GST Aplicable on Total Bill.",
    ],
    excluded: [
      "Any services other than the ones mentioned above or air fares, train or flight tickets, guides, entrances fee, activities, meals other than those mentioned above or any items of Personal nature like, telephone calls, laundry, drinks, Camera fees or tips etc.",
    ],
    paxPricing: [
      { pax: "02 Pax", vehicle: "AC Sedan Car", price: 45500 },
      { pax: "04 Pax", vehicle: "AC Ertiga", price: 33400 },
      { pax: "06 Pax", vehicle: "AC Ertiga", price: 26500 },
    ],
    featured: true,
    offer: false,
  },
  {
    id: "historical-saga-of-madhya-pradesh",
    name: "Historical Saga Of Madhya Pradesh",
    location:
      "Gwalior - Morena - Sonagir - Datia - Orchha - Khajuraho - Sanchi - Bhopal - Bhimbetka - Bhojpur - Ujjain - Omkareshwar - Maheshwar - Mandu - Indore",
    duration: "11 Days / 10 Nights",
    days: 11,
    price: 33500,
    originalPrice: 46300,
    category: "Heritage",
    tourCategory: "Durga Pooja Exclusive",
    programCategory: "Durga Pooja Exclusive",
    validity: "Oct to 10 Nov",
    categories: ["Heritage", "Spiritual"],
    image: historicalSagaOfMadhyaPradesh.url,
    highlights: [
      "Discover Gwalior's enduring glory as the 'Pearl Among the Fortresses of Hind.'",
      "Encounter spiritual transcendence amidst the majestic Jain statues of Siddhanchal and Parvat.",
      "Experience the breathtaking sunrise vista from Gwalior Fort's ramparts.",
      "Experience witnessing one of the top 10 most intricately carved temples dedicated to Lord Vishnu, the Sahasrabahu Temple.",
      "Marvel at Jai Vilas Palace's grandeur with the world's largest chandelier and silver toy train",
      "Step into the exquisite craftsmanship of Tomb of Ghaus Mohammad's intricate jaalis.",
      "Unveil Mitaoli's Chausath Yogini Temple, whose circular design and architectural brilliance inspired the iconic Parliament House in New Delhi.",
      "Explore Padavali fortress, guarded by majestic lions, where history and divine worship converge amidst intricately inscribed stones echoing tales of ancient eras.",
      "Discover Bateshwar's nearly 200 majestic sandstone temples amidst lush hills, serenaded by colorful birds, including the iconic peacock.",
      "Datia Palace: a marvel of Bundela Dynasty architecture, blending Mughal and Rajput styles, offering a captivating glimpse into rich history and cultural opulence.",
      "Discover Orchha: where legends meet adventure along the Betwa River, with thrilling rafting, rich heritage, and vibrant bird sanctuary.",
      "Experience the timeless beauty of Khajuraho's UNESCO-listed temples, adorned with exquisite sculptures and rich historical tales.",
      "At Chaturbhuj Temple in Khajuraho, catch the mesmerizing sight of the last sunbeam touching the feet of Lord Vishnu.",
      "Sanchi Stupa: Timeless marvel of Buddhist grandeur, a symbol of serenity and architectural brilliance, captivating travelers with its spiritual aura.",
      "Bhimbetka Rock Shelters: Ancient cave art unveiling humanity's earliest creativity, a mesmerizing journey through time.",
      "A colossal testament to ancient engineering, housing the unfinished marvel of one of the world's largest Shiva lingam, leaving travelers in awe of its architectural ambition.",
      "The Kingdom of Mahakaal, where ancient spirituality reigns supreme, beckoning travelers with its sacred shrines and mystical allure.",
      "Harsiddhi Mata Temple Aarti: A mesmerizing spectacle of devotion and reverence, illuminating hearts with the divine energy of the sacred ritual.",
      "Omkareshwar: Sacred island retreat, where the divine Om symbol is etched naturally, evoking spiritual wonder amidst scenic Narmada vistas.",
      "Maheshwar: Ancient kingdom of Maheshmati, where echoes of regal splendor and timeless charm resonate through majestic forts and sacred riverside ghats.",
      "Maheshwar's sunset boat ride: Glide along the Narmada, as dusk paints the sky, weaving a tapestry of tranquility and awe, etching memories that linger forever.",
      "Mandu: Where history whispers through magnificent ruins, weaving tales of romance and valor, enchanting every traveler who walks its ancient pathways.",
      "Sunset at Rani Roopmati Pavilion, Mandu: Experience the ethereal beauty as the sun paints the sky in golden hues, illuminating the historic ruins with a mesmerizing glow, etching memories that transcend time.",
      "Indore: City of flavors and flair, where bustling markets, rich heritage, and culinary delights captivate every traveler's senses.",
    ],
    description:
      "Historical Saga Of Madhya Pradesh — an 11‑day heritage & spiritual journey across the state, curated under our Durga Pooja Exclusive program (valid Oct to 10 Nov).",
    itinerary: [
      {
        day: 1,
        title: "Arrive Gwalior - TOUR BEGINS",
        description:
          "Upon arrival at Gwalior airport or railway Station, you will be met by our company representative who will greet you and will transfer you to hotel.\nAfternoon exploring the iconic Gwalior Fort, which includes significant sites such as the Jain Statues of Siddhanchal Parvat, Sahastra Bahu Temple, Teli Ka Mandir, Gurudwara Data Bandi Chod, Mansingh Palace, and Karan Mahal. Later return to your Hotel & Overnight at Gwalior.\n\nMeals : NA",
      },
      {
        day: 2,
        title: "Gwalior (Excursion to Morena)",
        description:
          "Morning after breakfast, embark on an excursion to Mitawali Temple, Garhi Padavali, and the Bateswara Group of Temples. Begin with a visit to the Chausath Yogini Temple at Mitawali, perched atop a hill with stunning views. Its circular design inspired the Parliament House in New Delhi. Next, explore the 18th-century Padavali fortress, featuring a temple for Lord Shiva with ancient inscriptions and details. Continue to the Bateshwar complex, where nearly 200 sandstone temples dedicated to Shiva and Vishnu, built between the 8th and 10th centuries, have been reclaimed by the Archaeological Survey of India since 1988. The site is also a haven for wildlife. Post visits drive back to the city.\n\nAfternoon Visit Jai Vilas Palace, renowned for its stunning architecture and the iconic Durbar Hall, adorned with magnificent chandeliers and gold furnishings. The museum showcases neo-classical rooms, crystal furniture, and a unique silver train dining table. Then, explore the Tomb of Ghaus Mohammad & Tansen, showcasing exquisite early Mughal architecture. The tomb of Ghaus Mohammad, an Afghan prince, is a fine example of Mughal design, while the smaller tomb of Tansen, the famous musician from Emperor Akbar’s court, adds to the historical significance of the site. Conclude your tour with a visit to Maharaj Bada, the central market square of Gwalior, surrounded by historical buildings and bustling with local vendors, offering a vibrant glimpse into the city's daily life and culture. Later visits return to your hotel. Overnight in Gwalior.\n\nMeals : Breakfast",
      },
      {
        day: 3,
        title: "Gwalior - Sonagiri - Datia - Orchha by road (132 kms & 3 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel & drive to Orchha en route visiting Sonagiri Jain Temple & Datia Palace.\n\nMorning proceed to visit The Jain Temples of Sonagir, located 15 km from Datia, are a renowned pilgrimage site featuring 77 marble-clad temples built on the slopes of a hill, dating back to the 17th century. These temples are a testament to the rich Jain architectural heritage and spiritual significance. The most prominent temple is dedicated to Chandranatha, the 8th Tirthankara, known for its exquisite carvings and serene ambiance. The hilltop offers a breathtaking view of the surrounding landscape, adding to the tranquil and spiritual experience of visitors. Every April, Sonagir comes alive with an annual fair, attracting thousands of devotees and tourists who gather to celebrate and participate in various religious rituals. This fair not only showcases the vibrant culture and traditions of the Jain community but also provides an opportunity for visitors to immerse themselves in the spiritual and historical essence of Sonagir.\n\nAfter visit drive to Datia arrive Datia proceed to visit Bir Singh Palace / The Datia Palace is built in 1620 by Bundela king Raja Bir Singh Deo, an architectural marvel, intricately weaves geometric patterns throughout its design, embodying a perfect fusion of symmetry and symbolism. Its unique Swastika-like plan, resonating with spiritual significance in Hindu culture, forms the very essence of its layout, symbolizing harmony and auspiciousness. Each facet of the palace, meticulously adorned with ornate facades and elegant courtyards, bears witness to the masterful incorporation of geometric shapes and motifs. Rooted in the ancient principles of Vastu Shastra, the palace's geometric precision not only captivates the eye but also evokes a profound sense of cultural heritage. Through its meticulous craftsmanship and symbolic depth, the Datia Palace stands as a timeless testament to the enduring beauty and spiritual significance of geometric design in architecture, inviting visitors to immerse themselves in its divine symmetry and architectural splendor. Later visits drive to Orchha. arrive Orchha & check in at the hotel.\nAfternoon embark on a captivating half-day city tour of Orchha, where history and spirituality intertwine seamlessly. Explore the majestic Orchha Fort Complex and delve into the 17th-century Chaturbhuj Temple's rich history. Admire the serene beauty of the ancient Chhatris by the Betwa River. Conclude your day with the unique guard of honor ceremony at Ram Raja Temple since it's the only place where Lord Ram is considered as King, just before the soul-stirring Aarti ceremony. Immerse yourself in Orchha's timeless charm and cultural heritage, creating memories to cherish for a lifetime. Later return to your hotel. Overnight in Orchha.\n\nMeals : Breakfast",
      },
      {
        day: 4,
        title: "Orchha - Khajuraho by road (172 kms & 3 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel & drive to Khajuraho. Arrive Khajuraho & check in at the hotel.\n\nEmbark on a captivating half-day city tour of Khajuraho, where ancient history and exquisite artistry await. Begin your morning exploration at the Western Group of Temples, home to some of Khajuraho's most iconic structures, including the awe-inspiring Kandariya Mahadev, Lakshmana, and Vishvanath temples. Marvel at the intricate carvings and architectural brilliance that adorn these sacred sites, each telling a story of devotion and craftsmanship from centuries past.\n\nContinue your journey to the Eastern Group of Temples, where a serene ambiance and lesser-known treasures await. Discover hidden gems such as the Jain Group, Parsvanath, and Ghantai temples, each offering a glimpse into Khajuraho's spiritual and artistic legacy.\n\nAs the day draws to a close, make your way to Chaturbhuj Temple and witness the enchanting sunset, where the last light of the day bathes the beautiful statue of Lord Vishnu in a golden glow, creating a moment of serenity and spiritual reflection. One can also enjoy the sound and light show at the Western Group of Temples (on a direct payment basis). Later return to your hotel. Overnight at Khajuraho.\n\nMeals : Breakfast",
      },
      {
        day: 5,
        title: "Khajuraho - Sanchi - Bhopal by road (172 kms & 3 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel & drive to Bhopal via visiting Sanchi Stupa.\n\nExplore the ancient marvel of Sanchi, a UNESCO World Heritage Site renowned for its Great Stupa, commissioned by Emperor Ashoka in the 3rd century BCE. Discover the intricately carved gateways depicting Buddha's life and Jataka tales, and wander through the vast monastic complex with its stupas, temples, and pillars. Sanchi's rich history and stunning Buddhist art make it an essential destination for heritage and spiritual enthusiasts. Later drive to Bhopal. Arrive Bhopal & check in at the hotel. Overnight at Bhopal.\n\nMeals : Breakfast",
      },
      {
        day: 6,
        title: "Bhopal (Excursion to Bhimbetka & Bhojpur)",
        description:
          "Morning after breakfast proceed to explore the ancient rock shelters of Bhimbetka, a UNESCO World Heritage Site renowned for its prehistoric rock art dating back 30,000 years. Nestled in the Vindhya mountains, Bhimbetka showcases over 750 rock shelters with diverse paintings depicting hunting, dancing, and daily life. This site, named after Bhima from the Mahabharata, offers a unique glimpse into the evolution of human culture and the natural beauty of its surroundings, making it an unmissable destination for history and nature enthusiasts.\n\nLater discover the historical marvel of Bhojpur, renowned for the magnificent, unfinished Bhojeshwar Temple, which houses one of India's largest lingams, measuring 7.5 feet high and 17.8 feet in circumference. Attributed to the legendary Raja Bhoj, this site showcases advanced medieval engineering with its monolithic constructions and ancient dam remnants. Additionally, explore intricate Jain temples and enjoy the serene natural beauty of the surrounding landscapes, making Bhojpur a must-visit destination for history and architecture enthusiasts.\n\nAfternoon drive back to the city to embark on an exploration of Bhopal, starting with the majestic Taj-ul-Masajid, one of India's largest mosques, showcasing its impressive architecture and expansive courtyard. Continue to Bharat Bhavan, a multi-arts complex designed by Charles Correa, where you can delve into tribal and folk art. Conclude your tour at Bhojtal (Upper Lake), enjoying a serene boat ride (On direct payment basis) amidst the beautiful surroundings, making for a perfect end to your Bhopal city tour. Later return to your hotel & Overnight stay. Overnight at Bhopal.\n\nMeals : Breakfast",
      },
      {
        day: 7,
        title: "Bhopal - Ujjain by road (195 kms & 4 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel & drive to Ujjain \"The Kingdom of Mahakaal\". Arrive Ujjain & check in at the hotel.\n\nEmbark on a spiritual journey through Ujjain, starting with the historic Sandipani Ashram and the tranquil Mangal Nath Temple on the banks of the Shipra River. Explore the unique Kaal Bhairav Temple known for its ritual of offering liquor to the deity, and then visit the revered Mahakaleshwar Temple, a major pilgrimage site. Discover the newly developed Mahakaal Corridor with its captivating murals and sculptures before heading to Ram Ghat, a sacred riverside spot. Conclude your day at the Harsiddhi Mata Temple, renowned for its architecture and spiritual ambiance. As the sun sets, witness the mesmerizing Aarti ceremony at Harsiddhi Mata Temple, where 1051 earthen lamps illuminate the evening sky, creating a divine spectacle of light and sound. Later return to your hotel & Overnight stay. Overnight at Ujjain.\n\nMeals : Breakfast",
      },
      {
        day: 8,
        title: "Ujjain - Omkareshwar - Maheshwar by road (213 kms & 5.5 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel and drive to Maheshwar via visiting Omkareshwar.\n\nEmbark on a half-day journey through the sacred city of Omkareshwar, where spirituality intertwines with scenic beauty. Begin your day by immersing yourself in devotion at the Omkareshwar Temple, witnessing the morning rituals and soaking in the divine atmosphere. Explore other nearby temples like the Siddhanath Temple, Gouri Somnath Temple, and Annapurna Temple, each offering a unique spiritual experience.\n\nAfter a morning of temple visits, set out on a serene boat ride on the Narmada River to witness the sacred Sangam, where the tranquil waters of the Narmada and Kaveri Rivers converge. Take in the breathtaking views and embrace the serenity of the surroundings as you glide along the river. The boat ride is available (on a direct payment basis).\nLater visits drive to Maheshwar. Arrive Maheshwar & check in at the hotel. Overnight at Maheshwar.\n\nMeals : Breakfast & Dinner (in 3 Star, 3 Star Deluxe & 4 Star Hotels)",
      },
      {
        day: 9,
        title: "Maheshwar - Mandu by road (40 kms & 1 Hour approx)",
        description:
          "Morning after breakfast check-out from the hotel exploration of Maheshwar, where history, culture, and natural beauty converge. Begin your journey at the majestic Maheshwar Fort, adorned with intricate carvings, offering a glimpse into the region's rich heritage. Stroll along the serene ghats of the Narmada River, soaking in the spiritual ambiance and witnessing local life unfold. Don't miss the opportunity to indulge in the exquisite Maheshwari sarees, renowned for their fine craftsmanship and traditional designs. Lastly, unwind with a picturesque boat ride on the Narmada, offering stunning views of the fort (boat ride available on direct payment basis). This half-day adventure promises a delightful blend of heritage, tradition, and tranquility, leaving you enchanted by Maheshwar's timeless allure.\n\nLater visits drive to Mandu. Arrive Mandu & check in at the hotel. After some rest enjoy half day city tour of Mandu.\n\nEmbark on an enchanting afternoon journey through Mandu's historical marvels and scenic vistas. Begin your exploration at Rewa Kund, a serene reservoir surrounded by verdant foliage, offering a peaceful retreat amidst nature's embrace. Continue to Baz Bahadur's Palace, once the regal abode of Mandu's last independent ruler, admired for its magnificent architecture and regal charm. Immerse yourself in history at Roopmati's Palace, where panoramic views of the Narmada River and countryside unfold, painting a picture of Mandu's rich past. Conclude your day with a captivating sunset experience at Rupmati's Pavilion, where ancient legends echo against the backdrop of Mandu's timeless beauty. With its blend of history, culture, and natural splendor, Mandu promises an unforgettable afternoon immersed in the essence of bygone eras and picturesque landscapes. Later return to your hotel. Overnight at Mandu.\n\nMeals : Breakfast",
      },
      {
        day: 10,
        title: "Mandu - Indore by road (98 kms & 2.5 Hours approx)",
        description:
          "Morning after breakfast check-out from the hotel enjoy half day exploration of Mandu's architectural marvels and historical landmarks. Begin your journey at Jahaz Mahal, a magnificent palace that appears to float on water, showcasing exquisite craftsmanship and panoramic views. Next, visit Hindola Mahal, renowned for its sloping walls and distinctive design, evoking the grandeur of Mandu's royal era. Step into the majestic ambiance of Jama Masjid, one of India's largest mosques, adorned with intricate carvings and majestic domes. Then, pay homage to history at Hoshang Shah's Tomb, a pristine marble structure marking India's architectural prowess. Conclude your morning tour with a visit to Nilkanth Mahal, a splendid fusion of Hindu and Afghan architectural styles, offering a glimpse into Mandu's rich cultural heritage.\n\nAfter visits drive to Indore. Arrive Indore & check in at the hotel.\nExperience the culinary extravaganza of Indore at Sarafa Bazaar, India's only night food market. Nestled in the heart of the city, Sarafa Bazaar offers a tantalizing array of street food delights from the Malwa region and beyond. From iconic dishes like Indori Poha Jalebi, Bhutte ka Kees to savory Kachoris and crispy Sev Paratha, the market showcases the rich culinary heritage of Malwa. Indulge in traditional desserts like Gulab Jamun and Malpua while immersing yourself in the vibrant atmosphere of this cultural hotspot. Discover why Sarafa Bazaar is a must-visit destination for food enthusiasts craving authentic flavors and unforgettable experiences. Later return to your hotel. Overnight at Indore.\n\nMeals : Breakfast",
      },
      {
        day: 11,
        title: "Departure from Indore - TOUR END",
        description:
          "Morning after breakfast check-out from the hotel embark on a captivating half-day journey through the cultural heart of Indore, beginning with a visit to the iconic Rajwada, a splendid architectural marvel steeped in history. Continue your exploration at Bada Ganpati Temple, where the colossal idol of Lord Ganesh inspires awe and devotion. Then, seek blessings at Khajrana Ganesh Temple, known for its spiritual ambiance and revered deity.\n\nExperience the serene beauty of Kanch Mandir, adorned with exquisite mirror work that reflects the city's artistic heritage. Delve into the historical significance of Boliya Chattri, a testament to the regal legacy of Indore's rulers. Finally, immerse yourself in the vibrant ambiance of 56 Dukaan Street, a bustling marketplace offering a plethora of local delights, from handicrafts to street food delicacies.\"\nLater visits in time transfer to railway station or airport to board train or flight for onward Journey.\n\nMeals : Breakfast",
      },
    ],
    included: [
      "Meeting and assistance on arrival/departure at Airport/hotel by our representative.",
      "Accommodation and Meals",
      "▪ 10 nights on a Double/Triple-sharing basis with breakfast.",
      "▪ In Gwalior: Includes with Breakfast",
      "▪ In Orchha: Includes with Breakfast",
      "▪ In Khajuraho: Includes with Breakfast",
      "▪ In Bhopal: Includes with Breakfast",
      "▪ In Ujjain: Includes with Breakfast",
      "▪ In Maheswhar: Includes with (Breakfast & Dinner)",
      "▪ In Mandu: Includes with Breakfast",
      "▪ In Indore: Includes with Breakfast",
      "o Meals Included:",
      "▪ 10 Breakfasts",
      "▪ 01 Dinner",
      "✓ Transfers and Travel: Arrival/departure transfers, sightseeing, and travel by air-conditioned vehicle as per itinerary.",
      "✓ In-Vehicle Amenities: 2 Water Bottles (250 ml) Per Person Per Day, Tissues, Hand Sanitizers & masks.",
      "✓ Taxes: 5% GST Applicable on Total Bill.",
    ],
    excluded: [
      "Any services other than the ones mentioned above or air fares, train or flight tickets, guides, entrances fee, activities, meals other than those mentioned above or any items of Personal nature like, telephone calls, laundry, drinks, Camera fees or tips etc.",
    ],
    paxPricing: [
      { pax: "02 Pax", vehicle: "AC Sedan Car", price: 46300 },
      { pax: "04 Pax", vehicle: "AC Ertiga", price: 39300 },
      { pax: "06 Pax", vehicle: "AC Ertiga", price: 33500 },
    ],
    featured: true,
    offer: false,
  },
  {
    id: "exciting-madhya-pradesh",
    name: "Exciting Madhya Pradesh",
    location:
      "Bhopal - Sanchi - Bhojpur - Bhimbetka - Ujjain - Omkareshwar - Maheshwar - Mandu - Indore",
    duration: "7 Days / 6 Nights",
    days: 7,
    price: 20600,
    originalPrice: 28100,
    category: "Heritage",
    tourCategory: "Durga Pooja Exclusive",
    programCategory: "Durga Pooja Exclusive",
    validity: "Oct to 10 Nov",
    categories: ["Heritage", "Spiritual"],
    image: excitingMadhyaPradesh.url,
    highlights: [
      "Bhopal: Where ancient history meets modern charm amidst the tranquil lakes, vibrant culture, and culinary delights of the City of Lakes.",
      "Sanchi Stupa: Timeless marvel of Buddhist grandeur, a symbol of serenity and architectural brilliance, captivating travelers with its spiritual aura.",
      "Bhimbetka Rock Shelters: Ancient cave art unveiling humanity's earliest creativity, a mesmerizing journey through time.",
      "A colossal testament to ancient engineering, housing the unfinished marvel of one of the world's largest Shiva lingam, leaving travelers in awe of its architectural ambition.",
      "The Kingdom of Mahakaal, where ancient spirituality reigns supreme, beckoning travelers with its sacred shrines and mystical allure.",
      "Harsiddhi Mata Temple Aarti: A mesmerizing spectacle of devotion and reverence, illuminating hearts with the divine energy of the sacred ritual.",
      "Omkareshwar: Sacred island retreat, where the divine Om symbol is etched naturally, evoking spiritual wonder amidst scenic Narmada vistas.",
      "Maheshwar: Ancient kingdom of Maheshmati, where echoes of regal splendor and timeless charm resonate through majestic forts and sacred riverside ghats.",
      "Maheshwar's sunset boat ride: Glide along the Narmada, as dusk paints the sky, weaving a tapestry of tranquility and awe, etching memories that linger forever.",
      "Mandu: Where history whispers through magnificent ruins, weaving tales of romance and valor, enchanting every traveler who walks its ancient pathways.",
      "Sunset at Rani Roopmati Pavilion, Mandu: Experience the ethereal beauty as the sun paints the sky in golden hues, illuminating the historic ruins with a mesmerizing glow, etching memories that transcend time.",
      "Indore: City of flavors and flair, where bustling markets, rich heritage, and culinary delights captivate every traveler's senses.",
    ],
    description:
      "Exciting Madhya Pradesh — a 7‑day heritage & spiritual journey, curated under our Durga Pooja Exclusive program (valid Oct to 10 Nov).",
    itinerary: [
      {
        day: 1,
        title: "Arrive Bhopal -TOUR BEGINS",
        description:
          "Upon arrival at Bhopal airport or railway Station, you will be met by our company representative who will greet you and will transfer you to hotel.\nAfternoon exploration of Bhopal, starting with the majestic Taj-ul-Masajid, one of India's largest mosques, showcasing its impressive architecture and expansive courtyard. Continue to Bharat Bhavan, a multi-arts complex designed by Charles Correa, where you can delve into tribal and folk art. Conclude your tour at Bhojtal (Upper Lake), enjoying a serene boat ride (On direct payment basis) amidst the beautiful surroundings, making for a perfect end to your Bhopal city tour. Later return to your hotel. Overnight at Bhopal.\n\nMeals : NA",
      },
      {
        day: 2,
        title: "Bhopal (Excursion to Sanchi, Bhojpur & Bhimbetka)",
        description:
          "Morning after breakfast explore the ancient marvel of Sanchi, a UNESCO World Heritage Site renowned for its Great Stupa, commissioned by Emperor Ashoka in the 3rd century BCE. Discover the intricately carved gateways depicting Buddha's life and Jataka tales, and wander through the vast monastic complex with its stupas, temples, and pillars. Sanchi's rich history and stunning Buddhist art make it an essential destination for heritage and spiritual enthusiasts.\n\nLater discover the historical marvel of Bhojpur, renowned for the magnificent, unfinished Bhojeshwar Temple, which houses one of India's largest lingams, measuring 7.5 feet high and 17.8 feet in circumference. Attributed to the legendary Raja Bhoj, this site showcases advanced medieval engineering with its monolithic constructions and ancient dam remnants. Additionally, explore intricate Jain temples and enjoy the serene natural beauty of the surrounding landscapes, making Bhojpur a must-visit destination for history and architecture enthusiasts.\n\nexplore the ancient rock shelters of Bhimbetka, a UNESCO World Heritage Site renowned for its prehistoric rock art dating back 30,000 years. Nestled in the Vindhya mountains, Bhimbetka showcases over 750 rock shelters with diverse paintings depicting hunting, dancing, and daily life. This site, named after Bhima from the Mahabharata, offers a unique glimpse into the evolution of human culture and the natural beauty of its surroundings, making it an unmissable destination for history and nature enthusiasts. Later drive back to Bhopal. return to your hotel. Overnight stay at Bhopal.\n\nMeals : Breakfast",
      },
      {
        day: 3,
        title: "Bhopal - Ujjain by road (191 kms & 3.5 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel & drive to Ujjain \"The Kingdom of Mahakaal\". Arrive Ujjain & check in at the hotel.\n\nEmbark on a spiritual journey through Ujjain, starting with the historic Sandipani Ashram and the tranquil Mangal Nath Temple on the banks of the Shipra River. Explore the unique Kaal Bhairav Temple known for its ritual of offering liquor to the deity, and then visit the revered Mahakaleshwar Temple, a major pilgrimage site. Discover the newly developed Mahakaal Corridor with its captivating murals and sculptures before heading to Ram Ghat, a sacred riverside spot. Conclude your day at the Harsiddhi Mata Temple, renowned for its architecture and spiritual ambiance. As the sun sets, witness the mesmerizing Aarti ceremony at Harsiddhi Mata Temple, where 1051 earthen lamps illuminate the evening sky, creating a divine spectacle of light and sound. Later return to your hotel. Overnight in Ujjain.\n\nMeals : Breakfast",
      },
      {
        day: 4,
        title: "Ujjain - Omkareshwar - Maheshwar by road (213 kms & 5.5 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel and drive to Maheshwar via visiting Omkareshwar.\n\nAfternoon embark on a full-day journey through the sacred city of Omkareshwar, where spirituality intertwines with scenic beauty. Begin your day by immersing yourself in devotion at the Omkareshwar Temple, witnessing the morning rituals and soaking in the divine atmosphere. Explore other nearby temples like the Siddhanath Temple, Gouri Somnath Temple, and Annapurna Temple, each offering a unique spiritual experience.\n\nAfter a morning of temple visits, set out on a serene boat ride on the Narmada River to witness the sacred Sangam, where the tranquil waters of the Narmada and Kaveri Rivers converge. Take in the breathtaking views and embrace the serenity of the surroundings as you glide along the river. The boat ride is available (on a direct payment basis).\nAfter visits drive to Maheshwar. Arrive Maheshwar & check in at the hotel. Overnight at Maheshwar.\n\nMeals : Breakfast & Dinner",
      },
      {
        day: 5,
        title: "Maheshwar - Mandu by road (40 kms & 1 Hour approx)",
        description:
          "Morning after breakfast check-out from the hotel embark on an morning exploration of Maheshwar, where history, culture, and natural beauty converge. Begin your journey at the majestic Maheshwar Fort, adorned with intricate carvings, offering a glimpse into the region's rich heritage. Stroll along the serene ghats of the Narmada River, soaking in the spiritual ambiance and witnessing local life unfold. Don't miss the opportunity to indulge in the exquisite Maheshwari sarees, renowned for their fine craftsmanship and traditional designs. Lastly, unwind with a picturesque boat ride on the Narmada, offering stunning views of the fort (boat ride available on direct payment basis). This half-day adventure promises a delightful blend of heritage, tradition, and tranquility, leaving you enchanted by Maheshwar's timeless allure.\n\nLater visits drive to Mandu. Arrive Mandu & check in at the hotel. After some rest enjoy half day city tour of Mandu.\n\nEmbark on an enchanting afternoon journey through Mandu's historical marvels and scenic vistas. Begin your exploration at Rewa Kund, a serene reservoir surrounded by verdant foliage, offering a peaceful retreat amidst nature's embrace. Continue to Baz Bahadur's Palace, once the regal abode of Mandu's last independent ruler, admired for its magnificent architecture and regal charm. Immerse yourself in history at Roopmati's Palace, where panoramic views of the Narmada River and countryside unfold, painting a picture of Mandu's rich past. Conclude your day with a captivating sunset experience at Rupmati's Pavilion, where ancient legends echo against the backdrop of Mandu's timeless beauty. With its blend of history, culture, and natural splendor, Mandu promises an unforgettable afternoon immersed in the essence of bygone eras and picturesque landscapes. Later return to your hotel. Overnight at Mandu.\n\nMeals : Breakfast",
      },
      {
        day: 6,
        title: "Mandu - Indore by road (98 kms & 2.5 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel and enjoy half day city tour of Mandu.\n\nEmbark on a captivating morning half day exploration of Mandu's architectural marvels and historical landmarks. Begin your journey at Jahaz Mahal, a magnificent palace that appears to float on water, showcasing exquisite craftsmanship and panoramic views. Next, visit Hindola Mahal, renowned for its sloping walls and distinctive design, evoking the grandeur of Mandu's royal era. Step into the majestic ambiance of Jama Masjid, one of India's largest mosques, adorned with intricate carvings and majestic domes. Then, pay homage to history at Hoshang Shah's Tomb, a pristine marble structure marking India's architectural prowess. Conclude your morning tour with a visit to Nilkanth Mahal, a splendid fusion of Hindu and Afghan architectural styles, offering a glimpse into Mandu's rich cultural heritage.\n\nAfter visits drive to Indore. Arrive Indore & check in at the hotel.\nExperience the culinary extravaganza of Indore at Sarafa Bazaar, India's only night food market. Nestled in the heart of the city, Sarafa Bazaar offers a tantalizing array of street food delights from the Malwa region and beyond. From iconic dishes like Indori Poha Jalebi, Bhutte ka Kees to savory Kachoris and crispy Sev Paratha, the market showcases the rich culinary heritage of Malwa. Indulge in traditional desserts like Gulab Jamun and Malpua while immersing yourself in the vibrant atmosphere of this cultural hotspot. Discover why Sarafa Bazaar is a must-visit destination for food enthusiasts craving authentic flavors and unforgettable experiences. Later return to your hotel & Overnight at Indore.\n\nMeals : Breakfast",
      },
      {
        day: 7,
        title: "Departure from Indore - TOUR END",
        description:
          "In the morning after breakfast check out from the hotel and enjoy half day city tour of Indore.\n\nExploration of Mandu's architectural marvels and historical landmarks. Begin your journey at Jahaz Mahal, a magnificent palace that appears to float on water, showcasing exquisite craftsmanship and panoramic views. Next, visit Hindola Mahal, renowned for its sloping walls and distinctive design, evoking the grandeur of Mandu's royal era. Step into the majestic ambiance of Jama Masjid, one of India's largest mosques, adorned with intricate carvings and majestic domes. Then, pay homage to history at Hoshang Shah's Tomb, a pristine marble structure marking India's architectural prowess. Conclude your morning tour with a visit to Nilkanth Mahal, a splendid fusion of Hindu and Afghan architectural styles, offering a glimpse into Mandu's rich cultural heritage.\n\nExperience the serene beauty of Kanch Mandir, adorned with exquisite mirror work that reflects the city's artistic heritage. Delve into the historical significance of Boliya Chattri, a testament to the regal legacy of Indore's rulers. Finally, immerse yourself in the vibrant ambiance of 56 Dukaan Street, a bustling marketplace offering a plethora of local delights, from handicrafts to street food delicacies.\n\nLater visits in time transfer to railway station/airport to board train/flight for onward Journey.\n\nMeals : Breakfast",
      },
    ],
    included: [
      "Meeting and assistance on arrival/departure at Airport/hotel by our representative.",
      "Accommodation and Meals",
      "▪ In Bhopal: Includes with Breakfast",
      "▪ In Ujjain: Includes with Breakfast",
      "▪ In Maheswhar: Includes with (Breakfast & Dinner)",
      "▪ In Mandu: Includes with Breakfast",
      "▪ In Indore: Includes with Breakfast",
      "o Meals Included:",
      "▪ 06 Breakfasts",
      "▪ 01 Dinner",
      "✓ Transfers and Travel: Arrival/departure transfers, sightseeing, and travel by air-conditioned vehicle as per itinerary.",
      "✓ In-Vehicle Amenities: 2 Water Bottles (250 ml) Per Person Per Day, Tissues, Hand Sanitizers & masks.",
      "✓ Taxes: 5% GST Aplicable on Total Bill.",
    ],
    excluded: [
      "Any services other than the ones mentioned above or air fares, train or flight tickets, guides, entrances fee, activities, meals other than those mentioned above or any items of Personal nature like, telephone calls, laundry, drinks, Camera fees or tips etc.",
    ],
    paxPricing: [
      { pax: "02 Pax", vehicle: "AC Sedan Car", price: 28100 },
      { pax: "04 Pax", vehicle: "AC Ertiga", price: 24000 },
      { pax: "06 Pax", vehicle: "AC Ertiga", price: 20600 },
    ],
    featured: true,
    offer: false,
  },
  {
    id: "kingdom-of-mahakal",
    name: "Kingdom Of Mahakal",
    location: "Indore - Ujjain - Omkareshwar - Maheshwar - Mandu - Indore",
    duration: "5 Days / 4 Nights",
    days: 5,
    price: 14700,
    originalPrice: 20100,
    category: "Heritage",
    tourCategory: "Durga Pooja Exclusive",
    programCategory: "Durga Pooja Exclusive",
    validity: "Oct to 10 Nov",
    categories: ["Heritage", "Spiritual"],
    image: kingdomOfMahakal.url,
    highlights: [
      "The Kingdom of Mahakaal, where ancient spirituality reigns supreme, beckoning travelers with its sacred shrines and mystical allure.",
      "Harsiddhi Mata Temple Aarti: A mesmerizing spectacle of devotion and reverence, illuminating hearts with the divine energy of the sacred ritual.",
      "Omkareshwar: Sacred island retreat, where the divine Om symbol is etched naturally, evoking spiritual wonder amidst scenic Narmada vistas.",
      "Maheshwar: Ancient kingdom of Maheshmati, where echoes of regal splendor and timeless charm resonate through majestic forts and sacred riverside ghats.",
      "Maheshwar's sunset boat ride: Glide along the Narmada, as dusk paints the sky, weaving a tapestry of tranquility and awe, etching memories that linger forever.",
      "Mandu: Where history whispers through magnificent ruins, weaving tales of romance and valor, enchanting every traveler who walks its ancient pathways.",
      "Sunset at Rani Roopmati Pavilion, Mandu: Experience the ethereal beauty as the sun paints the sky in golden hues, illuminating the historic ruins with a mesmerizing glow, etching memories that transcend time.",
      "Indore: City of flavors and flair, where bustling markets, rich heritage, and culinary delights captivate every traveler's senses.",
    ],
    description:
      "Kingdom Of Mahakal — a 5‑day spiritual & heritage journey, curated under our Durga Pooja Exclusive program (valid Oct to 10 Nov).",
    itinerary: [
      {
        day: 1,
        title: "Arrive Indore & Drive to Ujjain by road (55 kms & 1.5 Hours approx)-TOUR BEGINS",
        description:
          "Upon arrival at Indore airport or railway station, you will be met by our company representative who will greet you and drive to Ujjain \"The Kingdom of Mahakaal\". Arrive Ujjain & will transfer you to hotel. check in at the hotel.\nAfternoon embark on a spiritual journey through Ujjain, starting with the historic Sandipani Ashram and the tranquil Mangal Nath Temple on the banks of the Shipra River. Explore the unique Kaal Bhairav Temple known for its ritual of offering liquor to the deity, and then visit the revered Mahakaleshwar Temple, a major pilgrimage site. Discover the newly developed Mahakaal Corridor with its captivating murals and sculptures before heading to Ram Ghat, a sacred riverside spot. Conclude your day at the Harsiddhi Mata Temple, renowned for its architecture and spiritual ambiance. \n\nEvening visit as the sun sets, witness the mesmerizing Aarti ceremony at Harsiddhi Mata Temple, where 1051 earthen lamps illuminate the evening sky, creating a divine spectacle of light and sound. Later return to your hotel.\"\nOvernight in Ujjain.\n\nMeals : NA",
      },
      {
        day: 2,
        title: "Ujjain - Omkareshwar - Maheshwar by road (213 kms & 5.5 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel and drive to Maheshwar via visiting Omkareshwar.\n\nEmbark on a morning half-day tour of Omkareshwar, a serene enclave on the banks of the Narmada River. Begin at the revered Omkareshwar Temple, dedicated to Lord Shiva, soaking in its divine ambiance and intricate architecture. Then, explore the ancient Mamleshwar Temple across the river, steeped in religious significance. Conclude with an optional tranquil boat ride along the Narmada, offering scenic views of the temple town (available on direct payment basis). This spiritual journey promises a serene retreat amidst sacred shrines and the gentle flow of the river. After visits drive to Maheshwar, Arrive Maheshwar check-in at the hotel. Overnight at Maheshwar.\n\nMeals : Breakfast & (Dinner In 3 Star, 3 Star Deluxe & 4 Star)",
      },
      {
        day: 3,
        title: "Maheshwar - Mandu by road (40 kms & 1 Hour approx)",
        description:
          "Morning after breakfast check-out from the hotel exploration of Maheshwar, where history, culture, and natural beauty converge. Begin your journey at the majestic Maheshwar Fort, adorned with intricate carvings, offering a glimpse into the region's rich heritage. Stroll along the serene ghats of the Narmada River, soaking in the spiritual ambiance and witnessing local life unfold. Don't miss the opportunity to indulge in the exquisite Maheshwari sarees, renowned for their fine craftsmanship and traditional designs. Lastly, unwind with a picturesque boat ride on the Narmada, offering stunning views of the fort (boat ride available on direct payment basis). This half-day adventure promises a delightful blend of heritage, tradition, and tranquility, leaving you enchanted by Maheshwar's timeless allure.\n\nLater visits drive to Mandu. Arrive Mandu & check in at the hotel. After some rest enjoy half day city tour of Mandu.\n\nEmbark on an enchanting afternoon journey through Mandu's historical marvels and scenic vistas. Begin your exploration at Rewa Kund, a serene reservoir surrounded by verdant foliage, offering a peaceful retreat amidst nature's embrace. Continue to Baz Bahadur's Palace, once the regal abode of Mandu's last independent ruler, admired for its magnificent architecture and regal charm. Immerse yourself in history at Roopmati's Palace, where panoramic views of the Narmada River and countryside unfold, painting a picture of Mandu's rich past. Conclude your day with a captivating sunset experience at Rupmati's Pavilion, where ancient legends echo against the backdrop of Mandu's timeless beauty. With its blend of history, culture, and natural splendor, Mandu promises an unforgettable afternoon immersed in the essence of bygone eras and picturesque landscapes. Later return to your hotel. Overnight at Mandu.\n\nMeals : Breakfast",
      },
      {
        day: 4,
        title: "Mandu - Indore by road (98 kms & 2.5 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel and enjoy half day city tour of Mandu.\n\nEmbark on a captivating morning half day exploration of Mandu's architectural marvels and historical landmarks. Begin your journey at Jahaz Mahal, a magnificent palace that appears to float on water, showcasing exquisite craftsmanship and panoramic views. Next, visit Hindola Mahal, renowned for its sloping walls and distinctive design, evoking the grandeur of Mandu's royal era. Step into the majestic ambiance of Jama Masjid, one of India's largest mosques, adorned with intricate carvings and majestic domes. Then, pay homage to history at Hoshang Shah's Tomb, a pristine marble structure marking India's architectural prowess. Conclude your morning tour with a visit to Nilkanth Mahal, a splendid fusion of Hindu and Afghan architectural styles, offering a glimpse into Mandu's rich cultural heritage.\n\nAfter visits drive to Indore. Arrive Indore & check in at the hotel.\nExperience the culinary extravaganza of Indore at Sarafa Bazaar, India's only night food market. Nestled in the heart of the city, Sarafa Bazaar offers a tantalizing array of street food delights from the Malwa region and beyond. From iconic dishes like Indori Poha Jalebi, Bhutte ka Kees to savory Kachoris and crispy Sev Paratha, the market showcases the rich culinary heritage of Malwa. Indulge in traditional desserts like Gulab Jamun and Malpua while immersing yourself in the vibrant atmosphere of this cultural hotspot. Discover why Sarafa Bazaar is a must-visit destination for food enthusiasts craving authentic flavors and unforgettable experiences. Later return to your hotel & Overnight at Indore.\n\nMeals : Breakfast",
      },
      {
        day: 5,
        title: "Departure from Indore - TOUR END",
        description:
          "Morning after breakfast check out from the hotel and enjoy half day city tour of Indore.\nEmbark on a captivating half-day journey through the cultural heart of Indore, beginning with a visit to the iconic Rajwada, a splendid architectural marvel steeped in history. Continue your exploration at Bada Ganpati Temple, where the colossal idol of Lord Ganesh inspires awe and devotion. Then, seek blessings at Khajrana Ganesh Temple, known for its spiritual ambiance and revered deity.\n\nExperience the serene beauty of Kanch Mandir, adorned with exquisite mirror work that reflects the city's artistic heritage. Delve into the historical significance of Boliya Chattri, a testament to the regal legacy of Indore's rulers. Finally, immerse yourself in the vibrant ambiance of 56 Dukaan Street, a bustling marketplace offering a plethora of local delights, from handicrafts to street food delicacies.\"\nLater visits in time transfer to railway station/airport to board train/flight for onward Journey.\n\nMeals : Breakfast",
      },
    ],
    included: [
      "Meeting and assistance on arrival/departure at Airport/hotel by our representative or driver.",
      "✓ Accommodation and Meals",
      "▪ In Ujjain: Includes with Breakfast",
      "▪ In Maheswhar: Includes with (Breakfast & Dinner)",
      "▪ In Mandu: Includes with Breakfast",
      "▪ In Indore: Includes with Breakfast",
      "o Meals Included:",
      "▪ 04 Breakfasts",
      "▪ 01 Dinner",
      "✓ Transfers and Travel: Arrival/departure transfers, sightseeing, and travel by air-conditioned vehicle as per itinerary.",
      "✓ In-Vehicle Amenities: 2 Water Bottles (250 ml) Per Person Per Day, Tissues, Hand Sanitizers & masks.",
      "✓ Taxes: 5% GST Applicable on Total Bill.",
    ],
    excluded: [
      "Any services other than the ones mentioned above or air fares, train or flight tickets, guides, entrances fee, activities, meals other than those mentioned above or any items of Personal nature like, telephone calls, laundry, drinks, Camera fees or tips etc.",
    ],
    paxPricing: [
      { pax: "02 Pax", vehicle: "AC Sedan Car", price: 20100 },
      { pax: "04 Pax", vehicle: "AC Ertiga", price: 17200 },
      { pax: "06 Pax", vehicle: "AC Ertiga", price: 14700 },
    ],
    featured: true,
    offer: false,
  },
  {
    id: "thrilling-madhya-pradesh",
    name: "Thrilling Madhya Pradesh",
    location:
      "Nagpur - Pachmarhi - Bhimbetka - Bhojpur - Bhopal - Sanchi - Udayagiri - Jabalpur - Kanha - Nagpur",
    duration: "7 Days / 6 Nights",
    days: 7,
    price: 27200,
    originalPrice: 42900,
    category: "Wildlife",
    tourCategory: "Durga Pooja Exclusive",
    programCategory: "Durga Pooja Exclusive",
    validity: "Oct to 10 Nov",
    categories: ["Heritage", "Spiritual", "Wildlife & Nature"],
    image: thrillingMadhyaPradesh.url,
    highlights: [
      "Pachmarhi: The Queen of Satpura, where waterfalls, ancient caves, and panoramic vistas create a magical hill station escape.",
      "Bhimbetka Rock Shelters: Ancient cave art unveiling humanity's earliest creativity, a mesmerizing journey through time.",
      "A colossal testament to ancient engineering, housing the unfinished marvel of one of the world's largest Shiva lingam, leaving travelers in awe of its architectural ambition.",
      "Sanchi Stupa a Timeless marvel of Buddhist grandeur, a symbol of serenity and architectural brilliance, captivating travelers with its spiritual aura.",
      "Marvel at the Great Stupa of Sanchi, a UNESCO World Heritage site",
      "Discover the ancient rock-cut Udayagiri Caves and their magnificent carvings.",
      "Bhopal: Where ancient history meets modern charm amidst the tranquil lakes, vibrant culture, and culinary delights of the City of Lakes.",
      "Jabalpur: Where majestic marble cliffs, thundering waterfalls, and rich history converge to captivate every traveler's soul.",
      "Bhedaghat's boat ride: A journey through nature's masterpiece, where marble cliffs and cascading waterfalls create a breathtaking symphony of wonder and awe.",
      "Kanha National Park: A wildlife paradise where Bengal tigers roam, rare barasingha thrive, and breathtaking landscapes captivate every explorer.",
      "Jeep Safari at Tiger Reserve: Dive into the heart of the wild, roaring through untamed terrain in pursuit of majestic predators.",
    ],
    description:
      "Thrilling Madhya Pradesh — a 7‑day heritage, spiritual, wildlife & nature journey, curated under our Durga Pooja Exclusive program (valid Oct to 10 Nov).",
    itinerary: [
      {
        day: 1,
        title: "Arrive Nagpur  & drive to Pachmarhi by road (260 kms & 5.5 Hours approx)-TOUR BEGINS",
        description:
          "Upon arrival at Nagpur airport or railway Station, you will be met by our company representative who will greet you and drive to Pachmarhi, known as \"The Queen of Satpura.\" Check in at the hotel and proceed for the local sightseeing of Pachmarhi (By Car)\n\nEmbark on another day of discovery as you delve deeper into the enchanting wonders of Pachmarhi. Begin your exploration with a visit to Jatashankar, a sacred cave shrine dedicated to Lord Shiva, nestled amidst the natural beauty of the surrounding forests. Next, venture to Handi Khoh, a breathtaking gorge offering panoramic views of the rugged cliffs and dense forests below. Continue your journey with a visit to Priyadarshini, a popular viewpoint known for its stunning vistas of Pachmarhi's scenic landscapes.\n\nIn the afternoon, continue your adventure with visits to Gupt Mahadev and Bada Mahadev, two ancient temples dedicated to Lord Shiva. Marvel at the intricate carvings and architectural details of these sacred sites. For those seeking additional adventure, enjoy boating on the lake (at your own expense), or head to Rajendra Giri to witness the mesmerizing sunset over the surrounding landscapes.\n\nConclude your day with the satisfaction of exploring the beauty and tranquility of Pachmarhi, ready to embark on new adventures tomorrow. Later return to your hotel. Overnight at Pachmarhi.\n\nMeals : (Lunch in 3 star Deluxe) & Dinner",
      },
      {
        day: 2,
        title: "Pachmarhi (local sightseeing by open Gypsy)",
        description:
          "Morning after breakfast at your hotel embark on a captivating journey of local sightseeing in Pachmarhi, a picturesque hill station nestled amidst the lush forests of Madhya Pradesh. Begin your exploration with a visit to the ancient Pandav Caves, steeped in mythology and history, where legends of the Pandavas are said to echo through the cavernous halls. Next, marvel at the natural beauty of Apsara Vihar, a tranquil waterfall cascading into a serene pool, offering a refreshing escape from the summer heat. Then, make your way to the Silver Waterfall, where shimmering streams cascade down rocky cliffs, creating a mesmerizing spectacle.\n\nIn the afternoon, continue your exploration with a visit to Bee Fall, a majestic waterfall surrounded by verdant forests and rocky cliffs. For the adventurous at heart, there's the option to try parasailing (at your own expense), soaring high above the treetops for a bird's-eye view of the breathtaking landscapes below. Delve into the ancient mysteries of Reechgarh Caves, a labyrinth of caverns and passageways carved into the rocky cliffs, where echoes of the past resonate through the silent chambers. Finally, visit Eco Points, where panoramic views of Pachmarhi's scenic vistas await, offering the perfect backdrop for a leisurely stroll or some quiet contemplation.\n\nAs the day draws to a close, retreat to your accommodation in Pachmarhi, where you can unwind and reflect on the day's adventures amidst the tranquil beauty of this enchanting hill station.\"\n\nAfter visit return to the hotel enjoy dinner at the hotel & Overnight stay in Pachmarhi.\n\nMeals : Breakfast  (Lunch In 3 Star Deluxe hotel) & Dinner",
      },
      {
        day: 3,
        title: "Pachmarhi - Bhimbetka - Bhojpur - Bhopal by road (203 kms & 5 Hours approx)",
        description:
          "In the morning after breakfast check out from the hotel and drive to Bhopal via visiting Bhimbetka & Bhojpur.\n\nExplore the ancient rock shelters of Bhimbetka, a UNESCO World Heritage Site renowned for its prehistoric rock art dating back 30,000 years. Nestled in the Vindhya mountains, Bhimbetka showcases over 750 rock shelters with diverse paintings depicting hunting, dancing, and daily life. This site, named after Bhima from the Mahabharata, offers a unique glimpse into the evolution of human culture and the natural beauty of its surroundings, making it an unmissable destination for history and nature enthusiasts.\n\nLater discover the historical marvel of Bhojpur, renowned for the magnificent, unfinished Bhojeshwar Temple, which houses one of India's largest lingams, measuring 7.5 feet high and 17.8 feet in circumference. Attributed to the legendary Raja Bhoj, this site showcases advanced medieval engineering with its monolithic constructions and ancient dam remnants. Additionally, explore intricate Jain temples and enjoy the serene natural beauty of the surrounding landscapes, making Bhojpur a must-visit destination for history and architecture enthusiasts. After visits drive to Bhopal. Arrive Bhopal & check in at the hotel. Overnight stay. Overnight at Bhopal.\n\nMeals : Breakfast",
      },
      {
        day: 4,
        title: "Bhopal (Excursion to Sanchi & Udaygiri Caves)",
        description:
          "Morning after breakfast enjoy your excursion to Sanchi Stupa and Udaygiri Caves embark on a captivating half-day excursion from Bhopal to explore the historical wonders of Sanchi and Udayagiri Caves. Begin your journey with a visit to Sanchi, a UNESCO World Heritage site renowned for its ancient Buddhist stupas, monasteries, temples, and pillars. At the heart of Sanchi lies the Great Stupa, commissioned by Emperor Ashoka in the 3rd century BCE, featuring intricate carvings and gateways that depict scenes from the life of Buddha. Take your time to explore the serene complex and delve into the rich Buddhist heritage at the Sanchi Museum, which houses a remarkable collection of artifacts and sculptures.\n\nNext, proceed to the Udayagiri Caves, a fascinating complex of 20 rock-cut caves dating back to the early 5th century CE. These caves are celebrated for their significant Hindu and Jain sculptures and inscriptions. Among them, Cave 5 stands out with its massive carving of Vishnu in his Varaha (boar) avatar, lifting the Earth goddess Bhudevi. The blend of artistic and architectural brilliance in these caves offers a glimpse into the Gupta period's religious practices and iconography. \n\nEmbark on an afternoon exploration of Bhopal, starting with the majestic Taj-ul-Masajid, one of India's largest mosques, showcasing its impressive architecture and expansive courtyard. Continue to Bharat Bhavan, a multi-arts complex designed by Charles Correa, where you can delve into tribal and folk art. Conclude your tour at Bhojtal (Upper Lake), enjoying a serene boat ride (On direct payment basis) amidst the beautiful surroundings, making for a perfect end to your Bhopal city tour. Later return to your hotel. Overnight at Bhopal.\n\nMeals : Breakfast",
      },
      {
        day: 5,
        title: "Bhopal - Jabalpur by road (313 kms & 5.5 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel and drive to Jabalpur. Arrrive Jabalpur & check in at the hotel.\n\nAs the evening sun sets over Jabalpur, immerse yourself in a soul-stirring experience at Gwarighat. Here, on the tranquil banks of the Narmada River, witness the sacred rituals of the evening Aarti. Devotees gather in reverence, their voices raised in melodious hymns, as the flickering flames of lamps illuminate the surroundings. Feel the serene ambiance envelop you as you witness the rhythmic movements of the priests, offering prayers to the river goddess. Allow yourself to be swept away by the spiritual energy that permeates the air, leaving you with a sense of peace and tranquility that lingers long after the Aarti concludes. Later return to your hotel. Overnight at Jabalpur.\n\nMeals : Breakfast",
      },
      {
        day: 6,
        title: "Jabalpur - Kanha National Park by road (125 kms & 3 Hours approx)",
        description:
          "Morning after breakfast check out from the hotel. Embark on a captivating half-day city tour of Jabalpur, beginning with the awe-inspiring natural wonders of Dhuandhar Falls and Marble Rocks at Bhedaghat, where limestone cliffs rise dramatically along the banks of the Narmada River. Experience the enchanting boat ride amidst the stunning Marble Rocks, marveling at the towering cliffs and the play of light and shadow on the marble surface. This memorable experience can be enjoyed on a direct payment basis. Continue your exploration with a visit to the ancient Chausath Yogini Temple, immersing yourself in the rich cultural heritage of the region.\n\nAfter visit drive to Kanha National Park. Arrive Kanha National Park & check in at the hotel. After lunch the day at Leisure enjoy facilities available at the lodge enjoy dinner at hotel. Overnight at Kanha National Park.\n\nMeals : Breakfast, Lunch & Dinner",
      },
      {
        day: 7,
        title: "Kanha National Park - Nagpur by road (254 kms & 5.5 Hours approx) & Departure from Nagpur -TOUR END",
        description:
          "Early morning jeep safari through Kanha National Park, the Tiger Capital of the world. As the sun rises, anticipate thrilling encounters with Bengal tigers, leopards, wild dogs, and the elusive gharial. Traverse diverse habitats, from dense forests to open grasslands, soaking in the sights and sounds of the wilderness. Feel the cool breeze on your face and listen to the calls of birds echoing through the trees. Catch your breath as you spot your first tiger, a sight that epitomizes the park's allure. It's an adventure you'll never forget, leaving you with a deeper appreciation for nature's wonders.\n\nLater return to your hotel & after check out from the hotel drive to Nagpur. Arrive Nagpur & In time transfer to railway station/airport to board train/flight for onward Journey.\n\nMeals : Breakfast",
      },
    ],
    included: [
      "Meeting and assistance on arrival/departure at Airport/hotel by our representative or driver.",
      "✓ Accommodation and Meals",
      "o Accommodation:",
      "▪ 06 nights on a Double/Triple-sharing basis with breakfast & dinner.",
      "▪ In Kanha National Park: Includes with (Breakfast, Lunch & Dinner)",
      "o Meals Included:",
      "▪ 06 Breakfasts",
      "▪ 01 Lunch",
      "▪ 06 Dinners",
      "✓ Transfers and Travel: Arrival/departure transfers, sightseeing, and travel by air-conditioned vehicle as per itinerary.",
      "✓ In-Vehicle Amenities: 2 Water Bottles (250 ml) Per Person Per Day, Tissues, Hand Sanitizers & masks.",
      "✓ Enjoy boat ride through the 100 feet high white Marble rocks of Bhedaghat.",
      "✓ Experience 01 Morning Jeep Safari at Kanha National Park on private basis with naturalist.",
      "✓ Taxes: 5% GST Applicable on Total Bill.",
    ],
    excluded: [
      "Any services other than the ones mentioned above or air fares, train or flight tickets, guides, entrances fee, activities, meals other than those mentioned above or any items of Personal nature like, telephone calls, laundry, drinks, Camera fees or tips etc.",
    ],
    paxPricing: [
      { pax: "02 Pax", vehicle: "AC Sedan Car", price: 42900 },
      { pax: "04 Pax", vehicle: "AC Ertiga", price: 33100 },
      { pax: "06 Pax", vehicle: "AC Ertiga", price: 27200 },
    ],
    featured: true,
    offer: false,
  },
];