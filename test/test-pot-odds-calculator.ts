import test from 'ava'

/**
 * Library under test
 */

import { potOddsCalculator } from '../src/pot-odds-calculator'


test('should find 10 into 30 to be 0.25', t => {
    t.is(0.25, potOddsCalculator(30, 10))
})
