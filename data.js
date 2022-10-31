const fs = require('fs');
const axios = require('axios')

// {
//     "id": 1,
//     "url": "https://october-hack-malvee.herokuapp.com/advocates/user/1/",
//     "company": {
//         "id": 1,
//         "url": "https://october-hack-malvee.herokuapp.com/companies/1/",
//         "links": [],
//         "name": "Google",
//         "logo": "https://october-hack-malvee.herokuapp.com/images/google.jpg",
//         "summery": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
//     },
//     "links": [
//         {
//             "name": "YouTube",
//             "url": "https://www.youtube.com/c/Alvee"
//         },
//         {
//             "name": "Twitter",
//             "url": "https://twitter.com/Alvee"
//         }
//     ],
//     "name": "M Alvee",
//     "username":"malvee",
//     "profile_pic": "https://october-hack-malvee.herokuapp.com/images/1.jpg",
//     "short_bio": "YouTuber, contributor at @traversymedia, software developer at @agoraio and online instructor.",
//     "long_bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     "advocate_since": "2021-01-15"
// }

const cmp = [
    {
        id:4,
        name:"Linkden",
        logo:"https://october-hack-malvee.herokuapp.com/images/link.png",
     url: "https://october-hack-malvee.herokuapp.com/companies/4/",
    summery: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
    },
    {
        id:2,
        name:"Google",
        logo:"https://october-hack-malvee.herokuapp.com/images/google.jpg",
         url: "https://october-hack-malvee.herokuapp.com/companies/2/",
        summery: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
    } ,
    {
        id:1,
        name:"Facebook",
        logo: "https://october-hack-malvee.herokuapp.com/images/facebook.png",
         url: "https://october-hack-malvee.herokuapp.com/companies/1/",
        summery: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
    },
    {
        id:3,
        name:"Uber",
        logo:"https://october-hack-malvee.herokuapp.com/images/uber.jpg",
         url: "https://october-hack-malvee.herokuapp.com/companies/3/",
        summery: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
    } 
   
]



let data = ``;


// start from id 6 

// "id": 1,
//         "url": "https://october-hack-malvee.herokuapp.com/companies/1/",
//         "links": [],
//         "name": "Google",
//         "logo": "https://october-hack-malvee.herokuapp.com/images/google.jpg",
//         "summery": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem

function rint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

for(let i = 6; i < 99;i++){
    let name = "Jhon Doe"

    let names = ["Jhon Doe"]

        let person = {
            id:i,
            name,
            profile_pic: "https://october-hack-malvee.herokuapp.com/images/"+ rint(1,5).toString() + ".jpg",
            username: name.replace(/\s+/g, '').toLowerCase() + i,
            url: `https://october-hack-malvee.herokuapp.com/advocates/user/${i}/`,
            company:cmp[rint(0, cmp.length -1)],
            links: [
                         {
                             name: "YouTube",
                             url: `https://www.youtube.com/c/${name.replace(/\s+/g,"").toLowerCase() + i}`
                         },
                         {
                             name: "Twitter",
                             url: `https://twitter.com/${name.replace(/\s+/g,"").toLowerCase() + i}`
                         }
             ],
             short_bio: "YouTuber, contributor at @traversymedia, software developer at @agoraio and online instructor.",
             long_bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
             advocate_since: "2021-01-15"
        }

        data += JSON.stringify(person) + " , "
        
        fs.writeFile("./data.json", data , (err)=>{
            if(err){
                console.log(err)
            }
        });



 
}



