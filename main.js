let filter = document.createElement("button");
filter.textContent = "Filter";
document.querySelector("#edu").appendChild(filter);

let sortAge = document.createElement("button");
sortAge.textContent = "Sort Age";
document.querySelector("#userInfo").appendChild(sortAge);

let sortName = document.createElement("button");
sortName.textContent = "First Name A - Z";
document.querySelector("#userInfo").appendChild(sortName);

let sortLast = document.createElement("button");
sortLast.textContent = "Last Name A - Z";
document.querySelector("#userInfo").appendChild(sortLast);

let getData = async (URL) => {
  let response = await fetch(URL);
  let data = await response.json();
  return data;
};

async function renderData() {
  let students = await getData("https://api.mocki.io/v2/01047e91/students");
  let schools = await getData("https://api.mocki.io/v2/01047e91/schools");

  students.forEach((students) => {
    let li = document.createElement("li");
    li.textContent =
      students.firstName + ", " + students.lastName + ", " + students.age;
    document.querySelector("#userList").appendChild(li);
  });

// filter students
let inputs = document.querySelectorAll("input[name='education']");
inputs.forEach((input) => {
  if (input.checked) {
    programme = input.value;
    let studentName = document.createElement("li");
    studentName.textContent =
      students.firstName + ", " + students.lastName + ", " + students.age;
    document.querySelector("#userList").appendChild(studentName);
  }
});
// Sort students by age,name,lastname

  sortAge.addEventListener("click", () => {
    document.querySelector("#userList").innerHTML = "";
    let sortAge = students.sort((a, b) => a.age - b.age);

    sortAge.forEach((students) => {
      let studentAge = document.createElement("li");
      studentAge.textContent =
        students.firstName + ", " + students.lastName + ", " + students.age;
      document.querySelector("#userList").appendChild(studentAge);
    });
  });

  sortName.addEventListener("click", () => {
    document.querySelector("#userList").innerHTML = "";
    let studentN = students.sort((a, b) =>
      a.firstName !== b.firstName ? (a.firstName < b.firstName ? -1 : 1) : 0
    );

    studentN.forEach((students) => {
      let studentName = document.createElement("li");
      studentName.textContent =
        students.firstName + ", " + students.lastName + ", " + students.age;
      document.querySelector("#userList").appendChild(studentName);
    });
  });
  sortLast.addEventListener("click", () => {
    document.querySelector("#userList").innerHTML = "";
    let studentN = students.sort((a, b) =>
      a.lastName !== b.lastName ? (a.lastName < b.lastName ? -1 : 1) : 0
    );

    studentN.forEach((students) => {
      let studentName = document.createElement("li");
      studentName.textContent =
        students.firstName + ", " + students.lastName + ", " + students.age;
      document.querySelector("#userList").appendChild(studentName);
    });
  });
}
renderData();

let arr = ["kalle", "sunne", "brandond"];
arr.sort();
console.log(arr);



// STUFF THAT DIDNT WORK AT ALL aka FAFO!!!!


// if(a.firsName < b.firstName) { return -1; }
// if(a.firstName > b.firstName)
// return 0;

// students.sort((a, b) => a.firstname.localeCompare(b.firstname))
// firstName.forEach((students) => {
//   let studentName = document.createElement("li");
//   studentName.textContent = students.firstName + ", " + students.lastName + ", " + students.age;
//   document.querySelector("#userList").appendChild(studentName);
// })
// })

// let firstName = students.sort((a, b) => a.firstName - b.firstName);

// firstName.sort()
// console.log(students)
// document.querySelector("#userList").innerHTML = "";
// let firstName = students.sort((a, b) => a.names - b.names);
// firstName.forEach((students) => {
//   let firstName = document.createElement("li");
//   firstName.textContent = students.firstName + ", " + students.lastName + ", " + students.age;
//   document.querySelector("#userList").appendChild(firstName);
// })

// fetch("https://api.mocki.io/v2/01047e91/students")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })

//   .then((data) => {
//     let profileCard = document.createElement("ol");
//       data.forEach((students) => {
//       let name = document.createElement("li");
//       let list = document.createElement("span");
//       list.textContent = students.firstName + " " + students.lastName + " " + students.age;

//       let hobbies = document.createElement("p");
//       hobbies.textContent = students.hobbies;

//       let programme= document.createElement("p");
//       programme.textContent = students.programme

//       name.appendChild(list);
//       profileCard.appendChild(name);
//       profileCard.appendChild(hobbies);
//       profileCard.appendChild(programme);

//     });
//     document.body.appendChild(profileCard);
//   });
