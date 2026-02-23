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

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="list-disc list-inside space-y-2 mb-4 pl-2 text-muted-foreground">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const DPDPContent = () => {
  return (
    <div className="container mx-auto max-w-10xl px-6 py-16">
      <h1 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-2">
        DPDP Compliance — ObserveNow.AI
      </h1>
      <p className="text-muted-foreground mb-2">
         <span className="text-foreground font-semibold">Effective Date:</span>{" "}
         <span className="italic">1st March 2026</span>
      </p>
      <p className="text-muted-foreground mb-10">
         <span className="text-foreground">Operated by</span>{" "}
         <strong className="text-foreground">Adverbo Productions LLP</strong>
      </p>

      <Section number={1} title="Introduction to India's DPDP Act">
        <P>
          India's Digital Personal Data Protection Act (DPDP), 2023, sets out legal requirements and individual rights regarding the collection, processing, and retention of digital personal data. The Act applies to organizations handling personal information of individuals in India.
        </P>
        <P>
          ObserveNow.AI recognizes the importance of complying with DPDP standards where applicable and has adopted processing practices designed to protect personal data and individual privacy rights.
        </P>
      </Section>

      <Section number={2} title="Scope of DPDP Compliance">
        <P>
          ObserveNow.AI processes only publicly available professional business contact information and data voluntarily submitted by users for enrichment — such as professional profile URLs. We do not process sensitive personal data (as defined under DPDP), such as:
        </P>
        <BulletList items={[
          "Religious or political information",
          "Financial account details",
          "Health records",
          "Biometric data",
          "Government-issued identifiers",
        ]} />
        <P>
          Our services are focused on business contact intelligence for B2B outreach, not consumer profiling.
        </P>
      </Section>

      <Section number={3} title="Lawful Basis for Processing">
        <P>Under DPDP, ObserveNow.AI relies on the following lawful bases:</P>
        <BulletList items={[
          "Legitimate Interest: Processing publicly available business contact details for lawful business purposes, including sales prospecting and professional outreach.",
          "User Consent: Data voluntarily submitted by users as part of enrichment requests.",
          "Legal Compliance: Where required by law, regulation, or enforcement authorities.",
        ]} />
        <P>
          We strive to ensure that our data processing remains transparent and within the scope permitted by Indian law.
        </P>
      </Section>

      <Section number={4} title="Notice and Transparency">
        <P>We provide information to individuals about how their personal data may be processed:</P>
        <BulletList items={[
          "Types of Data: Public business emails, public business phone numbers, company and professional details.",
          "Purpose: Enrichment matching and professional lead intelligence for legitimate business use.",
          "Source: Publicly accessible professional information and user-submitted URLs.",
          "No Permanent Storage: We do not maintain personal contact data as a permanent dataset.",
        ]} />
        <P>
          This information is available in our Privacy Policy and related compliance pages.
        </P>
      </Section>

      <Section number={5} title="Individual Rights Under DPDP">
        <P>
          Individuals whose personal data is processed by ObserveNow.AI have the following rights under the Act, subject to applicable safeguards:
        </P>
        <BulletList items={[
          "Right to Access: Request information about whether we are processing your data.",
          "Right to Correction: Request corrections to inaccurate or incomplete data.",
          "Right to Data Erasure: Request deletion of your personal data when no overriding legal basis exists.",
          "Right to Withdraw Consent: Withdraw previously provided consent for processing (where consent was the basis).",
        ]} />
        <P>Such requests should be sent to:</P>
        <P>
          <a href="mailto:finance@observenow.com" className="text-primary hover:underline">
            📧 finance@observenow.com
          </a>
        </P>
        <P>
          We will acknowledge and initiate processing of the request within timelines prescribed under applicable law.
        </P>
      </Section>

      <Section number={6} title="Data Sharing and Third Parties">
        <P>We do not sell personal data.</P>
        <P>
          Limited sharing occurs only with service providers that help us operate the platform, including:
        </P>
        <BulletList items={[
          "Payment processors (Razorpay)",
          "Email delivery systems",
          "Cloud and hosting infrastructure",
          "Analytics services",
        ]} />
        <P>
          These parties are bound by confidentiality and data protection obligations.
        </P>
      </Section>

      <Section number={7} title="Data Security Practices">
        <P>
          ObserveNow.AI maintains reasonable technical and organizational safeguards to protect personal data, including:
        </P>
        <BulletList items={[
          "HTTPS encryption for data in transit",
          "Secure access controls",
          "Restricted administrative privileges",
          "Monitoring for unauthorized activity",
        ]} />
        <P>
          While we do not retain enriched contacts permanently, we may retain operational logs for security and fraud detection purposes.
        </P>
      </Section>

      <Section number={8} title="Redressal and Contact">
        <P>
          If you believe that your rights under the DPDP Act have been violated, you may raise a concern with ObserveNow.AI first at:
        </P>
        <P>
          <a href="mailto:finance@observenow.com" className="text-primary hover:underline">
            📧 finance@observenow.com
          </a>
        </P>
        <P>
          In addition, individuals may have the right to file a complaint with the Office of the Data Protection Authority or other relevant regulatory body in India.
        </P>
      </Section>

      <Section number={9} title="Updates to This Statement">
        <P>
          ObserveNow.AI may update this DPDP compliance statement to reflect legal or operational changes. Updated versions will be posted on this page with the most recent update date.
        </P>
      </Section>
    </div>
  );
};

export default DPDPContent;
