const WaveSvg = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
      <svg
        className="elative block w-full h-[80px] md:h-[120px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              className="text-primary/20"
              stopColor="currentColor"
            />
            <stop
              offset="50%"
              className="text-primary/30"
              stopColor="currentColor"
            />
            <stop
              offset="100%"
              className="text-primary/20"
              stopColor="currentColor"
            />
          </linearGradient>
        </defs>
        <path
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          fill="url(#waveGradient)"
        />
        <path
          d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,88C672,91,768,85,864,80C960,75,1056,69,1152,69.3C1248,69,1344,75,1392,77.3L1440,80L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          className="text-card/50"
          fill="currentColor"
          opacity="0.5"
        />
      </svg>
    </div>
  );
};
export default WaveSvg;
