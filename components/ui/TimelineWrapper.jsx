const TimelineWrapper = ({ children }) => {
  return (
    <div className="relative py-12 md:py-16">
      {" "}
      <div
        className="absolute h-full w-1 bg-purple-700
left-4 md:left-1/2 md:transform md:-translate-x-1/2"
      ></div>
      {/* Icon centang biru */}
      <div
        className="absolute bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center shadow-lg z-10
left-4 -top-4 md:left-1/2 md:-translate-x-1/2 animate-bounce"
      >
        <img
          src="/images/centang biru.jpg"
          alt="check"
          className="w-4 h-4 animate-pulse"
        />
      </div>
      {children}
    </div>
  );
};

export default TimelineWrapper;
