object1 = {
    name: "name",
    age: 32
}
object2 = {
    name: "name2",
    age: 32,
    married: true,
    country: "Spain"
}

//CLONE
console.log("CLONE")
function clone(source) {
    const clonedObject = { ...source };
    console.log("clonedObject");
    console.log(clonedObject);
    console.log("originalObject")
    console.log(source);
  }

clone(object1);

//MERGE
console.log("MERGE")
const merge = (source, target) => ({ ...target, ...source});
console.log(merge(object1, object2));