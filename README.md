## This project is builded on NextJS v13 using Tailwind CSS, React Server Components and Octokit.

## Getting Started

This project is launched on Vercel.

You can test the app deployed or you can run it locally.

If you want to run it locally, will need to create a `.env.local` file on your root directory, with an `API_KEY` variable (this variable is a classic token for Github API)

Here is the [DEMO](https://fulltime-force-app.vercel.app/)

If you want to run locally (development server), run this:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

- I choose deploying on Vercel because I want to keep my API_KEY safe and is the easiest way for deploy a full project (front-end with React and back-end with NodeJS)

- The app can load the commits for this repo (fulltime-force-app repo) by default.
- If you want to search for public repos for any username, you can do it by typing the username (in the corresponding LoV), after that, the public repo for this owner.
- Commits are builded on Card Components, are clickable and redirect you (in a new tab) to the chosen commit.
- Infinite scroll is added for the commits and public repos LoV.
- Cache implementation and Testing was stablished but NextJS v13 is a little tricky for both features and there was no time for this correct and zero-bug implementation.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
