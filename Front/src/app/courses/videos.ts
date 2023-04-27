import { Video } from './video';

export const Videos : Video[] = [
    {
    id: 1,
    name: "How to Learn Python: Your Comprehensive Guide for Success",
    description: "Embark on your Python programming journey with this in-depth tutorial! Python is an incredibly versatile and beginner-friendly language, making it an excellent choice for aspiring programmers. In this video, we'll break down the best strategies, tips, and resources for mastering Python effectively and efficiently.",
    likeCount: 42,
    isLiked: false,
    dislikeCount: 3,
    isDisliked: false,
    image: "data:image/jpeg;base64,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",
    link: "https://www.youtube.com/watch?v=nC_flGQ9waE&ab_channel=WebDeveloperBlog",
    },
    
    {
    id: 2,
    name: "Mastering Java: Your Ultimate Guide to Learning Java Programming",
    description: "Dive into the world of Java programming with this comprehensive tutorial designed to set you on the path to success. Java is a powerful, widely-used language known for its flexibility and compatibility across platforms, making it a perfect choice for aspiring developers.",
    likeCount: 32,
    isLiked: false,
    dislikeCount: 5,
    isDisliked: false,
    image: "https://artoftesting.com/wp-content/uploads/2021/02/how-start-learning-java.png",
    link: "https://www.youtube.com/watch?v=TE3LyYW-AHQ&ab_channel=Amigoscode",
    }
]