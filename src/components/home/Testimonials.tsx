import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The attention to detail in every aspect of our journey was remarkable. From the historic accommodations to the private ceremonies we attended, everything felt authentic yet luxurious.",
    author: "Sarah Johnson",
    location: "United States",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
  },
  {
    id: 2,
    quote: "Our experience with Discover Culture India transcended typical tourism. We connected with local artisans, participated in age-old traditions, and stayed in stunning heritage properties.",
    author: "James Wilson",
    location: "United Kingdom",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
  },
  {
    id: 3,
    quote: "The spiritual journey through Varanasi was life-changing. Our guide's knowledge and the exclusive access to ceremonies provided a profound understanding of India's cultural depth.",
    author: "Amelia Chen",
    location: "Singapore",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  const next = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1);

  return (
    <section className="pt-32 pb-24 bg-white relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up">
          <h2 className="section-subtitle">Testimonials</h2>
          <h3 className="section-title">The Voice of Experience</h3>
          <p className="text-primary-700 mt-4 leading-relaxed">
            Discover what our guests have to say about their transformative journeys through India's cultural landscape.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="fade-in">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${index === current ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 w-full'}`}
              >
                <div className="max-w-2xl mx-auto text-center">
                  <Quote size={40} className="text-primary-300 mb-4 mx-auto" />
                  <blockquote className="font-serif text-lg md:text-xl text-primary-900 italic mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary-100">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-primary-900">{testimonial.author}</div>
                      <div className="text-primary-600 text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={prev}
              className="mr-4 w-10 h-10 rounded-full flex items-center justify-center border border-primary-300 text-primary-900 hover:bg-primary-100 transition-all hover:scale-105"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-primary-300 text-primary-900 hover:bg-primary-100 transition-all hover:scale-105"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;