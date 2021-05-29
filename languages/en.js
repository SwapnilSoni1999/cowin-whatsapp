// English Language
module.exports = {
    introductionMessageForthebot: "Hello, I am a Vaccination Booking Bot. I will help you and your family stay safe. Book your vaccination now.",

    initiate_conversation_message: ["hi", "hiii", "HI", "HELLLO", "Hello", "Hi", "Hey", "hey", "HEY", "hello"],

    howMayIHelpYou: "How may I help you?\n\n"+
    "1. Schedule an Appointment\n"+
    "2. Download Certificate\n\n"+
    "Please enter the number associated with the option",
    
    // Add Benificiery
    selectIDProof: "Please select the ID proof to proceed\n\n"+
    "1. Aadhaar Card\n"+
    "2. Driving License\n"+
    "3. Pan Card",
    enterAadharcardNumber : "Enter the Aadhaar Card number",
    enterDrivingLicenseNumber : "Enter the Driving License number",
    enterPancardNumber : "Enter the PAN Card number",
    askForNameofUser : "Please enter the full name",
    askForGenderofUser : "Please select the gender.\n\n"+
    "1. Male\n"+
    "2. Female\n"+
    "3. Other",
    askForBirthYearOfUser: "Please enter the birth year in *‘YYYY’* format",
    otpMessageForBenificiery: "Please enter OTP received on the mobile phone",

    // Center List
    enterPincodeForSession: "Enter the pin code to search for vaccination centres",

    // Appointment
    enterPincodeForAppointment: "Enter the pin code to search for vaccination centres", //--
    enterDate: "Please enter the date to book vaccination in *dd-mm-yyyy’* format", //--
    otpMessageForAppointment: "Please enter OTP received on the mobile phone",

    // Download Certificate
    otpMessageForCertificate: "Please enter OTP received on the mobile phone",

    // Greetings
    thankYouMessageForUser: "Thank you for your cooperation. You have successfully added a beneficiary to the number.",
    declinedSubmission: "Thank you for your cooperation. You have denied adding a beneficiary to the number.",


    // Fallbacks
    default_error_message: "Invalid Input, please type the number associated with the option(s)",
    invalidOTP : "Invalid Input, the OTP entered is incorrect",
    noCertificateDownload: "I'm sorry, the beneficiary selected has not been vaccinated. Hence, certificate cannot be generated.",
    noBenificeriesFound: "Currently no beneficiary exists. Start the registration process by adding a new beneficiary.",
    invalidAadhar: "Invalid Input, please a valid Aadhar Card number",
    invalidPincode: "Invalid Input, please enter a 6 digit number",
    Note: "The number has reached the maximum limit for beneficiaries which is 4.",
    handle_other_format_message: "I'm Sorry, Invalid Input, attachments are not allowed.",
    

    communicationLanguageChoices: "Please select the language of communication\n\n"+
    "1. English\n"+
    // "2. हिंदी\n"+
    "2. ಕನ್ನಡ\n\n"+
    "Select the language of your choice",

    // communicationLanguageChoicesTemplateMessage : ["cow_language_selection_1","en"],
    // communicationLanguageChoicesTemplateMessageBtn1 : "English",
    // communicationLanguageChoicesTemplateMessageBtn2 : "हिंदी",
    // communicationLanguageChoicesTemplateMessageBtn3 : "ಕನ್ನಡ",

    // Self & Other Registration
    registrationOptions: "Please select an option for whom you're registering\n\n"+
    "1. For Myself\n"+
    "2. For Someone Else",

    mobileNumber: "Please enter a mobile number",
    invalidMobileNumber: "Invalid mobile number, Please enter correct one.",


    // Rejected
    optionsForProceedAhead: "Select an option to proceed ahead\n\n"+
    "1. Add New Benificiary\n"+
    "2. Book an Appointment\n\n"+
    "0. Main Menu",
}