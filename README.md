# kart.me

Kart.me is an e-commerce application, where users can place their orders based on the list of available products. 

This application uses a third-party API, called FakeStoreAPI, which is free and serves as Data Source for my platform. Here is it documentation for FakeStoreAPI, https://fakestoreapi.com/docs

Kart.me has been developed using MERN stack.



## Features of Kart.me

1. Variety of products to choose from
2. Filter products based on preferences
3. A simple, intuitive & user-guided UI



# How To Use Kart.me

Kart.me is really simple to use. Users can order their favourite products in just 3 simple steps!

1. Choose from the list of different products. Use filter, if necessary.
2. Hit CART icon at the top-right, to see the list of added products, and click Checkout.
3. Provide and verify your address details and place order. Done!

NOTE: To remove a product while at checkout, user need to navigate to homepage to do it. This is due to the limited scope of this application set for now, so I've focused on a forward flow to the application. I'll refine its functionality in the V2 of Kart.me :smile:



# Getting Started

The final project has been divided into two parts, one serves the Client functionality and the other handles the Server functionality and the deployment has also been done the same way.

`kart.me-FE` is the Client-side of the application, and `kart.me-BE` is the Server-side. 

To function, the project requires the use of environmental variables. So, in order to run the project, you need to make a .env file at the root directory of the Client and the Server application and the respective name for those variable can be found below:

### kart.me-BE Environmental Variables

 `DB_CONNECTION`  
This variable will contain the connection string to MongoDB. For this, first you need to create an account on MongoDB Atlas and paste your connection     string here.

### kart.me-FE Environmental Variables

`REACT_APP_KART_ME_SERVER`
This variable will contain the address of the Server. For now, just enter (http://localhost:8080), as this has been setup as the fallback port for the server application. This variable will connect our client-side application to the server-side app and the database.

#### NOTE: For the environmental variables to work properly in React, you need to create a .env file first and add all your varibles first, and then start your application using `npm start` command. If you started your application and later added the variable to .env file, then you need to stop the application and restart in order for environmental variables to work. 
Reference: https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f



# How to Run the Project

After you are done with the setup as explained below, move to the root of both the client and server application in separate terminals and run the following commands to start the project:

1. `npm install`
2. `npm start`

Thats all what is required. Good Luck!



# API Documentation for Kart.me

The API documentation can be found at :
