interface Image {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
}


export interface Data {
    image: Image;
    name: string;
    category: string;
    price: number;
    add?:boolean;
    quantity?:number
}

export interface MenuData{
    image: Image;
    name: string;
    category: string;
    price: number;
    add:boolean;
}

