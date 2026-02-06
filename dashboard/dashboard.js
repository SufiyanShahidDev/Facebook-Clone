let postContainer  = document.querySelector("#post-container")
console.log(postContainer)



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

const posts = [
  {
    profilePic : "https://i.pravatar.cc/150?img=1",
    name : "Emma Johnson",
    date : "29 Jan, 2026 9:06 ",
    caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde ad mollitia neque quod nemo quisquam, blanditiis nulla facilis dignissimos error ipsam atque amet nobis ullam illum dicta in. Culpa?",
    imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8yGuDDBINqOdIbbrUVrBZvNwCTQMp_0ZCg&s",
    reactions : 32,
    comments : 3,
    shares : 2,

  },
  {
    profilePic : "https://i.pravatar.cc/150?img=1",
    name : "Emma Johnson",
    date : "29 Jan, 2026 9:06 ",
    caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde ad mollitia neque quod nemo quisquam, blanditiis nulla facilis dignissimos error ipsam atque amet nobis ullam illum dicta in. Culpa?",
    imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8yGuDDBINqOdIbbrUVrBZvNwCTQMp_0ZCg&s",
    reactions : 32,
    comments : 3,
    shares : 2,

  },
  {
    profilePic : "https://i.pravatar.cc/150?img=1",
    name : "Emma Johnson",
    date : "29 Jan, 2026 9:06 ",
    caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde ad mollitia neque quod nemo quisquam, blanditiis nulla facilis dignissimos error ipsam atque amet nobis ullam illum dicta in. Culpa?",
    imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8yGuDDBINqOdIbbrUVrBZvNwCTQMp_0ZCg&s",
    reactions : 32,
    comments : 3,
    shares : 2,

  },
  {
    profilePic : "https://i.pravatar.cc/150?img=1",
    name : "Emma Johnson",
    date : "29 Jan, 2026 9:06 ",
    caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde ad mollitia neque quod nemo quisquam, blanditiis nulla facilis dignissimos error ipsam atque amet nobis ullam illum dicta in. Culpa?",
    imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8yGuDDBINqOdIbbrUVrBZvNwCTQMp_0ZCg&s",
    reactions : 32,
    comments : 3,
    shares : 2,

  },
  {
    profilePic : "https://i.pravatar.cc/150?img=1",
    name : "Emma Johnson",
    date : "29 Jan, 2026 9:06 ",
    caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde ad mollitia neque quod nemo quisquam, blanditiis nulla facilis dignissimos error ipsam atque amet nobis ullam illum dicta in. Culpa?",
    imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8yGuDDBINqOdIbbrUVrBZvNwCTQMp_0ZCg&s",
    reactions : 32,
    comments : 3,
    shares : 2,

  },
  {
    profilePic : "https://i.pravatar.cc/150?img=1",
    name : "Emma Johnson",
    date : "29 Jan, 2026 9:06 ",
    caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde ad mollitia neque quod nemo quisquam, blanditiis nulla facilis dignissimos error ipsam atque amet nobis ullam illum dicta in. Culpa?",
    imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8yGuDDBINqOdIbbrUVrBZvNwCTQMp_0ZCg&s",
    reactions : 32,
    comments : 3,
    shares : 2,

  },
  {
    profilePic : "https://i.pravatar.cc/150?img=1",
    name : "Emma Johnson",
    date : "29 Jan, 2026 9:06 ",
    caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde ad mollitia neque quod nemo quisquam, blanditiis nulla facilis dignissimos error ipsam atque amet nobis ullam illum dicta in. Culpa?",
    imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8yGuDDBINqOdIbbrUVrBZvNwCTQMp_0ZCg&s",
    reactions : 32,
    comments : 3,
    shares : 2,

  },
  {
    profilePic : "https://i.pravatar.cc/150?img=1",
    name : "Emma Johnson",
    date : "29 Jan, 2026 9:06 ",
    caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde ad mollitia neque quod nemo quisquam, blanditiis nulla facilis dignissimos error ipsam atque amet nobis ullam illum dicta in. Culpa?",
    imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8yGuDDBINqOdIbbrUVrBZvNwCTQMp_0ZCg&s",
    reactions : 32,
    comments : 3,
    shares : 2,

  },
  {
    profilePic : "https://i.pravatar.cc/150?img=1",
    name : "Emma Johnson",
    date : "29 Jan, 2026 9:06 ",
    caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde ad mollitia neque quod nemo quisquam, blanditiis nulla facilis dignissimos error ipsam atque amet nobis ullam illum dicta in. Culpa?",
    imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8yGuDDBINqOdIbbrUVrBZvNwCTQMp_0ZCg&s",
    reactions : 32,
    comments : 3,
    shares : 2,

  },
  {
    profilePic : "https://i.pravatar.cc/150?img=1",
    name : "Muhammad Hasan",
    date : "28 Feb, 2025 9:06 ",
    caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde ad mollitia neque quod nemo quisquam, blanditiis nulla facilis dignissimos error ipsam atque amet nobis ullam illum dicta in. Culpa?",
    imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8yGuDDBINqOdIbbrUVrBZvNwCTQMp_0ZCg&s",
    reactions : 16,
    comments : 32,
    shares : 52,

  },
]


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


