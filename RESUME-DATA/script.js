const resume = {
    'name': 'Naveen Kumar',
    'age': 24,
    'passedOut' : 2018,
    'experience' : '1 yr',
    'designation' : 'Web Designer',
    'projects' : [
                {
                    id: 1,
                    title: "Amazon Clone",
                    about:
                    "This project is a clone of Amazon, where you can add the items in the basket and remove items from the basket. The products are fetched from API. After adding the products to the cart you can proceed to checkout. Individual category products are displayed using react router",
                    tags: ["ReactJs", "Firebase", "ContextAPI", "useReducer", "Authentication", "Router", "Fetch API", "Cart", "Checkout", "Categories"],
                    demo: "https://amazon-clone-97.netlify.app/",
                    github: "https://github.com/onlynavv/amazon-clone/tree/main/amazon-clone-app",
                    image:
                    "/assets/images/amazon-clone.jpg",
                },

                {
                    id: 2,
                    title: "Slack Clone",
                    about:
                    "This project is a clone of Slack, where you can send messages from any channels, and you can also add new channel and then start having conversation. Navigate through the channels. The messages will be stored and retrieved when you login again. You can login through Google Authentication. Firebase is used as the backend",
                    tags: [
                    "ReactJs",
                    "Firebase",
                    "Styled Components",
                    "Google Authentication",
                    "Firebase Auth Hooks",
                    "Context API",
                    "Router",
                    "Chat",
                    "Chat Rooms",
                    "Add Channel"
                    ],
                    demo: "https://chat-app-45971.web.app/",
                    github: "https://github.com/onlynavv/slack-clone/tree/main/slack-clone-app",
                    image:
                    "/assets/images/slack-clone.jpg",
                },
                {
                    id: 3,
                    title: "LinkedIn Clone",
                    about:
                    "This project is a clone of linkedin, where you can post content and can also upload images and add video links which will played in the feed which is powered by react-player Posts will be stored and then retrieved when the user login again. Firebase is used to store the posts by any user. Post can entered same like in linkedin popup modal",
                    tags: [
                    "ReactJs",
                    "Firebase",
                    "Google Authentication",
                    "Context API",
                    "Router",
                    "Image Upload",
                    "Post",
                    "Feeds"
                    ],
                    demo: "https://linkedin-clone-ef0a7.web.app/",
                    github: "https://github.com/onlynavv/linkedin-clone/tree/main/linkedin-clone-app",
                    image:
                    "/assets/images/linkedin-clone.jpg",
                },
                {
                    id: 4,
                    title: "Netflix Clone",
                    about:
                    "This project is clone of Netflix, where all the movies and tv series data are fetched from API, to fetch the API here we have used axios. Displayed based on the categories and also you can look for the movie info when clicked and scrolling effect is added to explore more. User can create an account and login to use the clone app",
                    tags: [
                    "ReactJs",
                    "Firebase",
                    "Authentication",
                    "Axios",
                    "Context API",
                    "Movie Info",
                    "Router"
                    ],
                    demo: "https://netflix-clone-0909.netlify.app/",
                    github: "https://github.com/onlynavv/netflix-clone-react/tree/main/netflix-clone",
                    image:
                    "/assets/images/netflix-clone.jpg",
                },
                {
                    id: 5,
                    title: "Shopping Cart (Redux)",
                    about:
                    "This is a shopping cart project where you can add the products into the cart and also remove the products from the cart, total will be displayed in the cart page, you can navigate through the app with the help of react router. Here the state management is done by Redux, whether to add the product and remove the cart all are done by the state management tool. If the same item is added twice the quantity will be increased in the cart instead of adding that item twice in the cart",
                    tags: [
                    "ReactJs",
                    "Redux",
                    "Router",
                    "Cart",
                    "State Management"
                    ],
                    demo: "https://shopping-cart-9797.netlify.app/",
                    github: "https://github.com/onlynavv/shopping-cart/tree/main/cart-app",
                    image:
                    "/assets/images/cart.jpg",
                },
                {
                    id: 6,
                    title: "Movie Search",
                    about:
                    "This is a project where you can search for movies and then add the movies to the favourites and then also you can remove it from the favourites. Here local storage is used to store the favourites and retreived later. Movie details are fetched from the API",
                    tags: [
                    "ReactJs",
                    "Fetch API",
                    "Favourites",
                    "Search",
                    "Local Storage"
                    ],
                    demo: "https://movie-search-9797.netlify.app/",
                    github: "https://github.com/onlynavv/moviedb/tree/main/moviedb",
                    image:
                    "/assets/images/movie-search.jpg",
                },
                {
                    id: 7,
                    title: "React Edit Table",
                    about:
                    "This is CRUD Table in React, where all the rows are editable. Here you can add a new contact into the table and the edit whatever the row you want and update them with new values and you can also delete the row from the table. The edit is an inline row edit",
                    tags: [
                    "ReactJs",
                    "Table",
                    "Create",
                    "Edit",
                    "Delete",
                    "Update",
                    "Editable Row"
                    ],
                    demo: "https://edit-table-react9797.netlify.app/",
                    github: "https://github.com/onlynavv/react-table/tree/main/react-table-app",
                    image:
                    "/assets/images/react-table.jpg",
                },
                {
                    id: 8,
                    title: "Notes App",
                    about:
                    "This project is a CRUD notes app, where you can add the note and then edit the note and update the new note message, you can also delete the notes and then you can search the notes in the app. Word count will be maintained max 200 words can be entered.",
                    tags: [
                    "ReactJs",
                    "Create",
                    "Edit",
                    "Delete",
                    "Update",
                    "Search",
                    "Word Count"
                    ],
                    demo: "https://notes-app-9797.netlify.app/",
                    github: "https://github.com/onlynavv/notes-app/tree/main/notes-app-clone",
                    image:
                    "/assets/images/notes-app.jpg",
                },
                ],
}

const resumeJSON = JSON.stringify(resume)
console.log(typeof resumeJSON)

const displayArea = document.getElementById('display')
displayArea.innerText = resumeJSON