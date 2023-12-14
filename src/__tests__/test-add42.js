import {jest} from '@jest/globals';
import { add42 } from '../hi-lib.js';
// const { add42 } = require('../hi-lib.mjs');

test('add42', () => {
    expect(add42(0)).toBe(42);
});
