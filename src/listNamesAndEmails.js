/**
 * Given an array of user objects, this function extracts the username and email
 * for each user and returns them as an array of tuples (2-element arrays).
 * Users without a username or email property are ignored.
 *
 * @param {Array<Object>} users - An array of user objects. Each object might contain various properties, but at least 'username' and 'email' are expected for successful extraction.
 * @returns {Array<Array<string>>} An array of arrays, where each inner array contains two strings: the username and the email of a user. Returns an empty array if no users have both a username and an email, or if the input array is empty.
 * @example
 * // returns [["Guybrush", "mighty@pirate.gov"]]
 * listNamesAndEmails([{username: "Guybrush", email: "mighty@pirate.gov"}]);
 *
 * @example
 * // returns [["Guybrush", "mighty@pirate.gov"]]
 * listNamesAndEmails([{username: "Guybrush", email: "mighty@pirate.gov"}, {favouriteIceCream: "chocolate", email: "icecreamconnoisseur@mail.berlin"}]);
 *
 * @example
 * // returns []
 * listNamesAndEmails([{favouriteIceCream: "chocolate", email: "icecreamconnoisseur@mail.berlin"}]);
 *
 * @example
 * // returns []
 * listNamesAndEmails([]);
 */
function listNamesAndEmails(users) {
  //TODO: Given an array of user objects, return an array with the usernames and emails (in "tuples"); ignore all other properties
  // example: [{username: "Guybrush", email: "mighty@pirate.gov"}] -> [["Guybrush", "mighty@pirate.gov"]]
  // if there is no username or no email in an object, omit that user
  // example: [{username: "Guybrush", email: "mighty@pirate.gov"}, {favouriteIceCream: "chocolate", email: "icecreamconnoisseur@mail.berlin"}] -> [["Guybrush", "mighty@pirate.gov"]]
  return 'NOT IMPLEMENTED';
}

export default listNamesAndEmails;
