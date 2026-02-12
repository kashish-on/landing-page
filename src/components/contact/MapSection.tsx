const MapSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Outer Card */}
        <div className="relative rounded-3xl bg-white border border-[#470277]/40 shadow-[0_12px_40px_rgba(71,2,119,0.25)] p-4 md:p-5">
          
          {/* Inner Map Wrapper */}
          <div className="relative rounded-2xl overflow-hidden">
            
            {/* Custom Info Card */}
            <div className="absolute top-4 left-4 z-20 bg-white rounded-xl shadow-lg px-4 py-3 max-w-xs border border-[#470277]/30">
              <p className="font-semibold text-sm text-black">ObserveNow Media</p>
              <p className="text-xs text-muted-foreground">
                Unit No. 615, Tower-4, Assotech Business Cresterra, Sector-135, Noida, 201301
              </p>
              <a
                href="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7012.76112399733!2d77.40002103795788!3d28.498195831836775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sADVEBRO%20PRODUCTIONS%20LLP%2C%20Unit%20No.%20615%2C%20Tower-4%2C%20Assotech%20Business%20Cresterra%2C%20Sector-135%2C%20Noida%2C%20201301!5e0!3m2!1sen!2sin!4v1770893633528!5m2!1sen!2sin"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-[#470277] mt-2 inline-block"
              >
                Get Directions →
              </a>
            </div>

            {/* Google Map */}
            <iframe
              title="ADVEBRO PRODUCTIONS LLP Location"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7012.76112399733!2d77.40002103795788!3d28.498195831836775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sADVEBRO%20PRODUCTIONS%20LLP%2C%20Unit%20No.%20615%2C%20Tower-4%2C%20Assotech%20Business%20Cresterra%2C%20Sector-135%2C%20Noida%2C%20201301!5e0!3m2!1sen!2sin!4v1770893633528!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default MapSection;
