import React from "react";
import { MapPin, Mountain } from "lucide-react";

const Trekking: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="py-24 bg-primary-50">
        <div className="container-custom">
          {/* Header Section */}
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h1 className="section-subtitle mb-2">Mountain Adventures</h1>
            <h2 className="section-title mb-6">Trekking</h2>
            <p className="text-primary-700 mt-4 leading-relaxed text-base md:text-lg mx-auto">
              Experience the majesty of the Himalayas with our curated trekking
              routes through the diverse landscapes of India, Nepal, and Bhutan.
              From gentle walks to challenging high-altitude adventures,
              discover the natural beauty and cultural heritage of the world's
              most iconic mountain range.
            </p>
          </div>

          {/* Ladakh Trekking Routes */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Mountain className="text-accent-600 mr-3" size={28} />
              <h3 className="text-2xl font-serif text-primary-900">
                Popular Ladakh Trekking Routes
              </h3>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border-b md:border-b-0 md:border-r border-primary-100 pb-4 md:pb-0 md:pr-4">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Markha Valley Trek
                  </h4>
                  <p className="text-primary-700 text-sm">
                    This is a classic trek through the Hemis National Park,
                    offering diverse landscapes, monasteries, and opportunities
                    to see wildlife.
                  </p>
                </div>
                <div className="border-b md:border-b-0 md:border-r border-primary-100 pb-4 md:pb-0 md:pr-4">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Chadar Trek
                  </h4>
                  <p className="text-primary-700 text-sm">
                    A unique winter trek on the frozen Zanskar River, offering a
                    thrilling experience.
                  </p>
                </div>
                <div className="border-b md:border-b-0 lg:border-r-0 pb-4 md:pb-0">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Stok Kangri Trek
                  </h4>
                  <p className="text-primary-700 text-sm">
                    A challenging high-altitude trek leading to a stunning peak,
                    ideal for experienced trekkers.
                  </p>
                </div>
                <div className="border-b md:border-b-0 md:border-r border-primary-100 pt-4 pb-4 md:pb-0 md:pr-4">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Sham Valley Trek
                  </h4>
                  <p className="text-primary-700 text-sm">
                    A shorter, easier trek, perfect for beginners, with
                    beautiful monasteries and villages.
                  </p>
                </div>
                <div className="border-b md:border-b-0 md:border-r border-primary-100 pt-4 pb-4 md:pb-0 md:pr-4">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Nubra Valley Trek
                  </h4>
                  <p className="text-primary-700 text-sm">
                    Trek through unique landscapes, including sand dunes and the
                    chance to see Bactrian camels.
                  </p>
                </div>
                <div className="pt-4">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Snow Leopard Trek
                  </h4>
                  <p className="text-primary-700 text-sm">
                    A trek focused on spotting the elusive snow leopard in its
                    natural habitat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Himachal Pradesh Trekking Routes */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Mountain className="text-accent-600 mr-3" size={28} />
              <h3 className="text-2xl font-serif text-primary-900">
                Popular Treks in Himachal Pradesh
              </h3>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="border-b md:border-b-0 md:border-r border-primary-100 pb-4 md:pb-0 md:pr-4">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Hampta Pass
                  </h4>
                  <p className="text-primary-700 text-sm">
                    This trek is known for its dramatic landscapes, crossing
                    from the lush green valleys of Kullu to the stark, barren
                    beauty of Spiti.
                  </p>
                </div>
                <div className="border-b md:border-b-0 md:border-r border-primary-100 pb-4 md:pb-0 md:pr-4">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Bhrigu Lake
                  </h4>
                  <p className="text-primary-700 text-sm">
                    A shorter trek, Bhrigu Lake offers stunning views of the Pir
                    Panjal range and is known for its high-altitude glacial
                    lake.
                  </p>
                </div>
                <div className="border-b md:border-b-0 lg:border-r-0 pb-4 md:pb-0">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Beas Kund
                  </h4>
                  <p className="text-primary-700 text-sm">
                    A popular trek for beginners, Beas Kund takes you to the
                    source of the Beas River, with views of Hanuman Tibba and
                    other peaks.
                  </p>
                </div>
                <div className="border-b md:border-b-0 md:border-r border-primary-100 pt-4 pb-4 md:pb-0 md:pr-4">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Kheerganga
                  </h4>
                  <p className="text-primary-700 text-sm">
                    A relatively easy trek through the Parvati Valley,
                    Kheerganga is known for its hot springs and views of the
                    surrounding mountains.
                  </p>
                </div>
                <div className="border-b md:border-b-0 md:border-r border-primary-100 pt-4 pb-4 md:pb-0 md:pr-4">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Rupin Pass
                  </h4>
                  <p className="text-primary-700 text-sm">
                    This challenging trek is known for its diverse scenery,
                    including forests, meadows, and glacial valleys, as well as
                    its steep climbs and descents.
                  </p>
                </div>
                <div className="border-b lg:border-b-0 pt-4 pb-4 lg:pb-0">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Buran Ghati
                  </h4>
                  <p className="text-primary-700 text-sm">
                    A trek offering a mix of forests, meadows, and high-altitude
                    passes, Buran Ghati is known for its scenic beauty and
                    challenging terrain.
                  </p>
                </div>
                <div className="border-b md:border-b-0 md:border-r border-primary-100 pt-4 pb-4 md:pb-0 md:pr-4">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Pin Parvati Pass
                  </h4>
                  <p className="text-primary-700 text-sm">
                    A challenging trek for experienced trekkers, Pin Parvati
                    Pass connects the Parvati Valley with the Spiti Valley,
                    offering stunning views and remote wilderness.
                  </p>
                </div>
                <div className="border-b md:border-b-0 md:border-r border-primary-100 pt-4 pb-4 md:pb-0 md:pr-4">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Chandrakhani Pass
                  </h4>
                  <p className="text-primary-700 text-sm">
                    This trek offers panoramic views of the Deo Tibba peak and
                    the Parvati Valley, with a relatively moderate level of
                    difficulty.
                  </p>
                </div>
                <div className="pt-4">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Triund & Kareri Lake
                  </h4>
                  <p className="text-primary-700 text-sm">
                    Triund is a popular and relatively easy trek near
                    Dharamshala, offering stunning views of the Dhauladhar
                    range. Kareri Lake is a beautiful trek to a glacial lake,
                    known for its serene environment and diverse flora and
                    fauna.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Nepal Trekking Regions */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <MapPin className="text-accent-600 mr-3" size={28} />
              <h3 className="text-2xl font-serif text-primary-900">
                Popular Trekking in Nepal Regions and Routes
              </h3>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-b md:border-b-0 md:border-r border-primary-100 pb-4 md:pb-0 md:pr-4">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Everest Region
                  </h4>
                  <p className="text-primary-700 text-sm">
                    Known for the iconic Everest Base Camp trek, offering
                    breathtaking views of Mount Everest and other peaks, as well
                    as cultural experiences in Sherpa villages.
                  </p>
                </div>
                <div className="border-b md:border-b-0 pb-4 md:pb-0">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Annapurna Region
                  </h4>
                  <p className="text-primary-700 text-sm">
                    Features the Annapurna Circuit, Annapurna Base Camp, and
                    Poon Hill treks, with diverse scenery ranging from lush
                    rhododendron forests to high-altitude deserts.
                  </p>
                </div>
                <div className="border-b md:border-b-0 md:border-r border-primary-100 pt-4 pb-4 md:pb-0 md:pr-4">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Langtang Region
                  </h4>
                  <p className="text-primary-700 text-sm">
                    Offers the Langtang Valley trek, known for its scenic beauty
                    and cultural richness, and the trek to Gosainkunda Lake.
                  </p>
                </div>
                <div className="pt-4">
                  <h4 className="font-medium text-lg text-primary-900 mb-2">
                    Other Regions
                  </h4>
                  <p className="text-primary-700 text-sm">
                    Include Manaslu, Kanchenjunga, Upper Mustang, and Dolpo,
                    each offering unique trekking experiences with varying
                    levels of challenge and remoteness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bhutan Trekking */}
          <div>
            <div className="flex items-center mb-8">
              <MapPin className="text-accent-600 mr-3" size={28} />
              <h3 className="text-2xl font-serif text-primary-900">
                Trekking in Bhutan
              </h3>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-primary-700 leading-relaxed">
                Bhutan offers diverse trekking experiences, from the popular
                Druk Path to the challenging Snowman Trek. The Druk Path is a
                relatively easy trek between Paro and Thimphu, while the Snowman
                Trek is known as one of the toughest in the world, traversing
                northern Bhutan and crossing high mountain passes. Other options
                include Bumthang cultural treks, the Dagala Thousand Lakes trek,
                and the Laya-Gasa trek.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trekking;
