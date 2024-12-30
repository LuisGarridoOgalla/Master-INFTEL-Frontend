//CONCANT TWO ARRAYS
const a = ["a_1", "a_2", "a_3"];
const b = ["b_1", "b_2", "b_3"];


//SPREAD
console.log("SPREAD")
const concatSpread = (a, b) => {
    ab = [...a, ...b];
    console.log(ab);
}; 
concatSpread(a, b);

//REST and SPREAD without limit of params
console.log("optional concat")
const concatRest = (...args) => {
    ab = [];
    args.forEach((item) => ab = [...ab, ...item]);
    console.log(ab);
}; 
concatRest(a, b, ["c_1", "c_2"]);
