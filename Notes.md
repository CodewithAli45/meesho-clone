## Project Context

- The rise of e-commerce has revolutionized the way people shop, and it is expected to continue to grow in popularity in the coming years.  Meesho is an e-commerce platform that enables small businesses and entrepreneurs to start and grow their own online stores
- The platform provide businesses with a cost-effective solution for setting up an online store. Building an e-commerce platform from scratch can be time-consuming and expensive, and many businesses do not have the resources or expertise to do so. The project offers a quick and easy way for businesses to establish an online presence, without incurring the costs and challenges of building a platform from scratch.

**Tech stack Prerequisite:**  HTML, CSS, JavaScript, React

## ****Project Steps****

- **Step-1**: Set up the project
    - Create a new React project using the `create-react-app` tool or a similar tool.
    - Set up the project directory structure, including subdirectories for `components`, `styles`, and any other necessary files.
    - Install any necessary dependencies, such as `react-router` or a library for making HTTP requests
- **Step-2**: Implement the product catalog page
    - Create the layout and user interface for the product catalog page which includes, the `nav` `bar`, the `search bar`, the filtering options and the list of products.
    - Clicking on the products should take user to the `product page`.
    - `Fetch` the data of products from an ([https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products](https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products)) and display the product data in the appropriate components. For the filtering or search option, store the data received from the `api` in a object, and filter through the data locally and update the product catalog.
    - Implement pagination of the products. Each page should display 20 products.
- **Step-3**: Implement the product page
    - Create the layout and user interface for the product page which includes, the product `image`, its `name`, `description` and also the `ratings`. All the details can be fetched from the same api.
    - Each product should have a add to cart option and should also allow to specify the number of units. Save the data about the products added to cart in a global store using `Context Api` or `Redux`.
- **Step-4**: Implement the shopping cart page
    - Create the layout and user interface for the shopping cart page which includes the list of products that are present in the cart along with their quantity, the total amount and a checkout button
    - Get the data of the cart products from the `global store` and display in the appropriate components.
    - Every product should have a `button` to change its quantity.
    - Calculate the total amount of the products and display it in the interface.
- **Step-5:** Implement payment modal
    - Create a `modal` in the shopping cart page with a `form` input about the user address and the type of payment, and a `complete payment button`. Pre fill the address form with the existing user data if present. This `modal` should appear on clicking the `checkout button`
    - The `complete payment button` should trigger a `toast` mentioning the order has been placed.
- **Step-6:** Implement mock user authentication and persistent storage
    - Set up a system to mock user authentication, using a login form. The `form` should have a two input , username and password. The user should only be allowed access if the username and password is admin. In future, we can integrate an API to make the authentication functional.
    - Store the cart data in the `local storage`, and retrieve it every time the user enters the site.



Question and Answers

1.  What is the purpose of adding and removing event listeners?

    Ans-> Adding and removing event listeners is important as it ensures that code is efficient and does not contains any memory leaks. 
    When we add event lister we are telling browser to execute a specific function every time the events occurs. If we do not remove the event listener when it is no longer needed, the function will continue to execute even if user navigate from page.
    This causes performance issues and memory leak over time.

2.  What is memory leak?

    Ans-> Memory occurs when program fails to release memory that no longer needed, causing the progam to consume more and more memory overtime. This lead to performance issues and eventually crashed.