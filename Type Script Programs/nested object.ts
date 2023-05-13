type Author = {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author;
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "Abdul",
        lastName: "Rehman"
    },
    name: "Its My Book"
}