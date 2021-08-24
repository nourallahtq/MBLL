import { Item } from "./Item";
import { Speciality } from "./speciality";


export interface Hero {
    id: number;
    name: string;
    role:String;
    image_path :string;
    speciality: Speciality;
    paragraph: string; // TODO check if String is good idea for paragraph
    build: Item;

    /*counter hero still need to be added */
}