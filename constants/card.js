const list =[

  {
     name:'Kadın giyim',
    id:1,
    bol:false,
    children:[

      {name:'womens-dresses'},
      {name:'womens-shoes'},
      {name:"womens-watches"},
      {name:"womens-bags"},
      {name:"womens-jewellery"},

        ]


  },
  {
    name:'Erkek giyim',
     id:2,
    bol:false,
    children:[
      {name:"mens-shirts"},
      {name:"mens-shoes"},
      {name:"mens-watches"},
    ]

  },

  {
    name:'Medikal',
    id:3,
    bol:false,
    children: [
      {name:"fragrances"},
      {name:"skincare"},
      {name:"groceries"},

    ]

  }
  ,

  {
    name:'Teknoloji',
    bol:false,
    children:[
      {name:"smartphones"},
      {name:"laptops"},
    ]
  },
  {
    name:'Aksesuar',
    bol:false,
    children:[
      {name:"automotive"},
      {name:"motorcycle"},
      {name:"lighting"},
    ]
}



]
export default list
