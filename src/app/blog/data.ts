import Blog from "./blogI";

const blogs: Blog[] = [
    {
        id: "1",
        img: "https://picsum.photos/id/237/400/400",
        title: "The Rise of TypeScript",
        content: "TypeScript has seen a huge rise in popularity over the last few years, and for good reason. It offers type safety, better tooling, and a more robust codebase.",
        aurthor: "John Doe"
    },
    {
        id: "2",
        img: "https://picsum.photos/id/238/400/400",
        title: "Understanding React Hooks",
        content: "React Hooks provide a powerful way to use state and lifecycle features in functional components. This article dives deep into the useEffect and useState hooks.",
        aurthor: "Jane Smith"
    },
    {
        id: "3",
        img: "https://picsum.photos/id/239/400/400",
        title: "A Guide to Modern CSS",
        content: "Modern CSS has come a long way, with features like Flexbox, Grid, and custom properties making it easier to create responsive, dynamic layouts.",
        aurthor: "Alice Johnson"
    },
    {
        id: "4",
        img: "https://picsum.photos/id/240/400/400",
        title: "Node.js Performance Tips",
        content: "Optimizing the performance of your Node.js applications can lead to faster load times and a better user experience. Here are some tips to get you started.",
        aurthor: "Bob Brown"
    }
];

export default blogs;
