let student =
{
    Sname: "raj",
    age: 18,
    branch: "AIML"
}

let Car =
{
    Brand: "BMW",
    Model: "M4 CS",
    Engine: "V8 Twin Turbo"
}
console.log(Car["Engine"]);
console.log(student.branch);
console.log("The student name is" + student.Sname, "who has a car " + Car.Brand, " "+ Car.Model, " " + Car.Engine);