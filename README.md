# Project name: Accessible Image Gallery- Week06 Assignment

### GitHub link: https://github.com/vinay019/Week06-Assignment

### Live Github Pages link: https://vinay019.github.io/Week06-Assignment/

### Live Render link: https://week06-assignment-new.onrender.com/

### Team members (if in a group project): N.A.

## Project description:

To build a Responsive and Accesible Image Gallery using the concepts learnt upto Week 06.

## Problem domain:

Arrays and Objects
The Document Object Model (The DOM)
JavaScript Events
Web Accessibility
Media queries

## User stories:

🐿️ As a user, I want the website design to adjust using responsive design methods so that it works well on both small mobile screens and larger desktop screens.

🐿️ As a user, I want the website design to adjust so that there is a noticeable change between desktop and mobile view.

🐿️ As a user with accessibility needs, I expect accessible considerations like alternative text for images so my screen reader can interpret and convey the content to me effectively.

🐿️ As a user, I want to easily switch between images in the gallery using buttons so that my experience is smooth and intuitive.

## Stretch User stories:

🐿️ As a user, I want the website to use ‘srcset’ to display appropriately sized images for my device, so that images load quickly and look sharp on any screen.

🐿️ As a user with accessibility needs, I want ARIA elements, such as aria-label, aria-live, and other relevant attributes, to improve my interaction with the website.

🐿️ As a user, I want to use keyboard shortcuts, like arrow keys, to switch between images easily.

## Wireframe(s): N.A.

## Instructions on how to run your app:

Please visit the live Github pages link or the Render link (created today)

## Lighthouse report: N.A.

## Reflections:

### 🎯 What requirements did you achieve?

I believe I have met all the minimum requirements/user stories. As with the stretch goals, I have only managed to achieve the accessibility needs from what I could understand and implement such as aria elements for the buttons, the thumbnails section and the use of alt tags for the images. I am aware that to meet the accessibility needs as per the WCAG there's much more to be done but I have not delved into it due to the overwhelming amount of things to be done.

### 🎯 Were there any requirements or goals that you were not quite able to achieve?

Yes, the other two stretch goals. For the images, I did use a collection of different file formats such as webp, avif(the latest superior quality format) and jpg. However, I did not have to convert them, I got them as is from the Wimbledon wesbite gallery.

### 🎯 If so, could you please tell us what was it that you found difficult about these tasks?

It's just the amount of time I'd need to convert the files for the srcset and I already overwhelmed myself by selecting 25 images to use for the project. As with the keyboard shortcuts I didn't spend time figuring that out as I was already running quite late behind the assignment submission schedule.

### What went really well and what could have gone better?

I believe, I could get the website build as close to the vision I had in my mind before I started. I wanted to add some audio and also some other interactive elements but I thought I should rather focus on the MVP, do it well and later at some point add and improve this as time and motivation permits. But overall, I think I'm content with how it has come out for the assignment submission purpose.

### Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials):

For this, my primary resource was using ChatGPT. The reason I switched to this was I found it was faster to get to the point rather than having to go through the MDN docs. I've a tendency to go through rabit holes and I did spend quite a lot of time researching how to get the buttons, the thumbnails etc. I also reviewed Berties example with the halloween related images. I inspected it but didn't get anywhere and then checked out his github to pick up some ideas. A combination of Bertie's assigment along with the right prompts helped me get the required guidance and assistance from ChatGPT. For instance, it was fascinating to learn about how to get the button using the HTML code "&#8592;"

Another thing I struggled with was the selected image wasn't filling the entire browseer window as envisioned. That took some time to fix but the knowledge I picked up over the weeks helped figure out the way quickly also using help from ChatGPT. Another fascinating learning was the use of transform:translateY(-50%). I had finally found the way I could ensure that the element I wanted to centre could be centred whilst the page is also being responsive. It was useful to get the buttons to stay centred and also in the week 07 project to get the title overlay centred.

### Describing errors or bugs you encountered while completing your assignment:

There was quite a few but I didn't list them out to capture here. But from the top of my mind, it was getting the selected image to fill up the entire browser window without overflowing or if it did, the overflow is hidden, the buttons weren't alingning as expected but got that fixed with the transfrom/translate element. And yes, I struggled with the JS code where I could not remove the selecting from the selected thiumbnail. But that was fixed by finding out the classlist.add/remove methods. One more thing I should have done and realised I forgot to do was figuring out a way to resize the images for mobile view. Eventhough the height and width is set to %, it somehow does not shrink to fit the mobile screens. It's possible that it's doing so to avoid messing with the aspect ratio of the image but I would need to investigate this further at some point and fix it.

### References:

Wimbledon website for the images: https://www.wimbledon.com/en_GB/news/index.html?filter=gallery

Bertie's project for inspiration and intial guidance: https://comfortablecat.github.io/WeekTwoProject/
https://github.com/ComfortableCat/WeekTwoProject/tree/main

Open AI's ChatGPT
