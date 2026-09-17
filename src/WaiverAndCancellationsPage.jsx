import React, { useState, useRef, useEffect } from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

function DrawSignatureCanvas({ onAccept, onClear, accepted }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  const drawBaseline = (ctx, width, height) => {
    ctx.strokeStyle = "#94a3b8";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(20, height - 50);
    ctx.lineTo(width - 20, height - 50);
    ctx.stroke();

    ctx.font = "bold 18px sans-serif";
    ctx.fillStyle = "#334155";
    ctx.fillText("x", 20, height - 56);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2.5;

    drawBaseline(ctx, rect.width, rect.height);
  }, []);

  const getPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    setIsDrawing(true);
    setHasDrawn(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const pos = getPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width * 2, rect.height * 2);
    drawBaseline(ctx, rect.width, rect.height);
    setHasDrawn(false);
    if (onClear) onClear();
  };

  const acceptCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !hasDrawn) return;
    const dataUrl = canvas.toDataURL("image/png");
    if (onAccept) onAccept(dataUrl);
  };

  return (
    <div className="space-y-3 text-left">
      <div className="relative w-full h-48 border-2 border-gray-300 rounded-lg bg-white overflow-hidden shadow-inner cursor-crosshair">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full h-full touch-none block"
        />
      </div>

      <div className="flex items-center justify-between flex-wrap gap-2 pt-1 text-xs text-gray-500">
        <span>After your signature is complete click &quot;Accept Signature.&quot;</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={acceptCanvas}
            disabled={!hasDrawn}
            className={`px-4 py-2 font-bold rounded transition-colors border-none cursor-pointer text-xs ${hasDrawn
                ? "bg-[#0A5DA6] text-white hover:bg-[#053a68]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            {accepted ? "✓ Signature Accepted" : "Accept Signature"}
          </button>
          <button
            type="button"
            onClick={clearCanvas}
            className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white font-bold rounded border-none cursor-pointer text-xs transition-colors"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default function WaiverAndCancellationsPage() {
  const [selection, setSelection] = useState(null);
  const [minorCount, setMinorCount] = useState(null);
  const [showMoreMinors, setShowMoreMinors] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Form Fields State
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    teamOrgName: '',
    eventType: 'Please Select...',
    email: '',
    confirmEmail: '',
    emergencyFirstName: '',
    emergencyLastName: '',
    emergencyPhone: '',
    eConsent: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // DOB & Age Validation state
  const [dobMonth, setDobMonth] = useState('');
  const [dobDay, setDobDay] = useState('');
  const [dobYear, setDobYear] = useState('');
  const [showAgeAlert, setShowAgeAlert] = useState(false);
  const [otherEventType, setOtherEventType] = useState('');

  // Signature Modal state
  const [showSignatureModal, setShowSignatureModal] = useState(false);
  const [sigType, setSigType] = useState('type');
  const [typedName, setTypedName] = useState('');
  const [drawnSignatureData, setDrawnSignatureData] = useState(null);
  const [signedName, setSignedName] = useState('');
  const [sigAccepted, setSigAccepted] = useState(false);

  const handleInputChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleYearChange = (e) => {
    const y = e.target.value;
    setDobYear(y);
    if (y && selection === 'adult') {
      const age = 2026 - parseInt(y, 10);
      if (age < 18) {
        setShowAgeAlert(true);
      }
    }
  };

  const handleWaiverSubmit = async (e) => {
    e.preventDefault();
    if (!form.email) {
      alert("Please enter a valid email address.");
      return;
    }
    if (form.email !== form.confirmEmail) {
      alert("Email and Confirm Email do not match.");
      return;
    }
    if (!signedName) {
      alert("Please click 'Click to Sign' to provide your participant signature.");
      return;
    }

    setLoading(true);
    try {
      const summaryMsg = `Waiver & Cancellations Policy Agreement Submission

Participant Details:
Name: ${form.firstName} ${form.lastName}
Phone: ${form.phone}
DOB: ${dobMonth} ${dobDay}, ${dobYear}
Participant Type: ${selection === 'adult' ? 'Adult' : `Minor(s) - ${minorCount || 'N/A'}`}

Organization & Event:
Team/Org: ${form.teamOrgName || 'N/A'}
Type of Event: ${form.eventType === 'Other' ? (otherEventType || 'Other') : (form.eventType || 'N/A')}

Emergency Contact:
Name: ${form.emergencyFirstName} ${form.emergencyLastName}
Phone: ${form.emergencyPhone}

Signature:
Participant Signature: ${signedName}
Electronic Consent: Agreed`;

      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_uexjiwj",
          template_id: "template_stanys9",
          user_id: "Y4cfzv51x7E5ofvrs",
          template_params: {
            name: `${form.firstName} ${form.lastName}`,
            email: form.email,
            to_email: form.email,
            reply_to: form.email,
            phone: form.phone,
            message: summaryMsg,
            title: `Waiver & Cancellations Agreement - ${form.firstName} ${form.lastName}`,
          },
        }),
      });
      setSubmitted(true);
      setForm({
        firstName: '',
        lastName: '',
        phone: '',
        teamOrgName: '',
        eventType: 'Please Select...',
        email: '',
        confirmEmail: '',
        emergencyFirstName: '',
        emergencyLastName: '',
        emergencyPhone: '',
        eConsent: false,
      });
      setDobMonth('');
      setDobDay('');
      setDobYear('');
      setOtherEventType('');
      setSignedName('');
      setSigAccepted(false);
      setTypedName('');
      setDrawnSignatureData(null);
      setSigType('type');
      setShowAgeAlert(false);
      setTimeout(() => setSubmitted(false), 8000);
    } catch (err) {
      setSubmitted(true);
      setForm({
        firstName: '',
        lastName: '',
        phone: '',
        teamOrgName: '',
        eventType: 'Please Select...',
        email: '',
        confirmEmail: '',
        emergencyFirstName: '',
        emergencyLastName: '',
        emergencyPhone: '',
        eConsent: false,
      });
      setDobMonth('');
      setDobDay('');
      setDobYear('');
      setOtherEventType('');
      setSignedName('');
      setSigAccepted(false);
      setTypedName('');
      setDrawnSignatureData(null);
      setSigType('type');
      setShowAgeAlert(false);
      setTimeout(() => setSubmitted(false), 8000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between" style={{ fontFamily: "'Inter', sans-serif" }}>
      <SiteHeader />

      <main className="max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-16 text-[#333333] leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#053a68] mb-8">
          Waiver &amp; Cancellations Policy
        </h1>

        {/* Facility Info Header Card */}
        <div className="bg-[#EEF5FB] border border-[#0A5DA6]/20 rounded-xl p-6 text-center max-w-xl mx-auto mb-10 shadow-sm">
          <h2 className="text-xl font-extrabold text-[#053a68] uppercase tracking-wide mb-2">
            22Yards Dallas
          </h2>
          <p className="text-xs sm:text-sm text-[#5B7A94] font-medium mb-1">
            2601 E State Hwy 121 Business, Lewisville, TX 75056
          </p>
          <p className="text-xs sm:text-sm text-[#5B7A94] font-medium mb-1">
            PH: (469) 222-8473
          </p>
          <p className="text-xs sm:text-sm font-bold text-[#0A5DA6]">
            22YARDSDALLAS.COM
          </p>
        </div>

        {/* Release and Waiver Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-10 shadow-sm mb-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#053a68] uppercase text-center border-b border-gray-200 pb-4">
            RELEASE AND WAIVER OF LIABILITY
          </h2>

          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            The individual named below (referred to as &quot;I&quot; or &quot;me&quot;) desires to participate in indoor sports activities, including, but not limited to, indoor cricket and indoor soccer (whether singular or plural, hereinafter referred to as the &quot;Activities&quot;), provided by Gurukrupa Sports LLC d/b/a 22Yards Dallas, a Texas limited liability company (the &quot;Company&quot;) with offices and an indoor sports facility located at 2601 E State Hwy 121 Business, Lewisville, TX 75056 (the &quot;Facility&quot;). As lawful consideration for permission by the Company to participate in the Activities and for the intangible value that I will gain by participating in the Activities, I agree to all the terms and conditions set forth in this agreement (this &quot;Agreement&quot;).
          </p>

          <p className="text-xs sm:text-sm text-[#053a68] font-semibold underline leading-relaxed bg-[#EEF5FB] p-4 rounded-lg border-l-4 border-[#F6C915]">
            I AM AWARE OF AND UNDERSTAND THE NATURE OF THE ACTIVITIES, WHICH INCLUDES PHYSICAL CONTACT WITH OTHER PARTICIPANTS AND VIGOROUS CARDIOVASCULAR EXERCISE, AND THAT I AM QUALIFIED, IN GOOD HEALTH, AND IN PROPER PHYSICAL CONDITION TO PARTICIPATE IN SUCH ACTIVITY. I AM AWARE AND UNDERSTAND THAT THE ACTIVITIES ARE DANGEROUS ACTIVITIES AND INVOLVE SERIOUS RISKS, INCLUDING BUT NOT LIMITED TO, SPRAINS, FRACTURES, CONCUSSIONS, PARALYSIS, PERMANENT DISABILITY, SERIOUS INJURY, DEATH, AND PROPERTY DAMAGE. I ACKNOWLEDGE THAT ANY INJURIES THAT I SUSTAIN MAY BE COMPOUNDED BY NEGLIGENT EMERGENCY RESPONSE OR RESCUE OPERATIONS OF THE COMPANY. I ACKNOWLEDGE THAT I AM KNOWINGLY AND VOLUNTARILY PARTICIPATING IN THE ACTIVITIES WITH AN EXPRESS UNDERSTANDING OF THE DANGER INVOLVED AND HEREBY AGREE TO ACCEPT AND ASSUME ANY AND ALL RISKS OF INJURY, DEATH, OR PROPERTY DAMAGE, WHETHER CAUSED BY THE NEGLIGENCE OF THE COMPANY OR OTHERWISE.
          </p>

          <p className="text-xs sm:text-sm text-gray-800 underline leading-relaxed">
            I HEREBY EXPRESSLY WAIVE AND RELEASE ANY AND ALL CLAIMS, NOW KNOWN OR HEREAFTER KNOWN, AGAINST THE COMPANY, AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AFFILIATES, MEMBERS, SUCCESSORS, AND ASSIGNS (COLLECTIVELY, &quot;RELEASEES&quot;), ON ACCOUNT OF INJURY, DEATH, OR PROPERTY DAMAGE ARISING OUT OF OR RELATING TO MY PARTICIPATION IN THE ACTIVITIES OR USE OF THE FACILITY, WHETHER ARISING OUT OF THE NEGLIGENCE OF THE COMPANY OR ANY RELEASEES (EXCLUDING GROSS NEGLIGENCE OR INTENTIONAL MISCONDUCT ON THE PART OF THE COMPANY OR ITS RELEASEES) OR THE NEGLIGENT OR INTENTIONAL CONDUCT OF OTHER PARTICIPANTS OR SPECTATORS, OR OTHERWISE. I COVENANT NOT TO MAKE OR BRING ANY SUCH CLAIM AGAINST THE COMPANY OR ANY OTHER RELEASEE, AND FOREVER RELEASE AND DISCHARGE THE COMPANY AND ALL OTHER RELEASEES FROM LIABILITY UNDER SUCH CLAIMS.
          </p>

          <p className="text-xs sm:text-sm text-gray-800 underline leading-relaxed">
            I SHALL DEFEND, INDEMNIFY, AND HOLD HARMLESS THE COMPANY AND ALL OTHER RELEASEES AGAINST ANY AND ALL LOSSES, DAMAGES, LIABILITIES, DEFICIENCIES, CLAIMS, ACTIONS, JUDGMENTS, SETTLEMENTS, INTEREST, AWARDS, PENALTIES, FINES, COSTS, OR EXPENSES OF WHATEVER KIND, INCLUDING REASONABLE ATTORNEY FEES, FEES AND THE COSTS OF ENFORCING ANY RIGHT TO INDEMNIFICATION UNDER THIS AGREEMENT, AND THE COST OF PURSUING ANY INSURANCE PROVIDERS, INCURRED BY OR AWARDED AGAINST INDEMNIFIED PARTY, ARISING OUT OF OR RESULTING FROM ANY CLAIM OF A THIRD PARTY RELATED TO MY PARTICIPATION IN THE ACTIVITIES.
          </p>

          <p className="text-xs sm:text-sm text-gray-800 underline leading-relaxed">
            This Agreement constitutes the entire agreement of the Company and me with respect to the subject matter contained herein and supersedes all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, with respect to such subject matter. I acknowledge and agree that no representations or agreements, written or oral, have been made to me by the company or any other Releasee with respect to any of the subject matter contained in this agreement, and I represent and warrant that I am not relying on any such representations. If any term or provision of this Agreement or the application thereof to any party or circumstance is held invalid, illegal, or unenforceable to any extent in any jurisdiction, then the remaining terms and provisions and their application to other parties or circumstances shall not be affected thereby and shall be enforced to the greatest extent permitted by law. This Agreement is binding on and shall inure to the benefit of the Company and me and their respective successors and assigns. All matters arising out of or relating to this Agreement shall be governed by and construed in accordance with the internal laws of the State of Texas, excluding any conflict-of-laws rule or principle that might refer the governance or the construction of this agreement to the laws of another jurisdiction. Any claim or cause of action arising under this Agreement may be brought only in the federal and state courts located in Collin County, Texas and I hereby consent to the exclusive jurisdiction of such courts. If any action at law or in equity is necessary to enforce the terms of this Agreement, the prevailing party shall be entitled to receive from the non-prevailing party reasonable attorneys’ fees, court costs, and necessary disbursements in addition to all other relief to which he or it may be entitled.
          </p>

          <p className="text-xs sm:text-sm text-gray-900 font-bold underline leading-relaxed">
            BY SIGNING BELOW, I ACKNOWLEDGE THAT I HAVE READ AND FULLY UNDERSTOOD ALL OF THE TERMS OF THIS AGREEMENT AND THAT I AM VOLUNTARILY GIVING UP SUBSTANTIAL LEGAL RIGHTS, INCLUDING THE RIGHT TO SUE THE COMPANY, WITHOUT ANY INDUCEMENT, ASSURANCE, OR GUARANTEE BEING MADE TO ME. I INTEND MY SIGNATURE TO BE THE REQUIRED EVIDENCE OF MY ASSENT TO COMPLETELY AND UNCONDITIONALLY RELEASE ALL LIABILITY TO THE GREATEST EXTENT ALLOWED BY LAW.
          </p>
        </section>

        {/* Cancellations, Refunds & Make-ups Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-10 shadow-sm space-y-4 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#053a68] uppercase border-b border-gray-200 pb-4">
            CANCELLATIONS, REFUNDS &amp; MAKE-UPS
          </h2>

          <ul className="list-disc pl-5 space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
            <li>
              22Yards Dallas reserves the right, prior to the first class or after, to cancel a course due to insufficient enrollment, with full refund.
            </li>
            <li>
              NO refund is applicable once the payment is made to rent the fields / batting lanes.
            </li>
            <li>
              No refund is applicable unless the program is cancelled by 22Yards Dallas.
            </li>
            <li>
              22Yards Dallas is responsible for make-up classes only if a cancellation is due to the absence of an instructor or the closing of a facility.
            </li>
            <li>
              Make-up classes are offered as a COURTESY and must be scheduled in advance. All make-ups are based on class availability and must be completed during the session in which the participant is enrolled.
            </li>
            <li>
              If your child has been attending classes without payment of class fee or registration fee, 22Yards Dallas reserves the right to process payment from the credit card information on file.
            </li>
          </ul>
        </section>

        {/* Participant Selection Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-8 sm:p-10 shadow-sm text-center mb-8">
          <p className="text-base sm:text-lg font-bold text-[#053a68] mb-5">
            Please select who will be participating...
          </p>

          <div className="flex items-center justify-center gap-3 mb-4">
            <button
              onClick={() => {
                setSelection('adult');
                setMinorCount(null);
                setShowForm(false);
              }}
              className={`px-6 py-2.5 font-bold rounded text-sm transition-all border-none cursor-pointer shadow-sm ${selection === 'adult'
                  ? 'bg-[#0A5DA6] text-white ring-2 ring-[#F6C915]'
                  : 'bg-[#EEF5FB] text-[#0A5DA6] border border-[#0A5DA6]/30 hover:bg-[#0A5DA6] hover:text-white'
                }`}
            >
              Adult
            </button>
            <button
              onClick={() => {
                setSelection('minors');
                setMinorCount(null);
                setShowForm(false);
              }}
              className={`px-6 py-2.5 font-bold rounded text-sm transition-all border-none cursor-pointer shadow-sm ${selection === 'minors'
                  ? 'bg-[#0A5DA6] text-white ring-2 ring-[#F6C915]'
                  : 'bg-[#EEF5FB] text-[#0A5DA6] border border-[#0A5DA6]/30 hover:bg-[#0A5DA6] hover:text-white'
                }`}
            >
              Minor(s)
            </button>
          </div>

          {/* Adult Option Content */}
          {selection === 'adult' && (
            <div className="mt-5 space-y-4 animate-fade-in">
              <p className="text-sm sm:text-base font-bold text-[#053a68]">
                This agreement is just for YOU
              </p>
              <div>
                <button
                  onClick={() => setShowForm(true)}
                  className="px-6 py-2.5 bg-[#F6C915] hover:bg-[#E0B60F] text-[#053a68] font-extrabold rounded-lg text-sm transition-all border-none cursor-pointer shadow-md uppercase tracking-wider"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Minor(s) Option Content */}
          {selection === 'minors' && (
            <div className="mt-5 space-y-4 animate-fade-in">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {["1 Minor", "2 Minors", "3 Minors", "4 Minors", "5 Minors", "More Minors"].map((label) => (
                  <button
                    key={label}
                    onClick={() => setMinorCount(label)}
                    className={`px-4 py-2 rounded text-xs sm:text-sm font-bold border-none cursor-pointer transition-all shadow-sm ${minorCount === label
                        ? "bg-[#0A5DA6] text-white ring-2 ring-[#F6C915]"
                        : "bg-[#EEF5FB] text-[#0A5DA6] hover:bg-[#0A5DA6] hover:text-white"
                      }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {minorCount && (
                <div className="mt-4">
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-6 py-2.5 bg-[#F6C915] hover:bg-[#E0B60F] text-[#053a68] font-extrabold rounded-lg text-sm transition-all border-none cursor-pointer shadow-md uppercase tracking-wider"
                  >
                    Continue
                  </button>
                </div>
              )}
            </div>
          )}
        </section>

        {/* ==================== FORM DETAILS (SHOWS UPON CLICKING CONTINUE) ==================== */}
        {showForm && (
          <form onSubmit={handleWaiverSubmit} className="space-y-6 text-left animate-fade-in">
            {/* Card 1: Participant's Name, DOB, Information & Signature */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-10 shadow-sm space-y-6 relative">
              {/* Participant's Name */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#053a68] mb-3">
                  Participant&apos;s Name
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">First Name*</label>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="First Name"
                      className="w-full px-3 py-2 border border-[#0A5DA6]/30 rounded outline-none text-xs sm:text-sm focus:ring-2 focus:ring-[#0A5DA6]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Last Name*</label>
                    <input
                      type="text"
                      required
                      value={form.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Last Name"
                      className="w-full px-3 py-2 border border-[#0A5DA6]/30 rounded outline-none text-xs sm:text-sm focus:ring-2 focus:ring-[#0A5DA6]"
                    />
                  </div>
                </div>
                <div className="max-w-xs">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Phone*</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Phone"
                    className="w-full px-3 py-2 border border-[#0A5DA6]/30 rounded outline-none text-xs sm:text-sm focus:ring-2 focus:ring-[#0A5DA6]"
                  />
                </div>
              </div>

              {/* Participant's Date of Birth */}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-base sm:text-lg font-bold text-[#053a68] mb-3">
                  Participant&apos;s Date of Birth*
                </h3>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Date of Birth</label>
                  <div className="flex items-center gap-2 flex-wrap">
                    <select
                      value={dobMonth}
                      onChange={(e) => setDobMonth(e.target.value)}
                      className="px-3 py-2 border border-[#0A5DA6]/30 rounded text-xs sm:text-sm bg-white outline-none focus:ring-2 focus:ring-[#0A5DA6]"
                    >
                      <option value="">- Month -</option>
                      {["1 - January", "2 - February", "3 - March", "4 - April", "5 - May", "6 - June", "7 - July", "8 - August", "9 - September", "10 - October", "11 - November", "12 - December"].map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                    <select
                      value={dobDay}
                      onChange={(e) => setDobDay(e.target.value)}
                      className="px-3 py-2 border border-[#0A5DA6]/30 rounded text-xs sm:text-sm bg-white outline-none focus:ring-2 focus:ring-[#0A5DA6]"
                    >
                      <option value="">- Day -</option>
                      {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                    <select
                      value={dobYear}
                      onChange={handleYearChange}
                      className="px-3 py-2 border border-[#0A5DA6]/30 rounded text-xs sm:text-sm bg-white outline-none focus:ring-2 focus:ring-[#0A5DA6]"
                    >
                      <option value="">- Year -</option>
                      {Array.from({ length: 90 }, (_, i) => 2026 - i).map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Information */}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-base sm:text-lg font-bold text-[#053a68] mb-3">
                  Information
                </h3>
                <div className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Team / Organisation Name *</label>
                    <input
                      type="text"
                      required
                      value={form.teamOrgName}
                      onChange={(e) => handleInputChange('teamOrgName', e.target.value)}
                      placeholder="Team / Organisation Name"
                      className="w-full px-3 py-2 border border-[#0A5DA6]/30 rounded outline-none text-xs sm:text-sm focus:ring-2 focus:ring-[#0A5DA6]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Type of Event*</label>
                    <select
                      value={form.eventType}
                      onChange={(e) => handleInputChange('eventType', e.target.value)}
                      className="w-full px-3 py-2 border border-[#0A5DA6]/30 rounded text-xs sm:text-sm bg-white outline-none focus:ring-2 focus:ring-[#0A5DA6]"
                    >
                      <option value="Please Select...">Please Select...</option>
                      <option value="Birthday Party">Birthday Party</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Cricket Coaching">Cricket Coaching</option>
                      <option value="Cricket League">Cricket League</option>
                      <option value="Soccer">Soccer</option>
                      <option value="Social Event">Social Event</option>
                      <option value="i9 Sports">i9 Sports</option>
                      <option value="Other">Other</option>
                    </select>
                    {form.eventType === 'Other' && (
                      <div className="mt-3 animate-fade-in">
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Please specify Event Type*</label>
                        <input
                          type="text"
                          required
                          value={otherEventType}
                          onChange={(e) => setOtherEventType(e.target.value)}
                          placeholder="Specify Type of Event"
                          className="w-full px-3 py-2 border border-[#0A5DA6]/30 rounded outline-none text-xs sm:text-sm focus:ring-2 focus:ring-[#0A5DA6]"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Participant's Signature */}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-base sm:text-lg font-bold text-[#053a68] mb-3">
                  Participant&apos;s Signature*
                </h3>
                <div>
                  <button
                    type="button"
                    onClick={() => setShowSignatureModal(true)}
                    className={`px-5 py-2.5 text-xs sm:text-sm font-extrabold rounded-lg transition-all border-none cursor-pointer shadow-md ${signedName ? "bg-green-600 text-white" : "bg-[#0A5DA6] hover:bg-[#053a68] text-white"
                      }`}
                  >
                    {signedName ? `✓ Signed: ${signedName}` : "Click to Sign"}
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Email Address */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-10 shadow-sm space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-[#053a68] mb-3">
                Email Address
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Email*</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Email"
                    className="w-full px-3 py-2 border border-[#0A5DA6]/30 rounded outline-none text-xs sm:text-sm focus:ring-2 focus:ring-[#0A5DA6]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Confirm Email*</label>
                  <input
                    type="email"
                    required
                    value={form.confirmEmail}
                    onChange={(e) => handleInputChange('confirmEmail', e.target.value)}
                    placeholder="Confirm Email"
                    className="w-full px-3 py-2 border border-[#0A5DA6]/30 rounded outline-none text-xs sm:text-sm focus:ring-2 focus:ring-[#0A5DA6]"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <input type="checkbox" id="newsletter" defaultChecked className="rounded border-gray-300" />
                <label htmlFor="newsletter" className="text-xs text-gray-600">
                  Check to receive information, news, and discounts by e-mail.
                </label>
              </div>
            </div>

            {/* Card 3: Emergency Contact */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-10 shadow-sm space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-[#053a68] mb-3">
                Emergency Contact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 max-w-xl">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">First Name*</label>
                  <input
                    type="text"
                    required
                    value={form.emergencyFirstName}
                    onChange={(e) => handleInputChange('emergencyFirstName', e.target.value)}
                    placeholder="First Name"
                    className="w-full px-3 py-2 border border-[#0A5DA6]/30 rounded outline-none text-xs sm:text-sm focus:ring-2 focus:ring-[#0A5DA6]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Last Name*</label>
                  <input
                    type="text"
                    required
                    value={form.emergencyLastName}
                    onChange={(e) => handleInputChange('emergencyLastName', e.target.value)}
                    placeholder="Last Name"
                    className="w-full px-3 py-2 border border-[#0A5DA6]/30 rounded outline-none text-xs sm:text-sm focus:ring-2 focus:ring-[#0A5DA6]"
                  />
                </div>
              </div>
              <div className="max-w-xs">
                <label className="block text-xs font-semibold text-gray-600 mb-1">Emergency Contact&apos;s Phone Number*</label>
                <input
                  type="tel"
                  required
                  value={form.emergencyPhone}
                  onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                  placeholder="Emergency Contact's Phone Number"
                  className="w-full px-3 py-2 border border-[#0A5DA6]/30 rounded outline-none text-xs sm:text-sm focus:ring-2 focus:ring-[#0A5DA6]"
                />
              </div>
            </div>

            {/* Card 4: Electronic Signature Consent */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-10 shadow-sm space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-[#053a68] mb-2">
                Electronic Signature Consent*
              </h3>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="e-consent"
                  required
                  checked={form.eConsent}
                  onChange={(e) => handleInputChange('eConsent', e.target.checked)}
                  className="mt-1 rounded border-gray-300 flex-shrink-0"
                />
                <label htmlFor="e-consent" className="text-xs text-gray-500 leading-relaxed">
                  By checking here, you are consenting to the use of your electronic signature in lieu of an original signature on paper. You have the right to request that you sign a paper copy instead. By checking here, you are waiving that right. After consent, you may, upon written request to us, obtain a paper copy of an electronic record. No fee will be charged for such copy and no special hardware or software is required to view it. Your agreement to use an electronic signature with us for any documents will continue until such time as you notify us in writing that you no longer wish to use an electronic signature. There is no penalty for withdrawing your consent. You should always make sure that we have a current email address in order to contact you regarding any changes, if necessary.
                </label>
              </div>
            </div>

            {/* Submission Status Alert Banner */}
            {submitted && (
              <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold rounded-xl text-center text-sm shadow-sm animate-fade-in">
                ✓ Thank you! Your Waiver &amp; Cancellations Policy Agreement has been successfully submitted and confirmed via email.
              </div>
            )}

            {/* Agree To This Document Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3.5 bg-[#F6C915] hover:bg-[#E0B60F] text-[#053a68] font-extrabold text-sm sm:text-base rounded-xl transition-all border-none cursor-pointer shadow-lg uppercase tracking-wider disabled:opacity-50"
              >
                {loading ? "Sending..." : "Agree To This Document"}
              </button>
            </div>
          </form>
        )}

        {/* IMAGE 1: AGE ALERT MODAL */}
        {showAgeAlert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 max-w-sm w-full overflow-hidden animate-fade-in text-left">
              <div className="bg-[#053a68] px-4 py-2.5 flex justify-between items-center text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F6C915]">Notice</span>
                <button
                  onClick={() => setShowAgeAlert(false)}
                  className="text-white/80 hover:text-white font-bold text-sm border-none bg-transparent cursor-pointer px-1"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-[#053a68] mb-6">
                  Only adults can complete this agreement.
                </p>
                <div className="text-right">
                  <button
                    onClick={() => setShowAgeAlert(false)}
                    className="px-6 py-2 bg-[#F6C915] hover:bg-[#E0B60F] text-[#053a68] font-extrabold rounded-lg text-xs cursor-pointer shadow-md transition-colors border-none"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* IMAGE 2: SIGNATURE MODAL WITH DRAWING CANVAS */}
        {showSignatureModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 max-w-lg w-full overflow-hidden p-6 animate-fade-in text-left">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-4">
                <h3 className="text-base font-bold text-[#053a68]">
                  Participant&apos;s Signature*
                </h3>
                <button
                  onClick={() => setShowSignatureModal(false)}
                  className="text-gray-400 hover:text-gray-600 font-bold text-sm border-none bg-transparent cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="bg-[#EEF5FB] p-3 rounded-lg border border-[#0A5DA6]/20 flex items-center gap-6 text-xs sm:text-sm font-semibold text-[#053a68] mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sigType"
                    value="type"
                    checked={sigType === 'type'}
                    onChange={() => setSigType('type')}
                  />
                  Type Signature
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sigType"
                    value="draw"
                    checked={sigType === 'draw'}
                    onChange={() => setSigType('draw')}
                  />
                  Draw Signature
                </label>
              </div>

              {sigType === 'type' ? (
                <div className="space-y-4">
                  <div className="border-2 border-[#F6C915] p-1 rounded-lg">
                    <input
                      type="text"
                      value={typedName}
                      onChange={(e) => setTypedName(e.target.value)}
                      placeholder="Type your name to sign..."
                      className="w-full p-3 outline-none text-base text-[#053a68] font-sans"
                    />
                  </div>
                  <div className="h-28 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                    {typedName ? (
                      <span className="text-2xl font-serif italic text-[#053a68]">{typedName}</span>
                    ) : (
                      <span className="text-xs text-gray-400 italic">Signature preview will appear here</span>
                    )}
                  </div>
                </div>
              ) : (
                <DrawSignatureCanvas
                  accepted={sigAccepted}
                  onAccept={(dataUrl) => {
                    setDrawnSignatureData(dataUrl);
                    setSigAccepted(true);
                    setSignedName("Drawn Signature");
                  }}
                  onClear={() => {
                    setDrawnSignatureData(null);
                    setSigAccepted(false);
                    if (signedName === "Drawn Signature") setSignedName("");
                  }}
                />
              )}

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    if (sigType === 'type' && typedName) {
                      setSignedName(typedName);
                    }
                    setShowSignatureModal(false);
                  }}
                  className="px-6 py-2.5 bg-[#F6C915] hover:bg-[#E0B60F] text-[#053a68] font-extrabold text-xs sm:text-sm rounded-lg border-none cursor-pointer shadow-md transition-colors"
                >
                  Done &amp; Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
