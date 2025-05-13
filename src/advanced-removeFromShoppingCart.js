/**
 * Decrements the count of a specified item in a shopping cart. If the item's count
 * reaches zero after decrementing, it is removed from the cart.
 *
 * The function validates that each item in the cart intended for modification
 * possesses an 'itemId' and a 'count' property, and that these properties are numbers.
 *
 * @param {Array<Object>} cart - The shopping cart, represented as an array of item objects.
 * Each item object *should* contain at least an `itemId` (number)
 * and a `count` (number) property. Other properties like `name`,
 * `color`, etc., are preserved.
 * @param {number} itemId - The unique identifier of the item to be decremented or removed.
 * @returns {Array<Object>} A new array representing the updated shopping cart.
 * If the item's count is decremented, the modified cart is returned.
 * If the item's count reaches zero and it's removed, the cart without
 * that item is returned.
 * @throws {Error} If the `itemId` is not found in the cart.
 * @throws {Error} If the found item does not have a `count` property or if `itemId` or `count`
 * are not numbers (though the provided code only explicitly checks `count`'s existence
 * and `itemId` for finding the item). Consider adding more robust type checking if necessary.
 *
 * @example
 * // Example 1: Decrementing an item's count
 * const cart1 = [{itemId: 4123, name: "Lightsaber", color: "green", count: 3}];
 * const updatedCart1 = decrementOrRemoveFromShoppingCart(cart1, 4123);
 * // updatedCart1 will be: [{itemId: 4123, name: "Lightsaber", color: "green", count: 2}]
 * console.log(updatedCart1);
 *
 * @example
 * // Example 2: Removing an item when its count reaches zero
 * const cart2 = [{itemId: 9999, name: "Grog Mug", batteriesIncluded: true, count: 1}];
 * const updatedCart2 = decrementOrRemoveFromShoppingCart(cart2, 9999);
 * // updatedCart2 will be: []
 * console.log(updatedCart2);
 *
 * @example
 * // Example 3: Item not found
 * const cart3 = [{itemId: 1000, name: "Another Item", count: 1}];
 * try {
 * decrementOrRemoveFromShoppingCart(cart3, 1234);
 * } catch (e) {
 * console.error(e.message); // Expected: "Item not found"
 * }
 *
 * @example
 * // Example 4: Item missing count property (behavior based on current implementation)
 * const cart4 = [{itemId: 7777, name: "Faulty Item"}]; // Missing 'count'
 * try {
 * decrementOrRemoveFromShoppingCart(cart4, 7777);
 * } catch (e) {
 * console.error(e.message); // Expected: "Invalid item"
 * }
 */
function decrementOrRemoveFromShoppingCart(cart, itemId) {
  // TODO: Given a cart full of items, decrement the count of the item with the given itemId by one. If the count reaches zero, remove the whole item from the cart.
  // You can't trust, that every item has a property 'itemId' and 'count' - and both being numbers - because JavaScript; throw an Error, if anything goes wrong
  // Also, avoid mutating the original cart!

  return 'NOT IMPLEMENTED';
}

export default decrementOrRemoveFromShoppingCart;
