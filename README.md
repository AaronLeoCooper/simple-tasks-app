# Simple Tasks App

Just a really simple task-tracking app to showcase some work done in just over an hour with React, TS, TailwindCSS and tested with Vitest.

> You'll need [PNPM](https://pnpm.io/) to run this app.

## Setup

Install the dependencies:

```bash
pnpm install
```

## Running the app

Run the app in a local dev server:

```bash
pnpm dev
```

And open the URL printed in the terminal.

## Testing the app

Run Vitest in watch mode:

```bash
pnpm test
```

## Notes and ideas

These are some notes taken after building the app to its current state.

- Fun little task to do in 50 (and a bit) minutes! A lot more preferable to spending hours on building an entire app that's completely throwaway.
- Got horribly caught up trying to see why Jotai (an atomic state library) was appearing to wrap the array of tasks in another array. Thought it was human error on my part, still unsure, and I'm adamant to dig into what went wrong there! Used it many times, first time seeing it turn `atom([])` into `[[]]` when the state is accessed. WEIRD.
- Ideally should have been finished in an hour. Wasn't possible due to the above issue sadly. Could have been avoided if I went with the simplest approach. The last 10 mins went a lot faster once I switched to good old `useState` in a parent component, though not enough time to do up the table UI. Moral: **K.I.S.S.**!
- Some refactoring would be nice. After adding the tailwind CSS classes it made duplicated JSX fragments look even more of a pain to maintain. Preferably, move the repeated JSX fragments into their own components.
- Testing I did from the get-go, which I'm glad I did to catch the issue with Jotai early.
- Did some cleanup work after the 50 mins (see the commit history for the timestamps since then). Focused mainly on extracting out business logic from components into util functions that were much easier to test. Also prettied up the UI a bit with some tailwind classes. Again, check out the commit history for the types of incremental changes made in each commit.
