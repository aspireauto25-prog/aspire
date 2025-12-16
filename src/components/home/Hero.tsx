const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="video-background">
        <video
          id="hero-video"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="assets/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="container mx-auto px-6 py-20 min-h-screen">
        <div className="max-w-3xl animate-slide-in-left">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm mb-6 animate-pulse-slow">
            <span className="text-primary font-bold">
              Premium Car Rental Service
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Aspire
            <span className="gradient-text">Automotive</span>
            <br />
            Driven by
            <span className="text-primary animate-glow">Excellence</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Experience luxury, performance, and reliability with our premium
            fleet. From compact city cars to luxury SUVs, we have the perfect
            vehicle for every journey.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="btn-primary px-8 py-4 rounded-full font-bold text-lg shadow-2xl animate-bounce-slow">
              <i className="fas fa-car mr-3"></i> Explore Our Fleet
            </button>
            <button className="px-8 py-4 rounded-full font-bold text-lg border-2 border-white text-white hover:bg-white hover:text-dark transition-all duration-300">
              <i className="fas fa-play-circle mr-3"></i> Watch Tour
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center glass-effect p-6 rounded-2xl backdrop-blur-sm">
              <div
                className="text-3xl font-bold text-primary counter"
                data-target="250"
              >
                0
              </div>
              <div className="text-gray-300">Vehicles</div>
            </div>
            <div className="text-center glass-effect p-6 rounded-2xl backdrop-blur-sm">
              <div
                className="text-3xl font-bold text-primary counter"
                data-target="50"
              >
                0
              </div>
              <div className="text-gray-300">Locations</div>
            </div>
            <div className="text-center glass-effect p-6 rounded-2xl backdrop-blur-sm">
              <div
                className="text-3xl font-bold text-primary counter"
                data-target="98"
              >
                0
              </div>
              <div className="text-gray-300">Satisfaction %</div>
            </div>
            <div className="text-center glass-effect p-6 rounded-2xl backdrop-blur-sm">
              <div
                className="text-3xl font-bold text-primary counter"
                data-target="24"
              >
                0
              </div>
              <div className="text-gray-300">/7 Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
