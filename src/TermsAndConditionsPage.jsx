import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { Shield, FileText, X, ArrowLeft, CheckCircle2 } from "lucide-react";

export function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-gray-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-[#0A5DA6] text-white">
          <div className="flex items-center gap-2 font-bold text-base sm:text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
            <FileText size={20} className="text-[#F6C915]" />
            Terms & Conditions &bull; 22Yards Dallas
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer border-none bg-transparent"
            aria-label="Close terms modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Body - Scrollable Terms Text */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#334155] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
          <TermsContentBody />
        </div>

        {/* Modal Footer */}
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

export function TermsContentBody() {
  return (
    <div className="space-y-6 text-left">
      {/* Title Header */}
      <div className="text-center pb-4 border-b border-gray-100">
        <h2 className="text-xl font-extrabold text-[#053a68] uppercase tracking-wide mb-1">
          RELEASE AND WAIVER OF LIABILITY
        </h2>
        <p className="text-xs text-gray-500 font-medium m-0">
          Gurukrupa Sports LLC d/b/a 22Yards Sports Academy &bull; Lewisville, TX
        </p>
      </div>

      {/* Release & Waiver Text */}
      <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
        <p>
          The individual named on registration (referred to as <strong>"I"</strong> or <strong>"me"</strong>) desires to participate in indoor sports activities, including, but not limited to, indoor cricket and indoor soccer (the <strong>"Activities"</strong>), provided by <strong>Gurukrupa Sports LLC d/b/a 22Yards Sports Academy</strong> (the <strong>"Company"</strong>) at 2601 E State Hwy 121 Business, Lewisville, TX 75056 (the <strong>"Facility"</strong>). As lawful consideration for permission by the Company to participate in the Activities and for the intangible value that I will gain by participating in the Activities, I agree to all the terms and conditions set forth in this agreement (this <strong>"Agreement"</strong>).
        </p>
        <p className="font-semibold text-gray-800 bg-yellow-50/80 p-3 rounded border-l-4 border-[#F6C915]">
          I AM AWARE OF AND UNDERSTAND THE NATURE OF THE ACTIVITIES, WHICH INCLUDES PHYSICAL CONTACT WITH OTHER PARTICIPANTS AND VIGOROUS CARDIOVASCULAR EXERCISE, AND THAT I AM IS QUALIFIED, IN GOOD HEALTH, AND IN PROPER PHYSICAL CONDITION TO PARTICIPATE IN SUCH ACTIVITY. I AM AWARE AND UNDERSTAND THAT THE ACTIVITIES ARE DANGEROUS ACTIVITIES AND INVOLVE SERIOUS RISKS, INCLUDING BUT NOT LIMITED TO, SPRAINS, FRACTURES, CONCUSSIONS, PARALYSIS, PERMANENT DISABILITY, SERIOUS INJURY, DEATH, AND PROPERTY DAMAGE. I ACKNOWLEDGE THAT ANY INJURIES THAT I SUSTAIN MAY BE COMPOUNDED BY NEGLIGENT EMERGENCY RESPONSE OR RESCUE OPERATIONS OF THE COMPANY. I ACKNOWLEDGE THAT I AM KNOWINGLY AND VOLUNTARILY PARTICIPATING IN THE ACTIVITIES WITH AN EXPRESS UNDERSTANDING OF THE DANGER INVOLVED AND HEREBY AGREE TO ACCEPT AND ASSUME ANY AND ALL RISKS OF INJURY, DEATH, OR PROPERTY DAMAGE, WHETHER CAUSED BY THE NEGLIGENCE OF THE COMPANY OR OTHERWISE.
        </p>
        <p>
          I hereby expressly waive and release any and all claims, now known or hereafter known, against the Company, its officers, directors, employees, agents, affiliates, members, successors, and assigns (collectively, <strong>"Releasees"</strong>), on account of injury, death, or property damage arising out of or relating to my participation in the Activities or use of the facility, whether araising out of the negligence of the company or any releases (excluding gross negligence or intentional misconduct on the part of the company or its releasees) or the negligent or intentional conduct of other participants or spectators, or otherwise. I covenant not to make or bring any such claim against the company or any other releasee, and forever release and discharge the company or other releasees from liability under such claims.
        </p>
        <p>
          I shall defend, indemnify, and hold harmless the Company and all other Releasees against any and all losses, damages, liabilities, deficiencies, claims, actions, judgments, settlements, interest, awards, penalties, fines, costs, or expenses of whatever kind, including reasonable attorney fees, fees and the costs of enforcing any right to indemnfication under this agreement, and the cost of pursuing any insurance providers, incurred by or awarded against indemnfied party, arising out of or resulting from any claim of a third party related to my participation in the activities.
        </p>
        <p>
          This Agreement constitutes the entire agreement of the Company and me with respect to the subject matter contained herein and supersedes all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, with respect to such subject matter. I acknowledge and agree that no representations or agreements, written or oral, have been made to me by the company or any other Releasee with respect to any of the subject matter contained in this agreement, and I represent and warrant that I am not relying on any such representations. If any term or provision of this Agreement or the application thereof to any party or circumstance is held invalid, illegal, or unenforceable to any extent in any jurisdiction, then the remaining terms and provisions and their application to other parties or circumstances shall not be affected thereby and shall be enforced to the greatest extent permitted by law. This Agreement is binding on and shall inure to the benefit of the Company and me and their respective successors and assigns. All matters arising out of or relating to this Agreement shall be governed by and construed in accordance with the internal laws of the State of Texas, excluding any conflict-of-laws rule or principle that might refer the governance or the construction of this agreement to the laws of another jurisdiction. Any claim or cause of action arising under this Agreement may be brought only in the federal and state courts located in Collin County, Texas and I hereby consent to the exclusive jurisdiction of such courts. If any action at law or in equity is necessary to enforce the terms of this Agreement, the prevailing party shall be entitled to receive from the non-prevailing party reasonable attorneys’ fees, court costs, and necessary disbursements in addition to all other relief to which he or it may be entitled.
        </p>
        <p className="font-bold text-gray-900 leading-relaxed">
          BY REGISTERING, I ACKNOWLEDGE THAT I HAVE READ AND FULLY UNDERSTOOD ALL OF THE TERMS OF THIS AGREEMENT AND THAT I AM VOLUNTARILY GIVING UP SUBSTANTIAL LEGAL RIGHTS, INCLUDING THE RIGHT TO SUE THE COMPANY, WITHOUT ANY INDUCEMENT, ASSURANCE, OR GUARANTEE BEING MADE TO ME. I INTEND MY SIGNATURE TO BE THE REQUIRED EVIDENCE OF MY ASSENT TO COMPLETELY AND UNCONDITIONALLY RELEASE ALL LIABILITY TO THE GREATEST EXTENT ALLOWED BY LAW.
        </p>
        <p className="font-medium text-gray-800 leading-relaxed">
          I am the parent or legal guardian of the minor named on the registration form. I have the legal capacity to consent to and, by registering, I hereby do consent to the terms and conditions of this Release and Waiver of Liability and Assumption of Risk on behalf of my child or ward.
        </p>
      </div>

      {/* Cancellations, Refunds & Make-ups */}
      <div className="pt-4 border-t border-gray-200">
        <h3 className="text-lg font-bold text-[#053a68] uppercase mb-3 flex items-center gap-2">
          <CheckCircle2 size={18} className="text-[#0A5DA6]" />
          CANCELLATIONS, REFUNDS &amp; MAKE-UPS
        </h3>
        <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <li>
            22Yards Sports Academy reserves the right, prior to the first class or after, to cancel a course due to insufficient enrollment, with full refund.
          </li>
          <li>
            Cancelation rental booking of a field / batting lanes should be informed to the arena prior 24 hours of the booking time. NO refund is applicable. Credits will be given to customers if the cancelation is informed prior 24 hours and the booking can be done for another date within 30 days subject to availability.

          </li>
          <li>
            Requests for program refunds must be submitted one week before the first day of the session is scheduled to begin.All refunds will incur a $25.00 administrative fee unless you go to the 1st class. Absolutely NO REFUNDS will be given after the first day of a session.NO EXCEPTIONS!

          </li>
          <li>
            Under certain circumstances, class credit will be issued for a future session and must be coordinated and approved by a manager.Only the unused portion will be credited based on the date of the withdrawal and notification. Only for child illness.

          </li>
          <li>
            22Yards Sports Academy are responsible for make-up classes only if a cancellation is due to the absence of an instructor or the closing of a facility.Unfortunately, we do not offer make-ups for vacation or summer camp programs.

          </li>
          <li>
            Make-up classes are offered as a <strong>COURTSEY</strong> and must be scheduled in advance.All make-ups are based on class availability and must be completed during the session in which the participant is enrolled.

          </li>
          <li>
            If your child has been attending classes without payment of class fee or registration fee, 22Yards Sports Academy reserves the right to process payment from the credit card information on file.
          </li>
        </ol>

        <div className="mt-4 space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <p className="font-bold text-gray-900 text-sm sm:text-base">
            I understand and comply with the rules and regulations described above.
          </p>
          <p>
            By registering, you also agree to receive emails from 22Yards Sports Academy. I accept the terms &amp; conditions.
          </p>
          <p>
            Remember my information for the next registration. IMPORTANT: Do not check this on a public computer!
          </p>
        </div>
      </div>

      {/* Appearance Release */}
      <div className="pt-4 border-t border-gray-200">
        <h3 className="text-lg font-bold text-[#053a68] uppercase mb-3">
          APPEARANCE RELEASE
        </h3>
        <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <p>
            I irrevocably give Gurukrupa Sports LLC d/b/a 22Yards Sports Academy, a Texas limited liability company (the &quot;Company&quot;), and its officers, directors, employees, agents, affiliates, members, successors, and assigns (collectively, &quot;Releasees&quot;) my permission, and grant to Releasees the right, to film, record, and photograph me during my participation in activities at the Company&apos;s indoor sports facility (the &quot;Recordings&quot;). I hereby irrevocably grant and license to Releasees the rights to use, and permit others to use, the Recordings, including my name, image, likeness, appearance, and voice as they appear in the Recordings, in perpetuity throughout the universe and in any medium or format whatsoever now existing or hereafter created, without further consent from or any royalty, payment, or other compensation to me except as otherwise expressly provided in this Agreement.
          </p>
          <p>
            Further, I hereby irrevocably permit, authorize, and license Releasees to identify me by name and use my name, likeness, appearance, voice, professional and personal biographical information, signature, other personal characteristics, and all materials created by or on behalf of Company that incorporate any of the foregoing (&quot;Materials&quot;), in connection with the advertising, publicity, and promotion of Company and its affiliates and their businesses, products, and services, in perpetuity throughout the universe and in any medium or format whatsoever now existing or hereafter created without further consent from or any royalty, payment, or other compensation to me. I represent that I have not given any money or anything else of value to Releasees, or anyone else associated with the Recordings, in exchange for appearing in the Recordings or acknowledging me or including my name or any matter in the Recordings.
          </p>
          <p>
            I agree that Company is and will be the sole and exclusive owner of all right, title, and interest in and to the Recordings and the Materials, including all copyrights and other intellectual property rights therein, in perpetuity throughout the universe. In furtherance of the foregoing, I agree that the results and proceeds of my services in connection with the Recordings and the Materials are work made for hire for Company as defined in Section 101 of the Copyright Act of 1976. To the extent the Recordings, the Materials, or any part of either does not qualify as, or otherwise fails to be, work made for hire, I shall, and hereby do, (a) assign, transfer, and otherwise convey to Company, irrevocably and in perpetuity, throughout the universe, all of my right, title, and interest in and to, if any, the Recordings and the Materials, including all copyright and other intellectual property rights, including all registration, renewal, and reversion rights, and the right to register and sue to enforce such copyrights against infringers; and (b) irrevocably waive any and all claims I may now or hereafter have in any jurisdiction to so-called &quot;moral rights&quot; or rights of droit moral in the Recordings and the Materials.
          </p>
          <p>
            I acknowledge and agree that I have no right to review or approve the Recordings or the Materials before they are used by Company or at any other time, and that Releasees have no liability to me for any editing or alteration of the Recordings or the Materials, or for any distortion or other effects resulting from Company&apos;s editing, alteration, or use of the Recordings or the Materials, or Company&apos;s presentation of me. Any acknowledgment or credit of me in connection with the Work or the Materials, if any, shall be determined by Company in Company&apos;s sole discretion.
          </p>
          <p>
            To the fullest extent permitted by applicable law, I hereby irrevocably waive all legal and equitable rights relating to all liabilities, claims, demands, actions, suits, damages, and expenses, now known or hereafter known in any jurisdiction throughout the world arising directly or indirectly from the Releasees&apos; exercise of their rights under this Agreement or the use of the Recordings and/or the Materials, and, whether resulting in whole or in part by the negligence of Releasees, covenant not to make or bring any claim against any Releasees and their agents, employees, and representatives, and forever release and discharge Releasees from liability under such claims.
          </p>
          <p className="font-bold text-gray-900">
            I am the parent or legal guardian of the minor named on the registration form. I have the legal capacity to consent to and, by registering, I hereby do consent to the terms and conditions of this APPEARANCE RELEASE FORM on behalf of my child or ward.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between" style={{ fontFamily: "'Inter', sans-serif", color: "#0A5DA6" }}>
      <div>
        <SiteHeader activePage="ABOUT US" />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 w-full">
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

          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-10 shadow-sm">
            <TermsContentBody />
          </div>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
