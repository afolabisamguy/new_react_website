import React from 'react';
import { ArrowLeft, Shield, Database, Users, Lock, Globe, Info, Clock, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  const SectionCard = ({ icon: Icon, title, children, iconBgColor = 'bg-green-950', iconColor = 'text-amber-400' }) => {
    return (
      <div className="bg-n-7 border border-gray-700 rounded-lg p-4 mb-3">
        <div className="flex items-start mb-3">
          <div className={`w-8 h-8 ${iconBgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
            <Icon className={`w-4 h-4 ${iconColor}`} />
          </div>
          <h2 className="ml-3 text-lg font-semibold h4 flex-1">{title}</h2>
        </div>
        <div className="space-y-3">
          {children}
        </div>
      </div>
    );
  };

  const SubSection = ({ title, children }) => {
    return (
      <div>
        <h3 className="text-[15px] font-medium text-gray-100 mb-2">{title}</h3>
        <div className="space-y-2">
          {children}
        </div>
      </div>
    );
  };

  const BulletList = ({ items }) => {
    return (
      <ul className="space-y-1 ml-4">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-gray-400 flex">
            <span className="mr-2 text-n-3">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-700 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <button 
            onClick={handleBack}
            className="mr-3 p-2 hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-gray-300" />
          </button>
          <div>
            <h1 className="text-lg font-semibold text-gray-100">Privacy Policy</h1>
            <p className="text-sm text-gray-400">Last updated: January 17, 2024</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Introduction Section */}
        <SectionCard icon={Shield} title="Introduction">
          <p className="text-sm text-n-3">
            MyAgent Limited ("we," "our," or "us") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our MyAgent mobile application and related services (collectively, the "Service").
          </p>
          <p className="text-sm text-n-3">
            By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy. This policy complies with the Nigeria Data Protection Regulation (NDPR) 2019 and other applicable data protection laws.
          </p>
          <div className="bg-amber-950 border border-amber-800 rounded-lg p-3">
            <p className="text-sm font-medium text-amber-300">
              <strong>Important:</strong> MyAgent is designed for adults aged 18 and above. We do not knowingly collect personal information from children under 18 years of age.
            </p>
          </div>
        </SectionCard>

        {/* Message Safety & Monitoring Section */}
        <SectionCard icon={Info} title="Message Safety & Monitoring" iconColor="text-amber-400">
          <div className="bg-green-950 border border-amber-800 rounded-lg p-3">
            <div className="flex items-start mb-2">
              <Shield className="w-5 h-5 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
              <h3 className="text-base font-semibold text-amber-300">For Your Safety</h3>
            </div>
            <p className="text-sm text-gray-300 mb-2">
              All messages sent through MyAgent are automatically monitored to protect you from:
            </p>
            <BulletList items={[
              'Fraud and scam attempts',
              'Harassment or threatening behavior',
              'Sharing of personal contact information before payment (to prevent platform circumvention)',
              'Inappropriate or discriminatory content'
            ]} />
            <div className="bg-gray-800 rounded-md p-2.5 mt-2 border border-gray-700">
              <p className="text-[13px] text-gray-400">
                <strong>How It Works:</strong> Our automated systems scan messages in real-time. Human review only occurs when safety issues are detected or when users report concerns. We never use message monitoring for advertising purposes.
              </p>
            </div>
          </div>
        </SectionCard>

        {/* Data Collection Section */}
        <SectionCard icon={Database} title="1. Information We Collect">
          <SubSection title="1.1 Personal Information">
            <p className="text-sm text-gray-400">
              We collect personal information that you voluntarily provide to us, including:
            </p>
            <BulletList items={[
              'Full name and preferred display name',
              'Email address and phone number',
              'Profile photograph',
              'Date of birth (for age verification)',
              'Residential and/or business address',
              'Employment information and income details (for tenant verification)',
              'Emergency contact information'
            ]} />
          </SubSection>

          <SubSection title="1.2 Identity Verification Data">
            <p className="text-[15px] text-gray-100">
              We verify your identity through licensed third-party verification services. We do NOT store your sensitive documents:
            </p>
            <BulletList items={[
              "Government-issued ID verification (National ID, Driver's License, International Passport)",
              'Bank Verification Number (BVN) verification',
              'Address verification through utility bills',
              'Employment and income verification'
            ]} />
            <div className="bg-emerald-950 border border-emerald-800 rounded-lg p-3 mt-2">
              <h4 className="text-[15px] font-semibold text-emerald-400 mb-1.5">
                Important: Your Documents Are Safe
              </h4>
              <p className="text-sm text-emerald-300">
                We use licensed third-party verification providers (such as Smile Identity and Prembly) who are authorized by regulatory bodies. These services verify your identity and only send us a "verified" or "not verified" status. Your actual ID documents, BVN details, and sensitive information are NOT stored on MyAgent servers. We only receive confirmation of your identity.
              </p>
            </div>
          </SubSection>

          <SubSection title="1.3 Location Information (Foreground Only)">
            <p className="text-[15px] text-gray-100">
              We collect location data ONLY when you are actively using the app:
            </p>
            <BulletList items={[
              'Precise location when you search for properties (foreground only)',
              'General location to show properties near you',
              'Property location data for listings and mapping'
            ]} />
            <div className="bg-emerald-950 border border-emerald-800 rounded-lg p-3 mt-2">
              <h4 className="text-[15px] font-semibold text-emerald-400 mb-1.5">
                Privacy First
              </h4>
              <p className="text-sm text-emerald-300">
                We NEVER collect your location in the background. Location tracking stops immediately when you close the app or switch to another screen. You can disable location permissions entirely in your device settings - the app will still work, but property suggestions will be less personalized.
              </p>
            </div>
          </SubSection>

          <SubSection title="1.4 Payment Information">
            <p className="text-[15px] text-gray-100">
              All payments are processed by licensed third-party payment providers. We do NOT store your payment details:
            </p>
            <BulletList items={[
              'Transaction records (amount, date, status)',
              'Payment reference numbers',
              'Transaction history for your account'
            ]} />
            <div className="bg-emerald-950 border border-emerald-800 rounded-lg p-3 mt-2">
              <h4 className="text-[15px] font-semibold text-emerald-400 mb-1.5">
                Your Payment Security
              </h4>
              <p className="text-sm text-emerald-300">
                MyAgent NEVER stores your bank account numbers, card details, or PINs. All payment processing is handled directly by PCI DSS compliant providers (Paystack, Flutterwave, and licensed Nigerian banks). When you pay, you interact directly with their secure payment gateway. We only receive confirmation that payment was successful or failed.
              </p>
            </div>
          </SubSection>

          <SubSection title="1.5 User-Generated Content and Communications">
            <p className="text-[15px] text-gray-100">
              Content you create and share on our platform:
            </p>
            <BulletList items={[
              'Property listings, descriptions, and photographs',
              'Chat messages and communication logs (monitored for safety and compliance)',
              'Reviews, ratings, and feedback',
              'Profile information and preferences',
              'Support tickets and customer service communications',
              'Social media content (if you choose to link accounts)'
            ]} />
            <div className="bg-emerald-950 border border-emerald-800 rounded-lg p-3 mt-2">
              <p className="text-sm text-emerald-300">
                <strong>Communication Monitoring:</strong> For your safety and protection, all in-app messages and communications are monitored using automated systems and may be reviewed by our safety team. This helps us prevent fraud, harassment, and ensures compliance with our community standards. Personal contact information shared before payment of commitment fees may result in account restrictions.
              </p>
            </div>
          </SubSection>

          <SubSection title="1.6 Technical and Usage Information">
            <p className="text-[15px] text-gray-100">
              Automatically collected when you use our Service:
            </p>
            <BulletList items={[
              'Device information (model, operating system, unique identifiers)',
              'App usage patterns and feature interactions',
              'IP address and connection information',
              'Crash reports and performance data',
              'Search queries and browsing behavior',
              'Push notification preferences and delivery status'
            ]} />
          </SubSection>

          <SubSection title="1.7 Audio Recordings (Optional)">
            <p className="text-[15px] text-gray-100">
              You may choose to use voice features for enhanced communication:
            </p>
            <BulletList items={[
              'Voice messages sent to other users',
              'Audio notes attached to property inquiries',
              'Customer support voice calls (with your consent)'
            ]} />
            <div className="bg-amber-950 border border-amber-800 rounded-lg p-3 mt-2">
              <h4 className="text-[15px] font-semibold text-amber-400 mb-1.5">
                Audio Recording Policy
              </h4>
              <p className="text-sm text-amber-300">
                Audio recordings are only made when YOU initiate them (by pressing record). Recordings are stored securely for 90 days and automatically deleted unless required for dispute resolution or legal compliance. Voice messages are subject to the same safety monitoring as text messages. You can delete your voice messages at any time from your conversation history.
              </p>
            </div>
          </SubSection>

          <SubSection title="1.8 Camera and Photos">
            <p className="text-[15px] text-gray-100">
              You may use your camera to enhance your experience:
            </p>
            <BulletList items={[
              'Take photos of properties for listings',
              'Upload profile pictures',
              'Scan documents for verification (processed by third-party verification services)',
              'Capture property condition for inspection reports'
            ]} />
            <p className="text-sm text-gray-400 mt-2">
              Camera access is optional and only activated when you choose to take or upload photos. We do not access your camera without your explicit action.
            </p>
          </SubSection>
        </SectionCard>

        {/* How We Use Your Information Section */}
        <SectionCard icon={Database} title="2. How We Use Your Information">
          <SubSection title="2.1 Core Service Provision">
            <BulletList items={[
              'Account creation, authentication, and management',
              'Identity verification and KYC compliance',
              'Property search, listing, and matching services',
              'Secure messaging and communication between users',
              'Payment processing, wallet management, and transaction facilitation',
              'Rental agreement generation and document management',
              'Customer support and dispute resolution',
              'Platform security and fraud prevention'
            ]} />
          </SubSection>

          <SubSection title="2.2 Service Improvement and Personalization">
            <BulletList items={[
              'Personalizing property recommendations based on your preferences',
              'Improving app functionality and user experience',
              'Analyzing usage patterns to enhance our services',
              'Developing new features and services',
              'Conducting research and analytics for business insights'
            ]} />
          </SubSection>

          <SubSection title="2.3 Safety, Security and Legal Compliance">
            <BulletList items={[
              'Monitoring communications to prevent fraud, scams, and inappropriate behavior',
              'Detecting and preventing harassment, threats, or discriminatory conduct',
              'Ensuring compliance with our community standards and platform rules',
              'Protecting users from potentially harmful or illegal activities',
              'Preventing circumvention of our safety measures (e.g., sharing contact details prematurely)',
              'Complying with legal obligations and regulatory requirements',
              'Enforcing our Terms of Service and user agreements',
              'Responding to legal requests and court orders'
            ]} />
            <div className="bg-amber-950 border border-amber-800 rounded-lg p-3 mt-2">
              <p className="text-sm text-amber-300">
                <strong>Your Safety First:</strong> Communication monitoring is primarily automated and designed to protect all users. Human review occurs only when our systems detect potential safety issues, policy violations, or when users report concerns. We never use this monitoring for advertising or marketing purposes.
              </p>
            </div>
          </SubSection>

          <div className="bg-red-950 border border-red-800 rounded-lg p-3">
            <h4 className="text-[15px] font-semibold text-red-400 mb-2">
              What We DON'T Do
            </h4>
            <ul className="space-y-1 ml-4">
              {[
                "We do NOT sell your personal data to advertisers or third parties",
                "We do NOT use your data for marketing unrelated to our housing services",
                "We do NOT share your location data with unauthorized parties",
                "We do NOT access your messages for advertising purposes",
                "We do NOT store your full payment card details on our servers"
              ].map((item, index) => (
                <li key={index} className="text-sm text-red-400 flex">
                  <span className="mr-2 text-red-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionCard>

        {/* Information Sharing and Disclosure Section */}
        <SectionCard icon={Users} title="3. Information Sharing and Disclosure">
          <SubSection title="3.1 With Other Users">
            <BulletList items={[
              'Basic profile information when you contact or are contacted about a property',
              'Verification status (verified/unverified) for trust and safety',
              "Reviews and ratings you've given or received",
              "Property listing information if you're a landlord"
            ]} />
          </SubSection>

          <SubSection title="3.2 With Service Providers and Partners">
            <BulletList items={[
              'Payment Processors: Paystack, Flutterwave, and other licensed payment providers for transaction processing',
              'Identity Verification: Smile Identity, Prembly, and other KYC service providers',
              'Cloud Services: Google Firebase for app infrastructure and data storage',
              'Communication Services: SMS and email service providers for notifications',
              'Analytics Partners: Google Analytics and similar services for app improvement',
              'Customer Support: Third-party support platforms for help desk services'
            ]} />
            <p className="text-sm text-gray-400 mt-2">
              All service providers are required to maintain the confidentiality and security of your information through contractual agreements.
            </p>
          </SubSection>

          <SubSection title="3.3 Legal and Regulatory Disclosure">
            <p className="text-[15px] text-gray-100">
              We may share information with the following parties when legally required:
            </p>
            <BulletList items={[
              'Nigerian law enforcement agencies when legally required',
              'Courts and judicial authorities in response to valid legal processes',
              'Financial Intelligence Unit (NFIU) for anti-money laundering compliance',
              'Central Bank of Nigeria (CBN) for financial services compliance',
              'Nigeria Data Protection Commission when required by law'
            ]} />
          </SubSection>

          <div>
            <h3 className="text-[15px] font-medium text-blue-400 mb-2">3.4 Business Transfers</h3>
            <p className="text-sm text-gray-400">
              In the event of a merger, acquisition, or sale of business assets, your information may be transferred to the new entity, subject to the same privacy protections outlined in this policy.
            </p>
          </div>
        </SectionCard>

        {/* Data Storage and Security Section */}
        <SectionCard icon={Lock} title="4. Data Storage and Security">
          <SubSection title="4.1 Data Storage">
            <BulletList items={[
              'Data is stored on secure cloud servers located in Nigeria and other approved jurisdictions',
              'Primary data storage utilizes Google Cloud Platform with Nigerian data residency compliance',
              'Backup systems ensure data availability and disaster recovery',
              'Data retention periods comply with Nigerian regulatory requirements'
            ]} />
          </SubSection>

          <SubSection title="4.2 Security Measures">
            <BulletList items={[
              'Encryption: All data is encrypted in transit using TLS 1.3 and at rest using AES-256',
              'Access Control: Multi-factor authentication and role-based access for all team members',
              'Network Security: Firewalls, intrusion detection, and regular security monitoring',
              'Regular Audits: Quarterly security assessments and penetration testing',
              'Incident Response: 24/7 security monitoring and rapid incident response procedures',
              'Employee Training: Regular security awareness training for all staff members'
            ]} />
          </SubSection>

          <SubSection title="4.3 KYC and Sensitive Data Protection">
            <p className="text-[15px] text-gray-100">
              We implement strict measures to secure sensitive information:
            </p>
            <BulletList items={[
              'KYC documents are stored in encrypted, segregated systems with restricted access',
              'Biometric data (if collected) is hashed and cannot be reverse-engineered',
              'Payment information is tokenized and never stored in plain text',
              'Regular deletion of unnecessary sensitive data in compliance with data minimization principles'
            ]} />
          </SubSection>

          <div className="bg-emerald-950 border border-emerald-800 rounded-lg p-3">
            <p className="text-sm text-emerald-300">
              <strong>Security Commitment:</strong> While we implement industry-standard security measures, no method of transmission or storage is 100% secure. We continuously improve our security practices and will notify you promptly of any data breaches as required by law.
            </p>
          </div>
        </SectionCard>

        {/* Your Privacy Rights Section */}
        <SectionCard icon={Globe} title="5. Your Privacy Rights">
          <SubSection title="5.1 Access and Portability">
            <BulletList items={[
              'Request a copy of all personal data we hold about you',
              'Download your data in a machine-readable format (data portability)',
              'View your data processing activities through your account dashboard',
              'Access your transaction history and communication logs'
            ]} />
          </SubSection>

          <SubSection title="5.2 Correction and Update">
            <BulletList items={[
              'Update your profile information directly in the app',
              'Request correction of inaccurate or incomplete data',
              'Modify your preferences and settings at any time',
              'Update your contact information and communication preferences'
            ]} />
          </SubSection>

          <SubSection title="5.3 Deletion and Account Closure">
            <p className="text-[15px] text-gray-100">
              You have control over your data and may request deletion at any time:
            </p>
            <BulletList items={[
              'Delete your account directly through the app settings',
              'Request deletion of specific data categories',
              'Permanent deletion of personal data (subject to legal retention requirements)',
              'Retention of anonymized data for analytics and platform improvement'
            ]} />
          </SubSection>

          <div className="bg-amber-950 border border-amber-800 rounded-lg p-3">
            <p className="text-sm text-amber-300">
              <strong>Note:</strong> Some data may be retained for legal compliance (e.g., transaction records for tax purposes, KYC data for 5 years as required by CBN regulations). Deletion requests will be processed within 30 days.
            </p>
          </div>

          <SubSection title="5.4 Objection and Restriction">
            <p className="text-[15px] text-gray-100">
              You have rights to object or restrict how your data is processed:
            </p>
            <BulletList items={[
              'Object to specific data processing activities',
              'Restrict processing while disputes are resolved',
              'Opt-out of marketing communications (while maintaining service-related messages)',
              'Withdraw consent for optional data processing'
            ]} />
          </SubSection>

          <SubSection title="5.5 How to Exercise Your Rights">
            <BulletList items={[
              'Through your account settings in the MyAgent app',
              'Email us at privacy@myagent.ng with your request',
              'Contact our Data Protection Officer at dpo@myagent.ng',
              'Write to us at our registered office address'
            ]} />
            <p className="text-sm text-gray-400 mt-2">
              We will respond to all requests within 30 days and may request identity verification to protect your privacy.
            </p>
          </SubSection>
        </SectionCard>

        {/* Children's Privacy Protection Section */}
        <SectionCard icon={Users} title="6. Children's Privacy Protection" iconBgColor="bg-red-950" iconColor="text-red-400">
          <p className="text-sm text-gray-400">
            MyAgent is intended exclusively for adults aged 18 years and above. Real estate transactions, financial services, and rental agreements require legal capacity that minors do not possess under Nigerian law.
          </p>
          <div className="bg-red-950 border border-red-800 rounded-lg p-2 mt-3">
            <ul className="space-y-1 ml-4">
              {[
                'We do not knowingly collect personal information from anyone under 18 years of age',
                'Our services require government-issued ID verification (18+ only)',
                'If we discover that a user is under 18, we will immediately terminate their account and delete their data',
                'Parents or guardians who believe their child has provided information to us should contact us immediately'
              ].map((item, index) => (
                <li key={index} className="text-sm text-red-400 flex">
                  <span className="mr-2 text-red-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-gray-400 mt-3">
            If you are under 18, please do not use MyAgent or provide any personal information to us. Contact your parent or guardian if you need housing assistance.
          </p>
        </SectionCard>

        {/* International Data Transfers Section */}
        <SectionCard icon={Globe} title="7. International Data Transfers">
          <p className="text-[15px] text-gray-100">
            While we primarily process and store data within Nigeria, some service providers may be located in other countries with adequate data protection laws:
          </p>
          <BulletList items={[
            'Google Cloud Platform (with Nigerian data residency requirements)',
            'Amazon Web Services (AWS) for backup and disaster recovery',
            'Third-party verification services with international operations'
          ]} />
          <p className="text-sm text-gray-400 mt-2">
            All international transfers are protected by appropriate safeguards including Standard Contractual Clauses approved by the Nigeria Data Protection Commission and equivalent data protection standards.
          </p>
        </SectionCard>

        {/* Policy Updates and Changes Section */}
        <SectionCard icon={Clock} title="8. Policy Updates and Changes">
          <p className="text-[15px] text-gray-100">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes:
          </p>
          <BulletList items={[
            'We will notify you via email and in-app notification',
            'Significant changes will require your explicit consent',
            'The updated policy will be posted in the app with the revision date',
            'You will have 30 days to review changes before they take effect',
            'Continued use of the service after notification constitutes acceptance'
          ]} />
          <p className="text-sm text-gray-400 mt-2">
            We recommend reviewing this policy periodically to stay informed about how we protect your information.
          </p>
        </SectionCard>

        {/* Contact Information Section */}
        <SectionCard icon={FileText} title="9. Contact Information">
          <div>
            <h3 className="text-base font-semibold text-gray-100 mb-2">MyAgent Limited</h3>
            <div className="space-y-1.5 text-sm">
              <p className="text-gray-100">
                <span className="font-semibold">Registered Office:</span>{' '}
                <span className="text-gray-300">15 Adebola Street, Surulere, Lagos State, Nigeria</span>
              </p>
              <p className="text-gray-100">
                <span className="font-semibold">Business Registration:</span>{' '}
                <span className="text-gray-300">RC 1234567 (Corporate Affairs Commission)</span>
              </p>
              <p className="text-gray-100">
                <span className="font-semibold">Email:</span>{' '}
                <span className="text-gray-300">privacy@myagent.ng</span>
              </p>
              <p className="text-gray-100">
                <span className="font-semibold">Data Protection Officer:</span>{' '}
                <span className="text-gray-300">dpo@myagent.ng</span>
              </p>
              <p className="text-gray-100">
                <span className="font-semibold">Customer Support:</span>{' '}
                <span className="text-gray-300">support@myagent.ng</span>
              </p>
            </div>

            <h4 className="text-[15px] font-medium text-blue-400 mt-4 mb-1.5">
              Data Protection Complaints
            </h4>
            <p className="text-sm text-gray-400 mb-2.5">
              If you have concerns about our data handling practices that we cannot resolve, you have the right to lodge a complaint with:
            </p>

            <div className="bg-gray-800 p-2.5 rounded border border-gray-700">
              <h5 className="text-base font-semibold text-blue-400 mb-1.5">
                Nigeria Data Protection Commission (NDPC)
              </h5>
              <div className="space-y-0.5 text-sm text-gray-400">
                <p>Email: info@ndpc.gov.ng</p>
                <p>Website: www.ndpc.gov.ng</p>
                <p>Phone: +234 9 461 9368</p>
              </div>
            </div>

            <div className="bg-amber-950 border border-amber-800 rounded-lg p-3 mt-4">
              <p className="text-sm text-amber-300">
                <strong>Effective Date:</strong> This Privacy Policy is effective as of January 17, 2025, and was last updated on January 17, 2025. This policy applies to all MyAgent users and supersedes all previous versions.
              </p>
            </div>
          </div>
        </SectionCard>

        {/* Footer */}
        <div className="py-4 text-center">
          <p className="text-sm text-gray-300 leading-relaxed">
            Thank you for trusting MyAgent with your personal information.<br />
            We are committed to protecting your privacy and providing you with transparent, secure services.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;