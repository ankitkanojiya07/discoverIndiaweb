import React, { useState } from "react";
import { Leaf, MapPin, Calendar, Camera, Map } from "lucide-react";

interface WildlifeSafari {
  id: number;
  title: string;
  location: string;
  country: string;
  image: string;
  parkType: string;
  bestSeason: string;
  keySpecies: string[];
  description: string;
  activities: string[];
}

const wildlifeSafaris: WildlifeSafari[] = [
  {
    id: 1,
    title: "Ranthambore National Park",
    location: "Rajasthan",
    country: "India",
    image: "./35.jpg",
    parkType: "National Park",
    bestSeason: "October to June",
    keySpecies: [
      "Bengal Tiger",
      "Leopard",
      "Sloth Bear",
      "Sambar Deer",
      "Indian Fox",
    ],
    description:
      "Explore one of India's most renowned national parks and spot the majestic Bengal tiger in its natural habitat. The park's ancient ruins and lakes create a unique ecosystem.",
    activities: [
      "Jeep Safaris",
      "Canter Safaris",
      "Bird Watching",
      "Wildlife Photography",
    ],
  },
  {
    id: 2,
    title: "Bandhavgarh National Park",
    location: "Madhya Pradesh",
    country: "India",
    image: "./36.jpg",
    parkType: "National Park & Tiger Reserve",
    bestSeason: "October to June",
    keySpecies: [
      "Bengal Tiger",
      "White Tiger",
      "Leopard",
      "Indian Bison",
      "Spotted Deer",
    ],
    description:
      "Known for having one of the highest densities of tigers in the world, Bandhavgarh offers excellent opportunities for tiger sightings amid its diverse terrain of bamboo forests and grasslands.",
    activities: [
      "Jeep Safaris",
      "Elephant Safaris",
      "Bird Watching",
      "Fort Exploration",
    ],
  },
  {
    id: 3,
    title: "Kanha National Park",
    location: "Madhya Pradesh",
    country: "India",
    image: "./leo.jpg",
    parkType: "National Park & Tiger Reserve",
    bestSeason: "October to June",
    keySpecies: [
      "Bengal Tiger",
      "Indian Leopard",
      "Barasingha",
      "Indian Wild Dog",
      "Sloth Bear",
    ],
    description:
      'The inspiration for Kipling\'s "The Jungle Book," Kanha features stunning sal and bamboo forests, rolling meadows, and ravines that are home to diverse wildlife.',
    activities: [
      "Jeep Safaris",
      "Elephant Safaris",
      "Nature Walks",
      "Village Visits",
    ],
  },
  {
    id: 4,
    title: "Sariska Tiger Reserve",
    location: "Rajasthan",
    country: "India",
    image: "https://images.pexels.com/photos/5487467/pexels-photo-5487467.jpeg",
    parkType: "Tiger Reserve",
    bestSeason: "October to June",
    keySpecies: [
      "Bengal Tiger",
      "Leopard",
      "Striped Hyena",
      "Golden Jackal",
      "Indian Eagle-Owl",
    ],
    description:
      "Located in the Aravalli Hills, Sariska is known for its tiger reintroduction program and offers a unique landscape of deciduous forests, rocky cliffs, and ancient temples.",
    activities: [
      "Jeep Safaris",
      "Temple Visits",
      "Bird Watching",
      "Historical Site Exploration",
    ],
  },
  {
    id: 5,
    title: "Gir National Park",
    location: "Gujarat",
    country: "India",
    image: "./lion.jpg",
    parkType: "National Park & Wildlife Sanctuary",
    bestSeason: "December to April",
    keySpecies: [
      "Asiatic Lion",
      "Leopard",
      "Striped Hyena",
      "Indian Fox",
      "Chital",
    ],
    description:
      "The last remaining natural habitat of the endangered Asiatic lion, Gir offers a unique opportunity to see these majestic cats in the wild amid teak forests and savanna.",
    activities: [
      "Jeep Safaris",
      "Lion Tracking",
      "Bird Watching",
      "Siddi Tribal Village Visit",
    ],
  },
  {
    id: 6,
    title: "Tadoba Andhari Tiger Reserve",
    location: "Maharashtra",
    country: "India",
    image: "./40.jpg",
    parkType: "Tiger Reserve",
    bestSeason: "October to June",
    keySpecies: [
      "Bengal Tiger",
      "Indian Leopard",
      "Sloth Bear",
      "Gaur",
      "Wild Dog",
    ],
    description:
      "Maharashtra's oldest and largest national park, Tadoba offers excellent tiger sightings with its open landscapes and meadows alongside dense forests and bamboo thickets.",
    activities: [
      "Jeep Safaris",
      "Nature Walks",
      "Boat Rides",
      "Wildlife Photography",
    ],
  },
  {
    id: 7,
    title: "Periyar National Park",
    location: "Kerala",
    country: "India",
    image: "https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg",
    parkType: "National Park & Tiger Reserve",
    bestSeason: "September to May",
    keySpecies: [
      "Bengal Tiger",
      "Indian Elephant",
      "Gaur",
      "Sambar Deer",
      "Lion-tailed Macaque",
    ],
    description:
      "Located in the Western Ghats, Periyar offers a unique lake-centered wildlife experience in a setting of tropical evergreen forests and spice plantations.",
    activities: [
      "Boat Safaris",
      "Jungle Patrolling",
      "Bamboo Rafting",
      "Spice Garden Visits",
    ],
  },
  {
    id: 8,
    title: "Pench Tiger Reserve",
    location: "Madhya Pradesh",
    country: "India",
    image: "./41.jpg",
    parkType: "National Park & Tiger Reserve",
    bestSeason: "October to June",
    keySpecies: ["Bengal Tiger", "Leopard", "Wolf", "Wild Dog", "Indian Bison"],
    description:
      "Another inspiration for 'The Jungle Book', Pench features undulating terrain with teak forests and the Pench River flowing through, creating a vibrant ecosystem.",
    activities: [
      "Jeep Safaris",
      "Nature Walks",
      "Bird Watching",
      "Wildlife Photography",
    ],
  },
  {
    id: 9,
    title: "Kaziranga National Park",
    location: "Assam",
    country: "India",
    image: "https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg",
    parkType: "National Park & UNESCO Site",
    bestSeason: "November to April",
    keySpecies: [
      "One-horned Rhinoceros",
      "Royal Bengal Tiger",
      "Asian Elephant",
      "Wild Water Buffalo",
      "Swamp Deer",
    ],
    description:
      "Home to the largest population of one-horned rhinoceros in the world, this park offers grasslands, marshes, and dense forests that support diverse wildlife.",
    activities: [
      "Jeep Safaris",
      "Elephant Safaris",
      "Bird Watching",
      "Orchid Park Visit",
    ],
  },
  {
    id: 10,
    title: "Jim Corbett National Park",
    location: "Uttarakhand",
    country: "India",
    image: "https://images.pexels.com/photos/2583836/pexels-photo-2583836.jpeg",
    parkType: "National Park & Tiger Reserve",
    bestSeason: "November to June",
    keySpecies: [
      "Bengal Tiger",
      "Asian Elephant",
      "Leopard",
      "Himalayan Black Bear",
      "Gharial",
    ],
    description:
      "India's oldest national park, Jim Corbett offers diverse habitats from hills to riverine belts, grasslands to dense forests, supporting a wide range of wildlife.",
    activities: [
      "Jeep Safaris",
      "Elephant Safaris",
      "Fishing",
      "River Rafting",
    ],
  },
  // {
  //   id: 11,
  //   title: "Chitwan National Park",
  //   location: "Terai",
  //   country: "Nepal",
  //   image: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
  //   parkType: "National Park & UNESCO Site",
  //   bestSeason: "October to March",
  //   keySpecies: [
  //     "One-horned Rhino",
  //     "Bengal Tiger",
  //     "Asian Elephant",
  //     "Gharial Crocodile",
  //     "Sloth Bear",
  //   ],
  //   description:
  //     "Discover Nepal's first national park, home to the endangered one-horned rhinoceros and diverse wildlife. The park features dense sal forests, grasslands and riverine forests.",
  //   activities: [
  //     "Jeep Safaris",
  //     "Canoe Rides",
  //     "Elephant Bathing",
  //     "Tharu Cultural Program",
  //   ],
  // },
  // {
  //   id: 12,
  //   title: "Royal Manas National Park",
  //   location: "Southern Bhutan",
  //   country: "Bhutan",
  //   image: "https://images.pexels.com/photos/4215838/pexels-photo-4215838.jpeg",
  //   parkType: "National Park",
  //   bestSeason: "October to April",
  //   keySpecies: [
  //     "Golden Langur",
  //     "Bengal Tiger",
  //     "Clouded Leopard",
  //     "Asiatic Elephant",
  //     "Gangetic Dolphin",
  //   ],
  //   description:
  //     "Bhutan's oldest national park connects with India's Manas National Park, creating an essential wildlife corridor in the Eastern Himalayas with incredible biodiversity.",
  //   activities: [
  //     "Guided Nature Walks",
  //     "Wildlife Viewing",
  //     "Bird Watching",
  //     "Cultural Visits",
  //   ],
  // },
];

