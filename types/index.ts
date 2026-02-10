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

export type IProject = {
    title: string;
    slug: string;
    description: string;
    tech: string[];
    thumbnail: string;
    live?: string;
    github?: string;
    featured?: boolean;
};

