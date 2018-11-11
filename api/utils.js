export const request = async (url, options = {}) => {
    const response = await fetch(url, options);
    return await response.json();
};

export const debounce = (fn, delay) => {
    let timer = null;
    return function (...args) {
        const context = this;
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}