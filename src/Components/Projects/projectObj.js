import reddit1 from '../../images/reddit1.png'
import reddit2 from '../../images/reddit2.png'
import reddit3 from '../../images/reddit3.png'
import note1 from '../../images/note1.png'
import note2 from '../../images/note2.png'
import note3 from '../../images/note3.png'

export const projects = [
    {
        name: "Reddit Clone",
        githubLink: "https://github.com/r-mahoney/RedditClone",
        liveLink: "https://reddit-clone-ten-flax.vercel.app/",
        summary:
            `A clone of the popular social media App reddit. 
            Current functionality allows a user to create and delete posts and comments as well as vote on posts and comments. 
            State managament was done using Recoil. App was written in Typescript using Next.js. 
            Styling using ChakraUI. Firebase was used for user authentication as well ad database management with NoSQL`,
        images: [reddit1, reddit2, reddit3]
    },
    {
        name: "Frontmatter Button",
        githubLink: "https://github.com/r-mahoney/FrontmatterButton",
        summary:
            `A clone of the popular social media App reddit. 
            Current functionality allows a user to create and delete posts and comments as well as vote on posts and comments. 
            State managament was done using Recoil. App was written in Typescript using Next.js. 
            Styling using ChakraUI. Firebase was used for user authentication as well ad database management with NoSQL`,
        images: [note1, note2, note3]
    },
];
