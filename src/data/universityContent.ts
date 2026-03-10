export interface ModuleData {
    title: string;
    type: string;
    contactHours: number;
    slos: string[];
    sections: { heading: string; body: string }[];
}

export const universityModules: Record<string, ModuleData> = {
    "1.1": {
        title: "The Capital City Way",
        type: "video",
        contactHours: 1.5,
        slos: [
            "Articulate Capital City Roofing's mission statement and tagline with 100% accuracy.",
            "Identify and explain all five core values: Integrity, Innovation, Excellence, Transparency, and Reliability.",
            "Describe the roles of Visionary and Integrator within the EOS framework.",
            "Apply brand standards (colors, typography) in customer-facing materials."
        ],
        sections: [
            { heading: "Mission & Brand", body: "Capital City Roofing is positioned as a trusted, professional, and established roofing contractor serving the Greater Atlanta area and expanding nationally. The tagline is **\"Excellence in Roofing, Powered by Innovation & Integrity.\"**" },
            { heading: "Operating System", body: "The company runs on the Entrepreneurial Operating System (EOS) as outlined in the book Traction. Key concepts include the Visionary (strategic thinker/founder) and the Integrator (leader of the leadership team who executes the plan)." },
            { heading: "Brand Standards", body: "The primary colors are Navy Blue (Trust, reliability), Red (Energy, boldness), White (Clarity), and Black (Text). The typography uses the Oswald & Urbanist font family." }
        ]
    },
    "1.2": {
        title: "The 8-Step Selling System",
        type: "document",
        contactHours: 2.5,
        slos: [
            "Recite the CARPARK formula and explain the purpose of each step.",
            "Execute the 8-Part Presentation in the correct sequential order.",
            "Demonstrate the Comfort Close and Next Step Close techniques in a role-play scenario.",
            "Explain why objections must be cleared before attempting to close."
        ],
        sections: [
            { heading: "The CARPARK Formula", body: "**C**onnect, **A**ssess, **R**eport, **P**resent, **A**sk, **R**eferrals, **K**ickstart." },
            { heading: "The 8-Part Presentation", body: "Must be followed in exact order for both storm and retail paths:\n1. Greeting & Warm-Up\n2. Agenda\n3. 27-Point Inspection\n4. Company Story\n5. The Capital City Way\n6. Products & Warranties\n7. Pre-Close\n8. The 10-Step Close Sequence" },
            { heading: "Closing Techniques", body: "Always clear objections first. Use the **Comfort Close** (\"Are you comfortable with...?\") and the **Next Step Close** (\"The next step is...\")." }
        ]
    },
    "1.3": {
        title: "Product Power-Ups",
        type: "interactive",
        contactHours: 2.0,
        slos: [
            "Describe all components of the CertainTeed Integrity Roof System to a homeowner.",
            "Explain the capacity and installation advantages of 6-inch seamless gutters vs. standard 5-inch.",
            "Outline the process for installing commercial TPO and EPDM systems.",
            "Position each product as a solution to a specific homeowner problem."
        ],
        sections: [
            { heading: "CertainTeed Integrity Roof System", body: "Comprises Waterproofing Underlayment (Grace Ice & Water Shield), Roof Runner, and CertainTeed Shingles (like Landmark PRO or Belmont)." },
            { heading: "6-Inch Seamless Gutters", body: "6 inches wide and 5 inches deep. They hold about 50% more water than standard 5-inch gutters (2 gallons of water per 1 linear foot). They use 3x4 downspouting and feature hidden screws and hangers every 2 feet on center." },
            { heading: "Commercial Systems", body: "TPO and EPDM systems require removing the current flat roof down to the decking, installing new Polyiso Insulation, installing .060 Mil membrane, and securing the perimeter with warning lines and safety flags." }
        ]
    },
    "1.4": {
        title: "Defeating Objections",
        type: "interactive",
        contactHours: 2.5,
        slos: [
            "Execute the P.E.R.I.L. objection-handling framework from memory in a live role-play.",
            "Apply the A.C.C.S.C. method to overcome price-specific objections.",
            "Demonstrate responses to the 5 most common homeowner objections without breaking composure.",
            "Explain why pausing is the critical first step before responding to any objection."
        ],
        sections: [
            { heading: "Price Objections", body: "Use the A.C.C.S.C. method to relieve pressure from the consequences they feel. Pivot the focus to your products, backlog, skilled labor, warranties, and reviews to show how your solution makes the emotional or future pain go away." },
            { heading: "The Circle of P.E.R.I.L", body: "**P**ause, **E**mphasize, **R**e-State, **I**solate, **L**oop back to price." },
            { heading: "Common Objections to Master", body: "\n- \"We want to wait...\"\n- \"We'll follow up with you in a few days...\"\n- \"I have to talk to my husband/wife...\"\n- \"Your estimate is more expensive...\"\n- \"I want to get more estimates first...\"" }
        ]
    },
    "2.1": {
        title: "The 27-Point Inspection",
        type: "interactive",
        contactHours: 3.0,
        slos: [
            "Conduct a complete 27-Point Inspection covering all four cardinal slopes.",
            "Accurately document roof pitch, shingle layers, drip edge, gutter, and downspout measurements.",
            "Apply the Good/Monitor/Repair/Replace rating system with appropriate notes for each item.",
            "Differentiate between hail damage, blistering, and wind damage on shingles."
        ],
        sections: [
            { heading: "Process", body: "The inspection covers the North, South, East, and West slopes from both the roof level and ground level." },
            { heading: "Data Collection", body: "Reps must document the number of stories, roof pitch, number of shingle layers, shingle type, total linear feet of drip edge, total linear feet of the gutter system, and linear feet of downspouts." },
            { heading: "Evaluation", body: "For all 27 items checked, the rep must select Good, Monitor, Repair, or Replace, and add detailed notes into the CRM." }
        ]
    },
    "2.2": {
        title: "Photographic Evidence",
        type: "document",
        contactHours: 1.5,
        slos: [
            "Capture and organize photos using the checklist item numbering system.",
            "Document all damage thoroughly BEFORE any tarp installation.",
            "Obtain proper authorization before placing nails through shingles for tarps.",
            "Produce a photo package sufficient for insurance claim submission."
        ],
        sections: [
            { heading: "Documentation", body: "Photos are archived directly with the job record. File names must reference the checklist item number." },
            { heading: "Evidence Standards", body: "Damages must be thoroughly documented **before any tarp installation**. If a tarp is needed, the property owner must authorize placing nails through the shingles." }
        ]
    },
    "2.3": {
        title: "Retail vs. Insurance Paths",
        type: "video",
        contactHours: 1.5,
        slos: [
            "Trace the complete Retail Pipeline Flow from Lead to Review Request.",
            "Trace the complete Insurance Pipeline Flow from Inspection to Review Request.",
            "Explain the key mindset shift between a retail 'one-call close' and an insurance claim cycle.",
            "Correctly classify a new lead into the appropriate pipeline based on damage assessment."
        ],
        sections: [
            { heading: "Retail Pipeline Flow", body: "Lead ➔ Appointment ➔ Inspection ➔ Proposal ➔ Close ➔ Review Request." },
            { heading: "Insurance Pipeline Flow", body: "Inspection ➔ Adjuster Meeting ➔ Approval ➔ Build ➔ Payment ➔ Review Request." }
        ]
    },
    "2.4": {
        title: "The PPA Protocol",
        type: "interactive",
        contactHours: 2.5,
        slos: [
            "Explain the PPA handoff process to a homeowner without making any illegal promises about claim outcomes.",
            "Identify and collect the two mandatory documents (LOR/PPA Authorization and CCR Insurance Contingency Agreement).",
            "Upload a complete claim package to Precision's portal with zero corrections needed.",
            "Demonstrate the correct response when an insurance carrier contacts you directly about a claim."
        ],
        sections: [
            { heading: "Handoff", body: "Handle insurance opportunities by partnering with Precision Public Adjusting (Suwanee, GA)." },
            { heading: "Documentation (CRITICAL)", body: "Reps **must** collect the signed Letter of Representation (LOR) / PPA Authorization form AND the Capital City Roofing Insurance Contingency / Direction to Proceed Agreement BEFORE submitting a claim package." },
            { heading: "Submission", body: "Upload the inspection reports, damage counts, and the PDF of photos directly into Precision's portal. Reps **do not** negotiate claims with the carrier. If the carrier calls you, direct them to PPA." }
        ]
    },
    "3.1": {
        title: "Tech Stack Tactics",
        type: "interactive",
        contactHours: 2.5,
        slos: [
            "Navigate GoHighLevel (GHL) to manage pipelines, apply tags, and trigger automations.",
            "Explain how the Meaghan AI Voice Agent handles outbound calls, missed call responses, and follow-ups.",
            "Maintain data hygiene by accurately replicating lead data between GHL and Roofr.",
            "Configure and verify the New Lead Nurture, Missed Call Text-Back, and Review Request automations."
        ],
        sections: [
            { heading: "GoHighLevel (GHL) & Automations", body: "Used for CRM, pipelines, and automations. Critical flows include the New Lead Nurture, Missed Call Text-Back, and Review Requests." },
            { heading: "Meaghan (AI Voice Agent)", body: "Handles outbound calling, missed call responses, and appointment reminders. Meaghan can instantly text: *\"Hey [FirstName], this is Meaghan from Capital City Roofing. Thanks for reaching out! Are you seeing leaks or missing shingles?\"* If no reply, Meaghan calls in 2 minutes." },
            { heading: "Data Hygiene", body: "Lead data must be accurately entered and replicated between GHL and Roofr. Tags must be applied correctly (e.g., New Lead, Inspection Scheduled)." }
        ]
    },
    "3.2": {
        title: "Roofr Mastery",
        type: "interactive",
        contactHours: 3.0,
        slos: [
            "Diagram a residential roof in Roofr and pull accurate measurements.",
            "Build a complete 'Good, Better, Best' proposal with correct material selections and pricing.",
            "Create a Work Order with calendar events assigned to all five stakeholders.",
            "Upload all required photos to Roofr before leaving the job site."
        ],
        sections: [
            { heading: "Job Scheduling Prep", body: "An electronic signature must be collected. Payment notes (e.g., Retail check, Service Finance plan) and Work Scope by Trade (including colors and materials) must be entered in the Details section of the Job Tile." },
            { heading: "Production Workflows", body: "Order the Roofr Measurement Report, create the Material Order and send it to the supply company, and create the Work Order with calendar events for the Crew Contact, Sales Rep, Project Manager, Production Manager, and Customer." },
            { heading: "Field Rule", body: "Photos **must** be uploaded to Roofr before leaving the job site." }
        ]
    },
    "3.3": {
        title: "Networking & Lead Gen",
        type: "video",
        contactHours: 2.0,
        slos: [
            "Deliver the door knock script naturally and transition to booking an inspection.",
            "Deliver the multi-family/HOA introduction to property managers.",
            "Explain the 48-hour rehash protocol and the Authority Transfer script.",
            "Generate at least one self-generated lead using networking techniques within the first 30 days."
        ],
        sections: [
            { heading: "Door Knock Script", body: "\"Hi, I'm [Name] with Capital City Roofing. We're helping several neighbors after the recent storm. I noticed your roof may have damage. Would you like a free inspection?\"" },
            { heading: "Multi-Family Script", body: "\"We specialize in serving HOA boards and property managers with cost-efficient roofing solutions, warranties, and maintenance programs.\"" },
            { heading: "Rehash Process", body: "48 hours after an unsold inspection, the inside sales team calls to schedule a review directly with the COO (Edward) to transfer authority and close the deal." }
        ]
    },
    "3.4": {
        title: "Customer Experience & Handoff",
        type: "document",
        contactHours: 1.5,
        slos: [
            "Execute the complete post-job closeout process including COC signing and review request.",
            "Explain how the Review Engine Automation is triggered by the 'Job Completed' tag in GHL.",
            "Describe Meaghan's role in the 48-hour follow-up call for review generation.",
            "Obtain at least 2 referrals during the final walkthrough with the homeowner."
        ],
        sections: [
            { heading: "Certificates of Completion (COC)", body: "Must be signed by the homeowner and the CCR representative for internal quality assurance and compliance." },
            { heading: "Review Engine Automation", body: "Upon tagging a customer as \"Job Completed\" in GHL, a text/email triggers: *\"Hey [FirstName], thanks for trusting Capital City Roofing! Would you mind leaving a quick review?\"* If no review in 48 hours, Meaghan makes a friendly follow-up call." }
        ]
    }
};
