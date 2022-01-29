// creating an array and passing the number, questions, options, and answers
let questions = [{
        numb: 1,
        question: "Which is/are the properties of a single stuck-at-fault ?",
        answer: "All of these",
        options: [
            "Only one line is faulty",
            "The faulty line is parmanenetly is set to 0 or 1",
            "The fault can be at an input or output of a gate",
            "All of these"
        ]
    },
    {
        numb: 2,
        question: "When Output will be always 1 in XOR gate ?",
        answer: "When both the inputs are same",
        options: [
            "When both the inputs are same",
            "When both the inputs are different",
            "All the above answers",
            "None of these"
        ]
    },
    {
        numb: 3,
        question: "We can put Stuck-at-fault anywhere in circuit (before and after gate)?",
        answer: "True",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 4,
        question: "From the following options which is the real world example of XOR gate?",
        answer: "Game Show Buzzer",
        options: [
            "Switch Board",
            "Radio",
            "Game Show Buzzer",
            "Transformer"
        ]
    },
    {
        numb: 5,
        question: "How many inputs required to define stuck-at concept ?",
        answer: "Minimum 1, Maximum n",
        options: [
            "Minimum 1, Maximum 3",
            "Minimum 1, Maximum 5",
            "Minimum 2, Maximum n",
            "Minimum 1, Maximum n"
        ]
    },
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    //   {
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   options: [
    //     "Option 1",
    //     "option 2",
    //     "option 3",
    //     "option 4"
    //   ]
    // },
];