import { testProp, fc } from 'ava-fast-check'
import { expect } from 'chai'


/**
 * Library under test
 */

import { potOddsCalculator } from '../src/pot-odds-calculator'


function isNonNegative(value: number): boolean {
    return value >= 0
}

function isNonZero(value: number): boolean {
    return value !== 0
}

testProp(
    'should return number between 0 (inclusive) and 1 (inclusive)',
    [
        fc.integer().filter(isNonNegative).filter(isNonZero),
        fc.integer().filter(isNonNegative)
    ],
    (pot, call) => {

        const odds = potOddsCalculator(pot, call)

        expect(odds).to.be.gte(0)
        expect(odds).to.be.lte(1)
    }
)

testProp(
    'should calculate the ratio of pot to call',
    [
        fc.integer().filter(isNonNegative).filter(isNonZero),
        fc.integer().filter(isNonNegative)
    ],
    (pot, call) => {

        const odds = potOddsCalculator(pot, call)

        const percent = call / (pot + call)

        expect(odds).to.equal(Number.isNaN(percent) ? 0 : percent)
    }
)
