# Frontend Take Home Challenge

This is your take-home challege for the position as a frontend React developer.

Please read this README document thoroughly before you get started. There is also documentation for the API itself at `https://swapi.dev/documentation`.

## The Challenge

Currently this is a very simple `HelloWorld` example of a React app. You will see a dummy component in `src/components/HelloWorld.tsx` that simple outputs "Hello, world".

Using the data returned from the URL at `https://swapi.dev/api/planets/`, transform the `HelloWorld` component into a component which lists the Star Wars planets returned from requesting the above URL.

You may rename the `HelloWorld` component however you choose.

This new component should display each planet's data in its own row. You may include as much or as little data about each planet as you like, but you must include the planet's `name` field at the very minimum.

While the data is loading, the user should somehow be notified that the data is still loading. This could be an animated loading indicator or even just the text "Loading...".

At the bottom of the component, you should have "Previous" and "Next" buttons, each of which should be disabled when there is no such page of results to display. For example if there is a value for `next`, clicking the "Next" button should load the next page of results, and if not it should be disabled. The same for the "Previous" button.

As a part of this effort, you should store the data in state. The exact implementation is up to you.

## Unit Tests / Integration Tests

Your component should be written in such a way that it can be meaningfully tested, and you should write unit tests and integration tests in Jest and React Testing Library, both of which are pre-installed for you.

## TypeScript

Both the input and output of your new component should be typed with TypeScript.

## CSS

You do not need to style the component's rendered output other than to ensure the data is in a row. You may optionally add some colors/spacing, but this is not required.

## Time Spent on this Exercise

You should plan to spend no more than 1 hour on this assignment. Feel free to take some notes around what else you would have done if you had more time, and we can discuss on our next call together.

If you have any questions, reach out to us with questions.
