// constants/onboardingData.ts

export interface OnboardingStep {
    key: string;
    title: string;
    image: string; // public path like /images/Page 1.png
    fields: Array<
      | { type: 'input'; label: string; name: string; placeholder?: string; options?: string[] }
      | { type: 'select'; label: string; name: string; options: string[] }
      | { type: 'radio'; label: string; name: string; options: string[] }
      | { type: 'file'; label: string; name: string; accept: string[] }
      | { type: 'tags'; label: string; name: string; options: string[]; limit: number }
      | { type: 'custom'; component: 'paragraph' }
    >;
    buttons: Array<{ key: 'next' | 'previous' | 'upload' | 'proceed' | 'submit'; label: string }>;
  }
  
  export const onboardingData: OnboardingStep[] = [
    // 1. About You
    {
      key: "about-you",
      title: "Let us know about you !",
      image: "/images/Page 1.png",
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
  }
  ];
  