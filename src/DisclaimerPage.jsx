import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between" style={{ fontFamily: "'Inter', sans-serif" }}>
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-16 text-[#333333] leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#1A1A1A] mb-8">
          Disclaimer
        </h1>

        <p className="text-sm sm:text-base text-gray-700 mb-8">
          If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at contact@22yardsdallas.com.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
            Disclaimers for 22Yards Dallas
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            All the information on this website – https://22yardsdallas.com – is published in good faith and for general information purpose only. 22Yards Dallas does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (22Yards Dallas), is strictly at your own risk. 22Yards Dallas will not be liable for any losses and/or damages in connection with the use of our website. Our Disclaimer was generated with the help of the Disclaimer Generator.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad’.
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their “Terms of Service” before engaging in any business or uploading any information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
            Consent
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            By using our website, you hereby consent to our disclaimer and agree to its terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
            Update
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            Should we update, amend or make any changes to this document, those changes will be prominently posted here.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
