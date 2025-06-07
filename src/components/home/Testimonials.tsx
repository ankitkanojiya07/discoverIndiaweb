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
                className={`transition-opacity duration-500 ${index === current ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <Quote size={48} className="text-primary-300 mb-4" />
                    <blockquote className="font-serif text-xl text-primary-900 italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-medium text-primary-900">{testimonial.author}</div>
                      <div className="text-primary-600 text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={prev}
              className="mr-4 w-12 h-12 flex items-center justify-center border border-primary-300 text-primary-900 hover:bg-primary-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center border border-primary-300 text-primary-900 hover:bg-primary-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;