const postHTML = (post) => {
  // console.log("post data ==>",post)
  return `<div class="post">
                            <div class="post-header">
                                <div class="profile-content">
                                    <div class="profile-pic">
                                        <img src=${post.profilePic} alt="">
                                    </div>
                                    <div class="post-user-detail">
                                        <p id="name">${post.name}</p>
                                        <p>${post.date}</p>
                                    </div>
                                </div>
                                <div class="post-icons">
                                    <i class="fa-solid fa-ellipsis"></i>
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div class="post-caption">
                                <p>${post.caption}</p>
                            </div>
                            <div class="post-image">
                                <img src=${post.imageUrl} alt="">
                            </div>
                            <div class="post-reactions">
                                <div>
                                    <i class="fa-solid fa-thumbs-up"></i>
                                    <i class="fa-regular fa-face-grin-beam-sweat"></i>
                                    <p>${post.reactions}</p>
                                </div>
                                <div>
                                    <p>${post.comments} comments</p>
                                    <p>${post.shares} share</p>
                                </div>
                            </div>
                            <div class="post-footer">
                                <div>
                                    <i class="fa-regular fa-thumbs-up"></i> Like
                                </div>
                                <div>
                                    <i class="fa-regular fa-comment"></i> Comment
                                </div>
                                <div>
                                    <i class="fa-regular fa-share-from-square"></i> Share
                                </div>
                            </div>
                        </div>`
}

// one liner  ==> 

// const createPostHTMLThroughMap = () => {
// let postHTMLForContainer = posts.map((post) => postHTML(post))

// postContainer.innerHTML = postHTMLForContainer.join("")
// }


// Using Return 
// const createPostHTMLThroughMap = () => {
// let postHTMLForContainer = posts.map((post) =>  {
// return postHTML(post)
// } )

// postContainer.innerHTML = postHTMLForContainer.join("")
// }


// const createPostHTMLThroughMap = () => {
// let postHTMLForContainer = posts.map((post) =>  {
// return postHTML(post)
// } )

// postContainer.innerHTML = postHTMLForContainer.join("")
// }


// without postHTML function ==> 
const createPostHTMLThroughMap = () => {
let postHTMLForContainer = posts.map((post) =>  {
return `<div class="post">
                            <div class="post-header">
                                <div class="profile-content">
                                    <div class="profile-pic">
                                        <img src=${post.profilePic} alt="">
                                    </div>
                                    <div class="post-user-detail">
                                        <p id="name">${post.name}</p>
                                        <p>${post.date}</p>
                                    </div>
                                </div>
                                <div class="post-icons">
                                    <i class="fa-solid fa-ellipsis"></i>
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div class="post-caption">
                                <p>${post.caption}</p>
                            </div>
                            <div class="post-image">
                                <img src=${post.imageUrl} alt="">
                            </div>
                            <div class="post-reactions">
                                <div>
                                    <i class="fa-solid fa-thumbs-up"></i>
                                    <i class="fa-regular fa-face-grin-beam-sweat"></i>
                                    <p>${post.reactions}</p>
                                </div>
                                <div>
                                    <p>${post.comments} comments</p>
                                    <p>${post.shares} share</p>
                                </div>
                            </div>
                            <div class="post-footer">
                                <div>
                                    <i class="fa-regular fa-thumbs-up"></i> Like
                                </div>
                                <div>
                                    <i class="fa-regular fa-comment"></i> Comment
                                </div>
                                <div>
                                    <i class="fa-regular fa-share-from-square"></i> Share
                                </div>
                            </div>
                        </div>`
} )

postContainer.innerHTML = postHTMLForContainer.join("")
}



 

createPostHTMLThroughMap()

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


// let array = [1,2,3,4,5]

// for(let i = 0; i < array.length; i++){
//   console.log(array[i])
// }