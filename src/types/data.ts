interface Image {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
}


export interface Data {
    id:number;
    image: Image;
    name: string;
    category: string;
    price: number;
    add?:boolean;
    quantity?:number
}

export interface MenuData{
    id:number;
    image: Image;
    name: string;
    category: string;
    price: number;
    add:boolean;
    quantity:number
}

export interface CartData{
    id:number;
    image: Image;
    name: string;
    category: string;
    price: number;
    add:boolean;
    quantity:number
}

