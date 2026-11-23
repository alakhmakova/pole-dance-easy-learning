// Functions that load data for the site.
// Both versions below do the same job and both return a Promise.
// The component calls them the same way: getCategories().then(data => ...)

// VERSION 1 (used): async/await
// - "async" lets you use "await" inside and makes the function return a Promise.
// - "await" waits until the Promise is done and gives you its result
export async function getCategories() {
    const response = await fetch("/data/categories.json");
    // fetch does NOT treat 404 "file not found" as an error
    if (!response.ok) {
        throw new Error('Could not load categories');
    }
    return response.json();
}

// VERSION 2 (example only, not used): .then chain, no async/await
// - No "await" inside, so no "async" is needed: fetch(...).then(...) is already a Promise.
// - Two returns, because there are two functions:
//   1) "return fetch(...)" returns the whole Promise chain from getCategories.
//   2) "return response.json()" returns the value from the arrow function inside .then;
//      the next .then (in the component) receives it as data.
// - Arrow function with { } is a full function body: it needs an explicit return,
//   otherwise it returns undefined. Without { } (one expression) the return is automatic:
//   response => response.json()
// - Never mix .then and await in one function: pick one style.
/*
export function getCategories() {
    return fetch("/data/categories.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not load categories');
            }
            return response.json();
        });
}
*/
