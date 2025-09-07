const TimelineWrapper = ({ children }) => {
  return (
    <div className="relative py-12 md:py-16">
      {/* Garis vertikal animasi */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute h-full w-1 bg-purple-700 origin-top
left-4 md:left-1/2 md:transform md:-translate-x-1/2"
      ></motion.div>

      {/* Icon centang biru full bulatan */}
      <div
        className="absolute rounded-full overflow-hidden w-10 h-10 shadow-lg z-10
left-4 -top-5 md:left-1/2 md:-translate-x-1/2 animate-bounce"
      >
        {/* Gambar langsung memenuhi bulatan */}
        <img
          src="/images/centang biru.jpg"
          alt="check"
          className="w-full h-full object-cover animate-pulse"
        />
      </div>

      {/* Tambahin padding-left supaya isi section tidak dempet dengan garis */}
      <div className="pl-12 md:pl-0">{children}</div>
    </div>
  );
};

export default TimelineWrapper;
