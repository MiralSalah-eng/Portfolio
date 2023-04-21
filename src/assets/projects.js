const projects = [
  {
    id: "00",
    name: "React Typscript Todo app",
    imgUrl: 'todo-one.png',
    description:
      "Todo app using react typscript, creating custom hook to save data to localStorage, app to create, read, update and delete tasks , Or choose to enter one thing to do and mark it done",
    technologies:[
      'react','crud','custom-hook','typscript'
    ],
      links: [
      {
          id:'01',
          link: 'https://todo-or-onething-app.netlify.app/',
          text:'Demo',
          style:'rounded-bl-md bg-pink-600'
      },
      {
          id:'02',
          link: 'https://github.com/MiralSalah-eng/todo-app',
          text:'Frontend',
          style:'bg-slate-900'
      },
    
    ],
    images: [
      'todo-0.png' ,'onething.png','onething-2.png','onething-3.png','onething-1.png', 'taskone.png','todo-2.png','todo-3.png','todo-4.png','todo-1.png',
    ] 
  },


  {
      id: "01",
      name: "Ecommerce MERN App",
      imgUrl: 'shop.png',
      description:
        "Full stack react ecommerce website using reactjs, redux toolkit and mongoDB with modern UI and UX. Server side using Nodejs and ExpressJS.Features : Authentication , State Management Using Redux Toolkit , and adding products using mongoose, etc. Used packeges :   bootstrap, react,react-dom, react-redux, react-router-dom, react-scripts, react-toastify,reactstrap,remixicon ",
      technologies:[
        'react','redux-toolkit','expressjs','mongoDB','nodejs','react-router-dom','react-toastify','reactstrap'
      ],
        links: [
        {
            id:'01',
            link: 'https://mern-benemart.onrender.com',
            text:'Demo',
            style:'rounded-bl-md bg-pink-600'
        },
        {
            id:'02',
            link: 'https://github.com/MiralSalah-eng/mern-benemart-frontend',
            text:'Frontend',
            style:'bg-slate-900'
        },
        {
            id:'03',
            link:'https://github.com/MiralSalah-eng/mern-benemart-backend',
            text:'Backend',
            style:'rounded-br-md bg-slate-800'
        },
      
      ],
      images: [
        'benmart.png' , 'adminDashboard.png','shop.png','cart.png','wishlist.png'
      ] 
    },

    {
      id: "02",
      name: "MERN CRUD App",
      imgUrl: 'book-light.png',
      description:
        "MERN CRUD App Technologies : React Js , NodeJS, MongoDB, Express JS Features : Authentication and Validation. Create,Read,Update and Delete data from database. Light and dark mode accessability",
        technologies:[
          'react','authentication','expressjs','mongoDB','nodejs','validation','light','dark-mode','crud'
        ],
        links: [
        {
            id:'01',
            link: 'https://mern-crud-book.onrender.com/',
            text:'Demo',
            style:'rounded-bl-md bg-pink-600'

        },
        {
            id:'02',
            link:  'https://github.com/MiralSalah-eng/mern-crud-book',
            text:'Frontend',
            style:'bg-slate-900'

        },
        {
            id:'03',
            link: 'https://github.com/MiralSalah-eng/mern-crud-book-backend',
            text:'Backend',
            style:'rounded-br-md bg-slate-800'

        },
       
      ],
      images: [
        'book-light.png' , 'book-dark.png','book-sign.png','book-sign-dark.png'
      ] 
    },
    {
      id: "03",
      name: "Medical ReactJs App",
      imgUrl: 'medical-app.png',
      description:
        "ReactJs website, fully responsive website using React js and Tailwind css , Using React -Scroll package , Date Picker For React package",
        technologies:[
          'react','tailwind','data-picker'
        ],
        links: [
        {
            id:'01',
            link: 'https://beyond-care-react.netlify.app/',
            text:'Demo',
            style:'rounded-bl-md bg-pink-600'

        },
        {
            id:'02',
            link:  'https://github.com/MiralSalah-eng/medicine-app-react',
            text:'Frontend',
            style:'rounded-br-md bg-slate-900'

        },
      ],
      images: [
        'medical-app.png' , 'medical-about.png','medical-doctor.png'
      ] 
    },

    {
        id: "04",
        name: "E-commerce Website Using NodeJs/Template Engine with express and MongoDB With MVC Structure ",
        imgUrl: 'e-shop.png',
        description:
          "E-commerce Website Using NodeJs/Template Engine with express and MongoDB With MVC Structure, Technologies : NodeJS, MongoDB, Express JS Features : Authentication and Validation. Create,Read,Update and Delete data from database. Style using BootStrap ",
          technologies:[
            'react','template-engine','expressjs','mongoDB','nodejs','authentication','validation','bootStrap'
          ],
        
          links: [
          {
              id:'01',
              link: 'https://e-shop-ih66.onrender.com',
              text:'Demo',
              style:'rounded-bl-md bg-pink-600'
  
          },
    
          {
              id:'02',
              link: 'https://github.com/MiralSalah-eng/e-shop-',
              text:'Full Stack Github',
              style:'rounded-br-md bg-slate-900'
  
          },
         
        ],
        images: [
          'e-shop.png' , 'e-shop-products.png','add-products.png','manage.png','manage-search.png'
        ] 
      },

      {
        id: "05",
        name: " Ecommerce-Challange-frontendmentorProduct Page",
        imgUrl: 'ecommerce.png',
        description:
          "ReactJs website, fully responsive website using React js and Tailwind css.",
          technologies:[
            'react','tailwind','responsive'
          ],
          links: [
          {
              id:'01',
              link: 'https://ecommerce-miral.netlify.app/',
              text:'Demo',
              style:'rounded-bl-md bg-pink-600'
  
          },
          {
              id:'02',
              link:  'https://github.com/MiralSalah-eng/Ecommerce-Challange-frontendmentor-',
              text:'Frontend',
              style:'rounded-br-md bg-slate-900'
  
          },
        ],
        images: [
          'ecommerce.png' , 'notification.png','gallery.png'
        ] 
      },


      {
        id: "06",
        name: "Budget app using React Router DOM",
        imgUrl: 'budgetapp-1.png',
        description:
          "ReactJs website, fully responsive website using React js and React Router DOM Here are the details of the Budget App: Login with your name and set it in local storage,Create budgets by providing a name and an amount, Add expenses and choose which budget to assign them to, Budgets and expenses are saved to local storage,Each budget has a budget card and a detailed page with a dynamic color style,Adding an expense reduces the budget amount accordingly,You can delete expenses or entire budgets, If expenses exceed 9, you can display all expenses on the Expenses page,Deleting the user will delete all data saved in local storage.",
          technologies:[
            'react','router-dom','localStorage',"crud",'useLoader','action'
          ],
          links: [
          {
              id:'01',
              link: 'https://budget-app-rrd.netlify.app/',
              text:'Demo',
              style:'rounded-bl-md bg-pink-600'
  
          },
          {
              id:'02',
              link:  'https://github.com/MiralSalah-eng/Budget-App',
              text:'Frontend',
              style:'rounded-br-md bg-slate-900'
  
          },
        ],
        images: [
          'budgetapp-1.png' , 'budgetapp-2.png' ,'budgetapp-3.png' ,'budgetapp-4.png' ,'budgetapp-5.png' ,'budgetapp-6.png' ,'budgetapp-7.png' ,'budgetapp-8.png','budgetapp-9.png','budgetapp-10.png'   
        ] 
      },

      {
        id: "07",
        name: "Chat app using Socket.io",
        imgUrl: 'chat-1.png',
        description:
          "ReactJs website, fully responsive website using React js and soket.io. Build server using node js and express js and make connection using socket.io",
          technologies:[
            'react','soket.io.','nodejs',"expressjs"
          ],
          links: [
          {
              id:'01',
              link: 'https://chat-app-n6f5.onrender.com/',
              text:'Demo',
              style:'rounded-bl-md bg-pink-600'
  
          },
          {
              id:'02',
              link:  'https://github.com/MiralSalah-eng/chat-app-frontend',
              text:'Frontend',
              style:'rounded-br-md bg-slate-900'
  
          },
          {
              id:'03',
              link:  'https://github.com/MiralSalah-eng/chat-app-server',
              text:'Backend',
              style:'rounded-br-md bg-slate-900'
  
          },
        ],
        images: [
          'chat-1.png' , 'chat-2.png' ,'chat-3.png'   
        ] 
      },

]  

export default projects;
