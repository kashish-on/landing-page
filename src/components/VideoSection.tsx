import RumiVideo from "@/assets/rumi.mp4";

const VideoSection = () => {
  return (
    <section className="py-16 bg-[#470277]/5 relative overflow-hidden">
      {/* Top-middle purple glow (continuation from hero) */}
  <div className="pointer-events-none absolute inset-0 flex justify-center">
    <div
      className="mt-[-120px] w-[1200px] h-[500px] rounded-full blur-[140px] opacity-60"
      style={{
        background:
          "radial-gradient(circle at center, rgba(71,2,119,0.32) 0%, rgba(71,2,119,0.18) 35%, rgba(71,2,119,0.08) 55%, rgba(71,2,119,0) 75%)",
      }}
    />
  </div>
      {/* Middle purple gradient continuation */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="w-[1200px] h-[600px] rounded-full blur-[140px] opacity-50"
          style={{
            background:
              "radial-gradient(circle at center, rgba(71,2,119,0.35) 0%, rgba(71,2,119,0.18) 35%, rgba(71,2,119,0.08) 55%, rgba(71,2,119,0) 70%)",
          }}
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-video rounded-3xl shadow-lg overflow-hidden">
            <video
              src={RumiVideo}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

