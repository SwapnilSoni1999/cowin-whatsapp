// English language
module.exports = {
    introductionMessageForthebot: "Hello, I am a Vaccination Booking Bot. I will help you and your family stay safe. Book your vaccination now.",

    initiate_conversation_message: ["hi", "#", "hello"],

    howMayIHelpYou: "How may I help you ?\n\n"+
    "1. Schedule an Appointment\n"+
    "2. Download Certificate",
    
    // Add Benificiery
    selectIDProof: "Please select the ID proof you would like to proceed with\n\n"+
    "1. Aadhaar Card\n"+
    "2. Driving License\n"+
    "3. Pan Card",
    enterAadharcardNumber : "Enter the Aadhar Card number",
    enterDrivingLicenseNumber : "Enter the Driving License number",
    enterPancardNumber : "Enter the Pan Card number",
    askForNameofUser : "May I know your name?",
    askForGenderofUser : "Please select your gender.\n\n"+
    "1. Male\n"+
    "2. Female\n"+
    "3. Other",
    askForBirthYearOfUser: "Enter year of birth in the ‘YYYY’ format",
    otpMessageForBenificiery: "Please enter an OTP",

    // Center List
    enterPincodeForSession: "Please enter a pincode",

    // Appointment
    enterPincodeForAppointment: "Please enter a pincode for appointment",
    enterDate: "Enter a date to book an appointment in dd-mm-yyyy format",
    otpMessageForAppointment: "Please enter an OTP",

    // Download Certificate
    otpMessageForCertificate: "Please enter an OTP",

    // Greetings
    thankYouMessageForUser: "Thank you for your cooperation, the registration process has been completed.",
    declinedSubmission: "You have declined to submit the data.",


    // Fallbacks
    default_error_message: "Invalid input, please enter a valid option.",
    invalidOTP : "You have entered invalid otp. Please resubmit the request",
    noCertificateDownload: "None of the beneficiaries got vaccinated. Hence, No certificate is there to download.",
    noBenificeriesFound: "No benificeries found. Hence, No certificate is there to download.",
    invalidAadhar: "Invalid Aadhaar card number. Please re-enter",


    optionsForProceedAhead: "Select an option to proceed ahead\n\n"+
    "1. Add New Benificiery\n"+
    "2. Book an Appointment\n\n"+
    "0. Main Menu"
}