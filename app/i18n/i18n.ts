 "use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Keep these in sync with your supported languages
export const SUPPORTED_LANGUAGES = ["en", "hi", "gu"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const resources = {
  en: {
    translation: {
      app: {
        title: "Citizen Complaint Guide",
        subtitle: "Understand your rights & how to file a complaint",
      },
      header: {
        searchPlaceholder: "Search rights, laws, or help...",
        emergencySos: "Emergency SOS",
      },
      nav: {
        generalInfo: "General Info",
        awareness: "Awareness",
        emergencyContacts: "Emergency Contacts",
        groups: "Groups",
        quickLinks: "Quick Links",
        findNearestPoliceStation: "Find Nearest Police Station",
        legalAidNgos: "Legal Aid NGOs",
      },
      categoryTabs: {
        overview: "Overview",
        rights: "Know Your Rights",
        laws: "Legal Dictionary",
        complaint: "Complaint Guide",
      },
      category: {
        commonIssues: "Common Issues in this Section",
      },
      chat: {
        askAnything: "Ask anything about this page",
        placeholder: "Type your message...",
        send: "Send",
      },
      call: {
        talkToExpert: "Talk to Expert",
        requestCall: "Request a Call",
        subtitle: "Choose a convenient date and time for a callback.",
        fullName: "Full name",
        phoneNumber: "Phone number",
        preferredDate: "Preferred date",
        preferredTime: "Preferred time",
        yourNamePlaceholder: "Your name",
      },
      emergency: {
        modalTitle: "Emergency Contacts",
        modalSubtitle: "Call these numbers immediately in case of danger.",
      },
      pages: {
        home: {
          title: "Welcome to the Citizen Complaint Guide",
          p1: "This tool helps you quickly understand your basic rights, learn key laws in simple language, and follow clear steps to file a complaint if something goes wrong.",
          p2: "Use the sidebar to switch between Men, Women, Children, and Senior Citizens, or jump directly to emergency contacts. The Emergency SOS button at the top will always show you national helpline numbers.",
        },
        emergency: {
          title: "National Emergency Contacts",
          intro:
            "These numbers are for immediate help. Call the most relevant one if you or someone near you is in danger or needs urgent assistance.",
          tip:
            "Tip: If you are unsure which number to call, start with the general emergency or police helpline. Stay calm, clearly describe the situation, and share your location.",
        },
      },
      womenTopics: {
        harassment: {
          title: "Harassment",
          summary:
            "Unwanted comments, messages, touching, or behaviour that makes you feel unsafe, threatened, or humiliated at home, in public, or at work.",
        },
        obsceneMessages: {
          title: "Obscene Messages from Unknown Numbers",
          summary:
            "Repeated obscene calls or messages from unknown numbers on phone, messaging apps, or social media.",
        },
        verbalAbuse: {
          title: "Verbal Abuse in Streets or Public Places",
          summary:
            "Catcalling, stalking, or abusive language directed at you in streets, markets, or public transport.",
        },
      },
      categories: {
        women: {
          label: "Women",
          heroSubtitle: "You are in the Women's Rights Section.",
          primaryHelplineLabel: "Women’s Helpline",
          rights: [
            "Right to free legal aid in eligible cases.",
            "Right to privacy and dignity while filing complaints.",
            "Right to register a Zero FIR at any police station.",
          ],
          complaintSteps: [
            "Document the incident: dates, times, locations, and people involved.",
            "Contact a women-specific helpline (e.g., 1091 or 181) and describe the issue.",
            "Visit the nearest police station to file an FIR with supporting documents.",
            "Request a copy of the FIR and keep the FIR number safely.",
          ],
          laws: [
            {
              code: "Protection of Women from Domestic Violence Act",
              description:
                "Provides protection and relief for women facing physical, emotional, or economic abuse.",
            },
            {
              code: "Maternity Benefit Act",
              description:
                "Ensures paid leave and job protection during and after pregnancy.",
            },
          ],
        },
        men: {
          label: "Men",
          heroSubtitle: "You are in the Men's Rights Section.",
          primaryHelplineLabel: "General Police Helpline",
          rights: [
            "Right to be treated with dignity and without discrimination.",
            "Right to legal representation during criminal proceedings.",
            "Right to seek protection if facing abuse or threats.",
          ],
          complaintSteps: [
            "Write down what happened with dates, times, and witnesses.",
            "Call the police helpline or visit your nearest police station.",
            "File a written complaint or FIR describing the incident clearly.",
            "Collect a copy of the FIR and follow up on the investigation status.",
          ],
          laws: [
            {
              code: "Code of Criminal Procedure",
              description:
                "Governs how investigations, arrests, and trials are conducted.",
            },
            {
              code: "Indian Penal Code (general offences)",
              description:
                "Defines common criminal offences like assault, cheating, and criminal intimidation.",
            },
          ],
        },
        child: {
          label: "Children",
          heroSubtitle: "You are in the Child Protection Section.",
          primaryHelplineLabel: "Child Helpline",
          rights: [
            "Right to protection from abuse, exploitation, and neglect.",
            "Right to free and compulsory education up to a certain age.",
            "Right to a child-friendly process while recording statements.",
          ],
          complaintSteps: [
            "Ensure the child's immediate safety and remove them from danger.",
            "Call Child Helpline 1098 or the local police.",
            "Provide details about the child, guardian (if any), and the incident.",
            "Cooperate with Child Welfare Committee or authorities for further action.",
          ],
          laws: [
            {
              code: "Protection of Children from Sexual Offences (POCSO) Act",
              description:
                "Provides child-friendly procedures for reporting and prosecuting sexual offences.",
            },
            {
              code: "Right of Children to Free and Compulsory Education Act",
              description:
                "Guarantees free and compulsory education for children in the specified age group.",
            },
          ],
        },
        senior: {
          label: "Senior Citizens",
          heroSubtitle: "You are in the Senior Citizens' Rights Section.",
          primaryHelplineLabel: "Senior Citizen Helpline",
          rights: [
            "Right to live with dignity and without abuse.",
            "Right to claim maintenance from children or relatives.",
            "Right to approach tribunals for protection of life and property.",
          ],
          complaintSteps: [
            "Write down incidents of neglect, abuse, or financial exploitation.",
            "Call the Senior Citizen Helpline 14567 or contact the local police.",
            "File a complaint or approach the Maintenance Tribunal, if available.",
            "Keep copies of complaints, notices, and orders for your records.",
          ],
          laws: [
            {
              code:
                "Maintenance and Welfare of Parents and Senior Citizens Act",
              description:
                "Allows senior citizens to claim maintenance from children or relatives.",
            },
            {
              code: "General criminal law protections",
              description:
                "Protects senior citizens from physical, verbal, and economic abuse.",
            },
          ],
        },
      },
      awareness: {
        title: "Awareness",
        importantNumbers: "Important Numbers",
        measuresTitle: "Awareness Measures",
        measuresSubtitle:
          "Everyday actions you can take to prevent harm in this area.",
        complaintTitle: "Complaint Steps (if needed)",
        complaintSubtitle:
          "Follow these steps if you need to escalate and file a formal complaint.",
        tabs: {
          forest: "Forest & Wildlife",
          roads: "Roads & Traffic",
          rivers: "Rivers & Water Bodies",
          buildings: "Buildings & Fire Safety",
          safety: "Public Safety & Crowd Spaces",
        },
        topics: {
          forest: {
            label: "Forest & Wildlife",
            summary:
              "Illegal cutting of trees, forest fires, and wildlife poaching harm the environment and future generations.",
            measures: [
              "Do not start fires or leave burning materials in forest areas.",
              "Avoid littering plastic, glass, or other waste in green zones.",
              "Report illegal tree cutting, hunting, or suspicious activity immediately.",
            ],
            complaintSteps: [
              "Note the exact location, time, and what you observed in the forest area.",
              "If safe, take photos or short videos showing damage or illegal activity.",
              "Call the forest department or local environmental helpline and share the details.",
              "File a written complaint with the nearest forest office or police station, attaching any evidence.",
            ],
          },
          roads: {
            label: "Roads & Traffic",
            summary:
              "Potholes, broken signals, and unsafe driving conditions can cause serious accidents.",
            measures: [
              "Follow traffic rules, speed limits, and wear seat belts/helmets.",
              "Avoid blocking emergency lanes or pedestrian crossings.",
              "Report damaged roads, open manholes, or broken traffic signals.",
            ],
            complaintSteps: [
              "Capture clear photos of the road issue, including nearby landmarks.",
              "Note the road name, intersection, or closest building for accurate location.",
              "Raise a complaint with your city’s municipal body or road authority portal.",
              "If there is an immediate risk to life, call the police or traffic helpline.",
            ],
          },
          rivers: {
            label: "Rivers & Water Bodies",
            summary:
              "Dumping waste, chemicals, or sewage into rivers and lakes damages ecosystems and drinking water.",
            measures: [
              "Never throw garbage, puja materials, or plastics into rivers or lakes.",
              "Avoid using harsh detergents or chemicals near open water bodies.",
              "Join or support local clean-up drives to keep water bodies healthy.",
            ],
            complaintSteps: [
              "Record what kind of pollution you see (solid waste, sewage, chemical discharge, etc.).",
              "Note the date, time, and exact location on the river or lake bank.",
              "Inform the local pollution control board or municipal body with photos, if possible.",
              "If you see tanker or industrial discharge, share vehicle/industry details with authorities.",
            ],
          },
          buildings: {
            label: "Buildings & Fire Safety",
            summary:
              "Unauthorized construction, blocked fire exits, and faulty wiring can lead to disasters.",
            measures: [
              "Ensure stairways, exits, and corridors in your building are not blocked.",
              "Check that fire extinguishers and alarms are visible and regularly serviced.",
              "Avoid overloading sockets or using poor-quality electrical extensions.",
            ],
            complaintSteps: [
              "Document safety issues such as locked exits, exposed wiring, or illegal construction.",
              "Inform your housing society or building management in writing.",
              "If they do not act, escalate to the local municipal authority or fire department.",
              "In case of immediate danger (sparks, smoke, or fire), evacuate and call the fire service.",
            ],
          },
          safety: {
            label: "Public Safety & Crowd Spaces",
            summary:
              "Overcrowded events, unsafe public spaces, and poor lighting increase the risk of crime and accidents.",
            measures: [
              "Avoid overcrowded venues without visible emergency exits.",
              "Prefer well-lit routes and public spaces, especially at night.",
              "Report broken street lights, unsafe parks, or harassment immediately.",
            ],
            complaintSteps: [
              "Write down details of unsafe conditions or incidents (place, time, people involved).",
              "For harassment or crime, call the police or relevant helpline right away.",
              "Report infrastructure issues like dark streets or broken lights to the municipal body.",
              "Keep reference numbers of all complaints for follow‑up.",
            ],
          },
        },
      },
    },
  },
  hi: {
    translation: {
      app: {
        title: "नागरिक शिकायत मार्गदर्शिका",
        subtitle: "अपने अधिकार जानें और शिकायत कैसे करें",
      },
      header: {
        searchPlaceholder: "अधिकार, कानून या सहायता खोजें...",
        emergencySos: "आपातकाल SOS",
      },
      nav: {
        generalInfo: "सामान्य जानकारी",
        awareness: "जागरूकता",
        emergencyContacts: "आपात संपर्क",
        groups: "समूह",
        quickLinks: "त्वरित लिंक",
        findNearestPoliceStation: "निकटतम पुलिस स्टेशन खोजें",
        legalAidNgos: "कानूनी सहायता NGO",
      },
      categoryTabs: {
        overview: "ओवरव्यू",
        rights: "अपने अधिकार",
        laws: "कानूनी शब्दावली",
        complaint: "शिकायत गाइड",
      },
      category: {
        commonIssues: "इस अनुभाग की सामान्य समस्याएं",
      },
      chat: {
        askAnything: "इस पेज के बारे में पूछें",
        placeholder: "अपना संदेश लिखें...",
        send: "भेजें",
      },
      call: {
        talkToExpert: "विशेषज्ञ से बात करें",
        requestCall: "कॉल अनुरोध करें",
        subtitle: "कॉल के लिए दिन और समय चुनें।",
        fullName: "पूरा नाम",
        phoneNumber: "फोन नंबर",
        preferredDate: "पसंदीदा तारीख",
        preferredTime: "पसंदीदा समय",
        yourNamePlaceholder: "आपका नाम",
      },
      emergency: {
        modalTitle: "आपात संपर्क",
        modalSubtitle: "खतरे की स्थिति में तुरंत कॉल करें।",
      },
      pages: {
        home: {
          title: "नागरिक शिकायत मार्गदर्शिका में आपका स्वागत है",
          p1: "यह टूल आपके बुनियादी अधिकार जल्दी समझने, सरल भाषा में मुख्य कानून जानने, और किसी समस्या पर स्पष्ट चरणों में शिकायत करने में मदद करता है।",
          p2: "साइडबार से Women, Men, Children और Senior Citizens चुनें या सीधे Emergency Contacts खोलें। ऊपर का Emergency SOS बटन हमेशा राष्ट्रीय हेल्पलाइन दिखाएगा।",
        },
        emergency: {
          title: "राष्ट्रीय आपात संपर्क",
          intro:
            "ये नंबर तत्काल सहायता के लिए हैं। यदि आप या आपके आसपास कोई खतरे में है, तो सबसे उपयुक्त नंबर पर कॉल करें।",
          tip:
            "टिप: यदि समझ नहीं आ रहा हो, तो सामान्य आपात या पुलिस हेल्पलाइन से शुरू करें। शांत रहें, स्थिति स्पष्ट बताएं और अपना लोकेशन साझा करें।",
        },
      },
      womenTopics: {
        harassment: {
          title: "उत्पीड़न (Harassment)",
          summary:
            "अनचाहे कमेंट, मैसेज, छूना या ऐसा व्यवहार जिससे आप असुरक्षित, धमकाया हुआ या अपमानित महसूस करें—घर, सार्वजनिक स्थान या कार्यस्थल पर।",
        },
        obsceneMessages: {
          title: "अनजान नंबरों से अश्लील संदेश",
          summary:
            "फोन, मैसेजिंग ऐप या सोशल मीडिया पर अनजान नंबरों से बार-बार अश्लील कॉल/मैसेज आना।",
        },
        verbalAbuse: {
          title: "सड़क/सार्वजनिक जगह पर मौखिक दुर्व्यवहार",
          summary:
            "सड़क, बाजार या पब्लिक ट्रांसपोर्ट में कैटकॉलिंग, पीछा करना या अपमानजनक भाषा का उपयोग।",
        },
      },
      categories: {
        women: {
          label: "महिलाएं",
          heroSubtitle: "आप महिला अधिकार अनुभाग में हैं।",
          primaryHelplineLabel: "महिला हेल्पलाइन",
          rights: [
            "योग्य मामलों में मुफ्त कानूनी सहायता का अधिकार।",
            "शिकायत दर्ज करते समय गोपनीयता और सम्मान का अधिकार।",
            "किसी भी पुलिस स्टेशन में Zero FIR दर्ज कराने का अधिकार।",
          ],
          complaintSteps: [
            "घटना का विवरण लिखें: तारीख, समय, स्थान और शामिल लोगों के नाम।",
            "महिला-विशेष हेल्पलाइन (जैसे 1091 या 181) पर कॉल करके समस्या बताएं।",
            "नजदीकी पुलिस स्टेशन में जाकर साक्ष्यों के साथ FIR दर्ज कराएं।",
            "FIR की कॉपी लें और FIR नंबर सुरक्षित रखें।",
          ],
          laws: [
            {
              code: "घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम",
              description:
                "शारीरिक, मानसिक या आर्थिक हिंसा के मामलों में महिलाओं को संरक्षण और राहत देता है।",
            },
            {
              code: "मातृत्व लाभ अधिनियम",
              description:
                "गर्भावस्था के दौरान/बाद में भुगतान अवकाश और नौकरी सुरक्षा सुनिश्चित करता है।",
            },
          ],
        },
        men: {
          label: "पुरुष",
          heroSubtitle: "आप पुरुष अधिकार अनुभाग में हैं।",
          primaryHelplineLabel: "सामान्य पुलिस हेल्पलाइन",
          rights: [
            "सम्मान और बिना भेदभाव के व्यवहार का अधिकार।",
            "आपराधिक कार्यवाही में कानूनी प्रतिनिधित्व का अधिकार।",
            "धमकी/हिंसा की स्थिति में सुरक्षा मांगने का अधिकार।",
          ],
          complaintSteps: [
            "क्या हुआ—तारीख, समय और गवाहों सहित लिखें।",
            "पुलिस हेल्पलाइन पर कॉल करें या नजदीकी पुलिस स्टेशन जाएं।",
            "घटना का स्पष्ट वर्णन करते हुए लिखित शिकायत या FIR दर्ज करें।",
            "FIR की कॉपी लें और जांच की स्थिति पर फॉलो‑अप करें।",
          ],
          laws: [
            {
              code: "दंड प्रक्रिया संहिता (CrPC)",
              description:
                "जांच, गिरफ्तारी और मुकदमे की प्रक्रिया को नियंत्रित करती है।",
            },
            {
              code: "भारतीय दंड संहिता (IPC) – सामान्य अपराध",
              description:
                "हमला, धोखाधड़ी और आपराधिक धमकी जैसे सामान्य अपराधों को परिभाषित करती है।",
            },
          ],
        },
        child: {
          label: "बच्चे",
          heroSubtitle: "आप बाल संरक्षण अनुभाग में हैं।",
          primaryHelplineLabel: "चाइल्ड हेल्पलाइन",
          rights: [
            "शोषण, दुर्व्यवहार और उपेक्षा से सुरक्षा का अधिकार।",
            "एक निश्चित आयु तक मुफ्त और अनिवार्य शिक्षा का अधिकार।",
            "बयान दर्ज करते समय बच्चे के अनुकूल प्रक्रिया का अधिकार।",
          ],
          complaintSteps: [
            "बच्चे की तत्काल सुरक्षा सुनिश्चित करें और खतरे से दूर करें।",
            "1098 पर कॉल करें या स्थानीय पुलिस से संपर्क करें।",
            "बच्चे और घटना का विवरण दें (यदि कोई अभिभावक हो तो)।",
            "अगली कार्रवाई के लिए CWC/अधिकारियों के साथ सहयोग करें।",
          ],
          laws: [
            {
              code: "POCSO अधिनियम",
              description:
                "बच्चों से जुड़े यौन अपराधों की रिपोर्टिंग/मुकदमे के लिए बाल‑अनुकूल प्रक्रिया देता है।",
            },
            {
              code: "निःशुल्क एवं अनिवार्य शिक्षा का अधिकार अधिनियम",
              description:
                "निर्धारित आयु वर्ग के लिए मुफ्त और अनिवार्य शिक्षा सुनिश्चित करता है।",
            },
          ],
        },
        senior: {
          label: "वरिष्ठ नागरिक",
          heroSubtitle: "आप वरिष्ठ नागरिक अधिकार अनुभाग में हैं।",
          primaryHelplineLabel: "वरिष्ठ नागरिक हेल्पलाइन",
          rights: [
            "सम्मान के साथ जीने और दुर्व्यवहार से सुरक्षा का अधिकार।",
            "बच्चों/रिश्तेदारों से भरण‑पोषण का दावा करने का अधिकार।",
            "जीवन और संपत्ति की सुरक्षा हेतु ट्रिब्यूनल तक पहुंच का अधिकार।",
          ],
          complaintSteps: [
            "उपेक्षा/दुर्व्यवहार/आर्थिक शोषण की घटनाएं लिखें।",
            "14567 पर कॉल करें या स्थानीय पुलिस से संपर्क करें।",
            "शिकायत दर्ज करें या Maintenance Tribunal में आवेदन करें।",
            "शिकायत/नोटिस/आदेश की कॉपी सुरक्षित रखें।",
          ],
          laws: [
            {
              code:
                "माता‑पिता और वरिष्ठ नागरिकों का भरण‑पोषण एवं कल्याण अधिनियम",
              description:
                "वरिष्ठ नागरिकों को बच्चों/रिश्तेदारों से भरण‑पोषण का अधिकार देता है।",
            },
            {
              code: "सामान्य आपराधिक कानून संरक्षण",
              description:
                "शारीरिक, मौखिक और आर्थिक दुर्व्यवहार से सुरक्षा प्रदान करता है।",
            },
          ],
        },
      },
      awareness: {
        title: "जागरूकता",
        importantNumbers: "महत्वपूर्ण नंबर",
        measuresTitle: "जागरूकता उपाय",
        measuresSubtitle:
          "इस क्षेत्र में नुकसान रोकने के लिए रोज़मर्रा के कदम।",
        complaintTitle: "शिकायत के चरण (यदि आवश्यक हो)",
        complaintSubtitle:
          "यदि शिकायत दर्ज करनी हो तो इन चरणों का पालन करें।",
        tabs: {
          forest: "वन और वन्यजीव",
          roads: "सड़क और ट्रैफिक",
          rivers: "नदी और जल स्रोत",
          buildings: "भवन और अग्नि सुरक्षा",
          safety: "सार्वजनिक सुरक्षा",
        },
        topics: {
          forest: {
            label: "वन और वन्यजीव",
            summary:
              "अवैध पेड़ कटाई, जंगल की आग और शिकार पर्यावरण और भविष्य को नुकसान पहुंचाते हैं।",
            measures: [
              "जंगल क्षेत्रों में आग न लगाएं या जलती सामग्री न छोड़ें।",
              "हरी जगहों पर प्लास्टिक/कांच या अन्य कचरा न फैलाएं।",
              "अवैध कटाई/शिकार या संदिग्ध गतिविधि तुरंत रिपोर्ट करें।",
            ],
            complaintSteps: [
              "सटीक स्थान, समय और जो देखा उसका नोट बनाएं।",
              "यदि सुरक्षित हो, फोटो/वीडियो लें।",
              "वन विभाग या स्थानीय हेल्पलाइन को कॉल करके जानकारी दें।",
              "सबूत लगाकर निकटतम वन कार्यालय/पुलिस में लिखित शिकायत दें।",
            ],
          },
          roads: {
            label: "सड़क और ट्रैफिक",
            summary:
              "गड्ढे, खराब सिग्नल और असुरक्षित सड़कें गंभीर दुर्घटनाओं का कारण बन सकती हैं।",
            measures: [
              "ट्रैफिक नियम मानें और हेलमेट/सीट बेल्ट लगाएं।",
              "आपात लेन/पैदल क्रॉसिंग को ब्लॉक न करें।",
              "खराब सड़क, खुले मैनहोल या टूटे सिग्नल की रिपोर्ट करें।",
            ],
            complaintSteps: [
              "समस्या की साफ फोटो लें और आस‑पास का लैंडमार्क दिखाएं।",
              "सड़क/चौराहा या निकटतम स्थान नोट करें।",
              "नगर निगम/रोड अथॉरिटी पोर्टल पर शिकायत दर्ज करें।",
              "तत्काल खतरा हो तो पुलिस/ट्रैफिक हेल्पलाइन कॉल करें।",
            ],
          },
          rivers: {
            label: "नदी और जल स्रोत",
            summary:
              "कचरा/रसायन/सीवेज नदी-तालाब में जाने से जल और पर्यावरण दूषित होता है।",
            measures: [
              "नदी/तालाब में कचरा या प्लास्टिक न फेंकें।",
              "खुले जल स्रोतों के पास तेज रसायन का उपयोग न करें।",
              "स्थानीय सफाई अभियानों में भाग लें/समर्थन करें।",
            ],
            complaintSteps: [
              "प्रदूषण का प्रकार नोट करें (कचरा, सीवेज, रसायन आदि)।",
              "तारीख, समय और स्थान लिखें।",
              "फोटो के साथ प्रदूषण नियंत्रण बोर्ड/नगर निगम को सूचित करें।",
              "टैंकर/उद्योग दिखे तो वाहन/उद्योग विवरण साझा करें।",
            ],
          },
          buildings: {
            label: "भवन और अग्नि सुरक्षा",
            summary:
              "अवैध निर्माण, बंद फायर एग्ज़िट और खराब वायरिंग से दुर्घटनाएं हो सकती हैं।",
            measures: [
              "सीढ़ियां/निकास रास्ते ब्लॉक न होने दें।",
              "फायर एक्सटिंग्विशर और अलार्म की सर्विसिंग जांचें।",
              "सॉकेट ओवरलोड या खराब एक्सटेंशन का उपयोग न करें।",
            ],
            complaintSteps: [
              "लॉक्ड एग्ज़िट/खुली वायरिंग जैसी समस्याओं का रिकॉर्ड रखें।",
              "सोसाइटी/मैनेजमेंट को लिखित में सूचित करें।",
              "कार्रवाई न हो तो नगर निगम/फायर विभाग को शिकायत करें।",
              "तत्काल खतरा हो तो बाहर निकलें और 101 पर कॉल करें।",
            ],
          },
          safety: {
            label: "सार्वजनिक सुरक्षा",
            summary:
              "भीड़भाड़, असुरक्षित सार्वजनिक स्थान और खराब रोशनी से अपराध/दुर्घटना का जोखिम बढ़ता है।",
            measures: [
              "आपात निकास के बिना भीड़भाड़ वाले स्थानों से बचें।",
              "रात में रोशन रास्ते और सार्वजनिक स्थान चुनें।",
              "टूटी स्ट्रीट लाइट/असुरक्षित पार्क/उत्पीड़न की रिपोर्ट करें।",
            ],
            complaintSteps: [
              "स्थान, समय और घटना का विवरण लिखें।",
              "उत्पीड़न/अपराध में तुरंत पुलिस/हेल्पलाइन कॉल करें।",
              "अंधेरी सड़क/टूटी लाइट जैसी समस्याएं नगर निगम में दर्ज करें।",
              "सभी शिकायतों के रेफरेंस नंबर सुरक्षित रखें।",
            ],
          },
        },
      },
    },
  },
  gu: {
    translation: {
      app: {
        title: "નાગરિક ફરિયાદ માર્ગદર્શિકા",
        subtitle: "તમારા અધિકારો જાણો અને ફરિયાદ કેવી રીતે કરવી",
      },
      header: {
        searchPlaceholder: "અધિકારો, કાયદા અથવા મદદ શોધો...",
        emergencySos: "ઇમર્જન્સી SOS",
      },
      nav: {
        generalInfo: "સામાન્ય માહિતી",
        awareness: "જાગૃતિ",
        emergencyContacts: "ઇમર્જન્સી સંપર્ક",
        groups: "જૂથો",
        quickLinks: "ઝડપી લિંક્સ",
        findNearestPoliceStation: "નજીકનું પોલીસ સ્ટેશન શોધો",
        legalAidNgos: "કાનૂની સહાય NGO",
      },
      categoryTabs: {
        overview: "ઓવરવ્યુ",
        rights: "તમારા અધિકારો",
        laws: "કાનૂની શબ્દકોશ",
        complaint: "ફરિયાદ માર્ગદર્શિકા",
      },
      category: {
        commonIssues: "આ વિભાગની સામાન્ય સમસ્યાઓ",
      },
      chat: {
        askAnything: "આ પેજ વિશે પૂછો",
        placeholder: "તમારો સંદેશ લખો...",
        send: "મોકલો",
      },
      call: {
        talkToExpert: "નિષ્ણાત સાથે વાત કરો",
        requestCall: "કૉલ વિનંતી કરો",
        subtitle: "કૉલ માટે તારીખ અને સમય પસંદ કરો.",
        fullName: "પૂર્ણ નામ",
        phoneNumber: "ફોન નંબર",
        preferredDate: "પસંદગીની તારીખ",
        preferredTime: "પસંદગીનો સમય",
        yourNamePlaceholder: "તમારું નામ",
      },
      emergency: {
        modalTitle: "ઇમર્જન્સી સંપર્ક",
        modalSubtitle: "જોખમ હોય તો તરત કૉલ કરો.",
      },
      pages: {
        home: {
          title: "નાગરિક ફરિયાદ માર્ગદર્શિકામાં સ્વાગત છે",
          p1: "આ ટૂલ તમને તમારા મૂળભૂત અધિકારો ઝડપથી સમજવામાં, સરળ ભાષામાં મુખ્ય કાયદા જાણવામાં અને સમસ્યા થાય ત્યારે સ્પષ્ટ પગલાં મુજબ ફરિયાદ કરવા મદદ કરે છે.",
          p2: "સાઇડબારથી Women, Men, Children અને Senior Citizens પસંદ કરો અથવા Emergency Contacts ખોલો. ઉપરનું Emergency SOS બટન હંમેશાં રાષ્ટ્રીય હેલ્પલાઇન બતાવશે.",
        },
        emergency: {
          title: "રાષ્ટ્રીય ઇમર્જન્સી સંપર્કો",
          intro:
            "આ નંબરો તાત્કાલિક મદદ માટે છે. જો તમે અથવા તમારા નજીક કોઈ જોખમમાં હોય તો સૌથી યોગ્ય નંબર પર કૉલ કરો.",
          tip:
            "ટિપ: શંકા હોય તો સામાન્ય ઇમર્જન્સી અથવા પોલીસ હેલ્પલાઇનથી શરૂ કરો. શાંત રહો, સ્થિતિ સ્પષ્ટ કહો અને તમારું સ્થાન જણાવો.",
        },
      },
      womenTopics: {
        harassment: {
          title: "હેરેસમેન્ટ (Harassment)",
          summary:
            "અનિચ્છિત ટિપ્પણીઓ, સંદેશા, સ્પર્શ અથવા એવો વ્યવહાર જે તમને અસુરક્ષિત, ધમકાવેલા અથવા અપમાનિત અનુભવે—ઘરે, જાહેર સ્થળે અથવા કામ પર.",
        },
        obsceneMessages: {
          title: "અજાણ્યા નંબરોથી અશ્લીલ સંદેશા",
          summary:
            "ફોન, મેસેજિંગ એપ્સ અથવા સોશિયલ મીડિયામાં અજાણ્યા નંબરોથી વારંવાર અશ્લીલ કૉલ/સંદેશા આવવા.",
        },
        verbalAbuse: {
          title: "રસ્તા/જાહેર સ્થળે મૌખિક દુર્વ્યવહાર",
          summary:
            "રસ્તા, બજાર અથવા જાહેર પરિવહનમાં કૅટકૉલિંગ, પીછો કરવો અથવા અપમાનજનક ભાષા વાપરવી.",
        },
      },
      categories: {
        women: {
          label: "મહિલાઓ",
          heroSubtitle: "તમે મહિલાના અધિકાર વિભાગમાં છો.",
          primaryHelplineLabel: "મહિલા હેલ્પલાઇન",
          rights: [
            "પાત્ર કેસોમાં મફત કાનૂની સહાયનો અધિકાર.",
            "ફરિયાદ નોંધાવતા ગોપનીયતા અને ગૌરવનો અધિકાર.",
            "કોઈપણ પોલીસ સ્ટેશને Zero FIR નોંધાવવાનો અધિકાર.",
          ],
          complaintSteps: [
            "ઘટનાનો નોંધ: તારીખ, સમય, સ્થળ અને સામેલ લોકો.",
            "મહિલા હેલ્પલાઇન (જેમ કે 1091 અથવા 181) પર સંપર્ક કરી સમસ્યા જણાવો.",
            "નજીકના પોલીસ સ્ટેશનમાં પુરાવા સાથે FIR નોંધાવો.",
            "FIRની નકલ લો અને FIR નંબર સાચવો.",
          ],
          laws: [
            {
              code: "ઘરેલુ હિંસાથી મહિલાનું સંરક્ષણ અધિનિયમ",
              description:
                "શારીરિક, માનસિક અથવા આર્થિક હિંસા સામે મહિલાને સંરક્ષણ અને રાહત આપે છે.",
            },
            {
              code: "માતૃત્વ લાભ અધિનિયમ",
              description:
                "ગર્ભાવસ્થા દરમિયાન/પછી ચૂકવેલ રજા અને નોકરી સુરક્ષા સુનિશ્ચિત કરે છે.",
            },
          ],
        },
        men: {
          label: "પુરુષો",
          heroSubtitle: "તમે પુરુષ અધિકાર વિભાગમાં છો.",
          primaryHelplineLabel: "સામાન્ય પોલીસ હેલ્પલાઇન",
          rights: [
            "ગૌરવપૂર્ણ અને ભેદભાવ વિના વર્તનનો અધિકાર.",
            "ફોજદારી કાર્યવાહી દરમિયાન કાનૂની પ્રતિનિધિત્વનો અધિકાર.",
            "ધમકી/હિંસા થાય તો સુરક્ષા માગવાનો અધિકાર.",
          ],
          complaintSteps: [
            "શું થયું તેનું નોંધ: તારીખ, સમય અને સાક્ષીઓ.",
            "પોલીસ હેલ્પલાઇન પર કૉલ કરો અથવા પોલીસ સ્ટેશન જાઓ.",
            "ઘટનાનું સ્પષ્ટ વર્ણન કરીને લેખિત ફરિયાદ અથવા FIR કરો.",
            "FIRની નકલ લો અને તપાસની સ્થિતિ પર ફોલો‑અપ કરો.",
          ],
          laws: [
            {
              code: "દંડ પ્રક્રિયા સંહિતા (CrPC)",
              description:
                "તપાસ, ધરપકડ અને ટ્રાયલની પ્રક્રિયાને નિયંત્રિત કરે છે.",
            },
            {
              code: "ભારતીય દંડ સંહિતા (IPC) – સામાન્ય ગુનાઓ",
              description:
                "મારામારી, છેતરપિંડી અને ધમકી જેવા સામાન્ય ગુનાઓને વ્યાખ્યાયિત કરે છે.",
            },
          ],
        },
        child: {
          label: "બાળકો",
          heroSubtitle: "તમે બાળ સુરક્ષા વિભાગમાં છો.",
          primaryHelplineLabel: "ચાઇલ્ડ હેલ્પલાઇન",
          rights: [
            "દુર્વ્યવહાર, શોષણ અને અવગણનાથી સુરક્ષાનો અધિકાર.",
            "નક્કી ઉંમર સુધી મફત અને ફરજિયાત શિક્ષણનો અધિકાર.",
            "બાળ‑મૈત્રીપૂર્ણ પ્રક્રિયા હેઠળ નિવેદન નોંધાવવાનો અધિકાર.",
          ],
          complaintSteps: [
            "બાળકની તાત્કાલિક સુરક્ષા સુનિશ્ચિત કરો.",
            "1098 પર કૉલ કરો અથવા સ્થાનિક પોલીસનો સંપર્ક કરો.",
            "બાળક/અભિભાવક (હોય તો) અને ઘટનાની માહિતી આપો.",
            "આગળની કાર્યવાહી માટે CWC/સત્તાધીશો સાથે સહકાર આપો.",
          ],
          laws: [
            {
              code: "POCSO અધિનિયમ",
              description:
                "બાળ યૌન ગુનાઓની નોંધ/પ્રોસિક્યુશન માટે બાળ‑મૈત્રીપૂર્ણ પ્રક્રિયા આપે છે.",
            },
            {
              code: "મફત અને ફરજિયાત શિક્ષણનો અધિકાર અધિનિયમ",
              description:
                "નક્કી ઉંમર માટે મફત અને ફરજિયાત શિક્ષણ સુનિશ્ચિત કરે છે.",
            },
          ],
        },
        senior: {
          label: "વડીલ નાગરિકો",
          heroSubtitle: "તમે વડીલ અધિકાર વિભાગમાં છો.",
          primaryHelplineLabel: "વડીલ હેલ્પલાઇન",
          rights: [
            "ગૌરવ સાથે જીવવાનો અને દુર્વ્યવહારથી સુરક્ષાનો અધિકાર.",
            "સંતાન/સગાં પાસેથી જાળવણી (maintenance) માંગવાનો અધિકાર.",
            "જીવન અને સંપત્તિ સુરક્ષા માટે ટ્રિબ્યુનલ સુધી પહોંચવાનો અધિકાર.",
          ],
          complaintSteps: [
            "અવગણના/દુર્વ્યવહાર/આર્થિક શોષણની ઘટનાઓ નોંધો.",
            "14567 પર કૉલ કરો અથવા સ્થાનિક પોલીસનો સંપર્ક કરો.",
            "ફરિયાદ કરો અથવા Maintenance Tribunalમાં અરજી કરો.",
            "ફરિયાદ/નોટિસ/આદેશોની નકલ સાચવો.",
          ],
          laws: [
            {
              code:
                "માતા‑પિતા અને વડીલ નાગરિકોના જાળવણી અને કલ્યાણ અધિનિયમ",
              description:
                "વડીલોને સંતાન/સગાં પાસેથી જાળવણી માંગવાનો અધિકાર આપે છે.",
            },
            {
              code: "સામાન્ય ફોજદારી કાયદા સંરક્ષણ",
              description:
                "શારીરિક, મૌખિક અને આર્થિક દુર્વ્યવહારથી સુરક્ષા આપે છે.",
            },
          ],
        },
      },
      awareness: {
        title: "જાગૃતિ",
        importantNumbers: "મહત્વપૂર્ણ નંબર",
        measuresTitle: "જાગૃતિના ઉપાયો",
        measuresSubtitle:
          "આ વિસ્તારમાં નુકસાન અટકાવવા માટે રોજિંદા પગલાં.",
        complaintTitle: "ફરિયાદના પગલાં (જરૂર હોય તો)",
        complaintSubtitle:
          "ફોર્મલ ફરિયાદ કરવી હોય તો આ પગલાં અનુસરો.",
        tabs: {
          forest: "વન અને વન્યજીવ",
          roads: "રસ્તા અને ટ્રાફિક",
          rivers: "નદીઓ અને જળસ્રોત",
          buildings: "મકાન અને આગ સુરક્ષા",
          safety: "જાહેર સુરક્ષા",
        },
        topics: {
          forest: {
            label: "વન અને વન્યજીવ",
            summary:
              "અवैધ વૃક્ષ કાપ, જંગલ આગ અને શિકાર પર્યાવરણ અને ભવિષ્યને નુકસાન કરે છે.",
            measures: [
              "જંગલ વિસ્તારમાં આગ ન લગાવો અથવા બળતી વસ્તુ ન છોડો.",
              "પ્લાસ્ટિક/કાચ અથવા કચરો હરિયાળી જગ્યાએ ન ફેંકો.",
              "અवैધ કાપ/શિકાર અથવા શંકાસ્પદ પ્રવૃત્તિ તરત રિપોર્ટ કરો.",
            ],
            complaintSteps: [
              "ચોક્કસ સ્થાન, સમય અને તમે શું જોયું તે નોંધો.",
              "સુરક્ષિત હોય તો ફોટો/વિડિયો લો.",
              "વન વિભાગ અથવા સ્થાનિક હેલ્પલાઇનને માહિતી આપો.",
              "પુરાવા સાથે નજીકના ઓફિસ/પોલીસમાં લેખિત ફરિયાદ કરો.",
            ],
          },
          roads: {
            label: "રસ્તા અને ટ્રાફિક",
            summary:
              "ખાડા, ખરાબ સિગ્નલ અને અસુરક્ષિત રસ્તા ગંભીર અકસ્માત કરાવી શકે છે.",
            measures: [
              "ટ્રાફિક નિયમો પાળો અને હેલમેટ/સીટબેલ્ટ પહેરો.",
              "ઇમર્જન્સી લેન/પેદેસ્ટ્રિયન ક્રોસિંગ બ્લોક ન કરો.",
              "ખરાબ રસ્તા, ખુલ્લા મેનહોલ અથવા તૂટેલા સિગ્નલ રિપોર્ટ કરો.",
            ],
            complaintSteps: [
              "સમસ્યાના સ્પષ્ટ ફોટા લો અને નજીકના લૅન્ડમાર્ક બતાવો.",
              "રસ્તાનું નામ/ચોરાહી અથવા નજીકનું સ્થાન નોંધો.",
              "નગરપાલિકા/રોડ ઓથોરિટી પર ફરિયાદ નોંધાવો.",
              "તાત્કાલિક જોખમ હોય તો પોલીસ/ટ્રાફિક હેલ્પલાઇન કૉલ કરો.",
            ],
          },
          rivers: {
            label: "નદીઓ અને જળસ્રોત",
            summary:
              "કચરો/કેમિકલ/ગટરનું પાણી નદી-તળાવમાં જવાથી પર્યાવરણ અને પીવાનું પાણી બગડે છે.",
            measures: [
              "નદી/તળાવમાં કચરો કે પ્લાસ્ટિક ન ફેંકો.",
              "ખુલ્લા જળસ્રોત પાસે તીખા કેમિકલનો ઉપયોગ ન કરો.",
              "સ્થાનિક સફાઈ અભિયાનમાં ભાગ લો/સમર્થન કરો.",
            ],
            complaintSteps: [
              "પ્રદૂષણનો પ્રકાર નોંધો (કચરો, ગટર, કેમિકલ વગેરે).",
              "તારીખ, સમય અને સ્થાન લખો.",
              "ફોટા સાથે PCB/નગરપાલિકાને જાણ કરો.",
              "ટેંકર/ઉદ્યોગ દેખાય તો વિગત સત્તાધીશોને આપો.",
            ],
          },
          buildings: {
            label: "મકાન અને આગ સુરક્ષા",
            summary:
              "અનધિકૃત બાંધકામ, બંધ ફાયર એક્ઝિટ અને ખરાબ વાયરિંગથી દુર્ઘટનાઓ થઈ શકે છે.",
            measures: [
              "સીડી/બહાર નીકળવાના રસ્તા અવરોધિત ન રહે તે જુઓ.",
              "ફાયર એક્સટિંગ્વિશર અને અલાર્મની સર્વિસિંગ ચકાસો.",
              "સોકેટ ઓવરલોડ કે ખરાબ એક્સટેન્શનનો ઉપયોગ ન કરો.",
            ],
            complaintSteps: [
              "લૉક્ડ એક્ઝિટ/ખુલ્લી વાયરિંગ જેવી સમસ્યાનો પુરાવો રાખો.",
              "સોસાયટી/મેનેજમેન્ટને લેખિતમાં જાણ કરો.",
              "કાર્યवाही ન થાય તો નગરપાલિકા/ફાયર વિભાગમાં ફરિયાદ કરો.",
              "તાત્કાલિક જોખમ હોય તો બહાર નીકળો અને 101 પર કૉલ કરો.",
            ],
          },
          safety: {
            label: "જાહેર સુરક્ષા",
            summary:
              "ભીડ, અસુરક્ષિત જાહેર જગ્યાઓ અને નબળી લાઇટિંગથી ગુનો/અપઘાતનો જોખમ વધે છે.",
            measures: [
              "ઇમર્જન્સી એક્ઝિટ વગર ભીડવાળા સ્થળ ટાળો.",
              "રાત્રે સારી રીતે પ્રકાશિત માર્ગ પસંદ કરો.",
              "તૂટેલી સ્ટ્રીટ લાઇટ/અસુરક્ષિત પાર્ક/હેરેસમેન્ટ રિપોર્ટ કરો.",
            ],
            complaintSteps: [
              "સ્થળ, સમય અને ઘટના વિગતો લખો.",
              "હેરેસમેન્ટ/ગુનામાં તરત પોલીસ/હેલ્પલાઇન કૉલ કરો.",
              "અંધારી ગલી/તૂટેલી લાઇટ જેવી સમસ્યા નગરપાલિકામાં નોંધાવો.",
              "ફરિયાદના રેફરન્સ નંબર સાચવો.",
            ],
          },
        },
      },
    },
  },
} as const;

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "en",
      supportedLngs: [...SUPPORTED_LANGUAGES],
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
      },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;

