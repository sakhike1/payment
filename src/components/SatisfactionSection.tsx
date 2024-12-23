import {Star} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        quote: "PayFlow has revolutionized how we handle payments. The setup was incredibly easy, and their support team is exceptional.",
        name: "Michael Chen",
        title: "Retail Store Owner",
    },
    {
        quote: "The reliability and speed of PayFlow's system has helped us scale our business significantly. Best decision we've made.",
        name: "Emma Rodriguez",
        title: "E-commerce Director",
    },
    {
        quote: "The transparent pricing and next-day settlements have made a huge difference to our cash flow. Couldn't be happier!",
        name: "James Wilson",
        title: "Restaurant Owner",
    },
];

const SatisfactionSection = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
    };

    return (
        <div className="w-full bg-gradient-to-br from-purple-500 to-purple-600 py-16 lg:py-24 text-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold">Our Customers Love Us</h2>
                    <p className="text-lg text-gray-200 mt-2">See what they have to say about PayFlow!</p>
                </div>

                {/* Testimonials Slider */}
                <Slider {...sliderSettings} className="testimonial-slider">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="px-4">
                            <div className="bg-gradient-to-r from-rose-100 to-teal-50 text-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow flex flex-col h-full">
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-black fill-current" />
                                    ))}
                                </div>
                                <p className="text-lg italic mb-6 flex-grow">{`"${testimonial.quote}"`}</p>
                                <div>
                                    <p className="font-semibold text-lg">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Call-to-Action */}
                <div className="text-center mt-16">
                    <button className="bg-purple-700 text-white px-8 py-3 rounded-full shadow-md hover:bg-purple-800 hover:shadow-lg transition-all duration-300 font-semibold">
                        Join Thousands of Happy Businesses
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SatisfactionSection;
