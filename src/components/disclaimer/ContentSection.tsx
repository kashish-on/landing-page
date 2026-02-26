// import { motion } from "framer-motion";

const Section = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
  <div className="mb-10 font-dm">
    <h2 className="text-2xl font-dm md:text-3xl font-bold text-foreground mb-4">
      {number}. {title}
    </h2>
    {children}
  </div>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="font-dm text-muted-foreground leading-relaxed mb-4">{children}</p>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="list-disc list-inside space-y-2 mb-4 pl-2 text-muted-foreground">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const DisclaimerContent = () => {
  return (
    <div className="container mx-auto max-w-10xl px-6 py-16">
      <h1 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-2">
        WEBSITE DISCLAIMER
      </h1>
      <p className="text-muted-foreground mb-2">
        <span className="text-foreground font-semibold">ObserveNow.AI</span>{" "}
      </p>
      <p className="text-muted-foreground mb-2">
        <span className="text-foreground">Operated by</span>{" "}
         <strong className="text-foreground">Adverbo Productions LLP</strong>
      </p>

      <Section number={1} title="General Information Disclaimer">
        <P>
          The information provided on ObserveNow.AI is for general informational and business purposes only. While we aim to provide accurate and reliable services, we make no guarantees regarding the completeness, accuracy, or reliability of enriched data outputs.
        </P>
        <P>All data is provided “as-is” without warranties of any kind.</P>
      </Section>

      <Section number={2} title="No Legal or Compliance Advice">
        <P>
          Nothing on this website constitutes legal, regulatory, or compliance advice. Users are responsible for ensuring their use of exported data complies with applicable laws, including but not limited to:
        </P>
        <BulletList items={[
          "Anti-spam regulations",
          "Data protection laws",
          "Marketing communication laws",
        ]} />
        <P>We recommend consulting a qualified legal professional for compliance guidance.</P>
      </Section>

      <Section number={3} title="Third-Party Data Disclaimer">
        <P>ObserveNow.AI processes publicly available professional business contact information and user-submitted professional profile URLs.</P>
        <P>We:</P>
        <BulletList items={[
          "Do not claim ownership of third-party professional data",
          "Do not scrape platforms in violation of their terms",
          "Do not guarantee absolute accuracy of enriched information",
        ]} />
        <P>Users are responsible for verifying data before use.</P>
      </Section>

      <Section number={4} title="Limitation of Liability">
        <P>To the maximum extent permitted by law, Advebro Productions LLP shall not be liable for:</P>
        <BulletList items={[
          "Direct or indirect damages",
          "Loss of profits",
          "Business interruption",
          "Data misuse by users",
        ]} />
        <P>Use of the platform is at your own risk.</P>
      </Section>

      <Section number={5} title="External Links Disclaimer">
        <P>
          Our website may contain links to third-party websites. We are not responsible for:
        </P>
        <BulletList items={[
          "Content",
          "Privacy practices",
          "Policies",
          "Accuracy of information",
        ]} />
        <P>on external sites.</P>
      </Section>

      <Section number={6} title="Platform Use Risk">
        <P>Users acknowledge that:</P>
        <BulletList items={[
          "Enrichment results are generated based on publicly available information",
          "Data exports must be used responsibly",
          "Compliance obligations rest solely with the user",
        ]} />
        <P>ObserveNow.AI is not responsible for misuse of exported data.</P>
      </Section>

      <Section number={7} title="Updates to This Disclaimer">
        <P>
          We reserve the right to modify this Disclaimer at any time. Continued use of the website constitutes acceptance of any updates.
        </P>
      </Section>

      <Section number={8} title="Contact Information">
        <P>For questions regarding this Disclaimer:</P>
        <P>
          <a href="mailto:finance@observenow.com" className="text-primary hover:underline">
            📧 finance@observenow.com
          </a>
        </P>
      </Section>
    </div>
  );
};

export default DisclaimerContent;
