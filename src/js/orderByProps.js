export default function orderByProps(obj, [first, second]) {
    const result = [];
    const keys = Object.keys(obj);
    const sortedKeys = keys.sort();
    for (const i in sortedKeys) {
        if (sortedKeys[i] === first || sortedKeys[i] === second) {
            result.unshift({key: sortedKeys[i], value: obj[sortedKeys[i]]});
        } else {
            result.push({key: sortedKeys[i], value: obj[sortedKeys[i]]});
        }
    }
    return result;
}
