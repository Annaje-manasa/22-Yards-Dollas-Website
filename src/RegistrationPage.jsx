import React, { useState, useEffect } from "react";
import { Check, Cloud, CheckCircle2, ExternalLink } from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScPhKS-lx35asRIcnE8TSXLftCAkrbWK-n4BwTao9FKsxYNcA/viewform?usp=dialog";

const programOptions = [
  "Harmeet Singh - Meet & Greet, April 10 - Lewisville",
  "Summer Camp - Lewisville",
  "Summer Camp - DSC McKinney",
  "Super Kings Academy - Lewisville",
  "Super Kings Academy - DSC McKinney",
  "High Performance Camp - Lewisville",
  "High Performance Camp - DSC McKinney",
];

// Your Deployed Google Sheet Webhook URL
const GOOGLE_SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycbzSSX6tcHTKHOwUrS6FcyXJKYEa_fVF1wfamtl2RgH87LYc22ifh3o8b5PWEr6ZzrM1/exec";

export default function RegistrationPage() {
  useEffect(() => {
    window.location.href = GOOGLE_FORM_URL;
  }, []);

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [notes, setNotes] = useState("");
  
  const [emailError, setEmailError] = useState("");
  const [programError, setProgramError] = useState("");
  const [nameError, setNameError] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleProgram = (prog) => {
    setSelectedPrograms((prev) =>
      prev.includes(prog) ? prev.filter((p) => p !== prog) : [...prev, prog]
    );
    setProgramError("");
  };

  const handleNext = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!email || !email.includes("@")) {
      setEmailError("This is a required question. Please enter a valid email address.");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (selectedPrograms.length === 0) {
      setProgramError("This is a required question. Please select at least one program.");
      hasError = true;
    } else {
      setProgramError("");
    }

    if (!hasError) {
      setStep(2);
      window.scrollTo({ top: 150, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setNameError("This is a required question. Please enter your full name.");
      return;
    }
    setNameError("");
    setLoading(true);

    const payload = {
      timestamp: new Date().toLocaleString(),
      email,
      fullName,
      phone: phone || "N/A",
      selectedPrograms: selectedPrograms.join(", "),
      age: age || "N/A",
      notes: notes || "None",
    };

    // Send data directly to your Google Sheet
    try {
      fetch(GOOGLE_SHEET_WEBHOOK, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});
    } catch (err) {
      console.error(err);
    }

    // Send email notification via EmailJS
    try {
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_uexjiwj",
          template_id: "template_stanys9",
          user_id: "Y4cfzv51x7E5ofvrs",
          template_params: {
            name: fullName,
            email: email,
            to_email: email,
            reply_to: email,
            phone: phone || "N/A",
            message: `Programs Selected:\n${selectedPrograms.join("\n")}\n\nAge: ${age || "N/A"}\nNotes: ${notes || "None"}`,
            title: `22Yards Dallas/ DSC Registration - ${selectedPrograms[0]}`,
          },
        }),
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClearForm = () => {
    setEmail("");
    setSelectedPrograms([]);
    setFullName("");
    setPhone("");
    setAge("");
    setNotes("");
    setEmailError("");
    setProgramError("");
    setNameError("");
    setStep(1);
    setSubmitted(false);
  };

  return (
    <div className="w-full min-h-screen bg-[#F0EBF8]" style={{ fontFamily: "Roboto, Arial, sans-serif" }}>
      {/* Header */}
      <SiteHeader activePage="REGISTRATION" />

      {/* Main Form Container */}
      <main className="max-w-[770px] mx-auto px-4 py-8">
        {submitted ? (
          /* Confirmation Card */
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="h-2.5 bg-[#673AB7] w-full" />
            <div className="p-8">
              <h1 className="text-3xl font-normal text-gray-900 mb-4">
                22Yards Dallas/ DSC Registration
              </h1>
              <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg mb-6">
                <CheckCircle2 size={24} className="text-emerald-600 flex-shrink-0" />
                <p className="text-sm font-medium">
                  Your response has been recorded. Thank you for registering!
                </p>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Our team at 22Yards Dallas will contact you at <strong>{email}</strong> regarding the next steps for <strong>{selectedPrograms.join(", ")}</strong>.
              </p>

              <button
                onClick={handleClearForm}
                className="text-[#673AB7] hover:underline text-sm font-medium cursor-pointer"
              >
                Submit another response
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={step === 1 ? handleNext : handleSubmit}>
            {/* Header Card */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-4 relative">
              {/* Top Purple Accent Bar */}
              <div className="h-2.5 bg-[#673AB7] w-full" />

              <div className="p-6 md:p-8">
                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-normal text-gray-900 mb-4">
                  22Yards Dallas/ DSC Registration
                </h1>

                {/* Account / Disclaimers */}
                <div className="border-t border-b border-gray-200 py-3 mb-4 text-xs text-gray-600 space-y-1.5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="font-semibold text-gray-800">manasa832826@gmail.com</span>
                    <button type="button" className="text-blue-600 hover:underline cursor-pointer">
                      Switch accounts
                    </button>
                    <Cloud size={16} className="text-gray-400 ml-auto" />
                  </div>
                  <p className="text-gray-500 leading-relaxed">
                    The name, email address and photo associated with your Google Account will be recorded when you upload files and submit this form
                  </p>
                </div>

                {/* Required question note */}
                <div className="text-xs text-red-600 font-medium">
                  * Indicates required question
                </div>
              </div>
            </div>

            {step === 1 && (
              <>
                {/* Card 1: Email */}
                <div className={`bg-white rounded-xl border ${emailError ? 'border-red-500' : 'border-gray-200'} p-6 md:p-8 shadow-sm mb-4 transition-colors`}>
                  <label className="block text-sm font-medium text-gray-900 mb-4">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError("");
                    }}
                    placeholder="Your email address"
                    className="w-full max-w-md py-2 border-b border-gray-300 focus:border-[#673AB7] text-sm outline-none transition-colors placeholder-gray-400 text-gray-800"
                  />
                  {emailError && (
                    <div className="text-xs text-red-600 mt-2 font-medium">
                      {emailError}
                    </div>
                  )}
                </div>

                {/* Card 2: Registering For */}
                <div className={`bg-white rounded-xl border ${programError ? 'border-red-500' : 'border-gray-200'} p-6 md:p-8 shadow-sm mb-6 transition-colors`}>
                  <label className="block text-sm font-medium text-gray-900 mb-4">
                    Registering for <span className="text-red-600">*</span>
                  </label>

                  <div className="space-y-3.5">
                    {programOptions.map((option) => {
                      const isChecked = selectedPrograms.includes(option);
                      return (
                        <label
                          key={option}
                          onClick={() => toggleProgram(option)}
                          className="flex items-start gap-3 cursor-pointer group py-1 text-sm text-gray-800"
                        >
                          <div
                            className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                              isChecked
                                ? "bg-[#673AB7] border-[#673AB7] text-white"
                                : "border-gray-400 group-hover:border-gray-600 bg-white"
                            }`}
                          >
                            {isChecked && <Check size={14} strokeWidth={3} />}
                          </div>
                          <span className="leading-snug text-sm select-none">{option}</span>
                        </label>
                      );
                    })}
                  </div>

                  {programError && (
                    <div className="text-xs text-red-600 mt-3 font-medium">
                      {programError}
                    </div>
                  )}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                {/* Step 2 Details Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm mb-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Full Name of Player / Participant <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (nameError) setNameError("");
                      }}
                      placeholder="Your answer"
                      className="w-full max-w-md py-2 border-b border-gray-300 focus:border-[#673AB7] text-sm outline-none transition-colors placeholder-gray-400 text-gray-800"
                    />
                    {nameError && (
                      <div className="text-xs text-red-600 mt-2 font-medium">
                        {nameError}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Contact Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your answer"
                      className="w-full max-w-md py-2 border-b border-gray-300 focus:border-[#673AB7] text-sm outline-none transition-colors placeholder-gray-400 text-gray-800"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Player Age / Category
                    </label>
                    <input
                      type="text"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="e.g. 12 Years / Youth U-13"
                      className="w-full max-w-md py-2 border-b border-gray-300 focus:border-[#673AB7] text-sm outline-none transition-colors placeholder-gray-400 text-gray-800"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Any Special Notes or Questions?
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Your answer"
                      rows={2}
                      className="w-full py-2 border-b border-gray-300 focus:border-[#673AB7] text-sm outline-none transition-colors placeholder-gray-400 text-gray-800"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Action Bar */}
            <div className="flex items-center justify-between px-1 py-2">
              <div className="flex items-center gap-3">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium text-sm px-5 py-2 rounded-md transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#673AB7] hover:bg-[#5E35B1] text-white font-medium text-sm px-6 py-2.5 rounded-md shadow-sm transition-colors cursor-pointer"
                >
                  {loading ? "Submitting..." : step === 1 ? "Next" : "Submit"}
                </button>
              </div>

              <button
                type="button"
                onClick={handleClearForm}
                className="text-[#673AB7] hover:text-[#5E35B1] font-medium text-sm transition-colors cursor-pointer"
              >
                Clear form
              </button>
            </div>
          </form>
        )}
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
