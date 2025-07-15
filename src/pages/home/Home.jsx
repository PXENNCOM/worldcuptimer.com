import React, { useState, useEffect } from 'react';

export default function WorldCupTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // World Cup background images
  const backgroundImages = [
    'https://cdn.mos.cms.futurecdn.net/GpTqdVHg2rpr4qVSqsgK38.jpg', 
  ];

  useEffect(() => {
    // 2026 Dünya Kupası başlangıç tarihi: 11 Haziran 2026
    const targetDate = new Date('2026-06-11T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Background image rotation
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000); // 4 seconds

    return () => clearInterval(imageTimer);
  }, [backgroundImages.length]);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background images with animation */}
      <div className="absolute inset-0 bg-black">
        {backgroundImages.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center bg-no-repeat ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* Arka plan deseni */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gray-600 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gray-600 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gray-600 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gray-600 rounded-full"></div>
        </div>

        {/* Ana içerik */}
        <div className="text-center z-10 px-4">
          {/* Başlık */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-xl">
              FIFA 2026
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-500 mb-2">
              WORLD CUP
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Canada • Mexico • USA
            </p>
          </div>

          {/* Geri sayım */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-8 text-white">
            <div className="flex items-center">
              <span className="text-4xl md:text-6xl lg:text-7xl font-bold">
                {timeLeft.days}
              </span>
              <span className="text-lg md:text-xl font-medium ml-1">Days</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-4xl md:text-6xl lg:text-7xl font-bold">
                {timeLeft.hours}
              </span>
              <span className="text-lg md:text-xl font-medium ml-1">Hours</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-4xl md:text-6xl lg:text-7xl font-bold">
                {timeLeft.minutes}
              </span>
              <span className="text-lg md:text-xl font-medium ml-1">Mins</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-4xl md:text-6xl lg:text-7xl font-bold">
                {timeLeft.seconds}
              </span>
              <span className="text-lg md:text-xl font-medium ml-1">Secs</span>
            </div>
          </div>

          {/* Alt bilgi */}
          <div className="text-center">
            <p className="text-xl md:text-2xl font-semibold text-red-500 mb-2">
              June 11, 2026
            </p>
            <p className="text-base md:text-lg text-gray-400">
              Tournament Start Date
            </p>
          </div>

          {/* Animasyonlu top */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-gray-800 border-2 border-gray-600 rounded-full shadow-2xl animate-bounce opacity-80"></div>
          </div>
        </div>

        {/* Kenar efektleri */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-gray-700 to-red-600"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-gray-700 to-red-600"></div>
      </div>
    </div>
  );
}