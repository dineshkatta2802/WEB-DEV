document.addEventListener('DOMContentLoaded', () => {
    // --- 1. SCHEME DATA SIMULATION (The Details Database) ---
    const SCHEME_DETAILS = {
        // --- ANDHRA PRADESH SCHEMES ---
        'Thalliki Vandanam (AP)': {
            overview: "A flagship scheme providing financial assistance of ₹15,000 per annum per eligible child (Classes I-XII) to mothers/guardians in Andhra Pradesh, to support school enrollment and retention.",
            focus: "School Enrollment & Mother/Guardian Support",
            eligibility: [
                "Child studying in Classes I to XII in a recognised school in Andhra Pradesh.",
                "Mother or guardian is resident of Andhra Pradesh.",
                "Other criteria as per official GO (e.g., attendance requirement, income threshold)."
            ],
            steps: [
                "School/Institution verifies enrolment and attendance of the child.",
                "Beneficiary mother/guardian’s bank account linked and verified.",
                "Funds credited to mother/guardian’s account annually."
            ],
            officialLink: "https://some-official-link.ap.gov.in/thallikivandanam"
        },
        'NTR Bharosa Pension Scheme (AP)': {
            overview: "A social security scheme offering enhanced monthly pensions to vulnerable groups—senior citizens, widows, disabled persons, single women, and other eligible categories—in Andhra Pradesh.",
            focus: "Social Security & Vulnerable Groups",
            eligibility: [
                "Resident of Andhra Pradesh.",
                "Belongs to eligible category (eg: senior citizen, widow, disabled, single woman) as per scheme norms.",
                "Meets income/asset criteria and not availing other conflicting pension benefits."
            ],
            steps: [
                "Beneficiary identified via Village/Ward Secretariat or concerned department.",
                "Documents submitted (age proof, disability certificate, widow certificate etc.).",
                "Once approved, pension amount is credited monthly to bank account."
            ],
            officialLink: "https://some-official-link.ap.gov.in/ntrbharosa"
        },
        'Aadabidda Nidhi Scheme (AP)': {
            overview: "Scheme providing financial assistance to women from economically weaker sections in Andhra Pradesh, aimed at empowering them and supporting livelihood and financial security.",
            focus: "Women Empowerment & Financial Support",
            eligibility: [
                "Female resident of Andhra Pradesh aged between 18-59 years (or as per GO).",
                "Family income below prescribed threshold.",
                "Not already availing certain other state benefits (as specified)."
            ],
            steps: [
                "Apply via designated portal or Village/Ward Secretariat.",
                "Bank account, Aadhaar, and identity verified.",
                "Funds credited to eligible woman’s bank account regularly / periodically."
            ],
            officialLink: "https://some-official-link.ap.gov.in/aadabiddanidhi"
        },
        'Anna Canteen (AP)': {
            overview: "Subsidised food services scheme launched in Andhra Pradesh to provide affordable meals via dedicated canteens across the State.",
            focus: "Food Security & Subsidised Meals",
            eligibility: [
                "All residents of Andhra Pradesh can purchase meals from Anna Canteens at subsidised rates.",
                "No special category requirement (subject to scheme-terms)."
            ],
            steps: [
                "Locate the nearest Anna Canteen in your area.",
                "Go to the canteen during operating hours and purchase the subsidised meal.",
                "Provide identification if required for verification."
            ],
            officialLink: "https://annacanteenstrust.ap.gov.in/#/home"
        },
        'Auto Drivers Sevalo Scheme (AP)': {
            overview: "Scheme to support auto, cab, moto-cab, maxi-cab drivers in Andhra Pradesh; each eligible driver receives a cash incentive (₹15,000 in the current roll-out) as financial relief/support.",
            focus: "Transport Workers Welfare & Income Support",
            eligibility: [
                "Must be an auto, cab, moto-cab, or maxi-cab driver in Andhra Pradesh with valid licence and vehicle registration as per scheme notification.",
                "Must meet any additional criteria (e.g., driving record, residency) as per official GO."
            ],
            steps: [
                "Driver registers via the state-portal or at designated office.",
                "Vehicle and licence details are verified.",
                "Once approved, incentive credited to bank account of eligible driver."
            ],
            officialLink: "https://some-official-link.ap.gov.in/autodriversevalo"
        },
        // --- CENTRAL SCHEMES ---
        'PM Kisan Samman Nidhi (Central)': {
            overview: "A Central Sector scheme providing direct income support of ₹6,000 per year to all land-holding farmer families, aimed at supplementing their financial needs.",
            focus: "Farmer Income Support",
            eligibility: [
                "Must be a farmer with cultivable land in their name (subject to exclusions).",
                "Not eligible if the family holds a Constitutional post, or any member is a government employee/pensioner/taxpayer (as per scheme norms).",
                "Land records must be updated and linked with Aadhaar."
            ],
            steps: [
                "Register online / via Common Service Centre (CSC).",
                "Submit land records, Aadhaar, bank account details.",
                "State government verifies land records; fund transferred in installments to beneficiary’s bank account."
            ],
            officialLink: "https://pmkisan.gov.in/"
        },
        'Pradhan Mantri Awas Yojana (PMAY)': {
            overview: "A Central scheme offering financial assistance and credit-linked subsidies to help EWS, LIG and MIG families build or acquire a permanent (pucca) house in urban and rural areas.",
            focus: "Affordable Housing",
            eligibility: [
                "Applicant/Family must not own a pucca house anywhere in India.",
                "Annual household income limits apply (EWS: up to ₹3 Lakh, LIG: ₹3-6 Lakh etc.).",
                "Other criteria as specified (property registration, female member name etc.)."
            ],
            steps: [
                "Apply through PMAY portal or CSC.",
                "Select appropriate vertical (rural / urban / CLSS).",
                "Submit income proof, Aadhaar, property/beneficiary details.",
                "Subsidy credited/upfront or loan account subsidy as per scheme."
            ],
            officialLink: "https://pmayuclap.gov.in/"
        },
        'Atal Pension Yojana (APY) (Central)': {
            overview: "Central Government pension scheme for workers in the unorganised sector, guaranteeing a fixed monthly pension ranging from ₹1,000 to ₹5,000 after the age of 60.",
            focus: "Retirement Security",
            eligibility: [
                "Citizen of India between 18 and 40 years of age.",
                "Should have a savings bank / post office account.",
                "Must contribute regularly until age 60."
            ],
            steps: [
                "Approach your bank/post-office.",
                "Fill registration form, provide Aadhaar and mobile number.",
                "Choose your desired pension amount (₹1k-₹5k) and start monthly contribution.",
                "Pension paid monthly after reaching 60 years of age."
            ],
            officialLink: "https://enps.nsdl.com/eNPS/ApySubscriAuth.html"
        },
        'PM Vishwakarma Yojana (Central)': {
            overview: "A scheme to support and recognise artisans and craftspeople (“Vishwakarmas”), providing skill training, a toolkit stipend (₹15,000) and access to collateral-free bank loans (up to ₹3 Lakh).",
            focus: "Traditional Trades & Skill Development",
            eligibility: [
                "Engaged in one of 18 traditional trades (e.g., tailor, carpenter, mason).",
                "Age 18 years or above.",
                "Should not have availed loan benefits under similar schemes in previous 5 years.",
                "One member per family eligible."
            ],
            steps: [
                "Register at nearest Common Service Centre or official portal.",
                "Undergo training (basic/advanced trade).",
                "Receive e-ID card, toolkit allowance and become eligible for loan component."
            ],
            officialLink: "https://pmvishwakarma.gov.in/"
        },
        'PM Fasal Bima Yojana (PMFBY) (Central)': {
            overview: "Provides comprehensive crop insurance to farmers against crop loss/damage due to natural calamities, pests and diseases. Farmers pay minimal premium (1.5 %-5 %) and government covers the rest.",
            focus: "Farmer Risk Protection & Crop Security",
            eligibility: [
                "All farmers including sharecroppers and tenant farmers growing notified crops in notified areas.",
                "Compulsory for loanee farmers; voluntary for non-loanee farmers as per scheme notification."
            ],
            steps: [
                "Contact your bank (if you have crop loan) or a CSC.",
                "Fill application and submit documents (land records, bank account, Aadhaar).",
                "Pay prescribed premium.",
                "In case of crop damage, notify insurer/department within 72 hours and file claim."
            ],
            officialLink: "https://pmfby.gov.in/"
        },
        'Pradhan Mantri Matru Vandana Yojana (PMMVY) (Central)': {
            overview: "A maternity benefit programme providing a cash incentive of ₹5,000 to pregnant women & lactating mothers for the first child, to partially compensate wage loss and ensure safe delivery & good nutrition.",
            focus: "Maternal Health & Nutrition",
            eligibility: [
                "Pregnant women / lactating mothers (PW&LM) whose date of LMP on or after 01.01.2017.",
                "Applicable only for the first live birth.",
                "Must not be employee of Central/State Government or PSUs (as per scheme norms)."
            ],
            steps: [
                "Register at the nearest Anganwadi Centre (AWC) or approved health facility within 150 days of LMP.",
                "Submit Form 1-A (Registration) with MCP Card & bank account details.",
                "Receive benefit in three instalments (on registration, institutional delivery, first cycle of vaccination).",
                "Additional benefit under related JSY scheme if applicable."
            ],
            officialLink: "https://pmmvy.wcd.gov.in/"
        },
        'Sukanya Samriddhi Yojana (SSY) (Central)': {
            overview: "A government-backed small savings scheme designed for the benefit of the girl child. Offers a high, tax-free interest rate and can be used to fund higher education or marriage of a girl child.",
            focus: "Girl Child Savings & Financial Security",
            eligibility: [
                "Can be opened in the name of a girl child below the age of 10 years.",
                "Only one account per girl child; family can open max two accounts (for two girl children).",
                "Minimum annual deposit ₹250, maximum up to ₹1.5 Lakh (or as per rules)."
            ],
            steps: [
                "Visit any post-office or participating bank.",
                "Fill account opening form, submit birth certificate of girl child and parent/guardian ID proof.",
                "Make initial deposit (minimum ₹250).",
                "Continue deposits for 15 years from date of opening."
            ],
            officialLink: "https://www.indiapost.gov.in/Financial/pages/content/post-office-saving-schemes.aspx"
        },
        'Ayushman Bharat – PMJAY (Central)': {
            overview: "The world’s largest government-funded health assurance scheme providing health cover of ₹5 Lakh per family per year for secondary & tertiary care hospitalisation to vulnerable families. (Central sector) ",
            focus: "Health Assurance & Secondary/Tertiary Care",
            eligibility: [
                "Families identified via SECC 2011 deprivation/occupational criteria.",
                "Deprived households in rural (D1-D7) and qualifying urban categories; RSBY card holders are included."
            ],
            steps: [
                "Check eligibility on official portal or at Ayushman Mitra at an empanelled hospital.",
                "Obtain Golden Card (PMJAY card).",
                "Present card at empanelled hospital to avail cashless treatment for covered procedures."
            ],
            officialLink: "https://pmjay.gov.in/"
        },
        'Pradhan Mantri Jan Dhan Yojana (PMJDY) (Central)': {
            overview: "National mission for financial inclusion to ensure access to banking/savings, credit, insurance and pension services for unbanked. Provides a basic savings account to the unbanked, zero balance allowed.",
            focus: "Financial Inclusion & Banking Access",
            eligibility: [
                "Any Indian citizen aged 10 years or above.",
                "If you don’t hold a savings account already."
            ],
            steps: [
                "Visit any bank branch or Bank Mitra (Banking Correspondent).",
                "Fill PMJDY form and provide KYC documents (Aadhaar/Voter ID/Driving Licence).",
                "Open zero-balance account, receive RuPay debit card, accidental insurance cover & overdraft facility after six months of operation."
            ],
            officialLink: "https://www.pmjdy.gov.in/"
        },
        // Fallback for Scheme Not Found
        'Scheme Not Found': {
            overview: "We're sorry! The details for this specific scheme were not found in our simplified database. Please go back to the scheme finder page and try searching again.",
            focus: "Error/Contact Support",
            eligibility: ["N/A"],
            steps: ["N/A"],
            officialLink: "schemes.html"
        }
    };

    // --- 2. LOGIC TO RENDER THE DETAILS PAGE ---
    function getSchemeNameFromURL() {
        const params = new URLSearchParams(window.location.search);
        let schemeName = params.get('scheme');
        if (schemeName) {
            schemeName = decodeURIComponent(schemeName.replace(/\+/g, ' '));
        }
        return schemeName;
    }

    function loadSchemeDetails() {
        const schemeName = getSchemeNameFromURL();
        const data = SCHEME_DETAILS[schemeName] || SCHEME_DETAILS['Scheme Not Found'];

        // Update the main title and document title
        document.getElementById('detail-scheme-name').textContent = schemeName || 'Scheme Not Found';
        document.getElementById('schemeTitleTag').textContent = `${schemeName} - Awareness 360`;

        // Update Overview Block
        document.getElementById('detail-overview-content').innerHTML = data.overview;
        document.getElementById('detail-focus').innerHTML = `**Focus Area:** ${data.focus}`;

        // Update Eligibility List
        const eligibilityList = document.getElementById('detail-eligibility-list');
        eligibilityList.innerHTML = '';
        data.eligibility.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            eligibilityList.appendChild(li);
        });

        // Update Steps List
        const stepsList = document.getElementById('detail-steps-list');
        stepsList.innerHTML = '';
        data.steps.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            stepsList.appendChild(li);
        });

        // Update Official Link
        const officialLinkElement = document.getElementById('detail-official-link');
        officialLinkElement.href = data.officialLink;
        if (data.officialLink === 'schemes.html') {
             officialLinkElement.textContent = 'Go back to Schemes List';
        } else {
             officialLinkElement.textContent = 'Official Scheme Website';
        }
    }

    // Only run if on the details page
    if (document.querySelector('.scheme-details-section')) {
        loadSchemeDetails();
    }
});
