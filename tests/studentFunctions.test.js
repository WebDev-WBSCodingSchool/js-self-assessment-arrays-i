import { test, expect } from '@playwright/test';
import {
  calculateMedian,
  listNamesAndEmails,
  shiftAround,
  toShiftedAround,
  decrementOrRemoveFromShoppingCart,
} from '../src/studentFunctions.js';

test.describe('toShiftedAround()', () => {
  test.skip(toShiftedAround([1, 2, 3, 4, 5]) === 'NOT IMPLEMENTED', 'toShiftedAround() is not implemented');
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
  test.skip(shiftAround([1, 2, 3, 4, 5]) === 'NOT IMPLEMENTED', 'shiftAround() is not implemented');
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
  test.skip(calculateMedian([1]) === 'NOT IMPLEMENTED', 'calculateMedian() is not implemented');
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
      expect(actual).toEqual(expected);
      expect(copyC).toEqual(c);
    });
  }
});

test.describe('listNamesAndEmails()', () => {
  test.skip(
    listNamesAndEmails([{ username: 'Guybrush', email: 'mighty@pirate.gov', id: 1 }]) === 'NOT IMPLEMENTED',
    'listNamesAndEmails() is not implemented'
  );
  const cases = [
    ['Empty array input', [], []],
    [
      'Array with one valid user object',
      [{ username: 'Guybrush', email: 'mighty@pirate.gov', id: 1 }],
      [['Guybrush', 'mighty@pirate.gov']],
    ],
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
    [
      'Array with a user object missing an email',
      [
        { username: 'Stan', occupation: 'salesman' },
        { username: 'Guybrush', email: 'mighty@pirate.gov' },
      ], // input
      [['Guybrush', 'mighty@pirate.gov']],
    ],
    [
      'Array with a user object missing a username',
      [
        { email: 'herman@toothrot.isle', hermit: true },
        { username: 'Guybrush', email: 'mighty@pirate.gov' },
      ], // input
      [['Guybrush', 'mighty@pirate.gov']],
    ],
    [
      'Array with user objects, some missing username, some missing email',
      [
        { username: 'Guybrush', email: 'mighty@pirate.gov' },
        { favouriteIceCream: 'chocolate', email: 'icecreamconnoisseur@mail.berlin' },
        { username: 'VoodooLady', mystical: true },
        { username: 'Carla', email: 'swordmaster@melee.island', skill: 'master' },
      ],
      [
        ['Guybrush', 'mighty@pirate.gov'],
        ['Carla', 'swordmaster@melee.island'],
      ],
    ],
    [
      'Array with no valid user',
      [({ name: 'Bob', id: 1 }, { emailOnly: 'test@example.com' }, { userOnly: 'NoEmailMan' })],
      [],
    ],
    [
      'Array with user objects where email is null',
      [
        { username: 'User1', email: 'user1@example.com' },
        { username: 'User2', email: null },
        { username: 'User3', email: 'user3@example.com' },
      ],
      [
        ['User1', 'user1@example.com'],
        ['User3', 'user3@example.com'],
      ],
    ],
    [
      'Array with user objects where username is undefined',
      [
        { username: 'UserA', email: 'usera@example.com' },
        { username: undefined, email: 'userb@example.com' },
        { username: 'UserC', email: 'userc@example.com' },
      ],
      [
        ['UserA', 'usera@example.com'],
        ['UserC', 'userc@example.com'],
      ],
    ],
    [
      'Array where username or email is an empty string',
      [
        { username: '', email: 'noname@example.com' },
        { username: 'ValidUser', email: '' },
        { username: 'GoodUser', email: 'good@example.com' },
        { username: '', email: '' },
      ],
      [['GoodUser', 'good@example.com']],
    ],
    [
      'Mixed content',
      [
        { id: 10, username: 'TestUser10', email: 'test10@domain.com', age: 30, city: 'Somewhere' },
        { id: 11, name: 'NoUser', email: 'fail@domain.com' },
        { id: 12, username: 'TestUser12', emailAddress: 'test12@domain.com' },
        { id: 13, username: 'TestUser13', email: 'test13@domain.com', active: false },
      ],
      [
        ['TestUser10', 'test10@domain.com'],
        ['TestUser13', 'test13@domain.com'],
      ],
    ],
  ];

  for (const [desc, c, expected] of cases) {
    test(`${desc} -> ${JSON.stringify(expected)}`, () => {
      expect(listNamesAndEmails(c)).toEqual(expected);
    });
  }
});

