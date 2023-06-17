/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    const developers = employees.filter(person => person.profession === "developer");
      developers.forEach(developer => console.log(developer));
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    employees.forEach(person => {
      if (person.profession === "developer") {
        console.log(person);
      }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    const newEmployee = {id: 4, name: "susan", age: "20", profession: "intern"};
    employees.push(newEmployee);
    console.log(employees);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const updatedEmployees = employees.filter(person => person.profession !== "admin");
    console.log(updatedEmployees);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const additionalEmployees = [
      {id: 5, name: "alex", age: "22", profession: "developer"},
      {id: 6, name: "emma", age: "21", profession: "admin"},
      {id: 7, name: "mike", age: "25", profession: "developer"}
    ];
  
    const concatenatedArray = employees.concat(additionalEmployees);
    console.log(concatenatedArray);
  }
  
  