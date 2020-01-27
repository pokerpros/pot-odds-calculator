import test from 'ava'

/**
 * Library under test
 */

import { potOddsCalculator } from '../src/pot-odds-calculator'


test('should find 10 into 30 to be 0.25', t => {
    t.is(0.25, potOddsCalculator(30, 10))
})

test('should throw when pot < 0', t => {
    t.throws(() => potOddsCalculator(-1, 1))
})

test('should throw when call < 0', t => {
    t.throws(() => potOddsCalculator(1, -1))
})

test('should return 0 when call is 0', t => {
    t.is(0, potOddsCalculator(10, 0))
})

test('should throw when pot === 0', t => {
    t.throws(() => potOddsCalculator(0, 1))
})
