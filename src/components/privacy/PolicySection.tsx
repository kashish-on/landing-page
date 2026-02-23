import { motion } from "framer-motion";

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

const PrivacyContent = () => {
  return (
    <div className="container mx-auto max-w-10xl px-6 py-16">

      <h1 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-2">
        Privacy Policy — ObserveNow.AI
      </h1>
      <p className="text-muted-foreground mb-2">
        <span className="text-foreground font-semibold">Effective Date:</span>{" "}
        <span className="italic">1st March 2026</span>
      </p>
      <p className="text-muted-foreground mb-2">
         <span className="text-foreground">Operated by</span>{" "}
         <strong className="text-foreground">Adverbo Productions LLP</strong>
      </p>
      <p className="text-muted-foreground mb-2">
        <span className="text-foreground">Website:</span>{" "}
        <a href="/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
          www.observenow.ai
        </a>
      </p>
      <p className="text-muted-foreground mb-8">
        <span className="text-foreground">Contact:</span>{" "}
        <a href="mailto:finance@observenow.com" className="text-primary hover:underline">
          finance@observenow.com
        </a>
      </p>

      <Section number={1} title="Introduction">
        <P>
          This Privacy Policy explains how ObserveNow.AI ("we," "us," "our") collects, uses, shares, and safeguards personal information when you access or use our website and services.
        </P>
        <P>
          We value your privacy and are committed to protecting personal data in accordance with applicable data protection laws, including India's DPDP Act and the European GDPR where applicable.
        </P>
      </Section>

      <Section number={2} title="Information We May Collect">
        <SubSection title="A. Information You Provide Directly">
          <P>When you register or use our services, you may provide:</P>
          <BulletList items={[
            "Name",
            "Email address",
            "Professional profile URLs",
            "Business phone number (public)",
            "Company name",
            "Billing and payment information (via Razorpay or approved processor)",
          ]} />
        </SubSection>
        <SubSection title="B. Publicly Available Business Contact Data">
          <P>We process:</P>
          <BulletList items={[
            "Public business email addresses",
            "Public business phone numbers",
            "Business profile details that are publicly accessible",
          ]} />
          <P>We do not claim ownership of such public information.</P>
        </SubSection>
        <SubSection title="C. Automatically Collected Data">
          <P>We may collect information automatically, such as:</P>
          <BulletList items={[
            "IP address",
            "Device type",
            "Browser type",
            "Pages visited",
            "Date and time of visit",
            "General usage patterns",
          ]} />
          <P>We may use Google Analytics to gather anonymous usage data regarding website traffic and patterns.</P>
        </SubSection>
      </Section>

      <Section number={3} title="How We Use Your Information">
        <P>We use the information we collect for the following purposes:</P>
        <SubSection title="A. To Provide and Improve Services">
          <BulletList items={[
            "To generate enrichment outputs",
            "To facilitate bulk download exports",
            "To communicate about your account",
            "To process payments",
            "To respond to support requests",
          ]} />
        </SubSection>
        <SubSection title="B. To Monitor and Enhance Security">
          <BulletList items={[
            "Detect and prevent fraud",
            "Maintain platform integrity",
            "Protect against unauthorized access",
          ]} />
        </SubSection>
        <SubSection title="C. For Analytics and Site Optimization">
          <P>We may use analytics tools (like Google Analytics) to understand user behavior and improve functionality.</P>
        </SubSection>
      </Section>

      <Section number={4} title="Legal Basis for Processing">
        <SubSection title="A. India">
          <P>
            Under India's DPDP Act, we process publicly available professional contact information and user-submitted URLs on the basis of legitimate interest and user consent where required.
          </P>
        </SubSection>
        <SubSection title="B. European Union (GDPR)">
          <P>Where GDPR applies, our lawful basis includes:</P>
          <BulletList items={[
            "Legitimate interest for B2B professional contact enrichment",
            "Consent where expressly provided",
            "Compliance with legal obligations",
          ]} />
        </SubSection>
      </Section>

      <Section number={5} title="Sharing of Information">
        <P>We do not sell personal information.</P>
        <P>We may share data with:</P>
        <BulletList items={[
          "Payment processors (e.g., Razorpay) for billing",
          "Service providers that support platform operation",
          "Cloud hosting and analytics providers",
        ]} />
        <P>All third parties are contractually required to safeguard personal information.</P>
      </Section>

      <Section number={6} title="Cookies and Tracking Technologies">
        <P>We use cookies and similar technologies to:</P>
        <BulletList items={[
          "Remember user preferences",
          "Improve site performance",
          "Analyze usage patterns",
        ]} />
        <P>You may disable cookies in your browser settings, but certain features may be affected.</P>
      </Section>

      <Section number={7} title="Data Retention">
        <P>We retain personal data as needed to:</P>
        <BulletList items={[
          "Provide services",
          "Comply with legal obligations",
          "Resolve disputes",
          "Enforce agreements",
        ]} />
        <P>We do not store enriched contacts permanently, except for limited operational logs for security and fraud detection.</P>
      </Section>

      <Section number={8} title="User Rights">
        <P>Depending on your jurisdiction, you may have rights including:</P>
        <BulletList items={[
          "Access to your data",
          "Correction or update of your information",
          "Deletion of your data",
          "Restriction of processing",
          "Objection to processing for direct marketing",
        ]} />
        <P>
          To exercise your rights, contact:{" "}
          <a href="mailto:finance@observenow.com" className="text-primary hover:underline">
            📧 finance@observenow.com
          </a>
        </P>
      </Section>

      <Section number={9} title="Data Security Practices">
        <P>We employ reasonable technical and organizational safeguards, including:</P>
        <BulletList items={[
          "HTTPS encryption",
          "Secure access controls",
          "Restricted internal access",
          "Monitoring for unusual activity",
        ]} />
        <P>However, no method of transmission over the internet is 100% secure.</P>
      </Section>

      <Section number={10} title="International Data Transfers">
        <P>
          ObserveNow.AI may process data on servers outside your country of residence, including cloud infrastructure used by Replit and service providers.
        </P>
        <P>
          Where transfers occur, we implement safeguards consistent with applicable data protection standards.
        </P>
      </Section>

      <Section number={11} title="Children's Privacy">
        <P>
          Our services are intended for business users. We do not knowingly collect personal information from individuals under the age of 18.
        </P>
      </Section>

      <Section number={12} title="Changes to This Privacy Policy">
        <P>
          We may update this Privacy Policy periodically. The revised version will be posted on this page with an updated effective date.
        </P>
        <P>
          Your continued use of the Platform after changes indicates your acceptance of the updated policy.
        </P>
      </Section>

      <Section number={13} title="Contact Us">
        <P>If you have questions about this Privacy Policy or data handling, please contact:</P>
        <P>
          <a href="mailto:finance@observenow.com" className="text-primary hover:underline">
            📧 finance@observenow.com
          </a>
        </P>
      </Section>
    </div>
  );
};

export default PrivacyContent;