const Wildlife: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const countries = ["All", "India", "Nepal", "Bhutan"];

  const filteredSafaris =
    filter === "All"
      ? wildlifeSafaris
      : wildlifeSafaris.filter((safari) => safari.country === filter);

  return (
    <div className="pt-24">
      <section className="py-24 bg-primary-50">
        <div className="container-custom">
          {/* Header Section */}
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h1 className="section-subtitle mb-2">Wildlife Safaris</h1>
            <h2 className="section-title mb-6">Natural Habitats</h2>
            <p className="text-primary-700 mt-4 leading-relaxed text-base md:text-lg mx-auto">
              Embark on extraordinary journeys into the wild to witness majestic
              animals in their natural habitats across the diverse ecosystems of
              India, Nepal, and Bhutan. Our wildlife safaris offer unforgettable
              encounters with some of the most endangered and iconic species in
              the world.
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

          {/* Wildlife Safaris Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredSafaris.map((safari) => (
              <div
                key={safari.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 relative overflow-hidden">
                  <img
                    src={safari.image}
                    alt={safari.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{ minHeight: "300px" }}
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {safari.parkType}
                  </div>
                </div>

                <div className="md:w-3/5 p-6">
                  <div className="flex items-center text-xs uppercase tracking-wider text-primary-600 mb-2">
                    <MapPin size={14} className="mr-1" />
                    <span>
                      {safari.location}, {safari.country}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-primary-950 mb-3">
                    {safari.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center text-sm text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                      <Calendar size={14} className="mr-2 text-accent-600" />
                      <span>{safari.bestSeason}</span>
                    </div>
                  </div>

                  <p className="text-primary-700 text-sm leading-relaxed mb-4">
                    {safari.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-primary-900 mb-2">
                      Key Species:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {safari.keySpecies.slice(0, 4).map((species, idx) => (
                        <span
                          key={idx}
                          className="flex items-center text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full"
                        >
                          <Leaf size={12} className="mr-1 text-accent-600" />
                          {species}
                        </span>
                      ))}
                      {safari.keySpecies.length > 4 && (
                        <span className="text-xs text-accent-600">
                          +{safari.keySpecies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-primary-900 mb-2">
                      Activities:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {safari.activities.map((activity, idx) => (
                        <span
                          key={idx}
                          className="flex items-center text-xs bg-white border border-primary-200 text-primary-700 px-2 py-1 rounded-full"
                        >
                          {idx % 2 === 0 ? (
                            <Camera
                              size={12}
                              className="mr-1 text-primary-600"
                            />
                          ) : (
                            <Map size={12} className="mr-1 text-primary-600" />
                          )}
                          {activity}
                        </span>
                      ))}
                    </div>
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

export default Wildlife;
