class DataGenerator {
    generateID() {
        let result = ''
        let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let charactersLength = characters.length
        for (let i = 0; i < charactersLength; i++) {
            result += characters.charAt(Math.floor(Math.random) * charactersLength)
        }
        return result
    }

    generateEmail() {
        let email = ''
        let values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_'
        let temp
        for (let i = 0; i < 10; i++) {
            temp += values.charAt(Math.round(values.length * Math.random()))
            email += temp
        }
        temp = ''
        email += '@'
        for (let i = 0; i < 8; i++) {
            temp += values.charAt(Math.round(values.length * Math.random()))
            email += temp
        }
        email += '.com'
        return email
    }

    generateNumber() {
        let numbers = Math.floor(Math.random() * 9000000000) + 1000000000
        return numbers.toString

    }

}