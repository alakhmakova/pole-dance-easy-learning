// Saves two lists of element ids in localStorage: bought elements and mastered elements.
const OWNED_KEY = "pole.owned";
const MASTERED_KEY = "pole.mastered";

// Reads a list of ids from localStorage. 
// Returns an empty array on the first visit (nothing saved yet),
// when the saved text is not valid JSON, or when the browser blocks localStorage.
function readList(key) {
    try {
        const saved = localStorage.getItem(key);
        return saved === null ? [] : JSON.parse(saved);
    } catch (err) {
        console.error(err);
        return [];
    }
}

// Saves a list of ids to localStorage. If the browser blocks storage or it is full, the error is only logged.
// The user is not told that saving failed: the purchase is lost after a page reload.
// TODO: show a message to the user when progress is stored in the database instead of localStorage.
function saveList(key, list) {
    try {
        localStorage.setItem(key, JSON.stringify(list));
    } catch (err) {
        console.error(err);
    }
}

// Returns the ids of bought elements.
export function getOwnedIds() {
    return readList(OWNED_KEY);
}

// Returns the ids of elements marked as mastered.
export function getMasteredIds() {
    return readList(MASTERED_KEY);
}

// Adds the element id to the bought list (only once) and returns the new list.
export function buyElement(id) {
    const owned = getOwnedIds();
    const newOwned = !owned.includes(id) ? [...owned, id] : owned;
    saveList(OWNED_KEY, newOwned);
    return newOwned;
}

// Removes the id from the mastered list if it is there, otherwise adds it. Returns the new list.
export function toggleMastered(id) {
    const mastered = getMasteredIds();
    const newMastered = mastered.includes(id) ? mastered.filter(m => m !== id) : [...mastered, id];
    saveList(MASTERED_KEY, newMastered);
    return newMastered;
}