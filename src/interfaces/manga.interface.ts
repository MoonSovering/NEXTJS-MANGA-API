
import { Author, Chapter } from "./";


export interface Manga {

        id:          string;
        manga_name:  string;
        cover_image: string;
        description: string;
        author:      Author;
        categories:  string[];
        chapters:    Chapter[];

}





