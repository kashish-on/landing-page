const VideoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl shadow-lg flex items-center justify-center">
            <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-l-[20px] border-l-primary border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
