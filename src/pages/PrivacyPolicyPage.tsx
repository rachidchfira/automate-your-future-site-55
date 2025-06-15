import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24"> {/* Added pt-24 for navbar offset */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to NixusAi ("we", "our", or "us"). We are committed to protecting your personal information
            and privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. If you have any questions
            with regards to your personal information, please contact us at info@nixusai.com.
          </p>
          <p>
            This privacy notice describes how we might use your information if you:
          </p>
          <ul>
            <li>Visit our website at [Your Website URL]</li>
            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
          </ul>
          <p>
            In this privacy notice, if we refer to:
          </p>
          <ul>
            <li>"Website", we are referring to any website of ours that references or links to this policy</li>
            <li>"Services", we are referring to our Website, and other related services, including any sales, marketing, or events</li>
          </ul>
          <p>
            The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect,
            how we use it, and what rights you have in relation to it. If there are any terms in this privacy notice that you
            do not agree with, please discontinue use of our Services immediately.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            [Placeholder: Detail the types of personal information you collect, e.g., name, email, IP address, browsing data, etc. 
            Explain how you collect this information, e.g., through forms, cookies, analytics tools.]
          </p>
          <p>
            We automatically collect certain information when you visit, use or navigate the Website. This information does
            not reveal your specific identity (like your name or contact information) but may include device and usage
            information, such as your IP address, browser and device characteristics, operating system, language preferences,
            referring URLs, device name, country, location, information about how and when you use our Website and other
            technical information. This information is primarily needed to maintain the security and operation of our Website,
            and for our internal analytics and reporting purposes.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            [Placeholder: Explain the purposes for which you use the collected information, e.g., to provide services, 
            personalize experience, communicate with users, marketing, analytics, security.]
          </p>

          <h2>4. Will Your Information Be Shared With Anyone?</h2>
          <p>
            [Placeholder: Describe your information sharing practices. Specify if you share data with third parties, 
            under what circumstances, and who these third parties are, e.g., service providers, business partners, legal authorities.]
          </p>

          <h2>5. Cookies and Other Tracking Technologies</h2>
          <p>
            [Placeholder: Explain your use of cookies and similar technologies. Link to your Cookie Policy if you have a separate one.]
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information.
            Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
          </p>
          
          <h2>6. How Long Do We Keep Your Information?</h2>
          <p>
            [Placeholder: State how long you retain personal information and the criteria used to determine retention periods.]
          </p>

          <h2>7. How Do We Keep Your Information Safe?</h2>
          <p>
            [Placeholder: Describe the security measures you have in place to protect personal information.]
          </p>

          <h2>8. What Are Your Privacy Rights?</h2>
          <p>
            [Placeholder: Inform users about their privacy rights, e.g., access, correction, deletion, objection to processing, 
            and how they can exercise these rights. Mention rights specific to jurisdictions like GDPR or CCPA if applicable.]
          </p>

          <h2>9. Updates To This Notice</h2>
          <p>
            We may update this privacy notice from time to time. The updated version will be indicated by an updated
            "Last updated" date and the updated version will be effective as soon as it is accessible. We encourage
            you to review this privacy notice frequently to be informed of how we are protecting your information.
          </p>

          <h2>10. How Can You Contact Us About This Notice?</h2>
          <p>
            If you have questions or comments about this notice, you may email us at info@nixusai.com or by post to:
          </p>
          <p>
            [Placeholder: Your Company Name, Address, City, Postal Code, Country]
          </p>
          <p>
            <strong>Important:</strong> This is a template and should be reviewed and customized by a legal professional to ensure
            it accurately reflects your data practices and complies with all applicable laws and regulations.
            Remember to replace placeholders like "[Your Website URL]" and company details.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
