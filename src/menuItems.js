export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Load',
    url: '/load',
    submenu: [
      {
        title: 'Load Postman Collection JSON',
        action: 'load-postman',
      },
      {
        title: 'Load Swagger YAML',
        action: 'load-swagger-yaml',
      },
      {
        title: 'Load Swagger JSON',
        action: 'load-swagger-json',
      },
      {
        title: 'Clear Editor',
        action: 'clear-editor',
      },
    ],
  },
  {
    title: 'Save',
    url: '/save',
    submenu: [
      {
        title: 'Save Swagger YAML',
        action: 'save-swagger-yaml',
      },
      {
        title: 'Save Swagger JSON',
        action: 'save-swagger-json',
      },
    ],
  },
  {
    title: 'Services',
    url: '/services',
    submenu: [
      {
        title: 'web design',
        url: 'web-design',
      },
      {
        title: 'web development',
        url: 'web-dev',
        submenu: [
          {
            title: 'Frontend',
            url: 'frontend',
          },
          {
            title: 'Backend',
            submenu: [
              {
                title: 'NodeJS',
                url: 'node',
              },
              {
                title: 'PHP',
                url: 'php',
              },
            ],
          },
        ],
      },
      {
        title: 'SEO',
        url: 'seo',
      },
    ],
  },
  {
    title: 'About',
    url: '/about',
    submenu: [
      {
        title: 'Who we are',
        url: 'who-we-are',
      },
      {
        title: 'Our values',
        url: 'our-values',
      },
    ],
  },
];
