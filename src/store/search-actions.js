const search = (value) => {
    return {
        type: "search",
        payload: value
    };
}

export {search};