## This project is builded on NextJS v13 using Tailwind CSS, React Server Components and Octokit.

## Getting Started

If you want to run it locally, will need to create a `.env.local` file on your root directory, with an `API_KEY` variable (this variable is a classic token for Github API)

For local -> Clone or fork this repository and run this:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

- The app can load the commits for this repo by default.
- If you want to search for public repos for any username, you can do it by typing the username (in the corresponding LoV), after that, the public repo for this owner.
- Commits are builded on Card Components, are clickable and redirect you (in a new tab) to the chosen commit.
- Infinite scroll is added for the commits list.
- Cache implementation, Testing and Infinite Scroll for repos LOV was stablished but NextJS v13 is a little tricky for both features and there was no time for this correct and zero-bug implementation.
- Please don't search for a user with tons of public repos, it's capped to 45 public repos only (Alphabetic ordered). This feature is unfinished.
- Probably you can find minor bugs, let me know please :)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
