// Small helper functions shared by several components.

// Turns technical value (0.1-1.0) into a difficulty level: Beginner, Intermediate or Advanced.
export function getLevel(techValue) {
    if (techValue <= 0.3) {
        return "Beginner";
    }
    else if (techValue <= 0.6) {
        return "Intermediate";
    }
    else {
        return "Advanced";
    }
}

// Search check: true if the name contains the search text.
// Upper/lower case does not matter, and spaces around the search text are ignored.
// An empty search text matches every name.
export function matchesSearch(name, searchText) {
    return name.toLowerCase().includes(searchText.trim().toLowerCase());
}
