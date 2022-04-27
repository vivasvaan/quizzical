const questions = [
  {
    category: "Javascript",
    questions: [
      {
        question: "Who invented JavaScript?",
        answers: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich",
        },
        correctAnswer: "c",
        type: "text",
      },
      {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm",
        },
        correctAnswer: "c",
        type: "text",
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint",
        },
        correctAnswer: "d",
        type: "text",
      },
      {
        question:"If you type the following code in the console window, what result will you get?<br> <code>3 > 2 > 1 === false;</code>",
        answers: {
          a: "true",
          b: "false",
        },
        correctAnswer: "a",
        type: "text",
      },
      {
        question:
          "What is the output of the following code in the console?<br>" +
          "<code style='display: flex;align-items: center;justify-content: center;text-align: left;'> var x = 0;<br>" +
          "function fun(){<br>" +
          "++x;<br>" +
          "this.x = x;<br>" +
          "return x;<br>" +
          "}<br>" +
          "var bar = new new fun;<br>" +
          "console.log(bar.x);<br></code>",
        answers: {
          a: "ReferenceError",
          b: "undefined",
          c: "1",
          d: "TypeError",
        },
        correctAnswer: "d",
        type: "text",
      },
      {
        question: "JavaScript is a ___ -side programming language.",
        answers: {
          a: "Client",
          b: "Server",
          c: "Both",
          d: "None",
        },
        correctAnswer: "c",
        type: "text",
      },
      {
        question:
          "Which is the correct JavaScript syntax to change the HTML content given below?<br>" +
          "<code id=”test”><strong>Hello World!</strong></code>",
        answers: {
          a: " document.getElementById(“test”).innerHTML = “Hello DataFlair!”;",
          b: " document.getElementsById(“test”).innerHTML = “Hello DataFlair!”;",
          c: " document.getElementById(test).innerHTML = “Hello DataFlair!”;",
          d: " document.getElementByTagName(“p”)[0].innerHTML = “Hello DataFlair!”;",
        },
        correctAnswer: "a",
        type: "text",
      },
      {
        question:
          "If the value of x is 40, then what is the output of the following program?<br>" +
          "<code>(x % 10 == 0)? console.log(“Divisible by 10”) : console.log(“Not divisible by 10”);</code>",
        answers: {
          a: "ReferenceError",
          b: "Divisible by 10",
          c: "Not divisible by 10",
          d: "None of the above",
        },
        correctAnswer: "b",
        type: "text",
      },
      {
        question: "How do you find the minimum of x and y using JavaScript?",
        answers: {
          a: "min(x,y);",
          b: "Math.min(x,y)",
          c: "Math.min(xy)",
          d: "min(xy);",
        },
        correctAnswer: "b",
        type: "text",
      },
      {
        question:
          "Which JavaScript label catches all the values, except for the ones specified?",
        answers: {
          a: "catch",
          b: "label",
          c: "try",
          d: "default",
        },
        correctAnswer: "d",
        type: "text",
      },
      {
        question:
          "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        answers: {
          a: "if(x 2)",
          b: "if(x = 2)",
          c: "if(x == 2)",
          d: "if(x != 2 )",
        },
        correctAnswer: "c",
        type: "text",
      },
      {
        question:
          "Which of the following will write the message “Hello DataFlair!” in an alert box?",
        answers: {
          a: " alertBox(“Hello DataFlair!”);",
          b: "alert(Hello DataFlair!);",
          c: "msgAlert(“Hello DataFlair!”);",
          d: " alert(“Hello DataFlair!”);",
        },
        correctAnswer: "d",
        type: "text",
      },
    ],
  },
  {
    category: "Aptitude",
    questions: [
      {
        question: "What is the missing number in the figure?",
        answers: {
          a: "45",
          b: "75",
          c: "30",
          d: "180",
        },
        imageUrl: "assets/image/Puzzel2.jpg",
        correctAnswer: "c",
        type: "image",
      },
      {
        question: "Which shape will come next in the sequence?",
        answers: {
          a: "A",
          b: "E",
          c: "C",
          d: "D",
          e: "B",
        },
        imageUrl: "assets/image/Puzzel1.jpg",
        correctAnswer: "c",
        type: "image",
      },
      {
        question: "What is the average of first five multiples of 12?",
        answers: {
          a: "36",
          b: "38",
          c: "40",
          d: "42",
        },
        correctAnswer: "a",
        type: "text",
      },
      {
        question: "The average weight of a group of 5 boys is 26. If we replace a boy of weight 25 in the group with another boy so that new average increases by 3, find the weight of the new body.",
        answers: {
          a: "56",
          b: "34",
          c: "40",
          d: "33",
        },
        correctAnswer: "c",
        type: "text",
      },
      {
        question: " A Square shaped wooden plate has a diagonal length of 30cm. Can you find the Perimeter of plate ?",
        answers: {
          a: " 120 cm",
          b: " 60 cm",
          c: " 45 cm",
          d: " 60 ?2 cm",
          e: " None of These",
        },
        correctAnswer: "d",
        type: "text",
      },
      {
        question: "Evaluate the expression: 2 + 5 * 6 - 7 * 8 / 4 + 6",
        answers: {
          a: "22",
          b: "21",
          c: "23",
          d: "24",
          e: "None of the above",
        },
        correctAnswer: "d",
        type: "text",
      },
      {
        question: "There were 12 students in a particular Class. The class teacher knows the overall height of all the students in the class is 1400. Can you find the average height of students in the class?",
        answers: {
          a: "110.84",
          b: "122.5",
          c: "116.67",
          d: "128.34",
          e: " None of these",
        },
        correctAnswer: "c",
        type: "text",
      },
      {
        question: "Can you find the approximate value for the following expression:<br>29.8% of 260 + 60.01% of 510 − 103.57 = ?",
        answers: {
          a: "450",
          b: "320",
          c: "210",
          d: "280",
          e: "350",
        },
        correctAnswer: "d",
        type: "text",
      },
      {
        question: "Find the next number in the the below series<br>23, 38, 56, 77, _____",
        answers: {
          a: "100",
          b: "101",
          c: "102",
          d: "99",
          e: " None of these",
        },
        correctAnswer: "b",
        type: "text",
      },
      {
        question: "Diameter of a wheel is 3m. The wheel revolves 28 times in a minute. To cover 5.280 km distance, the wheel will take",
        answers: {
          a: "10 min",
          b: "20 min",
          c: "30 min",
          d: "40 min",
          e: " None of these",
        },
        correctAnswer: "b",
        type: "text",
      },
    ],
  },
  {
    category: "Sports",
    questions: [
      {
        question: "Sultan Azlan Shah Cup is related to which among the following Sports?",
        answers: {
          a: "Badminton",
          b: "Hockey",
          c: "Table Tennis",
          d: "Golf",
        },
        correctAnswer: "b",
        type: "text",
      },
      {
        question: "Which Indian umpire has been recently promoted as umpire for International Hockey Federation (FIH)",
        answers: {
          a: "Deepika Kaul",
          b: "Napoleon Singh",
          c: "Satinder Sharma",
          d: "Durga Thakur",
        },
        correctAnswer: "d",
        type: "text",
      },
      {
        question: "Which was the 1st non Test playing country to beat India in an international match?",
        answers: {
          a: "Canada",
          b: "Sri Lanka",
          c: "Zimbabwe",
          d: "East Africa",
        },
        correctAnswer: "b",
        type: "text",
      },
      {
        question: "Which is the national sport of Canada?",
        answers: {
          a: "Lacrosse/Ice hockey",
          b: "Cricket",
          c: "Field hockey",
          d: "Volleyball",
        },
        correctAnswer: "a",
        type: "text",
      },
      {
        question: "The National Game of India is",
        answers: {
          a: "Cricket",
          b: "Football",
          c: "Tennis",
          d: "Hockey",
        },
        correctAnswer: "d",
        type: "text",
      },
      {
        question: "Famous Tennis player Stefan Edberg belongs to",
        answers: {
          a: "U.K.",
          b: "Norway",
          c: "Sweden",
          d: "Italy",
        },
        correctAnswer: "c",
        type: "text",
      },
      {
        question: "How long are professional Golf Tour players allotted per short?",
        answers: {
          a: "55 seconds",
          b: "45 seconds",
          c: "65 seconds",
          d: "85 seconds",
        },
        correctAnswer: "b",
        type: "text",
      },
      {
        question: "2010 Commonwealth Games held in?",
        answers: {
          a: "Canada",
          b: "India",
          c: "Britain",
          d: "Malaysia",
        },
        correctAnswer: "b",
        type: "text",
      },
      {
        question: "Indonesia National game is?",
        answers: {
          a: "Badminton",
          b: "Table Tennis",
          c: "Archery",
          d: "Pole Vault",
        },
        correctAnswer: "a",
        type: "text",
      },
      {
        question: "Aparna Popat is a famous Indian",
        answers: {
          a: "Hockey Player",
          b: "Tennis Player",
          c: "Cricket Player",
          d: "Badminton Player",
        },
        correctAnswer: "d",
        type: "text",
      },
      {
        question: "Indian first took part in the Olympic Games in the year?",
        answers: {
          a: "1920",
          b: "1928",
          c: "1932",
          d: "1947",
        },
        correctAnswer: "a",
        type: "text",
      },
      {
        question: "Sergey Bubka is associated with?",
        answers: {
          a: "Baseball",
          b: "Football",
          c: "Cricket",
          d: "Pole Vault",
        },
        correctAnswer: "d",
        type: "text",
      },
      {
        question: "The term “Slam” is associated with",
        answers: {
          a: "Cricket",
          b: "Tennis",
          c: "Boxing",
          d: "Football",
        },
        correctAnswer: "b",
        type: "text",
      },
      {
        question: "2014 FIFA World Cup will be held in",
        answers: {
          a: "India",
          b: "Brazil",
          c: "Germany",
          d: "London",
        },
        correctAnswer: "d",
        type: "text",
      },
      {
        question: "Westchester Cup belongs to",
        answers: {
          a: "Cricket",
          b: "Polo",
          c: "Football",
          d: "Hockey",
        },
        correctAnswer: "b",
        type: "text",
      },
    ],
  },
  {
    category: "Entertainment",
    questions: [
      {
        question:
          "Gandhi Film Festival is being organized by Films Division in association with India Tourism in which place from 2nd to 6th October 2019?",
        answers: {
          a: "Mumbai",
          b: "New Delhi",
          c: "Bengaluru",
          d: "Chandigarh",
          e: "Chennai",
        },
        correctAnswer: "a",
        type: "text",
      },
      {
        question:
          "Which country will be the focus country of the 50th- edition of International Film Festival of India (IFFI)?",
        answers: {
          a: "Germany",
          b: "Italy",
          c: "Japan",
          d: "Russia",
          e: "Israel",
        },
        correctAnswer: "c",
        type: "text",
      },
      {
        question:
          "The Oscar winning short documentary film ‘Smile Pinki’ (2008) was directed by which director?",
        answers: {
          a: " Charlie Chaplin",
          b: " Alfred Hitchcock",
          c: " Michael Curtiz",
          d: " Megan Mylan",
          e: " None of the above",
        },
        correctAnswer: "d",
        type: "text",
      },
      {
        question: "Which of these is the sound of horse?",
        answers: {
          a: "A",
          b: "B",
          c: "C",
        },
        audioUrl: [
          "assets/audio/cat.mp3",
          "assets/audio/horse.mp3",
          "assets/audio/dog.mp3",
        ],
        correctAnswer: "b",
        type: "audio",
      },
      {
        question:
          "The Ministry of Environment distributed awards for a short film competition on the environment. Who is the present Union Minister of Ministry of Environment, Forest and Climate Change?",
        answers: {
          a: " Prakash Javadekar",
          b: "  Smriti Zubin Irani",
          c: " Arjun Munda",
          d: "  Harsh Vardhan",
          e: " Piyush Goyal",
        },
        correctAnswer: "a",
        type: "text",
      },
      {
        question: "Aishwarya Rai was crowned Miss World in which year?",
        answers: {
          a: "1994",
          b: "1995",
          c: "1993",
          d: "1996",
          e: "None of the above",
        },
        correctAnswer: "a",
        type: "text",
      },
      {
        question: "Who created the character “Sancho Pancha”?",
        answers: {
          a: "Shelley",
          b: "Cerventes",
          c: "Kipling",
          d: " George Eliot",
          e: "None of the above",
        },
        correctAnswer: "b",
        type: "text",
      },
      {
        question: "Who is known as the 'father of Indian Cinema'",
        answers: {
          a: " Satyajit Ray",
          b: " Dadasaheb Phalke",
          c: " Dadasaheb Torne",
          d: " V. Shantaram",
          e: "None of these",
        },
        correctAnswer: "b",
        type: "text",
      },
      {
        question: "Who has directed the movie 'Do Bigha Zamin'",
        answers: {
          a: " Guru Dutt",
          b: " Ritwik Ghatak",
          c: " Bimal Roy",
          d: " Hrishikesh Mukherjee",
          e: "None of these",
        },
        correctAnswer: "c",
        type: "text",
      },
      {
        question: "Which bollywood film has highest number of songs?",
        answers: {
          a: "  Neel Kamal",
          b: "  Kishen Kanhaiya",
          c: "  Alam Ara",
          d: "Indra Sabha",
          e: "None of these",
        },
        correctAnswer: "d",
        type: "text",
      },
      {
        question: "Which one is the longest film in India by running time",
        answers: {
          a: " Thavamai Thavamirundhu",
          b: " Mera Naam Joker",
          c: " LOC Kargil",
          d: " Parthiban Kanavu",
          e: "None of these",
        },
        correctAnswer: "a",
        type: "text",
      },
      {
        question: "Lata Mangeshkar awarded with Bharat Ratna in the year",
        answers: {
          a: "1998",
          b: "2000",
          c: "2001",
          d: "2004",
          e: "None of these",
        },
        correctAnswer: "c",
        type: "text",
      },
      {
        question: "Only indian movie that won Palme d'Or award in Cannes Film Festival",
        answers: {
          a: " Bandit Queen",
          b: " Mother India",
          c: "Do Bigha Zamin",
          d: " Neecha Nagar",
          e: "None of these",
        },
        correctAnswer: "d",
        type: "text",
      },
    ],
  },
  {
    category: "Business",
    questions: [
      {
        question: "Which company has become the first LAB manufacturing company in the world to get BIS certification?",
        answers: {
          a: "Tamil Nadu Petroproducts",
          b: "Tata",
          c: "Adani",
          d: "Reliance",
        },
        correctAnswer: "a",
        type: "text",
      },
      {
        question: "Which of the following country has the largest exporter of arms during 2017-21, as per the SIPRI report?",
        answers: {
          a: "China",
          b: "Russia",
          c: "France",
          d: "United States",
        },
        correctAnswer: "d",
        type: "text",
      },
      {
        question: "Which company launched 'Savdhan Rahein, Safe Rahein' a public awareness campaign on financial fraud risks?",
        answers: {
          a: "DCB Bank",
          b: "Bajaj Finserv",
          c: "SBI Capital",
          d: "ICICI bank",
        },
        correctAnswer: "b",
        type: "text",
      },
      {
        question: "The report titled 'Connected Commerce: Creating a Roadmap for a Digitally Inclusive Bharat' has been launched by the NITI Aayog in collaboration with which company?",
        answers: {
          a: "GPay",
          b: "Bill & Melinda Gates Foundation",
          c: "Mastercard",
          d: "Paytm",
        },
        correctAnswer: "c",
        type: "text",
      },
      {
        question: "Which Indian PSU regained market capitalization of Rs 50,000 crore and entered 100 most valued Indian firms?",
        answers: {
          a: "SAIL",
          b: "BHEL",
          c: "NTPC",
          d: "BEML",
        },
        correctAnswer: "a",
        type: "text",
      },
      {
        question: "Which pharmaceuticals company has decided to expand its vaccine business in the United Kingdom with an investment of £240 million?",
        answers: {
          a: "Franco India Pharmaceuticals",
          b: "Serum Institute of India",
          c: "Astra Zeneca Pharma India",
          d: "None of the above",
        },
        correctAnswer: "b",
        type: "text",
      },
      {
        question: "According to UN Study, the Online share of retail sales jumps to how much percent amid lockdowns?",
        answers: {
          a: "20%",
          b: "21%",
          c: "19%",
          d: "22%",
        },
        correctAnswer: "c",
        type: "text",
      },
      {
        question: "Which company will acquire Zoox, a self-driving startup founded in 2014?",
        answers: {
          a: "Google",
          b: "Uber",
          c: "Flipkart",
          d: "Amazon",
        },
        correctAnswer: "d",
        type: "text",
      },
      {
        question: "The CCEA has approved additional investment of how much by ONGC Videsh Ltd towards further development of blocks A-1 and A-3 Blocks of Shwe oil & gas project in Myanmar?",
        answers: {
          a: "US$ 100.27 million",
          b: "US$ 156.27 million",
          c: "US$ 121.27 million",
          d: "US$ 234.27 million",
        },
        correctAnswer: "c",
        type: "text",
      },
      {
        question: "Name the entity, that has partnered with Visa Inc to launch SI(standing instructions )-Hub to make recurring payments using cards with a one-time enrollment.",
        answers: {
          a: "Billdesk",
          b: "Citrus Pay",
          c: "Razorpay",
          d: "Whizpay",
        },
        correctAnswer: "a",
        type: "text",
      },
      {
        question: "Which Indian logistics company has launched the 'Oxygen on Wheels' project for transportation of oxygen directly from producing plants to hospitals and homes?",
        answers: {
          a: "Aegis Logistics",
          b: "Container Corporation of India Ltd",
          c: "Adani Logistics",
          d: "Mahindra Logistics",
        },
        correctAnswer: "d",
        type: "text",
      },
    ],
  },
  {
    category: "World History",
    questions: [
      {
        question: "In which year did India get independence from Britain?",
        answers: {
          a: "1944",
          b: "1945",
          c: "1946",
          d: "1947",
        },
        correctAnswer: "d",
        type: "text",
      },
      {
        question: "The ancient Egyptians used to sleep on pillows made of:",
        answers: {
          a: "Stones",
          b: "Gold",
          c: "Cotton",
          d: "Iron",
        },
        correctAnswer: "a",
        type: "text",
      },
      {
        question: "World War I began in which year?",
        answers: {
          a: "1923",
          b: "1938",
          c: "1917",
          d: "1914",
        },
        imageUrl:"assets/image/wwi.jpeg",
        correctAnswer: "d",
        type: "image",
      },
      {
        question: "Adolf Hitler was born in which country?",
        answers: {
          a: "France",
          b: "Germany",
          c: "Austria",
          d: "Hungary",
        },
        imageUrl:"assets/image/hitler.jpeg",
        correctAnswer: "c",
        type: "image",
      },
      {
        question: "Where was John F. Kennedy assassinated in?",
        answers: {
          a: "New York",
          b: "Austin",
          c: "Dallas",
          d: "Miami",
        },
        imageUrl:"assets/image/john.jpeg",
        correctAnswer: "c",
        type: "image",
      },
      {
        question: "Who fought in the war of 1812?",
        answers: {
          a: "Andrew Jackson",
          b: "Arthur Wellesley",
          c: "Otto von Bismarck",
          d: "Napoleon",
        },
        imageUrl:"assets/image/1812.jpeg",
        correctAnswer: "a",
        type: "image",
      },
      {
        question: "Which general famously stated, 'I shall return?'",
        answers: {
          a: "Bull Halsey",
          b: "George Patton",
          c: "Douglas MacArthur",
          d: "Omar Bradley",
        },
        imageUrl:"assets/image/general.jpeg",
        correctAnswer: "c",
        type: "image",
      },
      {
        question: "American involvement in the Korean War took place in which decade?",
        answers: {
          a: "1970s",
          b: "1950s",
          c: "1920s",
          d: "1960s",
        },
        imageUrl:"assets/image/american.jpeg",
        correctAnswer: "b",
        type: "image",
      },
      {
        question: "The Battle of Hastings in 1066 was fought in which country?",
        answers: {
          a: "France",
          b: "Russia",
          c: "England",
          d: "Norway",
        },
        imageUrl:"assets/image/battle.jpeg",
        correctAnswer: "c",
        type: "image",
      },
      {
        question: "Which Roman Emperor built a massive wall across Northern Britain in 122 A.D.?",
        answers: {
          a: "Marcus Aurelius",
          b: "Hadrian",
          c: "Nero",
          d: "Augustus",
        },
        imageUrl:"assets/image/roman.jpeg",
        correctAnswer: "b",
        type: "image",
      },
      {
        question: "What famous 5th century A.D conqueror was known as 'The Scourge of God?'",
        answers: {
          a: "Hannibal",
          b: "Julius Caesar",
          c: "William the Conqueror",
          d: "Attila the Hun",
        },
        imageUrl:"assets/image/god.jpeg",
        correctAnswer: "d",
        type: "image",
      },
      {
        question: "What famous rifle is known in America as 'The Gun that Won the West?'",
        answers: {
          a: "Henry Repeating Rifle",
          b: "Colt Peacemaker",
          c: "Winchester Model 1873",
          d: "Remington Army Revolver",
        },
        imageUrl:"assets/image/rifle.jpeg", 
        correctAnswer: "c",
        type: "image",
      },
    ],
  },
];
