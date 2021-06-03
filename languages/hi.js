// Hindi translation
module.exports = {
    introductionMessageForthebot: "हैलो, मैं एक वैक्सीनेशन बुकिंग बॉट हूँ। मैं आपको और आपके परिवार को सुरक्षित रहने में मदद करूंगा। अभी अपना वैक्सीनेशन बुक करें।",

    initiate_conversation_message: ["hi", "hiii", "HI", "HELLLO", "Hello", "Hi", "Hey", "hey", "HEY", "hello"],

    howMayIHelpYou: "में आपकी कैसे मदद कर सकता हूं?\n\n"+
    "1. अपॉइंटमेंट शेड्यूल करें\n"+
    "2. सर्टिफिकेट डाउनलोड करे\n\n"+
    "कृपया विकल्प से जुड़ी हुई संख्या दर्ज करें",
    
    // Add Benificiery
    selectIDProof: "कृपया उस आईडी प्रूफ का चयन करें जिसके साथ आप आगे बढ़ना चाहते हैं\n\n"+
    "1. आधार कार्ड\n"+
    "2. ‎ड्राइविंग लाइसेंस\n"+
    "3. पैन कार्ड",
    enterAadharcardNumber : "आधार कार्ड नंबर दर्ज करें",
    enterDrivingLicenseNumber : "ड्राइविंग लाइसेंस नंबर दर्ज करें",
    enterPancardNumber : "पैन कार्ड नंबर दर्ज करें",
    askForNameofUser : "कृपया पूरा नाम दर्ज करें",
    askForGenderofUser : "कृपया अपना लिंग चुनें\n\n"+
    "1. पुरुष\n"+
    "2. महिला\n"+
    "3. अन्य",
    askForBirthYearOfUser: "कृपया *'YYYY'* प्रारूप में जन्म वर्ष दर्ज करें",
    otpMessageForBenificiery: "कृपया मोबाइल फोन पर प्राप्त ओटीपी दर्ज करें",

    // Center List
    enterPincodeForSession: "टीकाकरण केंद्रों को खोजने के लिए पिन कोड दर्ज करें",

    // Appointment
    enterPincodeForAppointment: "टीकाकरण केंद्रों को खोजने के लिए पिन कोड दर्ज करें",
    enterDate: "कृपया *'dd-mm-yyyy'* प्रारूप में वैक्सीनेशन बुक करने की तिथि दर्ज करें",
    otpMessageForAppointment: "कृपया मोबाइल फोन पर प्राप्त ओटीपी दर्ज करें",

    // Download Certificate
    otpMessageForCertificate: "कृपया मोबाइल फोन पर प्राप्त ओटीपी दर्ज करें",

    // Greetings
    thankYouMessageForUser: "आपके सहयोग के लिए धन्यवाद। आपने संख्या में एक लाभार्थी को सफलतापूर्वक जोड़ लिया है।",
    declinedSubmission: "आपके सहयोग के लिए धन्यवाद। आपने किसी लाभार्थी को संख्या में जोड़ने से इनकार किया है।",


    // Fallbacks
    default_error_message: "अमान्य इनपुट, कृपया विकल्प (विकल्पों) से जुड़ी संख्या टाइप करें",
    invalidOTP : "अमान्य इनपुट, दर्ज किया गया ओटीपी गलत है",
    noCertificateDownload: "चयनित लाभार्थी का टीकाकरण नहीं किया गया है। इसलिए सर्टिफिकेट नहीं बनाया जा सकता है।",
    noBenificeriesFound: "वर्तमान में कोई लाभार्थी मौजूद नहीं है। एक नया लाभार्थी जोड़कर पंजीकरण प्रक्रिया शुरू करें।",
    invalidAadhar: "अमान्य इनपुट, कृपया एक मान्य आधार कार्ड नंबर दर्ज करें",
    invalidDrivingLicense: "अमान्य इनपुट, कृपया एक वैध ड्राइविंग लाइसेंस नंबर दर्ज करें",
    invalidPAN: "अमान्य इनपुट, कृपया एक मान्य पैन कार्ड नंबर दर्ज करें",
    invalidPincode: "अमान्य इनपुट, कृपया 6 अंकों की संख्या दर्ज करें",
    handle_other_format_message: "क्षमा करें, अमान्य इनपुट, अटैचमेंट की अनुमति नहीं है।",
    noCentersFound: "दर्ज किए गए पिन कोड पर कोई केंद्र नहीं मिला, कृपया कोई दूसरा पिन कोड दोबारा दर्ज करें या बाद में पुन: प्रयास करें",
    invalidBirthYear: "अमान्य इनपुट, कृपया 'YYYY' प्रारूप में जन्म वर्ष दर्ज करें",
    invalidAppointmentDateFormat: "अमान्य इनपुट, कृपया 'dd-mm-yyyy' प्रारूप में टीकाकरण बुक करने की तिथि दर्ज करें",
    invalidAppointmentDateinPast: "अमान्य इनपुट, कृपया आज की तारीख या आगे की तारीख दर्ज करें",
    

    communicationLanguageChoices: "Please select the language of communication\n\n"+
    "1. English\n"+
    "2. ಕನ್ನಡ\n"+
    "3. हिंदी\n\n"+
    "Select the language of your choice",

    // communicationLanguageChoicesTemplateMessage : ["cow_language_selection_1","en"],
    // communicationLanguageChoicesTemplateMessageBtn1 : "English",
    // communicationLanguageChoicesTemplateMessageBtn2 : "हिंदी",
    // communicationLanguageChoicesTemplateMessageBtn3 : "ಕನ್ನಡ",

    // Self & Other Registration
    registrationOptions: "कृपया एक विकल्प चुनें जिसके लिए आप पंजीकरण कर रहे हैं\n\n"+
    "1. अपने आप के लिए\n"+
    "2. किसी और के लिए",

    mobileNumber: "मोबाइल नंबर दर्ज करें",
    invalidMobileNumber: "अमान्य मोबाइल नंबर, कृपया सही दर्ज करें।",


    //////////////////// Other Messages - in Controller File
    // 1. Beneficiery Message Generator
    beneficiaryMessageSubPart1:"यहाँ वर्तमान में पंजीकृत लाभार्थी हैं:",
    beneficiaryMessageSubPart2: "0. नया लाभार्थी जोड़ें",
    beneficiaryMessageSubPart3: "कृपया विकल्प से जुड़ी हुई संख्या दर्ज करें",
    Note: "लाभार्थियों के लिए यह संख्या अधिकतम सीमा तक पहुंच गई है जो 4 है।",
    // 2. Centers Message Generator
    centersMessageSubPart1: "यहाँ वर्तमान उपलब्ध केंद्र हैं",
    centersMessageSubPart2 :"केंद्र आईडी",
    centersMessageSubPart3: "केंद्र का नाम",
    centersMessageSubPart4: "पता",
    centersMessageSubPart5: "टीका",
    centersMessageSubPart6: "आयु सीमा",
    centersMessageSubPart7: "उपलब्ध क्षमता खुराक 1",
    centersMessageSubPart8: "उपलब्ध क्षमता खुराक 2",
    centersMessageSubPart9: "कृपया केंद्र का चयन करने के विकल्प के साथ जुड़ी संख्या दर्ज करें",
    // 3. Slots Message Generator
    slotMessageSubPart1: "कृपया अपॉइंटमेंट बुक करने के लिए समय स्लॉट का चयन करें",
    slotMessageSubPart2: "कृपया विकल्प से जुड़ी संख्या दर्ज करें",

    //////////////////// Other Messages - in Handler File
    // 1. Add new Beneficiary
    // 1.1 ID Proof Selection
    idName1: "आधार कार्ड",
    idName2: "ड्राइविंग लाइसेंस",
    idName3: "पैन कार्ड",
    // 1.2 Gender Selection
    gendermale: "पुरुष",
    genderfemale: "महिला",
    genderother: "अन्य",
    // 1.3 Confirmation Message
    confirmationTitle: "कृपया सबमिट की गई जानकारी की पुष्टि करें",
    confirmName: "नाम",
    confirmGender: "लिंग",
    confirmYes: "हाँ",
    confirmNo: "नहीं ",
    confirmNumberString: "नंबर",

     // Template Messages
     communicationLanguageChoicesTemplateMessage : ["cow_language_selection_1","en"],
     communicationLanguageChoicesTemplateMessageBtn1 : "English",
     communicationLanguageChoicesTemplateMessageBtn2 : "हिंदी",
     communicationLanguageChoicesTemplateMessageBtn3 : "ಕನ್ನಡ",
}