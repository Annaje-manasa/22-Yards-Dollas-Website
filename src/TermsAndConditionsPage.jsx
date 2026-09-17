import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { FileText, X } from "lucide-react";

export function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-gray-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-[#0A5DA6] text-white">
          <div className="flex items-center gap-2 font-bold text-base sm:text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
            <FileText size={20} className="text-[#F6C915]" />
            Terms &amp; Conditions &bull; 22Yards Dallas
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border-none bg-transparent"
            aria-label="Close terms modal"
          >
            <X size={22} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#334155] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#053a68]">Terms Of USe &bull; 22Yards Dallas</h2>
            <p>Welcome to 22Yards Dallas!</p>
            <p>These terms and conditions outline the rules and regulations for the use of 22Yards Dallas's Website, located at https://22yardsdallas.com.</p>
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use 22Yards Dallas if you do not agree to take all of the terms and conditions stated on this page.</p>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between flex-wrap gap-3">
          <a
            href="https://22yardsdallas.spawtz.com/TermsAndConditions?VenueId=2&Type=Booking"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#0A5DA6] hover:underline font-semibold flex items-center gap-1"
          >
            View Official Spawtz Page &rarr;
          </a>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#0A5DA6] hover:bg-[#053a68] text-white text-xs font-bold uppercase rounded-lg cursor-pointer border-none transition-colors"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between" style={{ fontFamily: "'Inter', sans-serif" }}>
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-16 text-[#333333] leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#1A1A1A] mb-8">
          Terms and Conditions
        </h1>

        <p className="text-sm sm:text-base text-gray-700 mb-4">
          Welcome to 22Yards Dallas!
        </p>

        <p className="text-sm sm:text-base text-gray-700 mb-4">
          These terms and conditions outline the rules and regulations for the use of 22Yards Dallas's Website, located at https://22yardsdallas.com.
        </p>

        <p className="text-sm sm:text-base text-gray-700 mb-4">
          By accessing this website we assume you accept these terms and conditions. Do not continue to use 22Yards Dallas if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <p className="text-sm sm:text-base text-gray-700 mb-8">
          The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, the person log on this website and compliant to the Company’s terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
            Cookies
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            We employ the use of cookies. By accessing 22Yards Dallas, you agreed to use cookies in agreement with the 22Yards Dallas's Privacy Policy.
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
            License
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            Unless otherwise stated, 22Yards Dallas and/or its licensors own the intellectual property rights for all material on 22Yards Dallas. All intellectual property rights are reserved. You may access this from 22Yards Dallas for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <p className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
            You must not:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
            <li>Republish material from 22Yards Dallas</li>
            <li>Sell, rent or sub-license material from 22Yards Dallas</li>
            <li>Reproduce, duplicate or copy material from 22Yards Dallas</li>
            <li>Redistribute content from 22Yards Dallas</li>
          </ul>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            This Agreement shall begin on the date hereof.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. 22Yards Dallas does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of 22Yards Dallas,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, 22Yards Dallas shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            22Yards Dallas reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
          </p>
          <p className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
            You warrant and represent that:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
            <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
            <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
            <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy;</li>
            <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
          </ul>
          <p className="text-sm sm:text-base text-gray-700">
            You hereby grant 22Yards Dallas a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
            Hyperlinking to our Content
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-2">
            The following organizations may link to our Website without prior written approval:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
            <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
          </ul>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-2">
            We may consider and approve other link requests from the following types of organizations:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
            <li>commonly-known consumer and/or business information sources;</li>
            <li>dot.com community sites;</li>
            <li>associations or other groups representing charities;</li>
            <li>online directory distributors;</li>
            <li>internet portals;</li>
            <li>accounting, law and consulting firms; and</li>
            <li>educational institutions and trade associations.</li>
          </ul>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of 22Yards Dallas; and (d) the link is in the context of general resource information.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to 22Yards Dallas. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
          </p>
          <p className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
            Approved organizations may hyperlink to our Website as follows:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
            <li>By use of our corporate name; or</li>
            <li>By use of the uniform resource locator being linked to; or</li>
            <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
          </ul>
          <p className="text-sm sm:text-base text-gray-700">
            No use of 22Yards Dallas's logo or other artwork will be allowed for linking absent a trademark license agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
            iFrames
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
            Content Liability
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
            Reservation of Rights
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
            Removal of links from our website
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
            Disclaimer
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-2">
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
          </p>
          <p className="text-sm sm:text-base text-gray-700">
            As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
