export interface Tournament {
    name: string;
    description: string;
    imageLink: string;

    competitions: Competition[]
};


export interface Competition {
    name: string;

    questions: Question[]
    samples: Sample[]
};

export interface Sample {
    input: string;
    output: string;
    explaination: string;
};

export interface Question {
    name: string;
    description: string;
    input: string[];
    output: string[];
};




const questionSet: Question[][] = [
    [
        {
            name: "Print squares",
            description: "For a given input of n numbers, print the squares of all n numbers.\n Input format\n The first number indicates the value of n, the number of input integers. ",
            input: ["5 1 2 3 4 5"],
            output: ["1 4 9 16 25"]
        },
        {
            name: "Print cubes",
            description: "For a given input of n numbers, print the cubes of all n numbers.",
            input: ["5 1 2 3 4 5"],
            output: ["1 8 27 64 125 "]
        },
        {
            name: "Find odd one out",
            description: "Amongst the list of integers, find the odd one out",
            input: ["5 2 4 5 8 6"],
            output: ["5"]
        }
    ],

    [
        {
            name: "Print squares",
            description: "For a given input of n numbers, print the squares of all n numbers.\n Input format\n The first number indicates the value of n, the number of input integers. ",
            input: ["5 1 2 3 4 5"],
            output: ["1 4 9 16 25"]
        },
        {
            name: "Print cubes",
            description: "For a given input of n numbers, print the cubes of all n numbers.",
            input: ["5 1 2 3 4 5"],
            output: ["1 8 27 64 125 "]
        },
    ],

    [
        {
            name: "Find odd one out",
            description: "Amongst the list of integers, find the odd one out",
            input: ["5 2 4 5 8 6"],
            output: ["5"]
        }
    ]
]



const sampleTournaments: Tournament[] = [
    {
        name: "Mercor Hiring Challenge",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero nibh, vehicula quis ex non, vulputate congue lacus.\n Phasellus ornare nibh mauris. Sed sagittis justo eget malesuada egestas. Aenean neque metus, ullamcorper nec hendrerit id, pulvinar a ipsum. Etiam ultricies sem tortor. Suspendisse accumsan, risus dignissim fringilla varius, enim massa maximus leo, in hendrerit arcu eros vitae ligula. In hac habitasse platea dictumst. Mauris ultricies venenatis lacus, ac blandit nunc ornare ut. Aenean congue cursus arcu, eu tincidunt dui ornare ac.",
        imageLink: "",

        competitions: [
            {
                name: "Round 1",
                questions: questionSet[0],
                samples: []
            },
            {
                name: "Round 2",
                questions: questionSet[1],
                samples: []
            },
            {
                name: "Round 3",
                questions: questionSet[2],
                samples: []
            }
        ]
    },

    {
        name: "Flipkard Grid Challenge",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero nibh, vehicula quis ex non, vulputate congue lacus.\n Phasellus ornare nibh mauris. Sed sagittis justo eget malesuada egestas. Aenean neque metus, ullamcorper nec hendrerit id, pulvinar a ipsum. Etiam ultricies sem tortor. Suspendisse accumsan, risus dignissim fringilla varius, enim massa maximus leo, in hendrerit arcu eros vitae ligula. In hac habitasse platea dictumst. Mauris ultricies venenatis lacus, ac blandit nunc ornare ut. Aenean congue cursus arcu, eu tincidunt dui ornare ac.",
        imageLink: "",

        competitions: [
            {
                name: "Round 1",
                questions: questionSet[0],
                samples: []
            },
            {
                name: "Round 2",
                questions: questionSet[1],
                samples: []
            },
            {
                name: "Round 3",
                questions: questionSet[2],
                samples: []
            }
        ]
    },

    {
        name: "Cherno Weekly Tournament",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero nibh, vehicula quis ex non, vulputate congue lacus.\n Phasellus ornare nibh mauris. Sed sagittis justo eget malesuada egestas. Aenean neque metus, ullamcorper nec hendrerit id, pulvinar a ipsum. Etiam ultricies sem tortor. Suspendisse accumsan, risus dignissim fringilla varius, enim massa maximus leo, in hendrerit arcu eros vitae ligula. In hac habitasse platea dictumst. Mauris ultricies venenatis lacus, ac blandit nunc ornare ut. Aenean congue cursus arcu, eu tincidunt dui ornare ac.",
        imageLink: "",

        competitions: [
            {
                name: "Round 1",
                questions: questionSet[0],
                samples: []
            },
            {
                name: "Round 2",
                questions: questionSet[1],
                samples: []
            },
            {
                name: "Round 3",
                questions: questionSet[2],
                samples: []
            }
        ]
    }
]

export default sampleTournaments;