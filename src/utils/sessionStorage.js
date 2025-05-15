const isClient = typeof window !== 'undefined';

export const getSessionStorage = (key, initalValue) => {
    if (!isClient) return initalValue;

    const stored = sessionStorage.getItem(key);

    return stored ? JSON.parse(stored) : initalValue;
};

 export const setSessionStorage = (key, value) => {
        if (isClient) {
        setsessionStorage.setItem(key, JSON.stringify(value));        }

}