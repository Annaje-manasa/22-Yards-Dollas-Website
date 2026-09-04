import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between" style={{ fontFamily: "'Inter', sans-serif", color: "#0A5DA6" }}>
      <div>
        <SiteHeader activePage="ABOUT US" />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 w-full text-gray-800">
          <div className="mb-6">
            <a
              href="#selection-summary"
              onClick={(e) => {
                e.preventDefault();
                if (window.history.length > 1) {
                  window.history.back();
                } else {
                  window.location.hash = "#selection-summary";
                }
              }}
              className="text-xs font-semibold text-[#0A5DA6] hover:text-[#053a68] flex items-center gap-1 no-underline bg-[#EEF5FB] px-3 py-1.5 rounded-md transition-colors inline-flex cursor-pointer"
            >
              <ArrowLeft size={14} /> Back to Booking
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-10 shadow-sm space-y-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 border-b border-gray-200 pb-4">
              Privacy Policy
            </h1>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              This Privacy Policy governs the manner in which 22 Yards Dallas collects, uses, maintains and discloses information collected from you when you use the 22 Yards Dallas website and/or <a href="https://22YardsDallas.spawtz.com" target="_blank" rel="noreferrer" className="text-[#0A5DA6] underline">https://22YardsDallas.spawtz.com</a> (&quot;Site&quot;). This privacy policy applies to the Site and all products and services offered by 22 Yards Dallas.
            </p>

            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Personal identification information
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                We may collect personal identification information from you in a variety of ways, including, but not limited to, when you visit our site, register on the site, place an order, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. You may be asked for, as appropriate, name, email address, mailing address, phone number. You may, however, visit our Site anonymously. We will collect personal identification information from you only if you voluntarily submit such information to us. You can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Non-personal identification information
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                We may collect non-personal identification information about you whenever you interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about your means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Web browser cookies
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Our Site may use &quot;cookies&quot; to enhance your experience. Your web browser places cookies on your hard drive for record-keeping purposes and to keep you signed in to the Site. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. If you do so, note that some parts of the Site may not function properly.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                How we use collected information
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                22 Yards Dallas may collect and use your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <li>
                  <span className="italic font-semibold">To run and operate our business</span>
                  <br />
                  We may need your information to provide you with the league, booking, event and class services you may have purchased.
                </li>
                <li>
                  <span className="italic font-semibold">To improve customer service</span>
                  <br />
                  Information you provide helps us respond to your customer service requests and support needs more efficiently.
                </li>
                <li>
                  <span className="italic font-semibold">To personalize user experience</span>
                  <br />
                  We may use information in the aggregate to understand how our users as a group use the services and resources provided on our Site.
                </li>
                <li>
                  <span className="italic font-semibold">To improve our Site</span>
                  <br />
                  We may use feedback you provide to improve our products and services.
                </li>
                <li>
                  <span className="italic font-semibold">To process payments</span>
                  <br />
                  We may use the information you provide about yourself when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.
                </li>
                <li>
                  <span className="italic font-semibold">To send periodic emails</span>
                  <br />
                  We may use the email address to send you information and updates pertaining to your leagues, fixtures, bookings, events or classes. It may also be used to respond to your inquiries, questions, and/or other requests.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                How we protect your information
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Sharing your personal information
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                We do not sell, trade, or rent your personal identification information to others. We may use third party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Electronic newsletters
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                If you decides to opt-in to our mailing list, you will receive emails that may include company news, updates, related product or service information, etc. If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or you may update your communication preferences via your control panel. We may use third party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Changes to this privacy policy
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                22 Yards Dallas has the discretion to update this privacy policy at any time. When we do, we will update the timestamp on this page. In the event of major modifications to the privacy policy, we will inform you via email.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Your acceptance of these terms
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Contacting us
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at <a href="mailto:contact@22yardsdallas.com" className="text-[#0A5DA6] underline">contact@22yardsdallas.com</a>.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 text-xs sm:text-sm text-gray-600 font-medium">
              This document was last updated on May 14, 2018
            </div>
          </div>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
