import logo from '../assets/images/logo4(3).png'

export const FooterMenuLsit = [
    {
        heading:'Start Planning',
        links:[
            { name: 'Search By Vender' , path:'/vendors'},
            { name: 'Search By City' , path:'/vendors'},
            { name: 'Destination Weddings' , path:'/vendors'},
        ]
    },
    {
        heading:'Wedding Idea',
        links:[
            {name:'Wedding Blog',path:'/Blog'},
            {name:'Real Wedding',path:'/real-wedding'},
            {name:'Wedding Inspiration Gallery',path:'/Blog'},
        ]
    },
    {
        heading:'Photo Gallary',
        links:[
            {name:'Wedding Photography',path:'/real-wedding'},
            {name:'Groom Wear',path:'/real-wedding'},
            {name:'Mehendi Design',path:'/Blog'},
        ]
    },
    {
        heading:'Home',
        links:[
            {name:'About Us',path:'/About'},
            {name:'Contact Us',path:'/About'},
            {name:'Terms & Conditions',path:'/About'},
            {name:'Privacy Policy',path:'/About'},

        ]
    },
    {
        islogo:true,logo:logo
    }
] 