const drivingLicense = (number) => {
    if (process.env.NODE_ENV === 'development') {
        return true
    }
    const drivReg =  /^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/
    return drivReg.test(number)
}