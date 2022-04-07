
<div align="center">

<img alt="evolt ecommerce logo" src="public/favicon.svg" width="150px" height="150px" />

# Evolt

[![Netlify Status](https://api.netlify.com/api/v1/badges/1df6ff35-76e4-4223-8c83-be2ca14adf20/deploy-status)](https://app.netlify.com/sites/evolt-ecommerce/deploys)

</div>

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Connect with me](#-connect-with-me)


## About
 - Evolt is a e-commerce web app made with React.js. Here you can buy, variety of heaphones 
of different brands and types.

## Features
 #### Home page 
 - It has categories and brands listed, clicking on nay one of them takes to the product listing page 
    with that particular category or brand applied as filter.
    
 #### Product Listing 
 - On this page user can see all the products of different brands and types.
    - User can add products in cart and wishlist
    - Searching of products can be done on this page.
    - User can apply sorting on price and date.
    - Filters on types, brands, instock and can select the price range.

 #### Product Details page
 - On clicking any product in product listing page, it will navigate to products details page, which will show 
 details of that particular product.
 
 #### Wishlist 
 - On adding product to wishlist, that product now can be seen in wishlist and from there it can be added into cart.
 
 #### Cart Management
 - From here user can: 
    - Move product in whislist
    - Increase / decrease product quantity
    - Choose delivery address
    - Apply coupon on order
    - Proceed to checkout

#### Address Management
- On profile page users can see the addresses section, where they can:
  - Add new delivery address
  - Can select the address
  - Edit the address
  - Delete the address

#### Coupons
- In cart page user can apply coupon on total price, if coupon not needed then they can remove it also.

#### Checkout
- For checkout user need to select the address, else the checkout button will be disabled
- Once address selected user can procedd to checkout page.
- Over there user can see the 
    - Order details
    - Selected address
    - Place order button

#### Payment
- Once every thing is finalised by user after clicking on place order button, payment gateway will open and payment can be done.

#### Authentication
- Evolt also has login, signup and logout feature
  - For Signup, form validation is done for all the fields.

## Getting Started

- Clone the repository on your local machine with the command below in your terminal, and cd into the **evolt-ecommerce** folder

```sh
https://github.com/rohanmathur91/evolt-ecommerce.git

cd evolt-ecommerce
```

- Install dependencies (if you are using **yarn** then do with that)

```sh
npm install
```

- Create a `.env` file at the root level of the directory (at the level of `package.json`) and create a environment variable

```
REACT_APP_JWT_SECRET = <JWT_SECRET_KEY_OF_YOUR_CHOICE>
```

- Start the server🚀

```
npm start
```

## 👨‍💻 Connect with me 

<a href="https://twitter.com/rohanmathur91"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/rohanmathur04/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>






