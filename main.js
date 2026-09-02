function isValid(cardNumber) {
    const digits = cardNumber.replace(/\D/g, "").split("").map(Number);

    if (digits.length < 2) return false;

    let sum = 0;
    const parity = digits.length % 2;

    for (let i = 0; i < digits.length - 1; i++) {
        let digit = digits[i];

        if (i % 2 !== parity) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }

        sum += digit;
    }

    const checkDigit = (10 - (sum % 10)) % 10;
    return digits[digits.length - 1] === checkDigit;
}

// Ejemplo
console.log(isValid("4111111111111111")); // true
console.log(isValid("4111111111111112")); // false