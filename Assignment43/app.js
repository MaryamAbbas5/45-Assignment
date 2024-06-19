//43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy
// of the array of magicians’ names. Because the original array will be unchanged, 
//return the new array and store it in a separate array. Call show_magicians() with each array 
//to show that you have one array of the original names and one array with the Great added to each magician’s
// name.
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magicians_names = ["Subhan", "Khizar", "AbdulQadir"];
let copy_magicians_names = magicians_names.slice();
let copy_great_magicians = make_great(copy_magicians_names);
//Orginal
console.log("Orginal Array \n");
show_magicians(magicians_names);
//Copied
console.log("\nCopied Array \n");
show_magicians(copy_great_magicians);
export {};