// import { motion } from "framer-motion";

const Section = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
  <div className="mb-10 font-dm">
    <h2 className="font-dm text-2xl md:text-3xl font-bold text-foreground mb-4">
      {number}. {title}
    </h2>
    {children}
  </div>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="font-dm text-muted-foreground leading-relaxed mb-4">{children}</p>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    {children}
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="list-disc list-inside space-y-2 mb-4 pl-2 text-muted-foreground">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const CookieContent = () => {
  return (
    <div className="container mx-auto max-w-10xl px-6 py-16">

      <h1 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-2">
        Cookie Policy — ObserveNow.AI
      </h1>
      <p className="text-muted-foreground mb-2">
        <span className="text-foreground font-semibold">Effective Date:</span>{" "}
        <span className="italic">1st March 2026</span>
      </p>

      <p className="text-muted-foreground mb-2">
        <span className="text-foreground">Website:</span>{" "}
        <a href="/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
          www.observenow.ai
        </a>
      </p>

      <Section number={1} title="Introduction">
        <P>
          This Cookie Policy explains how ObserveNow.AI (“we,” “our,” or “us”), operated by Advebro Productions LLP, uses cookies and similar tracking technologies when you visit our website.
        </P>
        <P>
          By continuing to browse or use our website, you agree to the use of cookies as described in this policy.
        </P>
      </Section>

      <Section number={2} title="What Are Cookies?">
        <P>
          Cookies are small text files stored on your device (computer, mobile, or tablet) when you visit a website. They help websites function properly and provide information to the website owner.
        </P>
      </Section>

      <Section number={3} title="A. Types of Cookies We Use">
        <SubSection title="Essential Cookies">
          <P>These cookies are necessary for the proper functioning of the website, including:</P>
          <BulletList items={[
            "User authentication",
            "Security verification",
            "Basic website functionality",
          ]} />
          <P>Without these cookies, some parts of the website may not function properly.</P>
        </SubSection>
        <SubSection title="B. Performance & Analytics Cookies">
          <P>We use third-party analytics tools such as Google Analytics to:</P>
          <BulletList items={[
            "Understand how users interact with our website",
            "Measure website traffic",
            "Improve performance and usability",
          ]} />
          <P>These cookies collect aggregated and anonymized information such as:</P>
          <BulletList items={[
            "Pages visited",
            "Time spent on pages",
            "Device type",
            "Browser type",
            "General geographic region (country-level)",
          ]} />
          <p>We do not use analytics cookies to identify individuals personally.</p>
        </SubSection>
        <SubSection title="C. Functional Cookies">
          <P>These cookies remember preferences such as:</P>
          <BulletList items={[
            "Language settings",
            "Session preferences",
            "Login session continuity",
          ]} />
        </SubSection>
      </Section>

      <Section number={4} title="Third-Party Cookies">
        <P>Some cookies may be placed by third-party service providers, including:</P>
        <BulletList items={[
            "Google Analytics (traffic analysis)",
            "Payment processor integrations (if applicable)",
          ]} />
          <P>These third parties may collect information in accordance with their own privacy policies.</P>
      </Section>

      <Section number={5} title="Managing Cookies">
        <P>You can control or disable cookies through your browser settings. Most browsers allow you to:</P>
        <BulletList items={[
          "Block all cookies",
          "Delete existing cookies",
          "Set preferences for certain websites",
        ]} />
        <P>Please note that disabling cookies may affect certain website features.</P>
      </Section>

      <Section number={6} title="Updates to This Policy">
        <P>We may update this Cookie Policy from time to time. Changes will be posted on this page with a revised effective date.</P>
      </Section>


      <Section number={7} title="Contact">
        <P>For questions regarding this Cookie Policy, contact:</P>
        <P>
          <a href="mailto:finance@observenow.com" className="text-primary hover:underline">
            📧 finance@observenow.com
          </a>
        </P>
      </Section>

    </div>
  );
};

export default CookieContent;

