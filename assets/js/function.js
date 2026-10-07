function ageUper(item, age) {
    const hasName = Object.prototype.hasOwnProperty.call(item, "name");
    const hasAge = Object.prototype.hasOwnProperty.call(item, "age");

    if (!hasName || !hasAge) {
        return false;
    }

    return item.age > age;
}

const ageUperThen = users.filter(item => ageUper(item, 25));
console.table( ageUperThen);