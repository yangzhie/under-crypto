export function formatter(value) {
    return Intl.NumberFormat('en', {
        notation: 'compact',
        maximumSignificantDigits: 4
    }).format(value)
}

export function checkColor(value) {
    if (value < 0) {
        return 'negative'
    } else if (value > 0) {
        return 'positive'
    } else {
        return 'neutral'
    }
}

export function checkIfInfinite(input) {
    if (input === '0') {
        return '∞'
    } else {
        return input
    }
}