// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'UltraBooDev', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['UltraBooDev/UltraBooDev.github.io'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Pride Run (Arcade Game)',
          description:
            'A simple multiplayer arcade game, themed around the Toronto 2024 Pride Parade. This was my final project at Adsologist.',
          imageUrl:
            'https://media.licdn.com/dms/image/sync/v2/D4E27AQHX0Bv3UFIEfA/articleshare-shrink_800/articleshare-shrink_800/0/1726071411646?e=1729544400&v=beta&t=_kgKWk7AfnRwIfOKlEFjsZ-FTVhF5BrxKqKtn46yNFY',
          link: 'https://www.linkedin.com/posts/ultraboo_im-happy-to-share-my-work-on-pride-run-activity-7239672159588024320-hIQg',
        },
        {
          title: 'Teddy Beer (Arcade Game)',
          description:
            '1 on 1 arcade game, themed around the bar "Teddy Beer". Using motion controls, whoever drank the most amount of beer would win the game.',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/D4E2DAQHrCj6Dc8N6pQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1725948857514?e=1729544400&v=beta&t=1kzldb2Mfk5LNynr2yqqIIs9_ycQAUG29S58K1X8aMA',
          link: 'https://www.linkedin.com/posts/ultraboo_im-happy-to-share-my-work-on-teddy-beer-ugcPost-7239156125223333890-zHlY?utm_source=share&utm_medium=member_desktop',
        },
        {
          title: 'Decoration Dash (Custom level for A Hat in Time)',
          description:
            'A custom level for the game "A Hat in Time", based around getting the first place in a garden competition. I was responsible for some minor shader work and playtesting it. The mod would later be featured by the original games developers in the Summer Event',
          imageUrl:
            'https://media.licdn.com/dms/image/sync/v2/D4E27AQGkWNnfCI7vZw/articleshare-shrink_1280_800/articleshare-shrink_1280_800/0/1725824177296?e=1729544400&v=beta&t=duM9UpbfbsFu8RVGk3wkd1Dyx4msRHykoXvJPoIGLwg',
          link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3154979886',
        },
        {
          title: 'Farewell Avalon (Game)',
          description:
            'Top down combat/puzzle game that features two protagonists who need to work together in order to find the truth. I was responsible for most of the initial programming, and later on, enemy combat AI. This game has been featured at the Level UP expo, and the CNE convention.',
          imageUrl:
            'https://img.itch.zone/aW1nLzExOTY0NDE2LnBuZw==/original/x0dPAi.png',
          link: 'https://centennial-game-dev.itch.io/farewell-avalon',
        },
        {
          title: 'Spooky Spaceship (A Hat in Time Addon)',
          description:
            'Made for the 2020 Halloween Mod Jam, this project replaces the games usual hub with a spooky, halloween themed one. I was responsible for some 3D art and programming.',
          imageUrl:
            'https://media.licdn.com/dms/image/sync/v2/D5627AQEIaAOWc1FhVA/articleshare-shrink_1280_800/articleshare-shrink_1280_800/0/1714866544802?e=1729544400&v=beta&t=U2rhVN0rW4UrIfZxiQCJrD0tqzjZ6EOXmAAoVzSI7YY',
          link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2273065025',
        },
        {
          title: 'Christmas Cruiser: Holiday Hub (A Hat in Time Addon)',
          description:
            'Made for the 2020 Christmas Mod Jam, this project replaces the games usual hub with a holiday themed one. I was responsible for some 3D art and programming.',
          imageUrl:
            'https://media.licdn.com/dms/image/sync/v2/D5627AQH3mfnNQicXQA/articleshare-shrink_1280_800/articleshare-shrink_1280_800/0/1714866544049?e=1729544400&v=beta&t=klJHzi0ZeNcquPmUF3GP23LS0pbU0ApxH83wqhXTwAE',
          link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2331578059',
        },
        {
          title: 'Lost in Space (Game)',
          description:
            'Simple endless runner game, where you must avoid asteroids as a small spaceship, until a boss enemy arrives, who must be defeated to continue. This was my first Unity project, made so I could get used to the engine.',
          imageUrl:
            'https://media.licdn.com/dms/image/sync/v2/D5627AQHkpjtB7hiT1A/articleshare-shrink_1280_800/articleshare-shrink_1280_800/0/1711180024606?e=1729544400&v=beta&t=hgj810c01WbpAOkrXyrc8zdTlgIRb3J_nNVOYYjAUMc',
          link: 'https://ultraboo.itch.io/lost-in-space',
        }, 
      ],
    },
  },
  seo: {
    title: 'Portfolio of Leonardo Siqueira / Ultra Boo',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ultraboo',
    twitter: 'Ultra_BooDev',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'leo10pe10@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    'C++',
    'Python',
    'Unrealscript',
    'PostgreSQL',
    'Git',
    'Unreal Engine',
    'Blueprint',
    'Unity',
    'Shader Creation',
    '3D Art',
    'Substance Painter',
    'Substance Designer',
    'Maya'
  ],
  experiences: [
    {
      company: 'Arcane Dreams',
      position: 'Lead Programmer',
      from: 'September 2024',
      to: 'Present',
      companyLink: 'https://www.linkedin.com/company/arcane-dreams-studio/posts/',
    },
    {
      company: 'Adsologist',
      position: 'Interactive Developer',
      from: 'January 2024',
      to: 'July 2024',
      companyLink: 'https://adsologist.com/',
    },
    {
      company: 'Centennial College',
      position: 'Programming Tutor',
      from: 'October 2023',
      to: 'April 2024',
      companyLink: 'https://www.centennialcollege.ca/',
    },
  ],
  educations: [
    {
      institution: 'Centennial College',
      degree: 'Bachelor Degree of Game Design',
      from: '2022',
      to: '2025',
    },
    {
      institution: 'SAGA School of Arts',
      degree: 'Unreal Development Certificate',
      from: '2016',
      to: '2019',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dark',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: false,
};

export default CONFIG;
