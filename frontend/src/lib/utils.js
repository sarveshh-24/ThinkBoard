export function formatDate(date){
    return date.toLocalDateString("en-US", {
        monnth: "short",
        day: "numeric",
        year: "numeric",
    });
}