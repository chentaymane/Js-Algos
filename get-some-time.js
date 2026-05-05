function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).padStart(4, '0');

    return `${day}-${month}-${year}`;
}

function firstDayWeek(week, yearStr) {
    const year = Number(yearStr);

    // Create Jan 1 safely (important for years < 100)
    let jan1 = new Date(0);
    jan1.setFullYear(year, 0, 1);

    // Week 1 always contains Jan 1
    if (week === 1) {
        return formatDate(jan1);
    }

    // Move to the target week (approximate position)
    let date = new Date(jan1);
    date.setDate(jan1.getDate() + (week - 1) * 7);

    // Move backward to Monday
    while (date.getDay() !== 1) {
        date.setDate(date.getDate() - 1);
    }

    // If Monday is in previous year → return Jan 1
    if (date.getFullYear() < year) {
        return formatDate(jan1);
    }

    return formatDate(date);
}