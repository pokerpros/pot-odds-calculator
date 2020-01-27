/**
 * pot-odds-calculator
 * Pot-odds calculator
 */


export function potOddsCalculator(
    pot: number,
    call: number
): number {

    if (call === 0) {
        return 0
    }

    if (pot < 0) {
        throw new Error(`'Pot' cannot be a negative value`)
    }

    if (call < 0) {
        throw new Error(`'Call' cannot be a negative value`)
    }

    return call / (pot + call)
}
