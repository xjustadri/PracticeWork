/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
const name = "Adriana";
const age = 26;
const studyField = "Software Engineering";

const participant = {
    name,
    age,
    studyField

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
    displayInfo() {
     console.log(`Participant: ${this.name}, Age: ${this.age}, Field: ${this.studyField}`);
    }
};

participant.displayInfo();
/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
/*
 * Observations:
 * TODO: Explain here: it will print undefined because arrow function does not pair will object functions.
 */
displayInfo: () => {
    console.log (`Paticiapant: ${this.name}, Age: ${this.age}, Field: ${this.studyField}`);
}
/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
 const updated = updateParticipantInfo (participant, "age", 27);
 console.log(updated);