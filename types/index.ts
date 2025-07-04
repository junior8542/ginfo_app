export interface EventCardProps {
    elength: number;
    title: string;
    content: string;
    place: string;
    date: string;
    index: number;
}

export interface ButtonProps {
    styles?: string;
    text : string;
}

export interface FeedBackProps {
    content: string;
    title: string;
    name: string;
    img: string | any;
}