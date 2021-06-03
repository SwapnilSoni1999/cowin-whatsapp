// English Language
module.exports = {
    introductionMessageForthebot: "Hello, I am a Vaccination Booking Bot. I will help you and your family stay safe. Book your vaccination now.",

    initiate_conversation_message: ["hi", "hiii", "hi", "helllo", "hello", "hey", "hy", "hyyy", "hyy", "helo"],

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
    enterDate: "Please enter the date to book vaccination in *‘dd-mm-yyyy’* format", //--
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
    invalidDrivingLicense: "Invalid Input, please enter a valid Driving License number",
    invalidPAN: "Invalid Input, please enter a valid PAN Card number",
    invalidPincode: "Invalid Input, please enter a 6 digit number",
    handle_other_format_message: "I'm Sorry, Invalid Input, attachments are not allowed.",
    noCentersFound: "No centers were found on the pincode entered, please re-enter a different pincode or try again later",
    invalidBirthYear: "Invalid Input, please enter the birth year in ‘YYYY’ in format",
    invalidAppointmentDateFormat: "Invalid Input, please enter the date to book vaccination in ‘dd-mm-yyyy’ format ",
    invalidAppointmentDateinPast: "Invalid Input, please enter today’s date or a date in the future",
    

    communicationLanguageChoices: "Please select the language of communication\n\n"+
    "1. English\n"+
    "2. ಕನ್ನಡ\n"+
    "3. हिंदी\n\n"+
    "Select the language of your choice",

    // Self & Other Registration
    registrationOptions: "Please select an option for whom you're registering\n\n"+
    "1. For Myself\n"+
    "2. For Someone Else",

    mobileNumber: "Please enter a mobile number",
    invalidMobileNumber: "Invalid mobile number, Please enter correct one.",


    //////////////////// Other Messages - in Controller File
    // 1. Beneficiery Message Generator
    beneficiaryMessageSubPart1:"Here are the currently registered beneficiaries:",
    beneficiaryMessageSubPart2: "0. Add New Benificiary",
    beneficiaryMessageSubPart3: "Please enter the number associated with the option to book an appointment",
    Note: "The number has reached the maximum limit for beneficiaries which is 4.",
    // 2. Centers Message Generator
    centersMessageSubPart1: "Here are the current available centres",
    centersMessageSubPart2 :"Center ID",
    centersMessageSubPart3: "Center Name",
    centersMessageSubPart4: "Address",
    centersMessageSubPart5: "Vaccine",
    centersMessageSubPart6: "Age Limit",
    centersMessageSubPart7: "Available Capacity Dose 1",
    centersMessageSubPart8: "Available Capacity Dose 2",
    centersMessageSubPart9: "Please enter the number associated with the option to select the centre",
    // 3. Slots Message Generator
    slotMessageSubPart1: "You’re almost there. Please select the time slot to book the appointment",
    slotMessageSubPart2: "Please enter the number associated with the option",

    //////////////////// Other Messages - in Handler File
    // 1. Add new Beneficiary
    // 1.1 ID Proof Selection
    idName1: "Aadhaar Card",
    idName2: "Driving License",
    idName3: "PAN Card",
    // 1.2 Gender Selection
    gendermale: "Male",
    genderfemale: "Female",
    genderother: "Other",
    // 1.3 Confirmation Message
    confirmationTitle: "Please confirm the information submitted:",
    confirmName: "Name",
    confirmGender: "Gender",
    confirmYes: "Yes",
    confirmNo: "No",
    confirmNumberString: "number",


    // Template Messages
    communicationLanguageChoicesTemplateMessage : ["cow_language_selection_1","en"],
    communicationLanguageChoicesTemplateMessageBtn1 : "English",
    communicationLanguageChoicesTemplateMessageBtn2 : "हिंदी",
    communicationLanguageChoicesTemplateMessageBtn3 : "ಕನ್ನಡ",
}