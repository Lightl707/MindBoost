export interface Video{
    id: number;
    name: string;
    description: string;
    likeCount: number;
    isLiked: boolean
    dislikeCount: number;
    isDisliked: boolean;
    image: string;      // пишите url картинки
    link: string;       // пишите link к видео из ютуба
}
