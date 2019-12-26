export function parseUser(json) {
    try {
        const user = JSON.parse(json);
        return user;
    } catch(e) {
        return null;
    }
};
