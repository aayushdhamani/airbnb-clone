import mountain from '../assets/facilities/mountain.svg';
import wifi from '../assets/facilities/wifi.svg';
import table from '../assets/facilities/table.svg';
import car from '../assets/facilities/car.svg';
import TV from '../assets/facilities/tv.svg';
import window from '../assets/facilities/window.svg';
import fridge from '../assets/facilities/fridge.svg';
import camera from '../assets/facilities/camera.svg';
import carbon from '../assets/facilities/carbon.svg';
import smoke from '../assets/facilities/smoke.svg';
import ra1 from '../assets/ratings/ra1.svg'
import ra2 from '../assets/ratings/ra2.svg'
import ra3 from '../assets/ratings/ra3.svg'
import ra4 from '../assets/ratings/ra4.svg'
import ra5 from '../assets/ratings/ra5.svg'
import ra6 from '../assets/ratings/ra6.svg'
import u1 from '../assets/user/u1.svg'
import u2 from '../assets/user/u2.svg'
import u3 from '../assets/user/u3.svg'
import u4 from '../assets/user/u4.svg'
import u5 from '../assets/user/u5.svg'

export const facilities=[
    {
        id:1,
        image:mountain,
        name:'Mountain view'
    },
    {
        id:2,
        image:wifi,
        name:'Wifi'
    },
    {
        id:3,
        image:table,
        name:'Dedicated Work Space'
    },
    {
        id:4,
        image:car,
        name:'Free parking on premises'
    },
    {
        id:5,
        image:TV,
        name:'TV'
    },
    {
        id:6,
        image:window,
        name:'Private patio or balcony'
    },
    {
        id:7,
        image:fridge,
        name:'Fridge'
    },
    {
        id:8,
        image:camera,
        name:'Exterior security cameras on property'
    },
    {
        id:9,
        image:carbon,
        name:'Carbon monoxide alarm'
    },
    {
        id:10,
        image:smoke,
        name:'smoke alarm'
    },
    
]



export const reviews = [
    {
      id: 1,
      name: "Uttam",
      profilePicture: "https://a0.muscache.com/im/pictures/user/User/original/7c17f579-c9cc-43eb-8f8b-165adb567e61.jpeg?im_w=240&im_format=avif",
      yearsOnPlatform: "1 year on Airbnb",
      reviewTime: "5 days ago",
      rating: 5,
      review: "One of the best Airbnb experience ever.."
    },
    {
      id: 2,
      name: "Aman",
      profilePicture: "https://a0.muscache.com/im/pictures/user/ff0fc268-d981-4a21-8c19-37deab8259b2.jpg?im_w=240&im_format=avif",
      yearsOnPlatform: "2 years on Airbnb",
      reviewTime: "1 week ago",
      rating: 5,
      review: "This place is worth the stay. We celebrated our first anniversary here.. the attic room gets so much of sunlight and the balcony has a beautiful view!! The food is amazing ❤️ we..."
    },
    {
      id: 3,
      name: "Vedansh",
      profilePicture: "https://a0.muscache.com/im/pictures/user/84fce1ad-9b45-4dc8-bae8-7d123adaf96d.jpg?im_w=240&im_format=avif",
      yearsOnPlatform: "2 years on Airbnb",
      reviewTime: "1 week ago",
      rating: 5,
      review: "This trip was very memorable to me, and the stay had an equally big part in it, as the person I was accompanying. I would like to thank Kanupriya and Dhanalaxmi to host us for..."
    },
    {
      id: 4,
      name: "Anirudh",
      profilePicture: "https://a0.muscache.com/im/pictures/user/User-269128221/original/9d5ebf27-71d4-411e-8b2a-154d7b7191e0.jpeg?im_w=240&im_format=avif",
      yearsOnPlatform: "6 years on Airbnb",
      reviewTime: "2 weeks ago",
      rating: 5,
      review: "The listing was as great as it was described, with a great host making our stay satisfying and memorable. Would recommend it to fellow travellers wanting to stay away from..."
    }
  ];

  export const rating=[
    {
        id:1,
        name:"Cleanliness",
        rating:4.9,
        image:ra1
    },
    {
        id:2,
        name:"Accuracy",
        rating:4.8,
        image:ra2
    },
    {
        id:3,
        name:"Check-in",
        rating:5.0,
        image:ra3
    },
    {
        id:4,
        name:"Communication",
        rating:4.9,
        image:ra4
    },
    {
        id:5,
        name:"Location",
        rating:4.8,
        image:ra5
    },
    {
        id:6,
        name:"Value",
        rating:4.6,
        image:ra6
    },
  ]

  export const user=[
    {
        id:1,
        image:u1,
        desc:'My work: Hospitality'
    },
    {
        id:2,
        image:u2,
        desc:'I spend too much time: Trying new recipes for our guest menu!'
    },
    {
        id:3,
        image:u3,
        desc:'Most useless skill: Walk for miles without stopping ;D'
    },
    {
        id:4,
        image:u4,
        desc:'What makes my home unique: Our specially curated inhouse activities'
    },
    {
        id:5,
        image:u5,
        desc:'Pets: We have 2 very friendly ginger cats'
    },
    
  ]