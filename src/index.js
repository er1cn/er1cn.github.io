const header = document.getElementsByClassName('header') [0]
const headerName = header.getElementsByTagName('h1') [0]

headerName.innerText = "Eric Nganga";

const headerCourse = header.getElementsByTagName('h3') [0];
headerCourse.innerText = "Software Development Student";

const aboutMe = document.getElementsByClassName('content') [0];
const aboutMeText = aboutMe.getElementsByTagName('p') [0];

aboutMeText.innerText = `I'm a coder guy in the making learning software engineering at Flatiron School part time.`;

const currently = document.getElementsByClassName('content') [0]
const currentlyText = currently.getElementsByTagName('p') [1];

currentlyText.innerText = `I work at Amazon (STL8) as a fulfilment Center Associate.`;

const beforeThat = document.getElementsByClassName('content') [0];
const beforeThatText = beforeThat.getElementsByTagName('p') [2];

beforeThatText.innerText = `I was working freelance as a video editor using Premiere Pro and After Effects software to tell stories creatively using video.`;

const interests = document.getElementsByClassName('my interests');
const activity1Text = interests.getElementsByTagName('ul') [0];

activity1Text.innerText = `I was working freelance as a video editor using Premiere Pro`;
