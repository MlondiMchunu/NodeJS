this.scope = "lexical scope";

const scopeOf = {
    scope: "defining scope",

    traditional: function () {
        return this.scope;
    },
    arrow: () => {
        return this.scope;
    },
};
console.log(scopeOf.traditional());//outputs defining scope
console.log(scopeOf.arrow())//outputs lexical scope