import tour1 from './images/tour-1.jpg';
import tour2 from './images/tour-2.jpg';
import tour3 from './images/tour-3.jpg';
import tour4 from './images/tour-4.jpg';

export const pagelinks=[
    {id:1, href:'#home', text:'home'},
    {id:1, href:'#about', text:'about'},
    {id:1, href:'#services', text:'services'},
    {id:1, href:'#tours', text:'tours'},
]
export const sociallinks=[
    {id:1, href:'https://www.facebook.com', icon:'fab fa-facebook'},
    {id:2, href:'https://www.twitter.com', icon:'fab fa-twitter'},
    {id:3, href:'https://www.instagram.com', icon:'fab fa-instagram'},
]
export const service = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 1,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 1,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tours=[
    {id:1, image:tour1, date:'august 26th, 2023', title:'Tibet Adventure', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', loc:'china', duration:'6', cost:'1,96,214'},
    {id:2, image:tour2, date:'october 21st, 2023', title:'Phuket Retreat', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', loc:'thailand', duration:'11', cost:'1,20,000'},
    {id:3, image:tour3, date:'september 20th, 2024', title:'Explore Hong Kong', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', loc:'Hong Kong', duration:'8', cost:'4,67,207'},
    {id:4, image:tour4, date:'december 5th, 2026', title:'Enchanting Japan', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', loc:'Japan', duration:'20', cost:'5,60,000'}
]