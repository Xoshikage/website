# **LU Software Engineering Readiness Club Website**

This documentation is here to guide the creation of the club website.
<br>

# **Members**

- Tyler Sackel <`@BiziLife`>: Leader
- Cameron <`@wzid`>
- Jeffrey Vandever <`@jeffreyman101`>
- Gideon Walker <`@gm-walker`>
- Michael Stickley<`@mstickley22`>: Club President
- Jack Harris <`@4ubiks`>

<br>

# **Objective(s)**
<!-- This section contains information about the objectives of this website -->
- Display current projects, club information (ex. purpose, meetings, events, etc.)
- Present an archive of projects (i.e., portfolio)

<br>

# **Outline**
<!-- This section describes how the website will be organized. _Webpages are in **bold**_; Notes are in normal text. -->
- **Homepage / About Us**
  - Contains information about the club; this includes:
    - Club Purpose Statement
    - Introducing Club Pres. + Vice Pres. (& other club members)
- **Calendar**
  - Contains information about meetings & club events.
    - ⭐Should be dynamic & easily updated
- **Projects**
  - **Current Projects**
    - Displays currently active projects
    - Should contain links for people to get involved with these projects ("Get Involved").
  - **Archived Projects**
    - Displays projects club has finished (a.k.a. Club Portfolio)

<br>

# **Contribution Notes**

## **File Organization**
<!-- Descirbes how the files within our repo are organized (i.e., where to find types of files) -->
### **HTML-based website**
For optimal file organization, we will organize the files into folders based on their file type/function. Our folders will be:

- `html`
  - Stores HTML Files
- `styles`
  - Stores CSS files + other styling documents
- `scripts`
  - Stores JavaScript/TypeScript files
- `img`
  - Stores images/svgs
  - "stills"
- `video` (optional)
  - Stores videos/gifs
  - "motion pictures"
- `docs`
  - Documentation (except `README.md`)
  - images/svgs for documentation goes here

### **NextJS Website/App**
In this project, we are organizing our files like this:
- `src`
  - Equivalent of `root`; Base of operations
- `app`
  - Contains all of the pages and other related `.js` files.
- `components`
  - Contains parts that make up the pages stored in app (ex. navbars, heroes, cards, etc.)
- `public`
  - Contains `svg`, `img`, & video files (depending); media

## **Commit Messages**

When writing a commit message, please use the following format:

    <[commit_tag]> [commit_headline]

    - [highlights of the commit]
    - [highlights of the commit]

Why? It's to help properly communicate what edits you have made to the project. It is much quicker to look at a synopsis of what you did than having to go through each file individually to see what you did. With that said, let me break down and explain each of these elements...

### **What is a "Commit Tag?"**

This is based off of the commit types mentioned within Natalie Pina's article, [*How to Write Better Commit Messages - A Step-By-Step Guide*][def]. This helps document the type of change you made. For our project, these are the tags that we will use for our project:

- <`doc`> - Used when editing documentation or other files used for reference that don't affect the functionality of the code.
- <`feat`> - Used when adding functions/features to the code.
- <`dbg`> - Used when removing bugs.
- <`perf`> - Used when making optimizations to the code.
- <`sty`> - Used when making changes to the readability of code that doesn't affect how the code functions.
- <`ch`> - Used when making changes that don't (fix || add features) AND doesn't modify (source || test files)
- <`ci/d`> - Used when making changes related to CI/CD.
- <`tst`> - Used when adding/modifying testing files.
- <`rev`> - Reverting to a previous commit.
- <`rfc`> - Refactored code that neither fixes bug nor adds feature.
- <`bld`> - Changes that affect build system or external dependencies.

Why use unique tags when I could use the ones listed within the article? Brevity. Some of the types are long for no real reason. All of these tages are four (4) characters or less. This means it is much faster to say the exact same thing.

### **What is in a "Commit Headline?"**

A commit headline should describe what you did in the fewest number of words. When writing a commit headline, start with a verb and mention the file (or types of files if there are multiple) that you have modified.

For example...
  
    <doc> Updating README.md
    <feat> Adding Stylesheets
    <dbg> Clearing bugs from BDictionary.h 

**TL;DR:** Write a snappy one-liner describing what you did.

### **Commit Highlights**

Commit highlights are just that... highlights. Don't get into the weeds of what you added, but be slightly more specific. Talk about what areas you modified & a little bit of rationale for the edit. That's it!

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## **Getting Started**

First, run `npm install` to install all required modules.

Then, run the development server:

  ```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  # or
  bun dev
  ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[def]: https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/ "How to Write Better Git Commit Messages"
