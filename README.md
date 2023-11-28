# **LU Software Engineering Readiness Club Website**
This documentation is here to guide the creation of the club website.
<br>

# **Members**
- Tyler Sackel <`@BiziLife`>: Leader
- Cameron <`@wzid`>
- Gideon Walker <`@gm-walker`>
- Michael Stickley<`@mstickley22`>: Club President
- Jack Harris <'@4ubiks'>

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
For optimal file organization, we will organize the files into folders based on their file type/function. Our folders will be:
- `html`
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
## **Commit Messages**
When writing a commit message, please use the following format:
    
    <[commit_tag]> [commit_headline]

    - [highlights of the commit]
    - [highlights of the commit]

Why? It's to help properly communicate what edits you have made to the project. It is much quicker to look at a synopsis of what you did than having to go through each file individually to see what you did. With that said, let me break down and explain each of these elements...

### **What is a "Commit Tag?"**
This is based off of the commit types mentioned within Natalie Pina's article,<a href="https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/"> *How to Write Better Commit Messages - A Step-By-Step Guide*</a>. This helps document the type of change you made. For our project, these are the tags that we will use for our project:

- <`doc`>
<br> Used when editing documentation or other files used for reference that don't affect the functionality of the code.
- <`feat`>
<br> Used when adding functions/features to the code.
- <`dbg`>
<br> Used when removing bugs.
- <`perf`>
<br> Used when making optimizations to the code.
- <`sty`>
<br> Used when making changes to the readability of code that doesn't affect how the code functions.
- <`ch`>
<br> Used when making changes that don't (fix || add features) AND doesn't modify (source || test files)
- <`ci/d`>
<br> Used when making changes related to CI/CD.
- <`tst`>
<br> Used when adding/modifying testing files.
- <`rev`>
<br> Reverting to a previous commit.
- <`rfc`>
<br> Refactored code that neither fixes bug nor adds feature.
- <`bld`>
<br> Changes that affect build system or external dependencies.

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
