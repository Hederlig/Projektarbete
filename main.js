let eduFilter = document.createElement("button");
eduFilter.textContent = "Filter";
document.querySelector("#edu").appendChild(eduFilter);

let inputs = document.querySelectorAll("input[name='programme']");

let sortAge = document.createElement("button");
sortAge.textContent = "Sort Age";
document.querySelector("#userInfo").appendChild(sortAge);

let mainList = document.querySelector("#userInfo")

let sortName = document.createElement("button");
sortName.textContent = "First Name A - Z";
document.querySelector("#userInfo").appendChild(sortName);

let sortLast = document.createElement("button");
sortLast.textContent = "Last Name A - Z";
document.querySelector("#userInfo").appendChild(sortLast);
let schoolList = document.querySelector("#showSchools")


let getData = async (URL) => {
  let response = await fetch(URL);
  let data = await response.json();
  return data;
};

async function renderData() {
  let students = await getData("https://api.mocki.io/v2/01047e91/students");
  let schools = await getData("https://api.mocki.io/v2/01047e91/schools");

  students.forEach((students) => {
    let li = document.createElement("h3");
    li.textContent =
      students.firstName + ", " + students.lastName + ", " + students.age + ", " + students.programme ;
    document.querySelector("#userList").appendChild(li);
   
    // What School suits the student
    let filterSchools = schools.filter((schools) => {
      let hobbyMatch = false;
      students.hobbies.forEach((hobby) => {
        if (schools.activities.includes(hobby)) {
          hobbyMatch = true;
        }
      });
      return schools.programmes.includes(students.programme) && hobbyMatch;
    });
   
        li.addEventListener("click", () => {
         schoolList.innerHTML =""
         filterSchools.forEach((schools) => {
          let name = document.createElement("h3")
          name.style.color = "Red"
         name.innerHTML =   schools.name
        schoolList.appendChild(name)
   
      });
    });
  });
  
   // filter students

  eduFilter.addEventListener("click", () => {
    inputs.forEach((input) => {
      if (input.checked) {
        let education = input.value;
        // console.log(education)

        document.querySelector("#userList").innerHTML = "";
        document.querySelector("#filterList").innerHTML = "";
        let filteredStudents = students.filter(
          (students) => students.programme === education
        );
        filteredStudents.forEach((students) => {
          // console.log(filteredStudents);
          let studentEdu = document.createElement("li");
          studentEdu.textContent =
            students.firstName + ", " + students.lastName + ", " + students.age;
          document.querySelector("#userList").appendChild(studentEdu);
        });
      }
    });
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