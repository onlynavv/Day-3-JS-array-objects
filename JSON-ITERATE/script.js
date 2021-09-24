const WorkData = [
  {
    "id": 1,
    "title": "Web Designer (Intern)",
    "dates": "May 2018 – January 2019",
    "duties": [
      "Website Design, worked in a team of four",
      "A Start-up from Chennai, based on Web Development",
    ],
    "company": "Rhombus Labs"
  },
  {
    "id": 2,
    "title": "Web Designer",
    "dates": "Aug 2019 – September 2020",
    "duties": [
      "Worked in the Front End Design part",
      "Lead the team of four in project discussions and in implementation",
      "Interact with the backend devs to provide the neccessary designs while scaling up a big project",
      "Another contribution in Creative process in Poster Designs and Flyers",
      "Main responsibility is to make sure all the other teammates works get done within the deadline, like poster designs has to be done so that will be handy for the front-end designers to work",
      "Some of the major projects are Fund Organisation site, E-commerce site, Matrimony site, Self Paced Course site",
      "Worked as a Digital Marketer in SEO part, helped the sites to reach the first two pages in Google search rankings"
    ],
    "company": "Wisewebtek"
  },
  {
    "id": 3,
    "title": "ReactJS Self Taught, Clone Projects",
    "duties": [
      "Creating websites with ReactJS, some of them are clones helped in learning UI and javascript well",
      "Some of the Major projects are Amazon Clone, Slack Clone, LinkedIn Clone, Netflix Clone",
      "Learnt about ReactJS, Redux, Context API, Firebase usage"
    ],
    "company": "ReactJS (Self)"
  }
];

//map()
const display = WorkData.map((item)=>{
    return item.title
})

console.log(display)

//for loop
for(let i = 0; i< WorkData.length; i++){
    console.log(WorkData[i].company)
}

//for of
for(let item of WorkData){
    console.log(item.title)
}

//for in
for(let item in WorkData){
    console.log(WorkData[item].title)
}

// also can be done:
// const displayForIn = WorkData.map((item)=>{
//     for(let data in item){
//         console.log(data)
//     }
//     return item.title
// })


//for each
const displayForEach = WorkData.forEach((item)=>{
    console.log(item.company)
    return item.company
})

// another example:

const jsonData = '{"name": "Tommy", "secondName":"Vercetti", "count":"42", "age": "30"}';

const parsedData = JSON.parse(jsonData)
console.log(parsedData)

const jsonObject = Object.values(parsedData)
console.log(jsonObject)

jsonObject.forEach((item)=>{
    console.log(item)
})

