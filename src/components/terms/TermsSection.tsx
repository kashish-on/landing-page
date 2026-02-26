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

const TermsContent = () => {
  return (
    <div className="container mx-auto max-w-10xl px-6 py-16">
      <h1 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-2">
        Terms of Service — ObserveNow.AI
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
      <P>
        By accessing or using ObserveNow.AI ("the Platform"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Platform.
      </P>

      <Section number={1} title="Acceptance of Terms">
        <P>
          These Terms govern your use of the services and features offered through ObserveNow.AI. You represent that you are legally capable of entering into binding contracts, and you accept these Terms voluntarily.
        </P>
      </Section>

      <Section number={2} title="Services Overview">
        <P>
          ObserveNow.AI provides business contact enrichment services for B2B prospecting. Users may submit publicly available professional profile URLs and related business information to generate enrichment results and export the data for lawful business use.
        </P>
        <P>
          We do not claim ownership of public business data, nor do we scrape platforms in violation of their terms of service.
        </P>
      </Section>

      <Section number={3} title="User Accounts and Credentials">
        <P>To use certain services, you may need to create a user account. You are responsible for:</P>
        <BulletList items={[
          "Providing accurate and complete information",
          "Maintaining the confidentiality of your login credentials",
          "Preventing unauthorized access to your account",
        ]} />
        <P>You are responsible for all activities that occur under your account.</P>
      </Section>

      <Section number={4} title="User Responsibilities and Acceptable Use">
        <P>By using ObserveNow.AI, you agree:</P>
        <P><strong className="text-foreground">You will not:</strong></P>
        <BulletList items={[
          "Use the Platform to send unsolicited spam or unlawful communications",
          "Use the Platform to engage in harassment, phishing, or illegal activities",
          "Circumvent limits on exports or automated usage",
          "Sell or redistribute enriched contact outputs as a standalone dataset",
          "Use tools to scrape data from third-party sites through our service",
        ]} />
        <P><strong className="text-foreground">You will:</strong></P>
        <BulletList items={[
          "Comply with applicable laws (e.g., CAN-SPAM, local anti-spam legislation)",
          "Include appropriate opt-out options in your outreach",
          "Respect data subject rights and privacy",
        ]} />
        <P>Failure to comply may result in suspension or termination of your access.</P>
      </Section>

      <Section number={5} title="Export and Bulk Data Use">
        <P>
          While the Platform allows exporting enriched contact results, such use is permitted only for lawful business purposes. Users must not:
        </P>
        <BulletList items={[
          "Package or resell data as a standalone product",
          "Distribute bulk exports without compliance with anti-spam and local laws",
        ]} />
        <P>ObserveNow.AI reserves the right to limit or suspend access for misuse.</P>
      </Section>

      <Section number={6} title="Payment and Billing">
        <P>If you purchase a paid subscription:</P>
        <BulletList items={[
          "All fees are due according to the billing cycle selected at signup.",
          "Payments are processed by Razorpay or another approved payment processor.",
          "You agree to provide accurate, current billing information.",
          "Subscriptions are non-refundable unless required by law or as otherwise specified in writing.",
        ]} />
      </Section>

      <Section number={7} title="Intellectual Property">
        <P>
          All content on the Platform — including software, graphics, logos, and documentation — is the intellectual property of ObserveNow.AI or its licensors.
        </P>
        <P>
          You are granted a limited, non-exclusive, non-transferable license to use the Platform consistent with these Terms.
        </P>
      </Section>

      <Section number={8} title="Limitation of Liability">
        <P><strong className="text-foreground">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong></P>
        <BulletList items={[
          "Adverbo Productions LLP and its affiliates will not be liable for indirect, incidental, special, or consequential damages.",
          "Our total liability under these Terms will not exceed the amount you have paid in the preceding 12 months.",
          "This limitation applies even if we were advised of the possibility of such damages.",
        ]} />
      </Section>

      <Section number={9} title="Indemnification">
        <P>
          You agree to defend, indemnify, and hold harmless Adverbo Productions LLP, its officers, directors, agents, and affiliates from any claims, damages, liabilities, losses, or expenses arising from:
        </P>
        <BulletList items={[
          "Your use of the Platform",
          "Your violation of these Terms",
          "Your violation of applicable law",
          "Your infringement of third-party rights",
        ]} />
      </Section>

      <Section number={10} title="Privacy and Data Protection">
        <P>
          Use of the Platform is also governed by our Privacy Policy, GDPR Compliance Statement, and DPDP Compliance Statement, which are incorporated into these Terms by reference.
        </P>
        <P>
          You understand and agree that your data may be processed in accordance with those policies.
        </P>
      </Section>

      <Section number={11} title="Modifications to Terms">
        <P>
          We may update these Terms from time to time. When we do, we will post the updated version with a new "Effective Date."
        </P>
        <P>
          Your continued use of the Platform after the changes signifies your acceptance of the updated Terms.
        </P>
      </Section>

      <Section number={12} title="Governing Law and Jurisdiction">
        <P>
          These Terms are governed by the laws of India. Any disputes will be resolved in courts located in India.
        </P>
      </Section>

      <Section number={13} title="Contact Information">
        <P>If you have questions about these Terms, please contact:</P>
        <P>
          <a href="mailto:finance@observenow.com" className="text-primary hover:underline">
            📧 finance@observenow.com
          </a>
        </P>
      </Section>
    </div>
  );
};

export default TermsContent;
