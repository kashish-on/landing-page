import AdvancedTrackingIcon from "@/assets/advanced-tracking.svg";
import InDepthMonitoringIcon from "@/assets/in-depth-monitoring.svg";

const AnalyticsSection = () => {
  return (
    <section className="pt-24 pb-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="section-badge border border-[#470277]">Customizations & Analysis</span>
        </div>

        {/* Heading */}
        <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          We Make It <span className="text-[#72339F]/80 font-sora">Easy To Track</span> All User
          <br />
          Analytics
        </h2>
        <p className="font-sora text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          All the generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
        </p>

        {/* Feature Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-3xl mx-auto">
          {/* Advanced Tracking */}
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-violet-100 to-violet-200 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <img
                src={AdvancedTrackingIcon}
                alt="Advanced tracking"
                className="w-18 h-18 object-contain"
              />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Advanced tracking</h4>
              <p className="text-[13px] leading-snug text-muted-foreground -mt-1">
                All the generators on the Internet tend to repeat predefined chunks as necessary
              </p>
            </div>
          </div>

          {/* In-depth Monitoring */}
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <img
                src={InDepthMonitoringIcon}
                alt="In-depth monitoring"
                className="w-18 h-18 object-contain"
              />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">In-depth monitoring</h4>
              <p className="text-[13px] leading-snug text-muted-foreground -mt-1">
                All the generators on the Internet tend to repeat predefined chunks as necessary
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;

