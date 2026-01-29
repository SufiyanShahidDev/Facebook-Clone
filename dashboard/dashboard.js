const stories = [
  {
    fullName: "Emma Johnson",
    profilePic: "https://i.pravatar.cc/150?img=1",
    storyFile: "https://picsum.photos/400/700?random=1",
  },
  {
    fullName: "Liam Carter",
    profilePic: "https://i.pravatar.cc/150?img=2",
    storyFile: "https://picsum.photos/400/700?random=2",
  },
  {
    fullName: "Sophia Martinez",
    profilePic: "https://i.pravatar.cc/150?img=3",
    storyFile: "https://picsum.photos/400/700?random=3",
  },
  {
    fullName: "Noah Williams",
    profilePic: "https://i.pravatar.cc/150?img=4",
    storyFile: "https://picsum.photos/400/700?random=4",
  },
  {
    fullName: "Ava Brown",
    profilePic: "https://i.pravatar.cc/150?img=5",
    storyFile: "https://picsum.photos/400/700?random=5",
  },
  {
    fullName: "Olivia Anderson",
    profilePic: "https://i.pravatar.cc/150?img=6",
    storyFile: "https://picsum.photos/400/700?random=6",
  },
  {
    fullName: "Ethan Miller",
    profilePic: "https://i.pravatar.cc/150?img=7",
    storyFile: "https://picsum.photos/400/700?random=7",
  },
  {
    fullName: "Isabella Garcia",
    profilePic: "https://i.pravatar.cc/150?img=8",
    storyFile: "https://picsum.photos/400/700?random=8",
  },
  {
    fullName: "James Wilson",
    profilePic: "https://i.pravatar.cc/150?img=9",
    storyFile: "https://picsum.photos/400/700?random=9",
  },
  {
    fullName: "Mia Thompson",
    profilePic: "https://i.pravatar.cc/150?img=10",
    storyFile: "https://picsum.photos/400/700?random=10",
  },
  {
    fullName: "Benjamin Moore",
    profilePic: "https://i.pravatar.cc/150?img=11",
    storyFile: "https://picsum.photos/400/700?random=11",
  },
  {
    fullName: "Charlotte Taylor",
    profilePic: "https://i.pravatar.cc/150?img=12",
    storyFile: "https://picsum.photos/400/700?random=12",
  },
  {
    fullName: "Lucas Hernandez",
    profilePic: "https://i.pravatar.cc/150?img=13",
    storyFile: "https://picsum.photos/400/700?random=13",
  },
  {
    fullName: "Amelia Clark",
    profilePic: "https://i.pravatar.cc/150?img=14",
    storyFile: "https://picsum.photos/400/700?random=14",
  },
  {
    fullName: "Henry Lewis",
    profilePic: "https://i.pravatar.cc/150?img=15",
    storyFile: "https://picsum.photos/400/700?random=15",
  },
];

const storyContainer = document.getElementById("story-container");

const createStoryHTML = () => {
  for (let i = 0; i < stories.length; i++) {
    const story = stories[i];
    const storyHTML = ` <div class="story"
                            style="background-image: url(${story.storyFile});">

                            <div class="profile-pic">
                                <img src="${story.profilePic}"
                                    alt="">
                            </div>

                            <div class="story-content">
                                <p>${story.fullName}</p>
                            </div>
                        </div>`;

    storyContainer.innerHTML += storyHTML;
  }
};

const createStoryHTMLThroughMap = () => {
  const returnedArr = stories.map((story, index) => {
    return ` <div class="story"
                            style="background-image: url(${story.storyFile});">
                            <div class="profile-pic">
                                <img src="${story.profilePic}"
                                    alt="">
                            </div>
                            <div class="story-content">
                                <p>${index + 1}: ${story.fullName}</p>
                            </div>
                        </div>`;
  });

  storyContainer.innerHTML = returnedArr.join("");
};

// createStoryHTML();

createStoryHTMLThroughMap();

// Call back and higher orders

// function greet(name, callback) {
//   console.log(`Hello, ${name}!`);
//   // The callback is executed right after the log
//   callback();
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// function sayWelcome() {
//   console.log("Welcome!");
// }

// // Pass 'sayGoodbye' as a callback function (without parentheses)
// greet("Alice", sayGoodbye);

// greet("John", sayWelcome);

// const newArr = ["M.", "Kamil", "Raza"];

// console.log(newArr.join(" "));

const students = [
  {
    name: "",
    id: "",
    semesters: {
      1: {
        maths: 80,
        chem: 70,
        programming: 83,
      },
      2: {
        maths: 70,
        phy: 67,
        javascript: 83,
      },
    },
  },
];

const studentsCalculated = [
  {
    name: "",
    id: "",
    semesters: {
      1: {
        maths: 80,
        chem: 70,
        programming: 83,
      },
      2: {
        maths: 70,
        phy: 67,
        javascript: 83,
      },
    },
    semester1: "",
    obtainedMarks: "",
    percentage: "",
    grade: "",
  },
];

// How to calculate percentage:

// Obtained Marks = total marks of each subjects in semesters
// Percentage = semester1 (85%), semester2 (73%), semester3 (65%) ==>
// finalPercentage = sumOfEachSemesterPercentage / numberOfSemesters ==> (85 + 73 + 65) / 3