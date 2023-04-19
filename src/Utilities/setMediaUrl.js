const setMediaUrl = (url, array) => {
    const index = array.indexOf(url);
    if (index > -1) {
        return array.splice(index, 1);
    } else {
        return array.push(url);
    }
};

export default setMediaUrl;
