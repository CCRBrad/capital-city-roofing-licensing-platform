export const teamData = {
    dailyTrackers: [
        {
            role: "Retail Sales",
            goal: "100 Points Total",
            categories: [
                {
                    name: "Prospecting & Lead Gen",
                    items: [
                        { desc: "Doors knocked (cold or canvassing)", points: "1/door", max: 15 },
                        { desc: "Clover leafing adjacent homes", points: "2/door", max: 20 },
                        { desc: "Live homeowner conversations", points: "3/each", max: 10 }
                    ],
                    rule: "Must be adjacent homes or same street as sold job. Script must reference nearby project. Must be completed same day or within 72 hours."
                },
                {
                    name: "Inspections & Estimates",
                    items: [
                        { desc: "Completed roof inspection", points: "5/each", max: 10 },
                        { desc: "Estimate delivered (in-person/virtual)", points: "5/each", max: 10 },
                        { desc: "In-person estimate AND reviewed", points: "+3 bonus", max: 3 },
                        { desc: "Capital City Packet left with homeowner", points: "+3 bonus", max: 3 },
                        { desc: "Same-day estimate after inspection", points: "+5 bonus", max: 5 }
                    ],
                    rule: "To earn +3 points for the packet: Estimate must be delivered in person, presentation walked through, and physical packet left. CRM must reflect: 'In-person estimate delivered - Packet left'."
                },
                {
                    name: "Follow-Up & Pipeline",
                    items: [
                        { desc: "Follow-up calls/texts/emails", points: "1/each", max: 10 },
                        { desc: "Revisit past estimate", points: "5/each", max: 5 },
                        { desc: "Insurance claim check/assistance", points: "5/each", max: 5 }
                    ],
                    rule: ""
                },
                {
                    name: "Trust, Referrals & Brand",
                    items: [
                        { desc: "Referral asked (documented)", points: "3/each", max: 6 },
                        { desc: "Google review requested", points: "3/each", max: 3 },
                        { desc: "Google review received", points: "+4 bonus", max: 4 },
                        { desc: "Social media post (job sold)", points: "5/each", max: 5 }
                    ],
                    rule: ""
                },
                {
                    name: "Community & Discipline",
                    items: [
                        { desc: "Attend networking event (BNI/Chamber)", points: "10/each", max: 10 },
                        { desc: "Attend CCR company event", points: "5/each", max: 5 },
                        { desc: "CRM fully updated by end of day", points: "3/each", max: 3 },
                        { desc: "Next-day plan created", points: "2/each", max: 2 }
                    ],
                    rule: ""
                }
            ]
        },
        {
            role: "Storm Chasing",
            goal: "100 Points Total",
            categories: [
                {
                    name: "Territory Saturation",
                    items: [
                        { desc: "Doors knocked", points: "1/door", max: 25 },
                        { desc: "Live homeowner conversations", points: "2/each", max: 10 },
                        { desc: "Damage education completed", points: "+5 bonus", max: 5 }
                    ],
                    rule: "Still prioritizes qualified conversations, not just knocking."
                },
                {
                    name: "PPA Authorization & Compliance",
                    items: [
                        { desc: "PPA authorization form signed", points: "10/each", max: 10 },
                        { desc: "PPA packet submitted same day", points: "5/each", max: 10 },
                        { desc: "PPA packet submitted (No Corrections)", points: "+5 bonus", max: 5 },
                        { desc: "Adjuster appointment scheduled", points: "5/each", max: 5 }
                    ],
                    rule: ""
                },
                {
                    name: "Brand & Install Leverage",
                    items: [
                        { desc: "Branded CCR packet left", points: "2/each", max: 5 },
                        { desc: "Cover leafing adjacent homes (PPA)", points: "2/door", max: 15 },
                        { desc: "Yard sign placed", points: "2/each", max: 2 },
                        { desc: "Install-day photo/video posted", points: "3/each", max: 3 }
                    ],
                    rule: "Packet must be physically left. Applies when PPA is signed or strong damage education is completed. No packet left = no credit."
                },
                {
                    name: "Professional Discipline",
                    items: [
                        { desc: "CRM fully updated by end of day", points: "3/each", max: 3 },
                        { desc: "Next-day plan created", points: "2/each", max: 2 }
                    ],
                    rule: ""
                }
            ]
        },
        {
            role: "Canvassing Team",
            goal: "105 Points Max",
            categories: [
                {
                    name: "Volume & Contact",
                    items: [
                        { desc: "Doors knocked", points: "1/door", max: 25 },
                        { desc: "Live homeowner conversations", points: "2/each", max: 20 }
                    ],
                    rule: ""
                },
                {
                    name: "Agreements & Brand",
                    items: [
                        { desc: "Homeowner agrees to free inspection", points: "20/each", max: 40 },
                        { desc: "Inspection scheduled within 48 hours", points: "+5 bonus", max: 5 },
                        { desc: "Inspection scheduled same day", points: "+5 bonus", max: 5 },
                        { desc: "Branded CCR packet left", points: "2/each", max: 5 }
                    ],
                    rule: "Max 45 points/day from inspection agreements. Appointment must be confirmed. No 'maybe' or vague interest. Packet must be physically left."
                },
                {
                    name: "Discipline & Leverage",
                    items: [
                        { desc: "Inspection logged correctly", points: "3/each", max: 3 },
                        { desc: "Next-day territory confirmed", points: "2/each", max: 2 },
                        { desc: "Cover leafing adjacent homes", points: "1/door", max: 5 }
                    ],
                    rule: ""
                }
            ]
        }
    ],
    commissions: {
        trackA: "Rookie Sales Associate (Under $500k total revenue)",
        trackB: "Senior Sales Associate ($500k+ total revenue)",
        tiers: [
            { margin: "30-39%", a: "20 / 50 / 50", b: "20 / 50 / 50" },
            { margin: "40-49%", a: "15 / 50 / 50", b: "10 / 50 / 50" },
            { margin: "50%+", a: "10 / 50 / 50", b: "5 / 50 / 50" }
        ],
        selfGeneratedRule: "Overrides Margin Tiers: Any sale classified as a self-generated lead is paid at a 10 / 50 / 50 tier regardless of sold margin or track.",
        bonus: "Standard: Earns 0.5% bonus on amounts over $100k sold in month. Boosted: With 2 self-generated sales, bonus becomes 1.0% on amounts over $100k."
    },
    watchClub: [
        { tier: "Tier 1: TAG Heuer Club", reward: "TAG Heuer Formula 1", criteria: "Top Performer Discipline" },
        { tier: "Tier 2: Omega Club", reward: "Omega Speedmaster", criteria: "Elite Revenue & Consistency" },
        { tier: "Tier 3: Rolex Club", reward: "Rolex Oyster Perpetual Datejust", criteria: "Ultimate Mastery & Leadership" }
    ],
    coachingCategories: [
        { name: "Monthly Sales Coaching Agenda", items: ["Opening Reflection", "Skill & Mindset Assessment", "Financial & Goal Alignment"] },
        { name: "Weekly Performance Review (New Hires)", items: ["Tracking vs Goals", "Diagnose Weaknesses", "Management Support Needs", "Quota Probation Checks"] },
        { name: "Quarterly/Annual Evaluation", items: ["Results vs KPIs", "Process/Documentation", "Customer Experience", "Safety/Compliance", "Teamwork/Attitude", "Growth/Training"] }
    ]
};
