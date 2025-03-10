let info = {
  name: "Hrishikesh Paul",
  logo_name: "Saria-UGC",
  flat_picture: require("./src/assets/saria.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
" Hi, I'm Saria, a passionate UGC creator dedicated to crafting engaging, authentic, and high-converting content for brands. With a keen eye for aesthetics, storytelling, and audience engagement, I specialize in creating short-form videos, product reviews, lifestyle content, and unboxings that connect with your target audience.I understand the importance of authenticity in marketing and strive to produce content that feels natural, relatable, and seamlessly blends with your brand’s voice. Whether it’s showcasing a product in action, creating engaging TikToks, or crafting compelling Instagram Reels, my goal is to drive brand awareness, engagement, and conversions.Let’s collaborate to bring your brand to life through impactful UGC!",
  links: {
    tiktok: "https://www.tiktok.com/@saria_ugc",
    instagram: "https://www.instagram.com/saria_ugc/",
    angellist: "https://angel.co/u/hrishikesh-paul",
    resume:
      "https://github.com/hrishikeshpaul/portfolio-template/blob/master/src/assets/pdfs/Resume.pdf"
  },
  education: [
    {
      name: "Indiana University Bloomington",
      place: "USA",
      date: "Aug, 2019 - May, 2021",
      degree: "Masters in Computer Science",
      gpa: "3.7/4.0",
      description:
        "Currently pursuing my Master's in Computer Science, while specializing in the field of Artificial Intelligence and Machine Learning.",
      skills: [
        "Artificial Intelligence",
        "Software Engineering",
        "Algorithms",
        "Computer Vision",
        "Music Data Mining",
        ,
        "OS"
      ]
    },
    {
      name: "Manipal Institute of Technology",
      place: "India",
      date: "Aug, 2015 - July, 2019",
      degree: "Bachelors in Computer and Communication",
      gpa: "8.0/10.0",
      description:
        "Graduated from Manipal Institute of Technology, Manipal with a bachelors degree in Computer and Communications Engineering.",
      skills: [
        "AI",
        "Neural Netwroks",
        "Data Mining",
        "Computer Vision",
        "Pattern Recognition",
        "HCI",
        "Software Engineering"
      ]
    }
  ],
  experience: [
    {
      name: "Cyberinfrastructure for Network Science Center",
      place: "Bloomington, Indiana",
      date: "Jun, 2020 - Present",
      position: "Research Assistant; Full Stack Developer",
      description:
        "Worked as a Software Developer for the Human BioMolecular Atlas Program (funded by the NIH), building innovative visualization tools to envision large biomedical datasets.",
      skills: ["Angular", "Node.js", "Vega", "Shell", "Typescript"]
    },
    {
      name: "Skylark Drones",
      place: "Bangalore, India",
      date: "Jan, 2019 - Jun, 2021",
      position: "Full Stack Web Developer",
      description:
        "Worked as a full stack web developer, implementing various features and fixing bugs for Skylark Drones’ central management system called Operations Portal and Data Mining Server.",
      skills: ["MongoDB", "Flask", "VueJS", "NGINX"]
    },
    {
      name: "Hridayam Soft Solutions",
      place: "Mumbai, India",
      date: "May, 2018 - Jun, 2018",
      position: "Computer Vision Engineer",
      description:
        "Scripted an algorithm for extracting information (such as date, invoice number etc.) from scanned images of invoices, built a web interface for using the former mentioned machine.",
      skills: ["Python", "OpenCV", "PyTesseract", "AngularJS", "NodeJS"]
    },
    {
      name: "Elementail Labs",
      place: "Mumbai, India",
      date: "May, 2017 - July, 2017",
      position: "Full Stack Web Developer",
      description:
        "Implemented various contracts and deployed them on the upcoming blockchain technology - Ethereum, while also working as a MEAN stack web developer for Elemential Labs’ website.",
      skills: ["MongoDB", "AngularJS", "NodeJS", "ExpressJS"]
    },
    {
      name: "Viteos Capital Market Services s",
      place: "Mumbai, India",
      date: "May, 2016 - July, 2016",
      position: "Software Developer",
      description:
        "Evaluated technologies, and building proof of concept/prototype solutions for trade processing and mathematical model based evaluations, while working in the software development team.",
      skills: ["C#", "C++", "Visual Studio"]
    }
  ],
  skills: [
    {
      title: "languages",
      info: [
        "Python",
        "Javascript",
        "TypeScript",
        "Java",
        "C",
        "C++",
        "SQL",
        "NoSQL",
        "Ruby"
      ],
      icon: "fa fa-code"
    },
    {
      title: "data frameworks",
      info: [
        "Keras",
        "Numpy",
        "Pandas",
        "OpenCV",
        "SciPy",
        "Sklearn",
        "LibROSA",
        "Pillow"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Vue", "Angular", "React", "Node", "Flask", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MongoDB", "MySQL", "OracleSQL", "Neo4j"],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "MacOS",
        "Ubuntu",
        "Windows",
        "Android",
        "Agile",
        "Scrum",
        "JIRA",
        "Heroku",
        "Firebase",
        "AWS S3"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "design",
      info: ["Illustrator", "XD", "Photoshop", "Final Cut Pro"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    {
      name: "Moroccanoil hand cream",
      pictures: [
        {
          img: require("./src/assets/portfolio/msr/vedio1.mp4")
        },  
        
        
      ],
      technologies: ["Computer Vision", "OpenCV", "AI", "Flask", "Sockets"],
      category: "Algorithm",
      date: "Jan, 2020 - Mar, 2020",
      github:
        "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      visit: "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      description:
        "Music Sheet Recognizer (MSR) highlights basic Image Processing and Recognition. Like Optical Character Recognition, this tool is used to detect music notes and rests. It makes use of basic Computer Vision techniques such as Convolution, Edge Detections, Hough Transforms and Template Matching to detect notes and rests on a music sheet. "
    },
    {
      name: "Iconic London Hilighter",
      pictures: [
        {
          img: require("./src/assets/portfolio/msr/vedio2.mp4")
        },
       
      ],
      technologies: ["Node", "Vue", "Express", "MongoDB", "Heroku"],
      category: "Website",
      date: "Sep, 2019 - Dec  , 2019",
      github: "https://github.com/hrishikeshpaul/noq",
      visit: "https://noq-client.herokuapp.com/",
      description:
        "No Q, is a revolutionary tool which allows for both employers and students to skip the hassle seen in modern day career fairs. For the students, there is an intuitive profile builder where you can add things like education, skills, certifications, honors, and experiences. No Q is not only good for students, but employers as well! A common problem at modern career fairs is the number of unqualified candidates who waste their time when they could be chatting with someone else. With No Q, only the students who meet the positions’ criteria will be able to apply, and from there the recruiter can invite them to talk in more detail at the career fair through our intuitive messaging system."
    },
    {
      name: "Maxon Hydramax Cream",
      pictures: [
        {
          img: require("./src/assets/portfolio/msr/vedio4.mp4")
        },
        {
          img: require("./src/assets/portfolio/post/two.png")
        }
      ],
      technologies: [
        "Markov Models",
        "Python",
        "Artificial Intelligence",
        "Vue",
        "Heroku"
      ],
      category: "Algorithm",
      github: "https://github.com/hrishikeshpaul/pos-tagger",
      date: "Oct, 2019 - Nov, 2019",
      visit: "https://post-client.herokuapp.com/",
      description:
        "Post is a simple algorithm that was developed to tagging a word corresponding to its part of speech. The algorithm makes of a probabilisitic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling."
    },
    {
      name: "The ordinary niacinamide serum",
      pictures: [
        {
          img: require("./src/assets/portfolio/msr/vedio3.mp4")
        },
        
      ],
      technologies: ["Node", "Angular", "Express", "Leaflet", "Pandas"],
      category: "Website",
      date: "Oct, 2018 - Nov, 2018",
      github: "https://github.com/hrishikeshpaul/whodata",
      visit: "https://skylarktiral.herokuapp.com/",
      description:
        "This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO. The application consists of a Leaflet map that colors every nation, based on the number of suicides that have been committed in that country, for that year. It provides us with the capability to select the data as well as the continent."
    },
    {
      name: "Rhode Lip Tints",
      pictures: [
        {
          img: require("./src/assets/portfolio/msr/vedio5.mp4")
        },
       
      ],
      technologies: ["LSTM", "Keras", "Angular", "Tweepy", "Heroku", "Python"],
      category: "Alogrithm",
      date: "Feb, 2018 - Apr  , 2018",
      github: "https://github.com/hrishikeshpaul/sih",
      visit: "https://angel.co/projects/1009777-sentiment-analysis",
      description:
        "Developing this for the final round of Smart India Hackathon 2018, the web application is a platform for showcasing the sentiment of the tweets of the people in the Telangana region in India on policy satisfaction, services and problem definitions. The minimal UI design consists of different bins, that have their respective tweets, all scraped from twitter. There is also a simple graphical representation denoting the sentiment of the tweets."
    },
    {
      name: "Cien Facial Wash",
      pictures: [
        {
          img: require("./src/assets/portfolio/msr/vedio6.mp4")
        },
       
      ],
      technologies: ["Node", "Angular", "Express", "MySQL", "Facebook API"],
      category: "Web App",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "Sep, 2017 - Nov, 2017",
      visit: "https://github.com/hrishikeshpaul/clumpr",
      description:
        'Clumpr is an online social event planning assistant that - using information about similar events happening in similar locations around the same time, friends who frequently attend the same events, and mutual friends - helps users to collaborate, combine, and attend events together, effectively "clumping" people and activities in a way that makes intuitive sense.'
    },
   
  ],
  portfolio_design: [
    {
      name: "Belo & Kiss Glow Products",
      title: "Belo & Kiss Glow Products",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/image1.jpg"),
          title: "MoodBoard"
        },
      
      ],
          },
    {
      name: "VERLUMI Skincare Products",
      title: "VERLUMI Skincare Products ",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/image2.jpg"),
          title: "Moodboard"
        },
       
      ],
    },
    {
      name: "Flower knows black swan collection",
      title: "Flower knows black swan collection",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/image3.jpg"),
          title: "Moodboard"
        },
     
      ],
     },
    {
      name: "Glow White Caps",
      title: "Glow White Caps",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/image4.jpg"),
          title: "Moodboard"
        },
     
      ],
    },
    {
      name: "Glow White Caps",
      title: "Glow White Caps",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/image5.jpg"),
          title: "Moodboard"
        },
     
      ],
    },
    {
      name: "Flower knows black swan collection",
      title: "Flower knows black swan collection",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/image6.jpg"),
          title: "Moodboard"
        },
     
      ],
    }
  ],
  recommendations: [
    {
      title:
        "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Anil Dukkipatty",
      position: "CTO",
      company: "Elemential Labs",
      location: "Mumbai"
    },
    {
      title:
        "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Chintan Shah",
      position: "Director",
      company: "Hridayam Soft Solution",
      location: "Mumbai"
    },
    {
      title:
        "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Mrinal Pai",
      position: "Co-Founder & Director",
      company: "Skylark Drones",
      location: "Bangalore"
    }
  ]
};

export default info;
