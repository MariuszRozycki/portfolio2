export const projectsCommercialData = [
  {
    id: "commercial-001",
    title: "Tour Guide",
    imgSrc: "/pictures/tour-guide/tour-guide.jpg",
    description: `Tour Guide is a modern web application designed to provide users with an engaging and interactive experience for exploring guided tours. Built using React, Vite, and Bootstrap, the project focuses on delivering a user-friendly interface and responsive design.`,
    descriptionDetails: `
    <h4>Features</h4>
    <ul>
      <li><span>Interactive Tour Listings:</span> Browse a variety of tours with detailed descriptions, images, and pricing information.</li>
      <li><span>Responsive Design:</span> Optimized for desktops, tablets, and mobile devices using Bootstrap.</li>
      <li><span>Modern Development Stack:</span> Built with React and Vite for a fast and seamless user experience.</li>
      <li><span>Dynamic Content Management:</span> Backend support for managing tour data (to be connected).</li>
      <li><span>Styling with CSS:</span> Customized styles for a visually appealing layout.</li>
    </ul>
    <h4>Note on Backend Data</h4>
    <p>Although a backend directory exists in the project, the data is currently being fetched from a static offers.json file. Future versions will integrate a fully functional backend API.</p>
    <h4>File Structure</h4>
    ├── backend           # Backend API (future integration) <br>
    ├── css               # Custom CSS files <br>
    ├── dist              # Production build output <br>
    ├── public            # Static assets <br>
    ├── src               # Source code for React components <br>
    ├── index.html        # Entry HTML file <br>
    ├── package.json      # Project dependencies and scripts <br>
    └── vite.config.js    # Vite configuration <br>
    <h4>Technologies Used</h4>
    <ul>
      <li><span>React:</span> Front-end library for building user interfaces.</li>
      <li><span>Vite:</span> Next-generation front-end tooling for fast development.</li>
      <li><span>Bootstrap:</span> Framework for responsive and mobile-first design.</li>
      <li><span>React-Bootstrap:</span> React components for Bootstrap styling.</li>
      <li><span>SCSS:</span> preprocessor scripting language that extends CSS by adding features like variables, nesting, mixins, and functions, making stylesheets more maintainable and dynamic.</li>
    </ul>
    `,
    btnHrefLive: "https://tour-guide.pl/",
    btnHrefGitHub: "https://github.com/MariuszRozycki/tour-guide-bootstrap",
  },
  {
    id: "commercial-002",
    title: "Skin & Beauty",
    imgSrc: "/pictures/skin-beauty/skin-beauty.jpg",
    description: `Skin & Beauty is a website for a beauty salon in Oslo. On the website you can browse treatments, read about the details of the treatments and make an appointment. The website has a "home" section and a contact section.`,
    btnHrefLive: "https://alenaskinbeauty.no/",
    btnHrefGitHub: "https://github.com/MariuszRozycki/skin-beauty",
  },
];

