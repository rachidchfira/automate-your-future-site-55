import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24"> {/* Added pt-24 for navbar offset */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity
            ("you") and NixusAi ("we," "us," or "our"), concerning your access to and use of the
            [Your Website URL] website as well as any other media form, media channel, mobile website or mobile application
            related, linked, or otherwise connected thereto (collectively, the "Site").
          </p>
          <p>
            You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Service.
            If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must
            discontinue use immediately.
          </p>

          <h2>2. Intellectual Property Rights</h2>
          <p>
            [Placeholder: Detail ownership of intellectual property, user-generated content policies, and licenses.]
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality,
            software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content")
            and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or
            licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and
            unfair competition laws of [Your Jurisdiction], foreign jurisdictions, and international conventions.
          </p>

          <h2>3. User Representations</h2>
          <p>
            [Placeholder: Outline user responsibilities, prohibited activities, and age restrictions if any.]
            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate,
            current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration
            information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service;
            (4) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission
            to use the Site; (5) you will not access the Site through automated or non-human means, whether through a bot, script,
            or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site
            will not violate any applicable law or regulation.
          </p>

          <h2>4. Prohibited Activities</h2>
          <p>
            [Placeholder: List activities that are not allowed on your site/service.]
            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site
            may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            As a user of the Site, you agree not to: [List specific prohibitions here, e.g., systematically retrieve data,
            trick, defraud, or mislead us, engage in unauthorized framing, etc.]
          </p>

          <h2>5. Term and Termination</h2>
          <p>
            [Placeholder: Explain how and when the agreement can be terminated by either party.]
            These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER
            PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
            LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY
            REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT
            CONTAINED IN THESE TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION.
          </p>
          
          <h2>6. Modifications and Interruptions</h2>
          <p>
            [Placeholder: State your right to modify or discontinue services.]
            We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our
            sole discretion without notice. However, we have no obligation to update any information on our Site. We also
            reserve the right to modify or discontinue all or part of the Site without notice at any time.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            [Placeholder: Specify the jurisdiction whose laws will govern the terms.]
            These Terms shall be governed by and defined following the laws of [Your Country/State]. NixusAi and yourself
            irrevocably consent that the courts of [Your Country/State] shall have exclusive jurisdiction to resolve any dispute
            which may arise in connection with these terms.
          </p>

          <h2>8. Disclaimer</h2>
          <p>
            [Placeholder: Include a standard disclaimer of warranties.]
            THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES
            WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
            IN CONNECTION WITH THE SITE AND YOUR USE THEREOF...
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            [Placeholder: Include a standard limitation of liability clause.]
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT,
            INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES...
          </p>

          <h2>10. Contact Us</h2>
          <p>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site,
            please contact us at:
          </p>
          <p>
            NixusAi<br />
            [Your Company Address]<br />
            info@nixusai.com
          </p>
          <p>
            <strong>Important:</strong> This is a template and should be reviewed and customized by a legal professional to ensure
            it accurately reflects your services and complies with all applicable laws and regulations.
            Remember to replace placeholders like "[Your Website URL]", "[Your Jurisdiction]", and company details.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
