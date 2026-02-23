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

const GDPRContent = () => {
  return (
    <div className="container mx-auto max-w-10xl px-6 py-16">
      <h1 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-2">
        GDPR Compliance Statement
      </h1>
      <p className="text-muted-foreground mb-2">
        <strong className="text-foreground">ObserveNow.AI</strong>
      </p>
      <p className="text-muted-foreground mb-2">
         <span className="text-foreground">Operated by</span>{" "}
         <strong className="text-foreground">Adverbo Productions LLP</strong>
      </p>
      <p className="text-muted-foreground mb-10">
         <span className="text-foreground font-semibold">Effective Date:</span>{" "}
         <span className="italic">1st March 2026</span>
      </p>

      <Section number={1} title="Our Approach to Data Protection">
        <P>
          ObserveNow.AI recognizes the importance of protecting personal information and respecting individual privacy rights. We are committed to handling data responsibly and in alignment with globally recognized data protection principles, including the General Data Protection Regulation (GDPR) where applicable.
        </P>
        <P>
          Although ObserveNow.AI is headquartered in India, our services may be accessed by users globally. Therefore, we aim to maintain compliance standards consistent with GDPR requirements when processing personal data related to individuals located within the European Union (EU) or European Economic Area (EEA).
        </P>
      </Section>

      <Section number={2} title="Nature of Data Processed">
        <P>
          ObserveNow.AI provides B2B contact intelligence services. In the course of providing our services, we may process:
        </P>
        <BulletList items={[
          "Publicly available professional business email addresses",
          "Publicly available business phone numbers",
          "Company-related business information",
          "User-submitted professional profile URLs for enrichment matching",
          "Account and billing information provided directly by users",
        ]} />
        <P>
          We do not process sensitive personal data categories such as health, biometric, financial, or government identification information.
        </P>
      </Section>

      <Section number={3} title="Lawful Basis for Processing">
        <P>
          Where GDPR applies, our processing activities rely on one or more of the following lawful bases:
        </P>
        <BulletList items={[
          "Legitimate Interest: Processing publicly available professional contact information for lawful B2B communication and business outreach.",
          "User-Initiated Requests: When users voluntarily submit professional profile URLs for enrichment or data matching purposes.",
          "Legal Compliance: Where required by applicable laws and regulatory obligations.",
        ]} />
        <P>
          We take reasonable steps to ensure that legitimate interest processing does not override the fundamental rights and freedoms of individuals.
        </P>
      </Section>

      <Section number={4} title="Data Sources">
        <P>
          ObserveNow.AI processes publicly accessible business contact information and data submitted by platform users.
        </P>
        <P>
          We do not scrape or extract data directly from LinkedIn or other platforms in violation of their terms of service. Enrichment results are generated dynamically based on publicly available professional information.
        </P>
      </Section>

      <Section number={5} title="Data Retention">
        <P>
          ObserveNow.AI does not maintain a permanent database of enriched contact outputs.
        </P>
        <P>Operational logs may be maintained on a limited basis for:</P>
        <BulletList items={[
          "Security monitoring",
          "Fraud prevention",
          "Service reliability",
        ]} />
        <P>
          Personal data is retained only as long as necessary for legitimate business purposes or as required by law.
        </P>
      </Section>

      <Section number={6} title="Rights of Individuals Under GDPR">
        <P>
          Where GDPR applies, individuals located in the EU/EEA may exercise the following rights:
        </P>
        <BulletList items={[
          "Right to Access – Obtain confirmation regarding whether personal data is processed and request a copy.",
          "Right to Rectification – Request correction of inaccurate or incomplete information.",
          "Right to Erasure – Request deletion of personal data where lawful grounds permit.",
          "Right to Restrict Processing – Request limitation of data processing under specific circumstances.",
          "Right to Object – Object to processing based on legitimate interest.",
          "Right to Data Portability – Request transfer of personal data in a structured, commonly used format, where applicable.",
        ]} />
        <P>Requests may be submitted to:</P>
        <P>
          <a href="mailto:finance@observenow.com" className="text-primary hover:underline">
            📧 finance@observenow.com
          </a>
        </P>
        <P>We aim to respond within 30 days, subject to identity verification.</P>
      </Section>

      <Section number={7} title="International Data Transfers">
        <P>
          As an India-based organization, ObserveNow.AI may process data on cloud infrastructure operated outside the European Union.
        </P>
        <P>
          Where cross-border data transfers occur, we implement appropriate safeguards consistent with applicable data protection standards.
        </P>
      </Section>

      <Section number={8} title="Data Sharing">
        <P>We do not sell personal data.</P>
        <P>
          Limited information may be shared with trusted service providers strictly for operational purposes, including:
        </P>
        <BulletList items={[
          "Payment processing providers",
          "Cloud infrastructure providers",
          "Analytics services",
        ]} />
        <P>
          Such providers are expected to maintain appropriate security and confidentiality safeguards.
        </P>
      </Section>

      <Section number={9} title="Security Measures">
        <P>
          ObserveNow.AI employs industry-standard security practices, including:
        </P>
        <BulletList items={[
          "HTTPS encryption",
          "Secure access controls",
          "Restricted internal access",
          "Monitoring for abuse and fraudulent activity",
        ]} />
        <P>
          While no system can guarantee absolute security, we implement reasonable technical and organizational measures to protect data.
        </P>
      </Section>

      <Section number={10} title="Complaints and Supervisory Authorities">
        <P>
          Individuals located in the EU/EEA have the right to lodge a complaint with their local data protection supervisory authority if they believe their rights have been violated.
        </P>
        <P>Before doing so, we encourage contacting us directly at:</P>
        <P>
          <a href="mailto:finance@observenow.com" className="text-primary hover:underline">
            📧 finance@observenow.com
          </a>
        </P>
      </Section>

      <Section number={11} title="Updates to This Statement">
        <P>
          This GDPR Compliance Statement may be updated periodically to reflect changes in legal requirements or operational practices. The updated version will be posted on this page with a revised effective date.
        </P>
      </Section>
    </div>
  );
};

export default GDPRContent;
