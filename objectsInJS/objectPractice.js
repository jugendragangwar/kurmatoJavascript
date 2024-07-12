const university = {
    name: "Global University",
    location: {
      city: "Knowledge City",
      state: "Education State",
      country: "Utopia"
    },
    colleges: [
      {
        name: "College of Engineering",
        dean: {
          name: "Dr. Emily Johnson",
          age: 55,
          title: "Dean of Engineering"
        },
        departments: [
          {
            name: "Computer Science",
            head: {
              name: "Dr. Alan Turing",
              age: 60,
              title: "Head of Computer Science"
            },
            faculty: [
              { id: 1, name: "Prof. Grace Hopper", age: 45, title: "Professor" },
              { id: 2, name: "Dr. Donald Knuth", age: 70, title: "Professor" }
            ],
            courses: [
              { id: 101, name: "Introduction to Programming", credits: 3 },
              { id: 102, name: "Data Structures and Algorithms", credits: 4 },
              { id: 103, name: "Operating Systems", credits: 4 }
            ],
            students: [
              {
                id: 1,
                name: "Alice",
                age: 20,
                year: "Sophomore",
                enrolledCourses: [101, 102]
              },
              {
                id: 2,
                name: "Bob",
                age: 21,
                year: "Junior",
                enrolledCourses: [102, 103]
              }
            ]
          },
          {
            name: "Electrical Engineering",
            head: {
              name: "Dr. Nikola Tesla",
              age: 65,
              title: "Head of Electrical Engineering"
            },
            faculty: [
              { id: 3, name: "Prof. Thomas Edison", age: 50, title: "Professor" },
              { id: 4, name: "Dr. Michael Faraday", age: 72, title: "Professor" }
            ],
            courses: [
              { id: 201, name: "Circuit Analysis", credits: 3 },
              { id: 202, name: "Electromagnetics", credits: 4 },
              { id: 203, name: "Power Systems", credits: 4 }
            ],
            students: [
              {
                id: 3,
                name: "Charlie",
                age: 22,
                year: "Senior",
                enrolledCourses: [201, 202]
              },
              {
                id: 4,
                name: "David",
                age: 19,
                year: "Freshman",
                enrolledCourses: [201, 203]
              }
            ]
          }
        ]
      },
      {
        name: "College of Arts and Sciences",
        dean: {
          name: "Dr. Marie Curie",
          age: 58,
          title: "Dean of Arts and Sciences"
        },
        departments: [
          {
            name: "Physics",
            head: {
              name: "Dr. Albert Einstein",
              age: 75,
              title: "Head of Physics"
            },
            faculty: [
              { id: 5, name: "Prof. Richard Feynman", age: 60, title: "Professor" },
              { id: 6, name: "Dr. Niels Bohr", age: 80, title: "Professor" }
            ],
            courses: [
              { id: 301, name: "Classical Mechanics", credits: 4 },
              { id: 302, name: "Quantum Mechanics", credits: 4 },
              { id: 303, name: "Thermodynamics", credits: 3 }
            ],
            students: [
              {
                id: 5,
                name: "Eve",
                age: 23,
                year: "Senior",
                enrolledCourses: [301, 302]
              },
              {
                id: 6,
                name: "Frank",
                age: 20,
                year: "Junior",
                enrolledCourses: [302, 303]
              }
            ]
          },
          {
            name: "Chemistry",
            head: {
              name: "Dr. Dmitri Mendeleev",
              age: 68,
              title: "Head of Chemistry"
            },
            faculty: [
              { id: 7, name: "Prof. Marie Curie", age: 55, title: "Professor" },
              { id: 8, name: "Dr. Linus Pauling", age: 77, title: "Professor" }
            ],
            courses: [
              { id: 401, name: "Organic Chemistry", credits: 4 },
              { id: 402, name: "Inorganic Chemistry", credits: 3 },
              { id: 403, name: "Physical Chemistry", credits: 4 }
            ],
            students: [
              {
                id: 7,
                name: "Grace",
                age: 21,
                year: "Junior",
                enrolledCourses: [401, 402]
              },
              {
                id: 8,
                name: "Heidi",
                age: 22,
                year: "Senior",
                enrolledCourses: [402, 403]
              }
            ]
          }
        ]
      }
    ]
  };

//   console.log("faculty Title" + " " + university.colleges[0].departments[0].faculty[0].title);
//   console.log("faculty age" + " " +  university.colleges[0].departments[0].faculty[0].age);   
  
//   console.log("head name" + " " + university.colleges[0].departments[0].head.name); 
//   console.log("Head age" + " " +  university.colleges[0].departments[0].head.age);

//   console.log("Student Year" + " " +  university.colleges[0].departments[0].students[0].year);
  
  
  
  
  for (let i = 0; i <2; i++) {
    console.log(1)
      console.log("Student Name" + " " +  university.colleges[0].departments[0].students[i].name);
}