test.describe('decrementOrRemoveFromShoppingCart()', () => {
  test.skip(
    decrementOrRemoveFromShoppingCart([{ itemId: 1, count: 5 }], 1) === 'NOT IMPLEMENTED',
    'decrementOrRemoveFromShoppingCart() is not implemented'
  );
  const cases = [
    {
      description: 'One item, count 5',
      input: {
        cart: [{ itemId: 4123, name: 'Lightsaber', color: 'green', count: 5 }],
        itemId: 4123,
      },
      expected: [{ itemId: 4123, name: 'Lightsaber', color: 'green', count: 4 }],
    },
    {
      description: 'One item, count 1',
      input: {
        cart: [{ itemId: 423, name: 'Lightsaber', color: 'green', count: 1 }],
        itemId: 423,
      },
      expected: [],
    },
    {
      description: 'Multiple items, count 10',
      input: {
        cart: [
          { itemId: 4123, name: 'Lightsaber', color: 'green', count: 1 },
          { itemId: 9999, name: 'Grog Mug', batteriesIncluded: true, count: 10 },
        ],
        itemId: 9999,
      },
      expected: [
        { itemId: 4123, name: 'Lightsaber', color: 'green', count: 1 },
        { itemId: 9999, name: 'Grog Mug', batteriesIncluded: true, count: 9 },
      ],
    },
    {
      description: 'Multiple items mingled, count 2',
      input: {
        cart: [
          { itemId: 123, name: 'Lightsaber', color: 'green', count: 1 },
          { itemId: 999, name: 'Grog Mug', batteriesIncluded: true, count: 2 },
          { itemId: 1263, name: 'Lightsaber', color: 'green', count: 1 },
        ],
        itemId: 999,
      },
      expected: [
        { itemId: 123, name: 'Lightsaber', color: 'green', count: 1 },
        { itemId: 999, name: 'Grog Mug', batteriesIncluded: true, count: 1 },
        { itemId: 1263, name: 'Lightsaber', color: 'green', count: 1 },
      ],
    },
    {
      description: 'Multiple items mingled, count 1',
      input: {
        cart: [
          { itemId: 123, name: 'Lightsaber', color: 'green', count: 1 },
          { itemId: 532, name: 'Grog Mug', batteriesIncluded: true, count: 1 },
          { itemId: 1283, name: 'Lightsaber', color: 'green', count: 1 },
        ],
        itemId: 532,
      },
      expected: [
        { itemId: 123, name: 'Lightsaber', color: 'green', count: 1 },
        { itemId: 1283, name: 'Lightsaber', color: 'green', count: 1 },
      ],
    },
  ];

  for (const { description, input, expected } of cases) {
    test(`${description}`, () => {
      expect(decrementOrRemoveFromShoppingCart(input.cart, input.itemId)).toEqual(expected);
    });
  }
  const errorCases = [
    {
      description: 'Item not in cart',
      input: {
        cart: [{ itemId: 4123, name: 'Lightsaber', color: 'green', count: 5 }],
        itemId: 89,
      },
      expected: 'not found',
    },
    {
      description: 'Count negative',
      input: {
        cart: [{ itemId: 423, name: 'Lightsaber', color: 'green', count: -42 }],
        itemId: 423,
      },
      expected: 'invalid',
    },
    {
      description: 'Count not present',
      input: {
        cart: [{ itemId: 423, name: 'Lightsaber', color: 'green' }],
        itemId: 423,
      },
      expected: 'invalid',
    },
  ];

  for (const { description, input, expected } of errorCases) {
    test(`${description}`, () => {
      expect(() => decrementOrRemoveFromShoppingCart(input.cart, input.itemId)).toThrow();
    });
  }
});
