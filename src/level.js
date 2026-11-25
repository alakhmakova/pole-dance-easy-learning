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