export const projectsDataSecondYear = [
  {
    id: "secondyear-001",
    title: "Holidaze",
    imgSrc: "/pictures/holidaze/holidaze.jpg",
    description:
      "Holidaze is a modern front-end application for an accommodation booking platform. The project is being developed using HTML, SCSS, CSS, JavaScript, React, and TypeScript. It leverages GitHub Pages for hosting and integrates a Kanban board on GitHub Projects for task management. The design prototype was created in Adobe XD.",
    descriptionDetails: `
    <h4>The application consists of three main sections:</h4>
    <ul>
      <li><span>Not logged customer-facing website:</span> Users can browse, search, and book venues for their holidays.</li>
      <li><span>Logged customer-facing website:</span> Users can browse, search, and book venues for their holidays.</li>
      <li><span>Venue manager-facing dashboard:</span> Venue managers can register, manage venues, and oversee bookings.</li>
      <li>This project integrates with the Holidaze API for backend functionality, focusing solely on the development of the front end.</li>
    </ul>
    <h4>Features</h4>
    <h5>Not logged customer-facing features</h5>
    <ul>
      <li>- View a list of venues.</li>
      <li>- Search for venues by keyword.</li>
      <li>- A user may view a specific Venue page by id.</li>
      <li>- A user may view a calendar with available dates for a Venue.</li>
      <li>- A registered user may logout.</li>  
    </ul>
    <h5>Logged customer-facing features</h5>
     <ul>
      <li>- A registered customer may create a booking at a Venue.</li>
      <li>- A registered customer may view their upcoming bookings.</li>
      <li>- A user with a stud.noroff.no email may register as a Venue manager.</li>
      <li>- A user may view a calendar with available dates for a Venue.</li>
      <li>- A user with a stud.noroff.no email may register as a customer.</li>  
    </ul>
    <h5>Venue manager-facing features</h5>
    `,
    btnHrefLive: "https://mariuszrozycki.github.io/holidaze/",
    btnHrefGitHub: "https://github.com/MariuszRozycki/holidaze",
  },
  {
    id: "secondyear-002",
    title: "E-Com",
    imgSrc: "/pictures/e-com/e-com.jpg",
    description:
      "This project is an eCommerce store built with React, following the requirements set out in the project brief. The store uses an external API (https://v2.api.noroff.dev/online-shop) to fetch product data and allows users to browse products, view individual product details, add items to the cart, and complete the checkout process.",
    btnHrefLive: "https://ecom-react-mariusz.netlify.app/",
    btnHrefGitHub: "https://github.com/MariuszRozycki/e-com-store-react",
  },
  {
    id: "secondyear-003",
    title: "Auction house",
    imgSrc: "/pictures/auction-house/auction-house.jpg",
    description: `An auction site is looking to launch a website where users can add items to be bid on and bid on items other users have put up for auction. When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings. The maximum number of responses from the API is 100. The main page is divided into 10 smaller pages by pagination. Sorting takes place from the newest to the oldest or from the oldest to the newest. The sort contains 100 responses from the API. When searching the listings, we look for 100 API responses. The entered letter, word, searches among the results in titles, descriptions and tags.`,
    btnHrefLive: "https://genuine-squirrel-c1ec8c.netlify.app/",
    btnHrefGitHub: "https://github.com/MariuszRozycki/auction-gavel",
  },
  {
    id: "secondyear-004",
    title: "My class",
    imgSrc: "/pictures/my-class/my-class.jpg",
    description:
      "In the 'my-class' project, I leveraged JavaScript to build a dynamic front-end for a social media platform, ensuring an engaging user experience with features like registration, content viewing, posting, editing, and deletion. I integrated the application with a backend API using authorization via JWT, employing HTTP methods such as GET, POST, PUT, and DELETE to interact with the social media content. The project's user interface was designed to be intuitive and responsive, with added functionalities for content filtering, searching, and secure token handling through localStorage.",
    btnHrefLive: "https://coruscating-melomakarona-28cd35.netlify.app/",
    btnHrefGitHub: "https://github.com/MariuszRozycki/my-class",
  },
];

export const projectsDataFirstYear = [
  {
    id: "firstyear-001",
    title: "Trip blog",
    imgSrc: "/pictures/trip-blog/trip-blog.jpg",
    description: `The goal of the project was to put into practice the skills learned over first year of studies.
    This project is made as a first year exam. The content for website is stored on a WordPress used as a Headless CMS. Trip Blog is using WordPress to provide an API and add content for the blog. To build this blog I used pure Java Script, HTML, CSS and I made a call to the WordPress REST API to fetch the data.`,
    btnHrefLive: "https://dynamic-twilight-02d190.netlify.app/",
    btnHrefGitHub: "https://github.com/Noroff-FEU-Assignments/project-exam-1-MariuszRozycki",
  },
  {
    id: "firstyear-002",
    title: "Museum of science",
    imgSrc: "/pictures/museum-of-science/museum-of-science.jpg",
    description: `An interactive science museum called the Community Science Museum is opening in your town/city. Its core target audience is primary and middle school children (7-15) and families with young children. The museum wants a website that is informative and appealing, that will attract both middle school pupils and their parents. The site should appeal to youngsters without pandering; it should take for granted that the audience is inquisitive and intelligent. The website should be informative and engaging, but should encourage viewers to visit the museum itself. The website should be responsive and be easy to use on a variety of devices.`,
    btnHrefLive: "https://wizardly-hugle-cb8551.netlify.app/",
    btnHrefGitHub: "https://github.com/MariuszRozycki/museum-of-science",
  },
  {
    id: "firstyear-003",
    title: "Flower Power",
    imgSrc: "/pictures/flower-power/flower-power.jpg",
    description: `To create an e-commerce site for a company called ‘Flower Power’ using WordPress and display it on a web host. ‘Flower Power’ is a company selling bouquets online. They want a website built on WordPress to update content and add products as they wish.`,
    btnHrefLive: "https://mariuszrozycki.info/flower-power/",
    btnHrefGitHub: "pureWordPress",
  },
  {
    id: "firstyear-004",
    title: "Rainy Days",
    imgSrc: "/pictures/rainy-days/rainy-days.jpg",
    description: `E-commerce project (The project is developed constantly and will be until the end of study). This is a cross-study project I started in 2021. `,
    btnHrefLive: "https://mariuszrozycki.info/rainy-days",
    btnHrefGitHub: "https://github.com/MariuszRozycki/rainy-days",
  },
];
