import { describe, test, expect, beforeEach, vi } from 'vitest'
import { formatUTCDateTimeStrToddMMMyyyy, makeInitials, isCurrentPath } from '../utils';

describe('formatUTCDateTimeStrToddMMMyyyy', () => {
    beforeEach(() => {
        const {DateTimeFormat} = Intl;
        
        vi.spyOn(Intl, 'DateTimeFormat').mockImplementation((_, options) => {
                return new DateTimeFormat('en-SG', options)
        });
    })

    test.each([
        {
            input: "2022-01-12T17:58:25.000000Z",
            output: "13 Jan 2022"
        },
        {
            input: "2022-01-12T10:58:25.000000Z",
            output: "12 Jan 2022"
        },
        {
            input: null,
            output: ""
        },
        {
            input: undefined,
            output: ""
        },
    ])('$input -> $output', ({input, output}) => {
        expect(formatUTCDateTimeStrToddMMMyyyy(input)).toBe(output)
    })
})


describe('makeInitials', () => {
    test.each([
        {
            input: 'Andy Smith',
            expected: 'AS'
        },
        {
            input: 'George Goh Hello',
            expected: 'GG'
        },
        {
            input: 'Andy',
            expected: 'A'
        },
        {
            input: '234234',
            expected: '2'
        }
    ])('$input to be $expected', ({input, expected}) => {
        expect(makeInitials(input)).toBe(expected);
    })
});

describe('isCurrentPath', () => {
    test.each([
        {
            current: '/dashboard',
            destination: '/dashboard',
            expected: true
        },
        {
            current: '/dashboard',
            destination: '/login',
            expected: false
        }
    ])('$current, $destination to be $expected', ({current, destination, expected}) => {
        expect(isCurrentPath(current, destination)).toBe(expected);
    })
})