bookstore
===========

simple bookstore



A non-trivial Node.js application, built on top of PayPal's Kraken.js framework. This app demonstrates a basic shopping cart and CRUD inventory management capability.

[MongoDB](www.mongodb.com) is used to manage the internal inventory system, and payments are simulated using PayPal's REST SDK against their Sandbox API environment, [api.sandbox.paypal.com](api.sandbox.paypal.com).


Prerequisites

This example requires that MongoDB is installed and running on it's default port.
You will --of course-- need Node (Version >= 0.10.20 preferred)
The Kraken generator. If you havent yet installed it, simply do: sudo npm install -g generator-kraken
Create the app

Let's create our example app using the generator:

yo kraken

Just follow the prompts, and you'll have a plain vanilla app in a few clicks.

$ yo kraken

     ,'""`.
    / _  _ \
    |(@)(@)|   Release the Kraken!
    )  __  (
   /,'))((`.\
  (( ((  )) ))
   `\ `)(' /'

[?] Application name: Kraken_Example_Shopping_Cart
[?] Description: A non-trivial kraken app
[?] Author: 
[?] Use RequireJS? No

Start your server:

To run your project, just go into the newly created directory and type npm start

Explore the app

Visit http://localhost:8000

http://foundation.zurb.com download the foundation6 and grab css, js files include in the project.

