const getCurrentData = (key = "") => {
    try {
        let data = localStorage.getItem(key);
        // db's key is not exists on localStorage
        if (data == null) {
            localStorage.setItem(key, "[]");
            return [];
        }
        return JSON.parse(data);
    } catch (err) {
        localStorage.setItem(key, "[]");
        return [];
    }
}

const saveData = (key = "", data = []) => {
    localStorage.setItem(key, JSON.stringify(data));
    return data;
}

export {
    getCurrentData,
    saveData
}