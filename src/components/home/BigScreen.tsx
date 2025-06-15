import React from "react";
import useCountAnimation from "../../hooks/useCountAnimation";

const stats = [
  {
    number: 140,
    suffix: "k+",
    label: "Happy travelers",
  },
  {
    number: 25,
    suffix: "+",
    label: "Camp locations",
  },
  {
    number: 12,
    suffix: "",
    label: "Guides",
  },
  {
    number: 11,
    suffix: "",
    label: "Years Exp",
  },
];

const StatItem: React.FC<{ stat: (typeof stats)[0]; delay: number }> = ({
  stat,
  delay,
}) => {
  const { count, ref } = useCountAnimation({
    end: stat.number,
    suffix: stat.suffix,
    delay,
  });
  return (
    <div className="text-center" ref={ref}>
      <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
        {count}
      </div>
      <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
    </div>
  );
};

const BigScreen: React.FC = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="fixed inset-0 w-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(./2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-white pb-32">
        <div className="container-custom text-center">
          {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
						Enough for your city life.
					</h1>
					<h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
						It is time to travel
					</h2> */}

          {/* Play Button */}
          {/* <button
						className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-16 mx-auto hover:bg-primary-100 transition-colors"
						aria-label="Play video"
					>
						<Play size={24} className="text-primary-950 ml-1" />
					</button> */}
        </div>
      </div>

      {/* Stats - Positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20">
        {" "}
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 border-2 border-black">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} delay={index * 200} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigScreen;
