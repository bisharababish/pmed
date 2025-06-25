import { useState, useEffect } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [bounce, setBounce] = useState(false);

  const userCategories = [
    {
      title: "Basic Medical Students",
      description: "Foundation learning for aspiring medical professionals",
      number: "1"
    },

  ];

  useEffect(() => {
    // Set the countdown target to 56 days from now
    const target = new Date();
    target.setDate(target.getDate() + 56);

    const updateCountdown = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft(prev => {
        if (prev.seconds !== seconds) {
          setBounce(true);
        }
        return { days, hours, minutes, seconds };
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (bounce) {
      const timeout = setTimeout(() => setBounce(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [bounce]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">

      {/* Header - Logo and Title Side by Side, Centered */}
      <header className="bg-white shadow-md w-full">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between pt-6 pb-2 px-4 relative">
          {/* Logo on the far left */}
          <div className="flex-shrink-0 flex items-center justify-start w-1/4 min-w-[180px]">
            <img src="/favicon.ico" alt="PMED Logo" className="h-32 w-52 object-contain" />

          </div>
          {/* Navbar on the far right - desktop */}
          <nav className="hidden md:flex flex gap-3 justify-end items-center w-1/4 min-w-[200px] whitespace-nowrap">
            <a href="#" className="px-5 py-2 bg-[#092952] text-white font-semibold rounded shadow hover:bg-[#0b387a] transition">Home</a>
            <a href="#" className="px-5 py-2 bg-[#092952] text-white font-semibold rounded shadow hover:bg-[#0b387a] transition">About</a>
            <a href="#" className="px-5 py-2 bg-[#092952] text-white font-semibold rounded shadow hover:bg-[#0b387a] transition">News</a>
            <a href="#" className="px-5 py-2 bg-[#092952] text-white font-semibold rounded shadow hover:bg-[#0b387a] transition">Divisions</a>
            <a href="#" className="px-5 py-2 bg-[#092952] text-white font-semibold rounded shadow hover:bg-[#0b387a] transition">Our Teams</a>
            <a href="/contact" className="px-5 py-2 bg-[#092952] hover:bg-[#0b387a] text-white font-semibold rounded shadow transition">Contact Us</a>
          </nav>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
        {/* Mobile Navbar */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-2 px-6 pb-4 bg-white shadow-lg animate-fade-in">
            <a href="#" className="px-5 py-3 bg-[#092952] text-white font-semibold rounded shadow hover:bg-[#0b387a] transition">Home</a>
            <a href="#" className="px-5 py-3 bg-[#092952] text-white font-semibold rounded shadow hover:bg-[#0b387a] transition">About</a>
            <a href="#" className="px-5 py-3 bg-[#092952] text-white font-semibold rounded shadow hover:bg-[#0b387a] transition">News</a>
            <a href="#" className="px-5 py-3 bg-[#092952] text-white font-semibold rounded shadow hover:bg-[#0b387a] transition">Divisions</a>
            <a href="#" className="px-5 py-3 bg-[#092952] text-white font-semibold rounded shadow hover:bg-[#0b387a] transition">Our Teams</a>
            <a href="/contact" className="px-5 py-3 bg-[#092952] hover:bg-[#0b387a] text-white font-semibold rounded shadow transition">Contact Us</a>
          </nav>
        )}
      </header>

      {/* Hero/Banner Section - Blue Slideshow */}
      <section className="relative py-12 px-2 md:px-0 bg-[#092952] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <Carousel>
            <CarouselContent>
              {/* Second Slide: Countdown with iff.png background */}
              <CarouselItem>
                <div className="relative w-full h-[600px] flex items-center justify-center">
                  {/* Background image only for this slide */}
                  <img src="/iff.png" alt="Background" className="absolute inset-0 w-full h-full object-contain bg-[#092952] z-0" />
                  <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
                    <span className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white text-center drop-shadow-lg max-w-4xl transition-all duration-300 select-none">
                      International Palestinian Conference for Laboratory Medicine
                    </span>
                    <div className="text-xl md:text-3xl font-bold text-white mb-6 text-center drop-shadow-lg transition-all duration-300 select-none">
                      August 21st - 23rd, 2025
                    </div>
                    <div className="flex flex-row items-end justify-center gap-4 w-full mt-2 transition-all duration-300 select-none">
                      {/* Countdown Timer */}
                      <div className="flex flex-col items-center select-none">
                        <div className="rounded p-2 text-2xl md:text-3xl font-bold text-white min-w-[48px] md:min-w-[60px] text-center drop-shadow-lg bg-transparent transition-all duration-300 select-none">
                          {timeLeft.days}
                        </div>
                        <span className="text-white text-xs md:text-sm font-semibold mt-1 drop-shadow transition-all duration-300 select-none">Days</span>
                      </div>
                      <span className="text-2xl md:text-3xl font-bold text-white drop-shadow transition-all duration-300 select-none">:</span>
                      <div className="flex flex-col items-center select-none">
                        <div className="rounded p-2 text-2xl md:text-3xl font-bold text-white min-w-[48px] md:min-w-[60px] text-center drop-shadow-lg bg-transparent transition-all duration-300 select-none">
                          {timeLeft.hours}
                        </div>
                        <span className="text-white text-xs md:text-sm font-semibold mt-1 drop-shadow transition-all duration-300 select-none">Hours</span>
                      </div>
                      <span className="text-2xl md:text-3xl font-bold text-white drop-shadow transition-all duration-300 select-none">:</span>
                      <div className="flex flex-col items-center select-none">
                        <div className="rounded p-2 text-2xl md:text-3xl font-bold text-white min-w-[48px] md:min-w-[60px] text-center drop-shadow-lg bg-transparent transition-all duration-300 select-none">
                          {timeLeft.minutes}
                        </div>
                        <span className="text-white text-xs md:text-sm font-semibold mt-1 drop-shadow transition-all duration-300 select-none">Minutes</span>
                      </div>
                      <span className="text-2xl md:text-3xl font-bold text-white drop-shadow transition-all duration-300 select-none">:</span>
                      <div className="flex flex-col items-center select-none">
                        <div className={`rounded p-2 text-2xl md:text-3xl font-bold text-white min-w-[48px] md:min-w-[60px] text-center drop-shadow-lg bg-transparent transition-transform duration-300 select-none ${bounce ? 'animate-bounce' : ''}`}>
                          {timeLeft.seconds}
                        </div>
                        <span className="text-white text-xs md:text-sm font-semibold mt-1 drop-shadow transition-all duration-300 select-none">Seconds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-[#0b387a] bg-opacity-90 rounded-xl shadow-2xl w-full mx-2 p-8 flex flex-col items-center border-4 border-[#092952]">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-white text-center">
                    Welcome to PMED
                  </span>
                  <div className="text-2xl md:text-3xl font-bold text-blue-100 mb-1 text-center">
                    Palestine Medical Club
                  </div>
                  <div className="flex items-center justify-center w-full mt-4">
                    <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight text-center">
                      EMPOWERING <span className="text-blue-200">MEDICAL EXCELLENCE</span>
                    </span>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* User Categories Section - Enhanced for PMED Theme */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f4f8fc]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {userCategories.map((category, index) => (
              <Link
                key={index}
                to={
                  category.number === "1"
                    ? "/basic-medical-students"
                    : category.number === "2"
                      ? "/clinical-medical-students"
                      : category.number === "3"
                        ? "/graduates"
                        : category.number === "4"
                          ? "/doctors-specialists"
                          : "/other-contributors"
                }
                className="group hover:no-underline"
              >
                <Card className={
                  `transition-all duration-300 border-2 shadow-lg rounded-xl bg-white hover:border-[#092952] hover:shadow-2xl hover:-translate-y-1 flex flex-col items-center px-6 py-8 ${index === 0 ? 'border-[#092952]' : 'border-transparent'}`
                }>
                  <CardContent className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-[#092952] text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold shadow-md group-hover:bg-[#0b387a] transition-colors">
                      {category.number}
                    </div>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-[#092952] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-base text-gray-600 text-center group-hover:text-[#092952] transition-colors">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - below User Categories */}
      <section className="flex justify-center items-center py-12 px-4 bg-[#f4f8fc]">
        <div className="w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden">
          <video
            src="/IMG_8004.MOV"
            autoPlay
            loop
            controls
            playsInline
            className="w-full h-[400px] md:h-[600px] object-contain bg-black"
            style={{ maxHeight: '80vh', maxWidth: '100%' }}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start md:space-x-8 text-center md:text-left">
          <img src="/favicon.ico" alt="PMED Logo" className="w-36 h-36 rounded-full border-4 border-white mb-4 md:mb-0" />
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">PMED - Palestine Medical Club</h2>
            <div className="mb-2 text-lg">All Rights Reserved © PMED 2025</div>
            <div className="mt-2">
              <span className="font-medium">Quick Links:</span>
              <a href="#" className="ml-2 underline hover:text-blue-300">Home</a>
              <a href="#" className="ml-4 underline hover:text-blue-300">Our Team</a>
              <a href="#contact" className="ml-4 underline hover:text-blue-300">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
