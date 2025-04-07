export const getFooBar = function () {
    console.log("foo bar");
}

const getBar = function () {
    console.log("bar")
};

const getBaz = function () {
    console.log("baz");
};

getFooBar();
getBar();
getBaz();

export { getBar, getBaz };