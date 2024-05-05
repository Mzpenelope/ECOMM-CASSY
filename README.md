# Porfolio Project
This repository is about the final ALX project developed by Phillipa Aidoo and Christabel Aidoo.

Our project is an E-commerce site with modern functionalities that enable users to browse through products, categories, make purchases, add items to their wishlist, compare products, checkouts and give users a great experience. 

#ROLE
Frontend development was done by Phillipa Aidoo and Backend by Christabel Aidoo.

#Languages Used
Python
javascript

# Wishlist & Shopping Cart Functionality

1. In the asserts/index.js, add event listeners to those buttons and then trigger the appropriate action to add the product to the wishlist or cart.

2. In the src/index.js, define routes on your server-side code to handle adding products to the wishlist and cart.

3. Update the asserts/index.js code to make POST requests to these routes when the respective buttons are clicked.

4. Update src/index.js to define routes to handle adding products to the wishlist and cart.
Modify the routes to handle incoming POST requests from the frontend.

5. In asserts/index.js attach click event listeners to the heart-outline and bag-add-outline buttons.
When clicked, send a POST request to the respective server routes (/wishlist/add or /cart/add).

6. Replace the placeholder code (// Perform actions to add the product...) with actual logic to update your database or perform other necessary actions. Additionally, ensure that the getUserId function retrieves the current user's ID properly;

Replace Placeholder Code with Logic:
In the server-side code (Express.js), implement logic to add the product to the user's wishlist or cart. This typically involves updating your database with the product details associated with the user's ID.
Use Mongoose or any other ORM/ODM library you're using to interact with your database.
Retrieve User ID from Login Details:
Modify the /login route to return the user's ID upon successful authentication.
When the user logs in, generate a session or a token containing the user's ID.
Use this session or token to identify the user and retrieve their ID when adding products to the wishlist or cart

7. 











# JSON Web Tokens (JWT):
Install the jsonwebtoken package:
<npm install jsonwebtoken>

This will generate a JWT containing the user's ID upon successful authentication and send it back to the client. The client can then include this token in subsequent requests to authenticate the user. 

In the src/index.js, remember to replace "your_secret_key" with an actual secure secret key for JWT token signing.


