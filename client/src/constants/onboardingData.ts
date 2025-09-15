// constants/onboardingData.ts

export interface OnboardingStep {
  key: string;
  title: string;
  image: string;
  bgColor?: string; // background color, optional
  subtext?: string;
  button?: string;
  fields: Array<
    | { type: 'input'; label: string; name: string; placeholder?: string }
    | { type: 'select'; label: string; name: string; options: string[] }
    | { type: 'radio'; label: string; name: string; options: string[] }
    | { type: 'file'; label: string; name: string; accept: string[] }
    | { type: 'tags'; label: string; name: string; options: string[]; limit: number }
    | { type: 'custom'; component: 'paragraph' | 'description', value?: string }
  >;
  buttons: Array<{ key: 'next' | 'previous' | 'upload' | 'proceed' | 'submit' | 'ok'; label: string }>;
}

export const onboardingData: OnboardingStep[] = [
  // 1. About You
  {
    key: "about-you",
    title: "Let us know about you !",
    image: "/images/Page 1.png",
    bgColor: "#fff",
    fields: [
      {
        type: "input",
        label: "Enter Location",
        name: "location",
        placeholder: "Bhimavaram, West Godavari",
      },
      {
        type: "select",
        label: "Select language",
        name: "language",
        options: ["English"],
      },
      {
        type: "file",
        label: "Upload your Photo",
        name: "photo",
        accept: ["image/png", "image/jpeg"],
      },
    ],
    buttons: [{ key: "next", label: "Next" }],
  },

  // 2. Hobbies and Passions
  {
    key: "hobbies-passions",
    title: "Tell us your hobbies and passions !",
    image: "/images/Page 2.png",
    bgColor: "#fff",
    fields: [
      {
        type: "tags",
        label: "Select any 4 Hobbies",
        name: "hobbies",
        options: [
          "Drawing",
          "Playing sports",
          "creative writing / Journaling",
          "Playing Music",
          "Reading books",
          "programming",
          "Dancing",
          "Painting",
        ],
        limit: 4,
      },
      {
        type: "tags",
        label: "Select any 4 Passions",
        name: "passions",
        options: [
          "Helping animals",
          "Creating art / Digital art work",
          "Teaching",
          "Problem Solving",
          "Performing Arts",
          "Designing games",
          "Donating",
        ],
        limit: 4,
      },
    ],
    buttons: [
      { key: "previous", label: "Previous" },
      { key: "next", label: "Next" },
    ],
  },

  // 3. Skills and Interests
  {
    key: "skills-interests",
    title: "Share your skills and interests with us !",
    image: "/images/Page 3.png",
    bgColor: "#fff",
    fields: [
      {
        type: "tags",
        label: "Select any 4 Skills",
        name: "skills",
        options: [
          "Time management",
          "Basic computer skills",
          "Coding",
          "Team Work",
          "Public speaking",
          "Conflict resolution",
          "Creativity",
        ],
        limit: 4,
      },
      {
        type: "tags",
        label: "Select any 4 Interests",
        name: "interests",
        options: [
          "content creation",
          "Video games",
          "Animals / Pets",
          "Space and astronomy",
          "Technology and gadgets",
          "Environmental issues",
        ],
        limit: 4,
      },
    ],
    buttons: [
      { key: "previous", label: "Previous" },
      { key: "next", label: "Next" },
    ],
  },

  // 4. Health Info
  {
    key: "health-info",
    title: "Please provide some basic health Info !",
    image: "/images/Page 4.png",
    bgColor: "#fff",
    fields: [
      {
        type: "select",
        label: "Select Blood Group",
        name: "bloodGroup",
        options: [
          "O+ Positive",
          // Add others as needed
        ],
      },
      {
        type: "input",
        label: "Height in Centimeters",
        name: "height",
        placeholder: "175",
      },
      {
        type: "input",
        label: "Weight in Kilograms",
        name: "weight",
        placeholder: "87",
      },
      {
        type: "radio",
        label: "Do you have any vision issues in your 'Right' eye?",
        name: "rightEyeIssues",
        options: ["Yes", "No"],
      },
      {
        type: "radio",
        label: "Do you have any vision issues in your 'Left' eye?",
        name: "leftEyeIssues",
        options: ["Yes", "No"],
      },
      {
        type: "input",
        label: "Left eye vision Short / Long",
        name: "leftEyeVision",
        placeholder: "-1.5 / +2.25",
      },
    ],
    buttons: [
      { key: "previous", label: "Previous" },
      { key: "next", label: "Next" },
    ],
  },

  // 5. Learning Preferences
  {
    key: "learning-preferences",
    title: "What do you want to learn?",
    image: "/images/Page 5.png",
    bgColor: "#fff",
    fields: [
      {
        type: "tags",
        label: "",
        name: "learningTopics",
        options: [
          "Wellness",
          "Academic",
          "Entrance Exam",
          "Deep Tech",
          "Foreign Language",
          "Indian Language",
          "Vocational Skills",
          "Games",
          "Management",
          "Climate",
          "Professional Development",
          "Space",
        ],
        limit: 3, // Adjust as needed, since selection count is not specified visibly
      },
    ],
    buttons: [
      { key: "previous", label: "Previous" },
      { key: "next", label: "Next" },
    ],
  },

  // 6. Academic Pathway Intro
  {
    key: "academic-pathway-intro",
    title: "Let's proceed by selecting the 'Academic curriculum'",
    image: "/images/Page 6.png",
    bgColor: "#F8F8F8",
    fields: [
      {
        type: "custom",
        component: "paragraph",
        // This renders: "following which you can select the 'Wellness' pathway as well."
      },
    ],
    buttons: [
      { key: "proceed", label: "Proceed" },
    ],
  },

  // 7. Academic Curriculum Selection
  {
    key: "academic-curriculum",
    title: "Let's select the 'Academic curriculum'",
    image: "/images/Page 7.png",
    bgColor: "#fff",
    fields: [
      {
        type: "select",
        label: "Grade",
        name: "grade",
        options: [
          "7th Class",
          // ...other grades as necessary
        ],
      },
      {
        type: "select",
        label: "Curriculum",
        name: "curriculum",
        options: [
          "CBSC",
          // ...other options as necessary
        ],
      },
      {
        type: "tags",
        label: "Select all five subjects in the order of your choice",
        name: "subjects",
        options: [
          "English",
          "Social",
          "Chemistry",
          "Mathematics",
          "Hindi",
          "Physics",
        ],
        limit: 5,
      },
    ],
    buttons: [
      { key: "previous", label: "Previous" },
      { key: "submit", label: "Submit" },
    ],
  },

  // 8. Wellness Pathway Completion
  {
    key: "wellness-pathway-complete",
    title: "Let's finish your wellness pathway so we can begin.",
    image: "/images/Page 8.png",
    bgColor: "#F8F8F8",
    fields: [
      {
        type: "custom",
        component: "paragraph",
        // This renders: "Great job so far, now let's complete this."
      },
    ],
    buttons: [
      { key: "proceed", label: "Proceed" },
    ],
  },

  // 9. Wellness Goals
  {
    key: "wellness-goals",
    title: "Highlight your key wellness goals",
    image: "/images/Page 9.png",
    bgColor: "#fff",
    fields: [
      {
        type: "radio",
        label: "Are you dealing with any chronic health conditions?",
        name: "chronicConditions",
        options: ["Yes", "No"],
      },
      {
        type: "tags",
        label: "Highlight your key wellness goals",
        name: "wellnessGoals",
        options: [
          "Lose weight",
          "Reduce stress",
          "Sleep better",
          "Manage anxiety",
          "Boost energy/productivity",
          "Improve posture or flexibility",
        ],
        limit: 4,
      },
    ],
    buttons: [
      { key: "previous", label: "Previous" },
      { key: "next", label: "Next" },
    ],
  },

  //10. LifeStyle Assessment Intro
  {
      key: "lifestyle-assessment-intro",
      title: "Let's do a lifestyle assessment to understand where your health stands.",
      image: "/images/Page 10.png",
      bgColor: "###EEF3FF",
      subtext: "Please fill it out genuinely so we can suggest a better lifestyle routine for you.",
      fields: [],
      buttons: [
        { key: "ok", label: "OK" }
      ],
    },

// 11. Activity Level
{
  key: "activity-level",
  title: "Activity level",
  image: "/images/Page 11.png",
  bgColor: "#fff",
  fields: [
    {
      type: "radio",
      label: "Current Activity Level",
      name: "activityLevel",
      options: [
        "Sedentary",
        "Lightly active",
        "Active",
        "Very active"
      ]
    }
  ],
  buttons: [
    { key: "previous", label: "Previous" },
    { key: "next", label: "Next" }
  ]
},

// 12. Occupation
{
  key: "occupation",
  title: "Tell us about your job",
  image: "/images/Page 12.png",
  bgColor: "#fff",
  fields: [
    {
      type: "radio",
      label: "Occupation Type",
      name: "occupationType",
      options: [
        "Desk job",
        "Field work",
        "House work",
        "Retired"
      ]
    }
  ],
  buttons: [
    { key: "previous", label: "Previous" },
    { key: "next", label: "Next" }
  ]
},

// 13. Diet
{
  key: "diet",
  title: "What's your usual diet like?",
  image: "/images/Page 13.png",
  bgColor: "#fff",
  fields: [
    {
      type: "radio",
      label: "Dietary Preferences",
      name: "dietaryPreference",
      options: [
        "Veg",
        "Non-veg",
        "Vegan",
        "Keto"
      ]
    }
  ],
  buttons: [
    { key: "previous", label: "Previous" },
    { key: "next", label: "Next" }
  ]
},

// 14. Smoking Status
{
  key: "smoking-status",
  title: "Smoking Status",
  image: "/images/Page 14.png",
  bgColor: "#fff",
  fields: [
    {
      type: "radio",
      label: "Do You Smoke ?",
      name: "doYouSmoke",
      options: ["Yes", "No"]
    },
    {
      type: "radio",
      label: "Smoking Habits",
      name: "smokingHabits",
      options: [
        "Occasional Smoker",
        "Light Smoker (1–3/day)",
        "Moderate Smoker (4–10/day)",
        "Heavy Smoker (15–20+/day)",
        "Former Smoker",
        "Trying to Quit"
      ]
    }
  ],
  buttons: [
    { key: "previous", label: "Previous" },
    { key: "next", label: "Next" }
  ]
},
// 15. Alcohol Status
{
  key: "alcohol-status",
  title: "Alcohol Status",
  image: "/images/Page 15.png",
  bgColor: "#fff",
  fields: [
    {
      type: "radio",
      label: "Do You Drink Alcohol ?",
      name: "doYouDrinkAlcohol",
      options: ["Yes", "No"]
    },
    {
      type: "radio",
      label: "Alcohol Habits",
      name: "alcoholHabits",
      options: [
        "Occasionally (1–2 drinks/week)",
        "Social Drinker (3–5 drinks/week)",
        "Regular Drinker (6–10 drinks/week)",
        "Heavy Drinker (10+ drinks/week)"
      ]
    }
  ],
  buttons: [
    { key: "previous", label: "Previous" },
    { key: "next", label: "Next" }
  ]
},

// 16. Resting Hours
{
  key: "resting-hours",
  title: "Resting Hours",
  image: "/images/Page 16.png",
  bgColor: "#fff",
  fields: [
    {
      type: "radio",
      label: "Sleep Duration",
      name: "sleepDuration",
      options: [
        "Less than 4 hrs",
        "4–6 hrs",
        "6–8 hrs",
        "More than 8 hrs"
      ]
    }
  ],
  buttons: [
    { key: "previous", label: "Previous" },
    { key: "next", label: "Next" }
  ]
},

// 17. Sleep Experience
{
  key: "sleep-experience",
  title: "Sleep Experience",
  image: "/images/Page 17.png",
  bgColor: "#fff",
  fields: [
    {
      type: "radio",
      label: "Sleep Quality",
      name: "sleepQuality",
      options: [
        "Very Poor",
        "Poor",
        "Average",
        "Good",
        "Excellent"
      ]
    }
  ],
  buttons: [
    { key: "previous", label: "Previous" },
    { key: "next", label: "Next" }
  ]
},

// 18. Daily Digital Screen Use
{
  key: "screen-use",
  title: "Daily Digital Screen Use",
  image: "/images/Page 18.png",
  bgColor: "#fff",
  fields: [
    {
      type: "radio",
      label: "Screen Time / Phone Usage Daily",
      name: "screenTime",
      options: [
        "Less than 1 hour",
        "1–3 hours",
        "3–5 hours",
        "5–8 hours",
        "More than 8 hours"
      ]
    }
  ],
  buttons: [
    { key: "previous", label: "Previous" },
    { key: "next", label: "Next" }
  ]
},

// 19. Health Warning Alert
{
  key: "health-warning",
  title: "Health Warning Alert !",
  image: "/images/Page 19.png",
  bgColor: "#EEF3FF",
  fields: [
    {
      type: "custom",
      component: "description",
      value: "⚠️ Insufficient sleep is affecting your body's recovery and performance.\n\n⚠️ Low activity levels detected, likely related to your job."
    }
  ],
  buttons: [
    { key: "ok", label: "OK" }
  ]
},

// 20. Additional Medical Info
{
  key: "extra-medical-info",
  title: "Almost done! A bit more on your health info",
  image: "/images/Page 20.png",
  bgColor: "#fff",
  fields: [
    {
      type: "tags",
      label: "Any existing medical conditions",
      name: "medicalConditions",
      options: [
        "Asthma", "Heart condition", "Joint pain",
        "Diabetes", "Blood Pressure", "Migraine",
        "Spondylosis", "None"
      ],
      limit: 8 // All single select, enforce UI logic if "None" is chosen
    },
    {
      type: "tags",
      label: "Do you have any allergies?",
      name: "allergies",
      options: [
        "Food allergies", "Skin allergies", "Drug Allergies",
        "Environmental allergies", "Insect Allergies", "None"
      ],
      limit: 6 // All single select, enforce UI logic if "None" is chosen
    }
  ],
  buttons: [
    { key: "previous", label: "Previous" },
    { key: "next", label: "Next" }
  ]
},

// 21. Mood & Mind Assessment
{
  key: "mood-mind",
  title: "What’s your mood and mind saying today?",
  image: "/images/Page 21.png",
  bgColor: "#fff",
  fields: [
    {
      type: "custom",
      component: "description",
      value: "How stressed do you feel daily?" // render as label for scale
    },
    {
      type: "custom",
      component: "slider",
      value: "stressLevel" // custom input component, value to be bound for backend
    },
    {
      type: "radio",
      label: "Do you experience anxiety, mood swings, or depression?",
      name: "mindStatus",
      options: ["Yes", "No"]
    },
    {
      type: "radio",
      label: "Have you ever practiced meditation or breathing exercises?",
      name: "meditated",
      options: ["Yes", "No"]
    }
  ],
  buttons: [
    { key: "previous", label: "Previous" },
    { key: "next", label: "Next" }
  ]
},

// 22. Wellness Modes
{
  key: "wellness-modes",
  title: "Which wellness modes do you prefer?",
  image: "/images/Page 22.png",
  bgColor: "#fff",
  fields: [
    {
      type: "tags",
      label: "Select  Wellness Modes",
      name: "wellnessModes",
      options: [
        "Meditation", "Pranayama", "Yoga", "Zomba",
        "Fitness/Workouts", "Migraine", "Ayurveda or Alternative therapies"
      ],
      limit: 3 // set actual limit according to your UI/logic
    }
  ],
  buttons: [
    { key: "previous", label: "Previous" },
    { key: "next", label: "Next" }
  ]
},

// 23. Session Type Selection
{
  key: "session-type",
  title: "Please select your preferred session type",
  image: "/images/Page 23.png",
  bgColor: "#fff",
  fields: [
    {
      type: "radio",
      label: "Select session types",
      name: "sessionType",
      options: [
        "Live 1:1",
        "Group sessions",
        "Pre-recorded videos",
        "Self-Mode"
      ]
    }
  ],
  buttons: [
    { key: "previous", label: "Previous" },
    { key: "next", label: "Next" }
  ]
},

// 24. Time & Session Length
{
  key: "time-session-length",
  title: "Your preferred time and session length",
  image: "/images/Page 24.png",
  bgColor: "#fff",
  fields: [
    {
      type: "custom",
      component: "day-picker", // Custom multi-select days widget
      value: "days"
    },
    {
      type: "select",
      label: "Prefer Time",
      name: "preferTime",
      options: [
        // You can fill all 24-hour and AM/PM slots as needed.
        "11:30 AM"
      ]
    },
    {
      type: "radio",
      label: "Prefer Duration",
      name: "preferDuration",
      options: [
        "15 min",
        "30 min",
        "60 min"
      ]
    }
  ],
  buttons: [
    { key: "previous", label: "Previous" },
    { key: "next", label: "Next" }
  ]
},

// 25. Social Learning Choices
{
  key: "social-learning",
  title: "Tell us your social learning choices.",
  image: "/images/Page 25.png",
  bgColor: "#fff",
  fields: [
    {
      type: "radio",
      label: "Would you like to join wellness challenges?",
      name: "wellnessChallenges",
      options: ["Yes", "No"]
    },
    {
      type: "radio",
      label: "Do you want to interact with other learners?",
      name: "interactWithLearners",
      options: ["Yes", "No"]
    },
    {
      type: "radio",
      label: "Are you open to mentor suggestions?",
      name: "mentorSuggestions",
      options: ["Yes", "No"]
    }
  ],
  buttons: [
    { key: "previous", label: "Previous" },
    { key: "next", label: "Next" }
  ]
},

// 26. Consent & Preferences
{
  key: "consent-preferences",
  title: "Consent & Preferences",
  image: "/images/Page 26.png",
  bgColor: "#fff",
  fields: [
    {
      type: "custom",
      component: "checkbox-group",
      value: [
        "Consent to receive notifications/emails",
        "Data sharing consent (for AI recommendation or wellness reports to mentors)",
        "I read and agree to privacy policy",
        "I read and agree to terms and conditions"
      ]
    }
  ],
  buttons: [
    { key: "previous", label: "Previous" },
    { key: "submit", label: "Submit" }
  ]
},

//27. Congratulations page
{
  key: "congratulations",
  mainTitle: "⭐ Congratulations! ⭐",
  mainSubtext: "You've successfully completed the assessment.",
  title: "Make an Impact",
  image: "/images/Page 27.png",
  bgColor: "#fff",
  subtext: "You can change a child’s future with the gift of education.",
  button: "Donate Now",
  fields: [],
  buttons: [
    { key: "submit", label: "Submit" }
  ]
}
];
