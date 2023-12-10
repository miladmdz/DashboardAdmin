let xAxisData=[
    {
        "name":"Jan",
        "sale":112_000
    },
    {
        "name":"Feb",
        "sale":99_000
    },
    {
        "name":"Mar",
        "sale":12_090
    },
    {
        "name":"Apr",
        "sale":99_000
    },
    {
        "name":"May",
        "sale":54_000
    },
    {
        "name":"Jun",
        "sale":85_000
    },
    {
        "name":"Jul",
        "sale":34_000
    },
    {
        "name":"Agu",
        "sale":18_598
    },
    {
        "name":"Sep",
        "sale":0
    },
    {
        "name":"Oct",
        "sale":73_078
    },
    {
        "name":"Nov",
        "sale":12_900
    },
    {
        "name":"Dec",
        "sale":97_000
    },
]
const newMembers=[
  
]
const transaction=[
    {
        id:1,
        customer:"Milad Mdz",
        date:"24 May 2022",
        amount:"123",
        status:"Pending",
        img:"images/profile.jfif"
    },
    {
        id:2,
        customer:"Zahra Bhd",
        date:"28 Feb 2022",
        amount:"123",
        status:"Approved",
        img:"images/zahra.jpg"
    },
    {
        id:3,
        customer:"Ehsan Mdz",
        date:"15 Agu 2022",
        amount:"1000",
        status:"Declined",
        img:"images/sasan.jpg"
    },
    {
        id:4,
        customer:"Alireza Mdz",
        date:"10 Jul 2022",
        amount:"123",
        status:"Pending",
        img:"images/hamze.jpg"
    },
]
let userRows=[
    {
        id:1,
        username:"Milad Mdz",
        avatar:"../images/profile.jfif",
        status:"active",
        transaction:"$129.52",
        email:"amin@gmail.com"
    },
    {
        id:2,
        username:"Zahra Bhd",
        avatar:"../images/zahra.jpg",
        status:"active",
        transaction:"$110",
        email:"amin@gmail.com"
    },
    {
        id:3,
        username:"Ehsan Mdz",
        avatar:"../images/sasan.jpg",
        status:"non-active",
        transaction:"$98",
        email:"amin@gmail.com"
    },
    {
        id:4,
        username:"Alireza Mdz",
        avatar:"../images/hamze.jpg",
        status:"non-active",
        transaction:"$0",
        email:"amin@gmail.com"
    },
    {
        id:5,
        username:"Mahdi Mdz",
        avatar:"../images/qadir.jpg",
        status:"active",
        transaction:"$55.98",
        email:"amin@gmail.com"
    },
]
let products=[
    {
        id:1,
        title:"Asus",
        avatar:"../images/asus.jpeg",
        price:10000,
        active:"Yes",
        isin:"No",
        productsData:[
            {
                name:"Jan",
                sales:20000
            },
            {
                name:"Feb",
                sales:7000
            },
            {
                name:"Mar",
                sales:13000
            },
        ]
    },
    {
        id:2,
        title:"Acer",
        avatar:"../images/acer.jpg",
        price:890,
        active:"No",
        isin:"Yes",
        productsData:[
            {
                name:"Jan",
                sales:53000
            },
            {
                name:"Feb",
                sales:2000
            },
            {
                name:"Mar",
                sales:17000
            },
        ]
    },
    {
        id:3,
        title:"HP",
        avatar:"../images/hp.jpg",
        price:3000,
        active:"No",
        isin:"No",
        productsData:[
            {
                name:"Jan",
                sales:6000
            },
            {
                name:"Feb",
                sales:8000
            },
            {
                name:"Mar",
                sales:80000
            },
        ]
    },
    {
        id:4,
        title:"Dell",
        avatar:"../images/dell.jpg",
        price:2500,
        active:"Yes",
        isin:"No",
        productsData:[
            {
                name:"Jan",
                sales:4000
            },
            {
                name:"Feb",
                sales:3000
            },
            {
                name:"Mar",
                sales:5000
            },
        ]
    },  
]


export {xAxisData,newMembers,transaction,userRows,products}