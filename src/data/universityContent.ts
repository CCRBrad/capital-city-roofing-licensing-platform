export interface ModuleData {
    title: string;
    subtitle: string;
    type: 'video' | 'document' | 'interactive';
    contactHours: number;
    slos: string[];
    sections: { heading: string; body: string }[];
    acknowledgement: string;
    gateUnlock?: string;
    isFinalExam?: boolean;
    isEthicsGate?: boolean;
}

export const DAY_ORDER = [
    'day-1','day-2','day-3','day-4','day-5','day-6','day-7',
    'day-8','day-9','day-10','day-11','day-12','day-13','day-14'
];

export const universityModules: Record<string, ModuleData> = {
    "day-1": {
        title: "Welcome & The Capital City Standard",
        subtitle: "Mission, Core Values, \"Price of Admission\" Policy",
        type: "video",
        contactHours: 1.5,
        slos: [
            "Articulate Capital City Roofing's mission statement with 100% accuracy.",
            "Identify and explain all five core values: Integrity, Innovation, Excellence, Transparency, and Reliability.",
            "Explain the \"Price of Admission\" certification policy and why it is a non-negotiable condition of employment.",
            "Describe the roles of Visionary and Integrator within the EOS framework."
        ],
        sections: [
            { heading: "The Capital City Mission", body: "Capital City Roofing is positioned as a trusted, professional, and established roofing contractor serving the Greater Atlanta area and expanding nationally. Our tagline is **\"Excellence in Roofing, Powered by Innovation & Integrity.\"**\n\nThis isn't just a slogan — it is a promise. Every interaction you have with a homeowner, every inspection you perform, and every system you touch must reflect this standard." },
            { heading: "Core Values", body: "Our five core values are non-negotiable:\n\n**1. Integrity Over Everything** — We do the right thing, even when no one is watching. Zero tolerance for fraud, deception, or shortcuts.\n\n**2. Innovation** — We leverage cutting-edge technology (BuilderLync, AI assistants, digital workflows) to outperform every competitor.\n\n**3. Excellence** — We don't do \"good enough.\" Every roof, every proposal, every customer interaction reflects the highest standard.\n\n**4. Transparency** — No hidden fees, no bait-and-switch. Customers get honest assessments and clear pricing.\n\n**5. Reliability** — We show up on time, follow through on promises, and execute with precision." },
            { heading: "The Price of Admission", body: "Completing Capital City University certification is a **non-negotiable condition of employment** at Capital City Roofing. This is known internally as **\"The Price of Admission.\"**\n\nYou must pass every daily assessment with a minimum score of 80%, complete all video training, and pass the Final Certification Exam on Day 14 with a 90% or higher to earn your **CCU – Sales Certified** badge and unlock live pipeline access.\n\nThere are no exceptions. This standard exists to protect our brand, our customers, and your earning potential." },
            { heading: "Operating System (EOS)", body: "Capital City Roofing runs on the **Entrepreneurial Operating System (EOS)** as defined in the book *Traction* by Gino Wickman.\n\n**Visionary** — The strategic thinker and founder who sets the long-term vision.\n**Integrator** — The leader of the leadership team who executes the plan, manages the day-to-day, and keeps the company running on the rails.\n\nAs an employee or licensee, your accountability chart, KPIs, and weekly meetings all flow from this system." }
        ],
        acknowledgement: "I understand and accept the Capital City Roofing mission, core values, and the \"Price of Admission\" certification policy. I commit to upholding the Capital City standard in every customer interaction."
    },
    "day-2": {
        title: "Roofing Fundamentals",
        subtitle: "GAF & CertainTeed Systems, Shingle Types, Underlayment, Ventilation",
        type: "video",
        contactHours: 2.0,
        slos: [
            "Identify the difference between 3-Tab and Architectural shingles.",
            "Explain the components of a complete roofing system (underlayment, ventilation, flashing).",
            "Describe the CertainTeed Integrity Roof System and its SureStart PLUS warranty benefits.",
            "Identify GAF vs. CertainTeed product lines and proper applications."
        ],
        sections: [
            { heading: "Shingle Types", body: "**3-Tab Shingles** — The most basic option. Flat appearance, single-layer construction, typically 20-25 year rated. We rarely recommend these because they offer inferior wind and impact resistance.\n\n**Architectural Shingles** — Multi-layered, dimensional appearance, 30-50 year rated. This is the standard we present to homeowners. The CertainTeed Landmark Pro series is our primary recommendation." },
            { heading: "The Complete Roofing System", body: "A roof is NOT just shingles. It is a **system** of interdependent components:\n\n**1. Decking** — The plywood or OSB base.\n**2. Ice & Water Shield** — Applied to vulnerable areas (valleys, eaves, penetrations).\n**3. Synthetic Underlayment** — A moisture barrier across the entire roof deck.\n**4. Starter Strip** — Seals the first row of shingles against wind uplift.\n**5. Shingles** — The visible layer.\n**6. Hip & Ridge Caps** — Protect the highest stress points.\n**7. Ventilation** — Ridge vents and intake vents for proper airflow.\n**8. Flashing** — Metal protection at penetrations and transitions.\n\nWhen you present to a homeowner, you present the **system**, not just the shingle." },
            { heading: "CertainTeed Integrity Roof System", body: "This is our primary product offering. The CertainTeed Integrity Roof System includes:\n\n• **Grace Ice & Water Shield** — Waterproofing underlayment\n• **Roof Runner** — Premium synthetic underlayment\n• **CertainTeed Landmark Pro Shingles** — High-performance architectural shingles\n\nThis system qualifies for **SureStart PLUS extended warranty protection**, which covers not just the materials but also the labor — a major selling point." },
            { heading: "Ventilation", body: "Proper ventilation is critical. An improperly ventilated attic can:\n• Void manufacturer warranties\n• Cause premature shingle deterioration\n• Lead to ice dams and moisture damage\n• Increase energy costs\n\nWe always inspect attic ventilation during our 27-Point Inspection and include it in the full system presentation." }
        ],
        acknowledgement: "I understand the difference between shingle types, the components of a complete roofing system, and our primary product offering (CertainTeed Integrity Roof System)."
    },
    "day-3": {
        title: "The Sales Process Overview",
        subtitle: "Retail vs. Insurance Decision Tree, Never Quote Before Inspection",
        type: "document",
        contactHours: 2.5,
        slos: [
            "Execute the 8-Part Presentation in the correct sequential order.",
            "Explain the Retail vs. Insurance decision tree and when each path applies.",
            "Articulate why you must NEVER quote a price before completing the inspection.",
            "Recite the CARPARK formula and explain the purpose of each step."
        ],
        sections: [
            { heading: "The 8-Part Presentation", body: "Every sales interaction follows our 8-Part Presentation in **exact order** for both storm and retail paths:\n\n1. **Greeting & Warm-Up** — Build rapport.\n2. **Agenda** — Set expectations for the meeting.\n3. **27-Point Inspection** — Complete, thorough, documented.\n4. **Company Story** — Who we are and why we're different.\n5. **The Capital City Way** — Our installation process and material standards.\n6. **Products & Warranties** — System presentation, not shingle presentation.\n7. **Pre-Close** — Clear objections BEFORE attempting to close.\n8. **The 10-Step Close Sequence** — Execute the close." },
            { heading: "The CARPARK Formula", body: "**C**onnect, **A**ssess, **R**eport, **P**resent, **A**sk, **R**eferrals, **K**ickstart.\n\nThis is the overarching framework that guides every customer interaction from first contact to post-sale referral request." },
            { heading: "Retail vs. Insurance Decision Tree", body: "After completing the inspection, you must determine the correct path:\n\n**Retail Path** — No storm damage present. The roof needs replacement due to age, wear, or other non-weather factors. This is a **one-call close** mentality.\n\n**Insurance Path** — Storm damage (hail, wind, fallen debris) is identified. The homeowner should be advised to file a claim. This path involves Precision Public Adjusting (PPA) and requires patience through the claim process.\n\n**CRITICAL RULE:** You must NEVER promise insurance approval. That is up to the adjuster." },
            { heading: "Never Quote Before Inspection", body: "Under no circumstances are you to provide a price, estimate, or even a ballpark number before completing the full 27-Point Inspection.\n\n**Why?** Because:\n• You don't know the full scope of work\n• You lose all negotiating leverage\n• You train the homeowner to shop on price instead of value\n• It violates Capital City Roofing SOP\n\nIf a homeowner asks for a price over the phone: **\"I appreciate you asking, and I want to give you an accurate number. The best way I can do that is with a free inspection. Can I come out Tuesday at 2?\"**" }
        ],
        acknowledgement: "I understand the 8-Part Presentation sequence, the Retail vs. Insurance decision tree, and the rule that I must never quote a price before completing the 27-Point Inspection."
    },
    "day-4": {
        title: "In-Home Inspection Mastery",
        subtitle: "The 27-Point Inspection SOP, Photo Documentation Requirements",
        type: "interactive",
        contactHours: 2.0,
        slos: [
            "Execute the complete 27-Point Inspection from start to finish.",
            "Identify the mandatory photo documentation requirements (4 elevations, attic, defects).",
            "Properly rate each inspection item: Good, Monitor, Repair, or Replace.",
            "Document all findings with correct photo naming conventions."
        ],
        sections: [
            { heading: "The 27-Point Inspection", body: "The 27-Point Inspection is the most critical field skill you will learn. It covers:\n\n**Exterior Assessment** — All four elevations (North, South, East, West) from both roof level and ground level.\n\n**Component Check** — Shingles, flashing, drip edge, gutters, downspouts, fascia, soffit, chimney, skylights, pipe boots, ridge caps, starter strips, ice & water shield, and underlayment.\n\n**Attic Inspection** — Ventilation, insulation condition, moisture/staining, structural integrity.\n\n**Each item receives one of four ratings:**\n• **Good** — No action required\n• **Monitor** — Minor wear, watch over time\n• **Repair** — Localized fix needed\n• **Replace** — Full replacement required" },
            { heading: "Photo Documentation Standards", body: "**Mandatory Photos:**\n• Front elevation\n• Back elevation\n• Left elevation\n• Right elevation\n• Attic (ventilation and condition)\n• Close-ups of ALL identified damage with chalk markings\n• Detached structures (shed, garage, gazebo)\n• Roof overview\n• Test squares (for hail damage count)\n\n**File Naming:** Each photo must reference the checklist item number (e.g., \"Point12_NorthElevation_HailDamage.jpg\").\n\n**Upload Rule:** Photos must be uploaded to the CRM **BEFORE leaving the job site.** No exceptions." },
            { heading: "Damage Documentation", body: "When documenting damage:\n\n• Take CLOSE-UP photos with chalk circles around damage points\n• Document the damage count (e.g., \"12 hits per test square\")\n• ALWAYS document damage BEFORE tarp installation. Tarping first destroys the evidence trail.\n• If placing nail-through tarp, you MUST get property owner authorization first.\n\nThis documentation is critical for insurance claims and for Precision Public Adjusting (PPA) to build the case." }
        ],
        acknowledgement: "I understand and commit to executing the full 27-Point Inspection SOP, including mandatory photo documentation, on every job. I will never leave a job site without uploading photos to the CRM."
    },
    "day-5": {
        title: "Presenting Value (Not Price)",
        subtitle: "System vs. Shingle, Warranties, Introducing Financing Early",
        type: "video",
        contactHours: 1.5,
        slos: [
            "Present the roofing system as a complete solution, not just a shingle.",
            "Articulate warranty differences and why they matter to the homeowner.",
            "Introduce financing options early in the conversation to expand the buyer pool.",
            "Demonstrate the 'Cost vs. Value' framing technique."
        ],
        sections: [
            { heading: "System vs. Shingle", body: "The most common mistake reps make is presenting a shingle. We don't sell shingles — **we sell a roofing system.**\n\nWhen you present the CertainTeed Integrity Roof System, you're showing the homeowner that they're getting a complete, engineered solution:\n\n• Waterproofing underlayment\n• Synthetic underlayment\n• Architectural shingles\n• Proper ventilation\n• Quality flashing and hardware\n\nThis differentiates you from every \"shingle salesperson\" who walks through the door." },
            { heading: "Warranty Power", body: "Warranties are a massive competitive advantage. When you present the SureStart PLUS extended warranty, emphasize:\n\n• **Materials AND labor covered** — Most competitors only cover materials\n• **Manufacturer-backed** — Not just a contractor promise\n• **Transferable** — Adds value to the home if they sell\n\nScript: **\"Mr./Mrs. Jones, the reason we install the full CertainTeed system is because it qualifies you for their SureStart PLUS warranty, which covers not just the shingles, but the entire system and the labor. Most companies can't offer that because they don't install the full system.\"**" },
            { heading: "Introducing Financing Early", body: "Do NOT wait until the close to mention financing. Introduce it during the **Products & Warranties** section.\n\nScript: **\"Before I go any further, I want you to know that we offer several financing options. That way, as I walk you through the numbers, you can think about which option works best for your budget — whether that's paying in full or spreading it out over time with no money down.\"**\n\nThis does two things:\n1. Removes the \"I can't afford it\" objection before it happens\n2. Expands the buyer pool — monthly payments feel more manageable than a lump sum" }
        ],
        acknowledgement: "I understand the difference between selling a shingle and selling a system. I commit to presenting the full CertainTeed Integrity Roof System, emphasizing warranty benefits, and introducing financing early in every presentation."
    },
    "day-6": {
        title: "Retail Closing Framework",
        subtitle: "The 8-Step Selling System and the \"One Call Close\"",
        type: "document",
        contactHours: 2.0,
        slos: [
            "Execute the 10-Step Close Sequence in the correct order.",
            "Demonstrate the Comfort Close and Next Step Close techniques.",
            "Explain why objections must be cleared during the Pre-Close.",
            "Articulate the \"one-call close\" mentality and its importance."
        ],
        sections: [
            { heading: "The One-Call Close Mentality", body: "For retail sales, the goal is to leave with a signed agreement on the **first visit.** This is the \"one-call close\" mentality.\n\nThis does NOT mean being pushy. It means being **so prepared, so thorough, and so professional** in your inspection and presentation that the homeowner has zero reason to wait.\n\nEvery objection should be anticipated and addressed BEFORE the close attempt." },
            { heading: "The 10-Step Close Sequence", body: "Executed in order after the Pre-Close has cleared all objections:\n\n1. Recap the inspection findings\n2. Restate the system recommendation\n3. Present the price with context (\"Here's what the investment looks like\")\n4. Present financing options\n5. Use the Comfort Close (\"Are you comfortable with...?\")\n6. Handle any final micro-objections\n7. Present the agreement\n8. Walk through key terms\n9. Collect the electronic signature\n10. Set production expectations and ask for referrals" },
            { heading: "The Pre-Close", body: "This is the most critical step. BEFORE you attempt to close, you must:\n\n1. **Isolate all decision-makers** — \"Is there anyone else who should be part of this decision?\"\n2. **Confirm the problem** — \"Based on what we found, would you agree your roof needs attention?\"\n3. **Isolate to price or payment** — **\"Mr./Mrs. Jones, can we agree this is a project you're going to get done — if not now, sometime in the near future?\"**\n\nThis question is CRITICAL. It isolates the decision to **when** and **how**, not **whether.**" }
        ],
        acknowledgement: "I understand the retail closing framework, the 10-Step Close Sequence, and the critical importance of clearing objections during the Pre-Close before attempting to close."
    },
    "day-7": {
        title: "Objection Handling",
        subtitle: "A.C.C.S.C. Framework, Handling \"Price\", \"Spouse\", and \"More Quotes\"",
        type: "interactive",
        contactHours: 2.0,
        gateUnlock: "Passing Day 7 unlocks limited lead shadowing access.",
        slos: [
            "Execute the A.C.C.S.C. objection handling framework.",
            "Apply the Rule of Triple Elimination to isolate the true objection.",
            "Handle the three most common objections: Price, Spouse, and More Quotes.",
            "Demonstrate the P.E.R.I.L. framework for price-specific objections."
        ],
        sections: [
            { heading: "The A.C.C.S.C. Framework", body: "**A** — Acknowledge: Make them feel understood. Use empathy.\n**C** — Clarify: Ask permission to ask a question (\"Can I ask you a question?\")\n**C** — Confirm: Repeat back their concern to show you listened.\n**S** — Solve: Provide the solution by pivoting to value (products, backlog, skilled labor, warranties, reviews).\n**C** — Close: Re-attempt the close.\n\nThis framework works for EVERY objection. The key is to NEVER argue, and to always lead with empathy." },
            { heading: "Rule of Triple Elimination", body: "When a homeowner objects, the true concern falls into one of three categories:\n\n1. **Person** — Trust in YOU (the rep)\n2. **Product** — Trust in the SOLUTION\n3. **Price** — Trust in the VALUE\n\nYou must systematically eliminate each one:\n\n\"Is it something about me or the company that concerns you?\" (Eliminates Person)\n\"Do you feel the system I've recommended is the right solution for your home?\" (Eliminates Product)\n\"So it really comes down to the investment — is that fair?\" (Isolates to Price)\n\nOnce isolated, use the A.C.C.S.C. framework to solve." },
            { heading: "The P.E.R.I.L. Framework (Price Objections)", body: "**P** — Pause: Do NOT react immediately. Silence signals confidence.\n**E** — Emphasize: Emphasize what they'll lose if they go cheap.\n**R** — Re-State: Re-state the value of the system.\n**I** — Isolate: \"If the price were right, would you move forward today?\"\n**L** — Loop back to price: Present payment options or contextual pricing (daily/monthly cost)." },
            { heading: "Common Objections", body: "**\"I need to think about it\"** — Use Triple Elimination. This is almost never about \"thinking\" — it's about Person, Product, or Price.\n\n**\"I need to talk to my spouse\"** — \"I completely understand. Is your spouse generally supportive of protecting the home? Would they want to be on a quick call so we can all be on the same page?\"\n\n**\"I want more quotes\"** — \"That's smart — you should do your due diligence. Can I ask what specifically you'd be comparing? Because if it's price, quality, or warranty coverage, I'd love to show you how we stack up right now.\"" }
        ],
        acknowledgement: "I understand and commit to using the A.C.C.S.C. and P.E.R.I.L. frameworks for objection handling. I will never argue with a homeowner or pressure them. I will handle objections with empathy and professionalism."
    },
    "day-8": {
        title: "Insurance Claims & Ethics",
        subtitle: "UPPA Compliance, Zero Tolerance for Fraud or Promising Coverage",
        type: "video",
        contactHours: 2.0,
        isEthicsGate: true,
        slos: [
            "Explain UPPA compliance requirements and the legal boundaries of insurance sales.",
            "Identify the Zero Tolerance violations that result in immediate termination.",
            "Correctly respond when a homeowner asks if insurance will cover their roof.",
            "Articulate the proper PPA handoff process without promising claim approval."
        ],
        sections: [
            { heading: "Ethics First", body: "Day 8 is the most important day of your training. The insurance side of roofing is where careers are built — and destroyed.\n\n**Capital City Roofing operates with absolute integrity.** The following actions are **Zero Tolerance** violations resulting in **immediate termination:**\n\n• Waiving or offering to pay a homeowner's insurance deductible\n• Coaching a homeowner on how to create or exaggerate damage\n• Promising insurance approval or specific payout amounts\n• Negotiating directly with insurance carriers (this is PPA's role)\n• Falsifying damage reports or inflating damage counts\n• Signing paperwork on behalf of the homeowner without authorization\n\n**There are no warnings. There are no second chances.** One ethics violation and you are done." },
            { heading: "UPPA Compliance", body: "The Unfair Claims Settlement Practices Act (UPPA) governs how insurance claims must be handled. As a roofing contractor and sales representative:\n\n• You may NOT act as a Public Adjuster unless you are licensed as one\n• You may NOT negotiate claim amounts with the insurance carrier\n• You may NOT promise any level of coverage or reimbursement\n• You MUST disclose your role as a contractor, not an insurance advocate\n\nAll claim negotiations are handled exclusively by **Precision Public Adjusting (PPA).** This is not optional." },
            { heading: "The Correct Response", body: "When a homeowner asks: **\"Can you guarantee my insurance will pay for this?\"**\n\nYour REQUIRED response:\n**\"We never promise insurance approval. That is up to the adjuster. But we partner with Precision Public Adjusting (PPA) to handle the entire claims process. They are experts at documenting and presenting the evidence, and they will fight for the best possible outcome on your behalf.\"**\n\nAnything beyond this statement puts you, the homeowner, and Capital City Roofing at legal risk." },
            { heading: "Carrier Contact Protocol", body: "If the homeowner's insurance carrier calls YOUR cell phone to discuss coverage determinations and pricing:\n\n1. **DO NOT discuss scope, pricing, or coverage**\n2. **Immediately direct them to Precision Public Adjusting (PPA)**\n3. **Notify PPA of the call immediately**\n\nYou are a roofer, not a Public Adjuster. Stay in your lane." }
        ],
        acknowledgement: "I understand the Zero Tolerance ethics policy. I will NEVER waive a deductible, promise insurance coverage, negotiate with carriers, or falsify documentation. I understand that a single ethics violation results in immediate termination. I accept these expectations as a condition of representing Capital City Roofing."
    },
    "day-9": {
        title: "The Insurance Sales Process",
        subtitle: "PPA Handoff, LOR & Direction to Pay Forms",
        type: "document",
        contactHours: 2.0,
        slos: [
            "Execute the complete PPA handoff process.",
            "Identify the two mandatory documents required before PPA submission.",
            "Explain the Insurance Pipeline flow from inspection to payment.",
            "Demonstrate proper documentation for insurance claim submission."
        ],
        sections: [
            { heading: "The Insurance Pipeline Flow", body: "The Insurance sales cycle is longer than retail and follows a specific pipeline:\n\n**Inspection → Claim Filed → Adjuster Meeting → Approval → Build → Payment → Review Request**\n\nUnlike retail, you cannot one-call-close an insurance job. The process requires patience and precise documentation." },
            { heading: "Mandatory PPA Documents", body: "Before ANY claim can be submitted to Precision Public Adjusting, TWO documents must be signed by the homeowner:\n\n1. **PPA Authorization Form (Letter of Representation / LOR)** — Authorizes PPA to represent the homeowner's interests in the claims process.\n2. **Capital City Roofing Authorization / Direction to Proceed Form** — Authorizes CCR to perform the work once the claim is approved.\n\n**Both documents are MANDATORY.** Do not submit to PPA without both signed documents." },
            { heading: "PPA Submission Package", body: "When uploading to Precision's portal, you must include:\n\n• Complete 27-Point Inspection report\n• Damage counts (hits per test square)\n• Full PDF of all photo documentation\n• Both signed authorization forms\n\nA complete, professional submission increases the chances of a smooth approval process." },
            { heading: "During the Claim Process", body: "After submission, your role is to:\n\n• Keep the homeowner informed of timeline expectations\n• Coordinate the adjuster meeting (schedule, be present)\n• Let PPA handle ALL negotiations\n• Document everything in the CRM\n\n**NEVER** contact the insurance carrier directly about coverage, scope, or pricing." }
        ],
        acknowledgement: "I understand the insurance sales pipeline, the two mandatory PPA documents, and my role during the claims process. I will never negotiate with insurance carriers directly."
    },
    "day-10": {
        title: "Adjuster Meetings",
        subtitle: "Pre-Meeting Preparation, Evidence Presentation, Professional Conduct",
        type: "interactive",
        contactHours: 1.5,
        slos: [
            "Prepare for an adjuster meeting with complete documentation and evidence.",
            "Present damage evidence professionally and objectively.",
            "Maintain proper professional conduct during the adjuster meeting.",
            "Handle disagreements with the adjuster professionally and through proper channels."
        ],
        sections: [
            { heading: "Pre-Meeting Preparation", body: "The adjuster meeting is your chance to present the evidence. Preparation is everything:\n\n**1. Review Your Documentation** — Go through every photo, every damage count, every inspection point.\n**2. Prepare Your Test Squares** — Have clear photos with chalk-marked damage ready.\n**3. Know Your Numbers** — Damage count per square, affected areas, total scope.\n**4. Be On Time** — Arrive 15 minutes early. Set up your documentation before the adjuster arrives.\n**5. Professional Appearance** — CCR branded shirt, clean vehicle, organized materials." },
            { heading: "Evidence Presentation", body: "During the meeting:\n\n• Walk the roof with the adjuster\n• Point out each area of damage you documented\n• Show your test square results\n• Allow the adjuster to conduct their own assessment\n• **Be factual, not emotional.** Present evidence, not arguments.\n• Take notes on the adjuster's findings" },
            { heading: "Professional Conduct", body: "**DO:**\n• Be courteous and professional\n• Present facts and let the evidence speak\n• Ask questions respectfully\n• Document the adjuster's findings\n• Thank them for their time\n\n**DO NOT:**\n• Argue with the adjuster\n• Make threats or ultimatums\n• Promise the homeowner a specific outcome during the meeting\n• Negotiate pricing (that's PPA's job)\n• Become adversarial or confrontational\n\nIf you disagree with the adjuster's initial assessment, document it and let PPA handle the dispute through proper channels." }
        ],
        acknowledgement: "I understand the adjuster meeting process and commit to professional, evidence-based conduct. I will not argue with adjusters or negotiate pricing — I will let PPA handle disputes through proper channels."
    },
    "day-11": {
        title: "BuilderLync CRM Mastery",
        subtitle: "Logging 100% of Leads, Same-Day Photo Uploads, Pipeline Stages",
        type: "interactive",
        contactHours: 2.0,
        slos: [
            "Navigate all core features of the BuilderLync CRM.",
            "Log 100% of leads with complete contact information and notes.",
            "Execute same-day photo uploads for every inspection.",
            "Move leads through the correct pipeline stages with proper tagging."
        ],
        sections: [
            { heading: "The Fundamental Rule", body: "**\"If it isn't documented, it didn't happen.\"**\n\nThis is the single most important CRM rule at Capital City Roofing. 100% of leads and 100% of communication must be logged in BuilderLync. No exceptions.\n\n• Every phone call → logged\n• Every text message → logged\n• Every email → logged\n• Every inspection → logged with photos\n• Every proposal → attached to the contact record\n\nUsing personal phones, personal email, or offline notes is a compliance violation." },
            { heading: "Pipeline Stages", body: "Every lead moves through defined pipeline stages:\n\n**Retail Pipeline:**\nNew Lead → Appointment Scheduled → Inspection Completed → Proposal Sent → Follow-Up → Closed Won / Closed Lost → Review Request\n\n**Insurance Pipeline:**\nNew Lead → Inspection Completed → Claim Filed → Adjuster Meeting Scheduled → Approval → Build Scheduled → Payment → Review Request\n\nYou are responsible for moving YOUR leads through the correct stage at every step." },
            { heading: "Photo Upload SOP", body: "Photos from every inspection must be uploaded to BuilderLync **the same day** — ideally before you leave the job site.\n\n• Photos must be attached directly to the contact/job record\n• File names must reference the inspection checklist item\n• Both the 27-Point Inspection and all damage documentation must be included\n\n**Field rule:** Do not leave the job site until photos are uploaded." }
        ],
        acknowledgement: "I understand that 100% of leads and communication must be logged in BuilderLync. I commit to same-day photo uploads and proper pipeline management for every lead I touch."
    },
    "day-12": {
        title: "AI & Automation",
        subtitle: "Working with Sierra and Meaghan, Text/Email Follow-Up Rules",
        type: "video",
        contactHours: 1.5,
        slos: [
            "Explain the roles of Sierra (BuilderLync AI) and Meaghan (Lead Intake/Voice AI).",
            "Describe how the AI assistants work in tandem for lead management.",
            "Follow the automated text/email follow-up rules without interference.",
            "Know when to intervene in automation vs. when to let the system work."
        ],
        sections: [
            { heading: "Meet the AI Team", body: "Capital City Roofing operates with two AI assistants that work in tandem:\n\n**Meaghan** — The AI Voice Agent\n• Handles outbound calling for missed leads\n• Makes appointment reminders\n• Follows up on review requests\n• If no text reply within 2 minutes, Meaghan calls automatically\n\n**Sierra** — BuilderLync's AI Assistant\n• Manages lead intake and qualification\n• Automated text/email sequences\n• Pipeline automation\n• Reporting and analytics" },
            { heading: "The Automation Rules", body: "The system is designed to operate without manual intervention for many touchpoints. Your job is to:\n\n**LET THE AUTOMATIONS RUN.** Do not send manual texts or emails that duplicate what the system is already sending.\n\n**Know the sequences:**\n• New lead → Immediate text + 2-minute call (Meaghan)\n• No-show → Automated re-engagement sequence\n• Post-inspection → Follow-up sequence\n• Post-close → Review request (48-hour automation, then Meaghan call)\n\nYour manual touch should complement, not conflict with, the automation." },
            { heading: "Speed to Lead", body: "Capital City Roofing's internal SLA for responding to a brand new inbound lead is:\n\n**Within 30 seconds to 5 minutes maximum.**\n\nThe combination of Meaghan's instant outreach and your personal follow-up creates an unbeatable speed-to-lead response time. Studies show that leads contacted within 5 minutes are **21x more likely** to convert." }
        ],
        acknowledgement: "I understand the roles of Sierra and Meaghan and how they work in tandem. I will not interfere with automations and will maintain the speed-to-lead SLA of 30 seconds to 5 minutes."
    },
    "day-13": {
        title: "Production Handoff",
        subtitle: "Clean Transitions, Setting Homeowner Expectations",
        type: "document",
        contactHours: 1.5,
        slos: [
            "Execute a complete Production Handoff with all required documentation.",
            "Set proper homeowner expectations for the build timeline.",
            "Ensure a clean transition from sales to production.",
            "Trigger the appropriate post-sale automations."
        ],
        sections: [
            { heading: "What Constitutes a Complete Handoff", body: "For a retail sale, a complete Production Handoff requires:\n\n1. **Signed Agreement** — Electronic signature collected\n2. **Collected Deposit** — Payment secured\n3. **Material Color Selection** — Confirmed with the homeowner\n4. **All Photos Uploaded** — Inspection and damage documentation in the CRM\n5. **Work Scope Documented** — Payment notes and full Work Scope by Trade (colors, materials) in the Details section\n\nWithout ALL of these items, the job CANNOT be scheduled. Incomplete handoffs delay production and create customer experience issues." },
            { heading: "Setting Homeowner Expectations", body: "Before you leave the signing appointment:\n\n• Provide a timeline estimate for material delivery and start date\n• Explain the build process (crew arrival, daily hours, cleanup each day)\n• Set expectations for noise and disruption\n• Provide the production team's contact information\n• Explain the Certificate of Completion (COC) process\n• Confirm their preferred communication method" },
            { heading: "Post-Sale Automations", body: "Once the contract is signed and tagged properly in BuilderLync:\n\n• **Calendar events** are automatically sent to: Crew Contact, Sales Rep, Project Manager, Production Manager, and the Customer\n• **Welcome package** email is triggered\n• **Pre-build communication** sequence begins\n\nMake sure the contact record is properly tagged so automations fire correctly." },
            { heading: "Certificate of Completion (COC)", body: "At the completion of every job, a **Certificate of Completion (COC)** must be signed by:\n\n1. The homeowner\n2. The CCR representative\n\nThis document confirms the work has been completed to the homeowner's satisfaction and triggers the review request automation.\n\nTagging a customer as **\"Job Completed\"** in BuilderLync triggers the automated 5-star review request sequence. If no review is received within 48 hours, Meaghan makes a friendly follow-up call." }
        ],
        acknowledgement: "I understand the requirements for a complete Production Handoff and commit to ensuring clean transitions from sales to production, including all required documentation and proper homeowner expectation-setting."
    },
    "day-14": {
        title: "Final Certification Exam",
        subtitle: "20-Question Comprehensive Exam — 90% Required to Pass",
        type: "document",
        contactHours: 1.0,
        isFinalExam: true,
        slos: [
            "Demonstrate comprehensive knowledge across all 13 days of training.",
            "Score 90% (18/20) or higher to earn CCU – Sales Certified badge.",
            "Commit to the Capital City Standard through the final Certification Statement."
        ],
        sections: [
            { heading: "Exam Overview", body: "This is your Final Certification Exam. It covers material from all 13 days of training:\n\n• **Format:** 20 questions (multiple choice and scenario-based)\n• **Passing Score:** 90% (18/20 correct)\n• **Time:** Untimed, but complete in one sitting\n\nThis exam is the final step in earning your **CCU – Sales Certified** badge and unlocking your live pipeline access in BuilderLync." },
            { heading: "Exam Rules", body: "**First Failure:** Your exam locks for 24 hours. Use that time to review the training material.\n\n**Second Failure:** Your exam locks entirely. A Manager must log a 1:1 coaching session and manually trigger an admin override to allow your third attempt. Your account receives the **CCU – At Risk** tag.\n\n**Third Failure:** Your account receives the **CCU – Non-Compliant** tag, immediately revoking all CRM and portal access. This triggers a termination review." },
            { heading: "Certification Statement", body: "By checking the final box on this exam, you sign the Certification Statement:\n\n**\"I am certified to represent Capital City Roofing and commit to operating at the Capital City standard.\"**\n\nThis is your commitment to excellence, integrity, and the standards that define our company." }
        ],
        acknowledgement: "I am certified to represent Capital City Roofing and commit to operating at the Capital City standard."
    }
};
