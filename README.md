# React Web App For Downtime Monitor With Slack Notification
In daily organization routine, they may have different types of work and dependencies on other services, each service may have a different status when the situations like service downtime occur every organisation may not be able to be aware of the exact situation at a time due to which there may be some problems into their product functionality and other things.

For all different types of services have different status pages, so instead of visiting and checking each service status, it can be solved by providing all service statuses on a single page. and send notification of the dependency services which are having downtime can be automated.

### Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Version of Technologies](#version-of-technologies)
- [Folder Structure](#folder-structure)
- [Installed Dependency](#installed-dependency)
- [MIT License](#license)
- [Community](#community)

# Features
1.  Get the list of services
2.  Downtime notification on Slack

The Project has default configuration in constant of status API services endpoints, logos and original status page urls to redirect

1. Postman
2. Slack
3. Amazon
4. ClickUp
5. Keka
6. Canny
7. HubSpot
8. HotJar
9. MixPanel
10. HoppScotch
11. Vercel
12. GitHub
13. GitLab
14. Figma
15. Discord

# Screenshots

![Image 1](/src/assets/images/Screenshot%20from%202022-07-22%2018-27-26.png)
![Image 2](/src/assets/images/Screenshot%20from%202022-07-22%2018-57-47.png)
![Slack Notification](/src/assets/images/Screenshot%20from%202022-07-19%2019-03-17.png)

# Setup

#### 1. Clone the repository
```sh
$ git clone https://github.com/.....
$ cd react-downtime-monitor-with-slack
```
## Installed Dependencies

    npm install

## Running the App

    npm start

## Running the storybook

We have detected common components and have generated possible variants of it. To check the documentation of generated common components by integrating storybook, Please follow below steps.

## Install and Initializes

     npx storybook init

## Run the Storybook

     npm run storybook

#### 2. Set Account URL In Following Files

Go to https://cors-anywhere.herokuapp.com/corsdemo and click on "Request temporary access to the demo server" to avoid cors issues while calling APIs from the browser, 

Create Slack Webhooks API account from https://api.slack.com/apps?new_app=1 and add URL which is generated from Slack at "src/service/api.js" => "https://hooks.slack.com/services/[your slack webhook setups url]"

## Version of Technologies

- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - `12 || 14 `
- [npm](https://www.npmjs.com/) - v6 or greater

## Folder Structure

```
.
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ └── robots.txt
├── README.md
├── src
│ ├── App.js
│ ├── assets
│ │ ├── fonts ---------- Project fonts
│ │ └── images --------- All Project Images
│ ├── components --------- UI and Detected Common Components
│ ├── constants ---------- Project constants, eg: string const
│ ├── hooks -------------- Helpful Hooks
│ ├── index.js
│ ├── pages -------------- All route pages
│ ├── Routes.js ---------- Routing
│ ├── styles
│ │ ├── index.css ------ Other Global Styles
│ │ └── tailwind.css --- Default Tailwind modules
│ └── util
│ └── index.js ------- Helpful utils
└── tailwind.config.js ----- Entire theme config, colours, fonts etc.

```

## Libraries used in this repository

1. @tailwindcss/forms - `0.4.0`
2. @testing-library/jest-dom - `^5.15.1`
3. @testing-library/react - `^11.2.7`
4. @testing-library/user-event - `^12.8.3`
5. react - `17.0.2`
6. react-datepicker - `^4.5.0`
7. react-dom - `17.0.2`
8. react-router-dom - `6.0.2`
9. react-router-hash-link - `^2.4.3`
10. react-scripts - `5.0.0`
11. web-vitals - `^2.1.0`
12. Axios - `^0.27.2`
13. react-toastify - `^9.0.1`
14. autoprefixer - `10.4.2`
15. postcss - `8.4.6`
16. tailwindcss - `3.0.18`

## License

MIT License

Copyright (c) 2022 DhiWise

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Community

<a href="https://twitter.com/dhiwise"><img src="https://user-images.githubusercontent.com/35039342/55471524-8e24cb00-5627-11e9-9389-58f3d4419153.png" width="60" alt="DhiWise Twitter"></a>

<a href="https://www.youtube.com/c/DhiWise"><img src="https://cdn.vox-cdn.com/thumbor/0kpe316UpZWk53iw3bOLoJfF6hI=/0x0:1680x1050/1400x1400/filters:focal(706x391:974x659):format(gif)/cdn.vox-cdn.com/uploads/chorus_image/image/56414325/YTLogo_old_new_animation.0.gif" width="60" alt="DhiWise YouTube"></a>

<a href="https://discord.com/invite/rFMnCG5MZ7"><img src="https://user-images.githubusercontent.com/47489894/183043664-b01aac56-0372-458a-bde9-3f2a6bded21b.png" width="60" alt="DhiWise Discord"></a>

<a href="https://docs.dhiwise.com/"><img src="https://global-uploads.webflow.com/618e36726d3c0f19c9284e56/62383865d5477f2e4f6b6e2e_main-monogram-p-500.png" width="60" alt="DhiWise Documentation"></a>
