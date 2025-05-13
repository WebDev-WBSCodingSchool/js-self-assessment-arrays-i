import { test, expect } from '@playwright/test';
import { calculateMedian, listNamesAndEmails, shiftAround, toShiftedAround } from '../src/studentFunctions.js';

test.describe('toShiftedAround()', () => {
  test.skip(toShiftedAround() === 'NOT IMPLEMENTED', 'toShiftedAround() is not implemented');
  const cases = [
    [
      [1, 2, 3, 4, 5],
      [5, 2, 3, 4, 1],
    ],
    [[], []],
    [[1], [1]],
    [
      [1, 2],
      [2, 1],
    ],
  ];

  for (const [c, expected] of cases) {
    test(`toShiftedAround([${c[0]},...]) -> ${expected}`, () => {
      const copyC = [...c];
      const actual = toShiftedAround(c);
      expect(actual).toEqual(expected);
      expect(copyC).toEqual(c);
    });
  }
});

test.describe('shiftAround()', () => {
  test.skip(shiftAround() === 'NOT IMPLEMENTED', 'shiftAround() is not implemented');
  const cases = [
    [
      [1, 2, 3, 4, 5],
      [5, 2, 3, 4, 1],
    ],
    [[], []],
    [[1], [1]],
    [
      [1, 2],
      [2, 1],
    ],
  ];
  for (const [c, expected] of cases) {
    test(`shiftAround([${c[0]},...]) -> ${expected}`, () => {
      const actual = shiftAround(c);
      expect(actual).toBeUndefined();
      expect(c).toEqual(expected);
    });
  }
});

test.describe('calculateMedian()', () => {
  test.skip(calculateMedian() === 'NOT IMPLEMENTED', 'calculateMedian() is not implemented');
  const cases = [
    [[1, 2, 3, 4, 5], 3],
    [[5, 3, 2, 4, 1], 3],
    [[], undefined],
    [[1], 1],
    [[1, 2], 1.5],
    [[1, 3, 7, 9, 3, 8, 6], 6],
    [[1, 8, 3, 4, 5, 6, 2, 9], 4.5],
  ];

  for (const [c, expected] of cases) {
    test(`calculateMedian([${c[0]},...]) -> ${expected}`, () => {
      const copyC = [...c];
      const actual = calculateMedian(c);
      console.log(actual);
      expect(actual).toEqual(expected);
      expect(copyC).toEqual(c);
    });
  }
});

test.describe('listNamesAndEmails()', () => {
  test.skip(listNamesAndEmails() === 'NOT IMPLEMENTED', 'listNamesAndEmails() is not implemented');
  const cases = [
    // Test case 1: Empty array input
    [
      'Empty array input',
      [], // input: an empty array
      [], // expected output: an empty array
    ],

    // Test case 2: Array with one valid user object
    [
      'Array with one valid user object',
      [{ username: 'Guybrush', email: 'mighty@pirate.gov', id: 1 }], // input
      [['Guybrush', 'mighty@pirate.gov']], // expected output
    ],

    // Test case 3: Array with multiple valid user objects
    [
      'Array with multiple valid user objects',
      [
        { username: 'Elaine', email: 'governor@melee.org', active: true },
        { username: 'LeChuck', email: 'lechuck@ghost.sea', evil: true },
      ],
      [
        ['Elaine', 'governor@melee.org'],
        ['LeChuck', 'lechuck@ghost.sea'],
      ],
    ],

    // Test case 4: Array with a user object missing an email
    [
      'Array with a user object missing an email',
      [
        { username: 'Stan', occupation: 'salesman' },
        { username: 'Guybrush', email: 'mighty@pirate.gov' },
      ], // input
      [['Guybrush', 'mighty@pirate.gov']], // expected output
    ],

    // Test case 5: Array with a user object missing a username
    [
      'Array with a user object missing a username',
      [
        { email: 'herman@toothrot.isle', hermit: true },
        { username: 'Guybrush', email: 'mighty@pirate.gov' },
      ], // input
      [['Guybrush', 'mighty@pirate.gov']], // expected output
    ],

    // Test case 6: Array with user objects, some missing username, some missing email
    [
      'Array with user objects, some missing username, some missing email',
      [
        { username: 'Guybrush', email: 'mighty@pirate.gov' },
        { favouriteIceCream: 'chocolate', email: 'icecreamconnoisseur@mail.berlin' },
        { username: 'VoodooLady', mystical: true },
        { username: 'Carla', email: 'swordmaster@melee.island', skill: 'master' },
      ], // input
      [
        ['Guybrush', 'mighty@pirate.gov'],
        ['Carla', 'swordmaster@melee.island'],
      ], // expected output
    ],

    // Test case 7: Array with no valid user objects (all missing either username or email or both)
    [
      'Array with no valid user',
      [({ name: 'Bob', id: 1 }, { emailOnly: 'test@example.com' }, { userOnly: 'NoEmailMan' })], // input
      [], // expected output
    ],

    // Test case 8: Array with user objects where email is null
    [
      'Array with user objects where email is null',
      [
        { username: 'User1', email: 'user1@example.com' },
        { username: 'User2', email: null },
        { username: 'User3', email: 'user3@example.com' },
      ], // input
      [
        ['User1', 'user1@example.com'],
        ['User3', 'user3@example.com'],
      ], // expected output
    ],

    // Test case 9: Array with user objects where username is undefined
    [
      'Array with user objects where username is undefined',
      [
        { username: 'UserA', email: 'usera@example.com' },
        { username: undefined, email: 'userb@example.com' },
        { username: 'UserC', email: 'userc@example.com' },
      ], // input
      [
        ['UserA', 'usera@example.com'],
        ['UserC', 'userc@example.com'],
      ], // expected output
    ],

    // Test case 10: Array with user objects where username or email is an empty string (which is falsy)
    [
      'Array where username or email is an empty string',
      [
        { username: '', email: 'noname@example.com' },
        { username: 'ValidUser', email: '' },
        { username: 'GoodUser', email: 'good@example.com' },
        { username: '', email: '' },
      ], // input
      [['GoodUser', 'good@example.com']], // expected output
    ],

    // Test case 11: Mixed content with various properties, ensuring only username and email are extracted
    [
      'Mixed content',
      [
        { id: 10, username: 'TestUser10', email: 'test10@domain.com', age: 30, city: 'Somewhere' },
        { id: 11, name: 'NoUser', email: 'fail@domain.com' },
        { id: 12, username: 'TestUser12', emailAddress: 'test12@domain.com' }, // property name mismatch for email
        { id: 13, username: 'TestUser13', email: 'test13@domain.com', active: false },
      ], // input
      [
        ['TestUser10', 'test10@domain.com'],
        ['TestUser13', 'test13@domain.com'],
      ], // expected output
    ],
  ];

  for (const [desc, c, expected] of cases) {
    test(`${desc} -> ${JSON.stringify(expected)}`, () => {
      expect(listNamesAndEmails(c)).toEqual(expected);
    });
  }
});
