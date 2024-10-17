# Project Name:
## Pet Adoption Center

## Description: 
A dynamic and user-friendly pet adoption platform where users can browse pets by categories, like their favorite pets, and view detailed information about each pet before making an adoption decision.


##  Project Features

### 5 Key Features

1. Category-Based Pet Filtering:
   - The application allows users to explore pets by different categories such as Dogs, Cats, Birds, etc. When a user clicks on a category button, only pets from that specific category are displayed on the screen. Each category is fetched dynamically from an API, providing users with the latest available pets in each group.

   - How it works: When a category button is clicked, the application sends a request to fetch pets from that category and displays them in the grid. The active category button is visually highlighted so the user knows which category is currently being viewed.

2. Like Pets Functionality:
   - Users can "like" their favorite pets by clicking a dedicated like button on each pet card. When a pet is liked, its image is added to a separate "Liked Pets" section on the screen, allowing users to easily keep track of the pets they are interested in.

   - How it works: Clicking the "Like" button adds the pet’s image to the liked pets section. This list is updated dynamically, and users can see all their liked pets at a glance without leaving the page.

3. Detailed Pet Information:
   - Each pet card has a "Details" button that users can click to open a modal with comprehensive information about the pet. This includes the pet's breed, gender, price, date of birth, and vaccination status. The modal enhances the user experience by providing an in-depth look at the pet without navigating away from the main page.
   - How it works: The modal is triggered by the "Details" button. The pet's information is fetched from the API and displayed in the modal, allowing users to make an informed decision about adoption.

4. Sort by Price:
   - Users have the option to sort the pets displayed by price in descending order. This feature is particularly useful for users who have a specific budget in mind and want to quickly find pets within their price range.

   - How it works: A "Sort By Price" button is provided. When clicked, the application sorts the pet data by price from highest to lowest before displaying the pets on the grid. This sorting is done dynamically using JavaScript.

5. Responsive Design:
   - The website is designed to be fully responsive, meaning it adapts to various screen sizes, ensuring a smooth and intuitive user experience on mobile devices, tablets, and desktops. The layout adjusts itself to the available screen space, making sure that all elements, such as pet cards and buttons, are displayed optimally.

   - How it works: The design uses Tailwind CSS to ensure responsiveness. Flexbox and grid systems are used to create adaptive layouts, and CSS media queries handle different screen sizes, making the site user-friendly on any device.

##  ES6 Features Used
- Arrow Functions: Used to simplify function expressions and make the code cleaner.
- Template Literals: Utilized for embedding dynamic values in strings.
- Default Parameters: Applied in functions to provide default values for certain parameters.
- let/const: Used for block-scoped variable declarations.
- Promises & Fetch API: Employed to handle asynchronous requests for fetching pet data from the API.

##  Live Link
Check out the live Link of the project (https://myadoptedpet.netlify.app/)


 Adopt your favorite pet today!
