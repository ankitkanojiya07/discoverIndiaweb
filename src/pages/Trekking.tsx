import React, { useState } from "react";
import { Mountain, MapPin, Calendar, Clock, Activity } from "lucide-react";

interface TrekkingRoute {
  id: number;
  title: string;
  location: string;
  country: string;
  image: string;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Difficult";
  duration: string;
  altitude: string;
  bestSeason: string;
  description: string;
  highlights: string[];
}

const trekkingRoutes: TrekkingRoute[] = [
  {
    id: 1,
    title: "Markha Valley Trek",
    location: "Ladakh",
    country: "India",
    image: "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg",
    difficulty: "Moderate",
    duration: "7-9 days",
    altitude: "5,200m",
    bestSeason: "June to September",
    description:
      "Experience the breathtaking landscapes of Ladakh through traditional villages and high mountain passes in this classic trek that combines cultural encounters with stunning scenery.",
    highlights: [
      "Cross the challenging Kongmaru La Pass (5,200m)",
      "Visit remote Buddhist villages and monasteries",
      "Experience traditional Ladakhi hospitality in homestays",
      "Witness stunning views of Kang Yatse and Stok Kangri peaks",
    ],
  },
  {
    id: 2,
    title: "Everest Base Camp",
    location: "Khumbu",
    country: "Nepal",
    image: "https://images.pexels.com/photos/3389537/pexels-photo-3389537.jpeg",
    difficulty: "Challenging",
    duration: "12-14 days",
    altitude: "5,364m",
    bestSeason: "March to May, September to November",
    description:
      "The classic trek to the foot of the world's highest mountain through Sherpa villages and dramatic landscapes. This iconic journey takes you through the heart of the Khumbu region.",
    highlights: [
      "Visit Namche Bazaar, the gateway to the high Himalaya",
      "Spectacular views of Mt. Everest, Lhotse, and Ama Dablam",
      "Experience Sherpa culture and visit ancient monasteries",
      "Reach Everest Base Camp and climb Kala Patthar for panoramic views",
    ],
  },
  {
    id: 3,
    title: "Druk Path Trek",
    location: "Paro to Thimphu",
    country: "Bhutan",
    image: "https://images.pexels.com/photos/4319752/pexels-photo-4319752.jpeg",
    difficulty: "Moderate",
    duration: "4-6 days",
    altitude: "4,200m",
    bestSeason: "March to May, September to November",
    description:
      "A short but scenic trek connecting Paro and Thimphu through forests and high ridges with views of the Himalayas. Perfect for those seeking a taste of Bhutanese trekking.",
    highlights: [
      "Visit ancient monasteries including Phajoding",
      "Camp beside clear mountain lakes teeming with trout",
      "Chance to see rare Himalayan blue poppies (in season)",
      "Incredible views of Mt. Chomolhari and surrounding peaks",
    ],
  },
  {
    id: 4,
    title: "Valley of Flowers Trek",
    location: "Uttarakhand",
    country: "India",
    image: "https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg",
    difficulty: "Moderate",
    duration: "5-6 days",
    altitude: "3,858m",
    bestSeason: "July to September",
    description:
      "Discover the UNESCO World Heritage Site known for its meadows of endemic alpine flowers and variety of flora. The valley is nestled in the West Himalaya.",
    highlights: [
      "Explore the legendary valley with over 500 species of wildflowers",
      "Visit Hemkund Sahib, a sacred Sikh shrine",
      "Trek through diverse landscapes from lush forests to alpine meadows",
      "Opportunity to spot rare Himalayan wildlife including blue sheep and musk deer",
    ],
  },
  {
    id: 5,
    title: "Annapurna Base Camp",
    location: "Annapurna",
    country: "Nepal",
    image: "https://images.pexels.com/photos/3526080/pexels-photo-3526080.jpeg",
    difficulty: "Moderate",
    duration: "7-12 days",
    altitude: "4,130m",
    bestSeason: "March to May, October to November",
    description:
      "Trek through diverse terrains and cultures to reach the amphitheater of peaks at the Annapurna Base Camp, surrounded by mountains over 7,000m.",
    highlights: [
      "Experience the natural amphitheater of peaks at Annapurna Base Camp",
      "Trek through rhododendron forests and traditional Gurung villages",
      "Enjoy stunning sunrise views from Poon Hill",
      "Relax in the natural hot springs at Jhinu Danda",
    ],
  },
  {
    id: 6,
    title: "Snowman Trek",
    location: "Lunana Region",
    country: "Bhutan",
    image: "https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg",
    difficulty: "Difficult",
    duration: "25-30 days",
    altitude: "5,320m",
    bestSeason: "September to October",
    description:
      "One of the most challenging treks in the world, crossing 11 high passes over 4,500m through the remote Lunana region of Bhutan.",
    highlights: [
      "Cross 11 high passes, including Karakachu La (5,320m)",
      "Trek through one of the most remote and pristine regions in the Himalayas",
      "Visit isolated villages and experience untouched Bhutanese culture",
      "Opportunity to see rare wildlife including blue sheep, takin, and snow leopards",
    ],
  },
];

const Trekking: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const countries = ["All", "India", "Nepal", "Bhutan"];

  const filteredRoutes =
    filter === "All"
      ? trekkingRoutes
      : trekkingRoutes.filter((route) => route.country === filter);

  return (
    <div className="pt-24">
      <section className="py-24 bg-primary-50">
        <div className="container-custom">
          {/* Header Section */}
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h1 className="section-subtitle mb-2">Mountain Adventures</h1>
            <h2 className="section-title mb-6">Himalayan Trekking</h2>
            <p className="text-primary-700 mt-4 leading-relaxed text-base md:text-lg mx-auto">
              Experience the majesty of the Himalayas with our curated trekking
              routes through the diverse landscapes of India, Nepal, and Bhutan.
              From gentle walks to challenging high-altitude adventures,
              discover the natural beauty and cultural heritage of the world's
              most iconic mountain range.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-4 mb-16">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setFilter(country)}
                className={`px-6 py-3 rounded-lg transition-all ${
                  filter === country
                    ? "bg-accent-600 text-white"
                    : "bg-white text-primary-900 hover:bg-primary-100"
                }`}
              >
                {country}
              </button>
            ))}
          </div>

          {/* Trekking Routes Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRoutes.map((route) => (
              <div
                key={route.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={route.image}
                    alt={route.title}
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-accent-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {route.difficulty}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-xs uppercase tracking-wider text-primary-600 mb-2">
                    <MapPin size={14} className="mr-1" />
                    <span>
                      {route.location}, {route.country}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-primary-950 mb-3">
                    {route.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-primary-700">
                      <Mountain size={16} className="mr-2 text-accent-600" />
                      <span>{route.altitude}</span>
                    </div>
                    <div className="flex items-center text-sm text-primary-700">
                      <Clock size={16} className="mr-2 text-accent-600" />
                      <span>{route.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-primary-700">
                      <Calendar size={16} className="mr-2 text-accent-600" />
                      <span>{route.bestSeason}</span>
                    </div>
                    <div className="flex items-center text-sm text-primary-700">
                      <Activity size={16} className="mr-2 text-accent-600" />
                      <span>{route.difficulty}</span>
                    </div>
                  </div>

                  <p className="text-primary-700 text-sm leading-relaxed mb-4">
                    {route.description}
                  </p>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-primary-900 mb-2">
                      Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {route.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-primary-700 flex items-start"
                        >
                          <span className="text-accent-600 mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trekking;
