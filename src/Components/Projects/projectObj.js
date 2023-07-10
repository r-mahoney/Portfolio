import reddit1 from "../../images/reddit1.png";
import reddit2 from "../../images/reddit2.png";
import reddit3 from "../../images/reddit3.png";
import note1 from "../../images/note1.png";
import note2 from "../../images/note2.png";
import note3 from "../../images/note3.png";

export const projects = [
    {
        name: "Reddit Clone",
        githubLink: "https://github.com/r-mahoney/RedditClone",
        liveLink: "https://reddit-clone-ten-flax.vercel.app/",
        summary: `A clone of the popular social media App reddit. 
            Current functionality allows a user to create and delete posts and comments as well as vote on posts and comments. 
            State managament was done using Recoil. App was written in Typescript using Next.js and React. 
            Styling using ChakraUI. Firebase was used for user authentication allowing for user sign up as well as log in. 
            Firebase was also used for database management using NoSQL.`,
        images: [reddit1, reddit2, reddit3],
    },
    {
        name: "Frontmatter Button",
        subheading: "3rd Party Obsidian Plugin",
        githubLink: "https://github.com/r-mahoney/FrontmatterButton",
        summary: `Obsidian is a note-taking app allowing users to write up notes using markdown language. Part of this app allows a user to add
            front matter, or a block of YAML text key/value pairs, that translates into metadate for that users note. Currently, unless a user already knows how
             to add the YAML code block to their note and what key properties Obsidian accepts, using the front matter is not intuitive. Working with a UI/UX designer,
              our hope is to make this functionality more accessible by showing a button on title hover and adding a more user firnedly UI to any note a user wants to add metadata to.`,
        images: [note1, note2, note3],
    },
];
