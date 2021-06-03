module.exports = {
    userStates: {
        // from main menu
        intro: 'intro',
        scheduleAppointment: 'scheduleAppointment',
        downloadCertificate: 'downloadCertificate'
    },
    userSteps: {
        intro: {
            scheduleAppointment: 1,
            downloadCertificate: 2
        },
        scheduleAppointment: {
        },
        downloadCertificate: {
            verifyOtp: 1,
            chooseBenef: 2
        }
    }
}