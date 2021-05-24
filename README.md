<h1 align="center">
# to-do-list
  </h1>

<p align="center">
A to-do list made with webpack
</p>

<p align="center">
  <strong>to-do-list</strong> allows you to create, read, update, and delete tasks using localHost so it saves to your computer. It allows you to make projects and mark off tasks.
  <br>
  Everyone makes a to-do list at some point in their web development career, and I'm part of everyone so here's mine. (haha)
</p>

<hr>

## It's like a checklist, but in computer form!

- Check it out [here](#). (link coming soon)
- Made with webpack

<hr>

## Code Notes

- Just learned about a bunch of JavaScript fundamentals like the SOLID JavaScript principles, modules, factory functions, module patterns, IIFE, and I hope to use as much of them as I can while building this project.
- I brought in a library [date-fns](https://date-fns.org/) -- I didn't know anything about it so it's like me going out into the wild and capturing an exotic animal and taming it, except unlike an animal, I can keep it in a code folder and don't even have to feed it. Plus, I can format dates easily with it. Success!
- I'm using an array of task objects to keep track, instead of using a data-id attribute, I'm keeping track by the title of the task. So all titles must be unique.
- I wonder If I could somehow setup an easier way to keep track of all the addEventListeners and functions that go with each.
- I made the trashcan icon out of a container div and two inside divs. When you click it, you're clicking any one of the three. I wonder if there a way to disable the inner ones so I only need to check one e.target

## Things I Learned

- Error 'is not a function at eval' could mean that my factory function needs to be a module pattern!
