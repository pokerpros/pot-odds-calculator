#!/usr/bin/env node

/**
 * index
 * Entry-point for pot-odds-calculator
 */

import { docopt } from 'docopt'
import { version } from './version'
import { potOddsCalculator } from './pot-odds-calculator'


const docstring = `
Pot-Odds Calculator

Usage:
    pot-odds <pot> <call>
`

interface CommandLineOptions {
    pot: number;
    call: number;
}


function parseOptions(): CommandLineOptions {
    const opts = docopt(
        docstring,
        {
            help: true,
            version: version,
            exit: true
        }
    )

    const pot = Number.parseInt(opts['<pot>'], 10)
    if (Number.isNaN(pot)) {
        throw new Error(`'pot' expected to be a number`)
    }

    const call = Number.parseInt(opts['<call>'], 10)
    if (Number.isNaN(call)) {
        throw new Error(`'call' expected to be a number`)
    }

    return {
        pot,
        call
    }
}


function main(): void {

    const options = parseOptions()

    console.log(potOddsCalculator(options.pot, options.call))
}


main()
