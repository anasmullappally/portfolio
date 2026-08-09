export type Next_Page_Url = string

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

export type StackItem = {
    name: string;
    icon: string;
};

export type StackSection = {
    title: string;
    items: StackItem[];
};

export interface IProject {
    title: string;
    slug: string;
    year: number;

    description: string;
    role?: string;

    techStack: string[];

    liveUrl?: string;
    sourceCode?: string;

    thumbnail: string;
    longThumbnail: string;
    images: string[];
}

export interface PhoneInfo {
    country: string;
    flag: string;
    number: string;
    display: string;
    whatsappUrl: string;
}


