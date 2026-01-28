export type Project = {
  id: string;
  title: string;
  description: string;
  image: string; // relative path under /public (use asset() helper)
  tags: string[];
  links: { github?: string; live?: string };
  repoNote?: string;
  codeSamplesUrl?: string;
  detailsHtml?: string;
  stackHtml?: string;
};

export const projects: Project[] = [
  {
    id: "nonprofit-001",
    title: "WikiForum (Wiki + AI Search)",
    description:
      "WikiForum is a wiki/forum-style web application designed for building a structured knowledge base and finding information quickly. Users can create articles and edit them later, with content organized into clear sections, which makes long topics easier to read, maintain, and expand over time. The app offers two ways to search: a classic keyword search for exact matches and an AI-assisted mode based on semantic search (RAG). In AI mode, the system first retrieves the most relevant sections from the database and then generates a final answer grounded only in the content stored in the backend — it does not browse the internet or “make up” information outside of the project’s own data. This makes responses more consistent with the knowledge base and easier to trust and verify. WikiForum is built to support collaboration and iteration: content can be continuously improved, expanded, and reorganized while the search experience stays fast and user-friendly.",
    image: "pictures/wikiforum/wikiforum.png",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Supabase (Postgres/Auth/Storage/Edge Functions)",
      "pgvector",
      "OpenAI embeddings",
      "Quill Editor",
      "Git",
      "GitHub",
      "Visual Studio Code",
    ],
    links: {
      live: "https://wikiforum.vercel.app/",
    },
    repoNote:
      "Repository is private (team project). Code samples / walkthrough available on request.",
    detailsHtml: `
    <h4>Features</h4>
    <ul>
      <li><span>Article & Section Editor:</span> Create and edit wiki articles divided into sections, with validation and structured saving.</li>
      <li><span>Rich Text Editing (Quill):</span> Text formatting with support for images handled safely (image URLs stored separately from content).</li>
      <li><span>Search (Normal + AI):</span> Standard keyword search plus AI-assisted semantic search with sources and answer output.</li>
      <li><span>Embeddings Pipeline:</span> Automatic embedding generation for new/updated content using <code>text-embedding-3-small</code>.</li>
      <li><span>Supabase Backend:</span> Postgres + Auth + Storage + Edge Functions with secure server-side secrets.</li>
      <li><span>Team Workflow:</span> Feature branches, PR reviews, predictable state flow with Redux Toolkit async thunks.</li>
    </ul>

    <h4>AI Search (RAG) — How it Works</h4>
    <p>
      WikiForum supports an AI mode that retrieves relevant sections via pgvector semantic search and generates an answer
      using only the retrieved wiki context (no internet browsing). The UI shows the answer and related sources.
    </p>

    <h4>Data & Images</h4>
    <p>
      Article text is stored without <code>&lt;img&gt;</code> tags; images are stored as URLs (Supabase Storage).
      When a user removes an image, the file can be cleaned up and references are kept consistent.
    </p>

    <h4>File Structure</h4>
    ├── src                # React + TS source <br>
    ├── src/store          # Redux Toolkit slices, thunks, selectors <br>
    ├── src/components     # UI components (search, editor, modals, etc.) <br>
    ├── src/pages          # Routing pages (React Router) <br>
    ├── src/lib            # API clients, helpers, utilities <br>
    ├── public             # Static assets <br>
    ├── dist               # Production build output <br>
    ├── index.html         # Entry HTML file <br>
    ├── package.json       # Dependencies and scripts <br>
    └── vite.config.ts     # Vite configuration <br>

    <h4>Technologies Used</h4>
    <ul>
      <li><span>React + TypeScript:</span> UI development with strong typing and scalable component design.</li>
      <li><span>Redux Toolkit:</span> Predictable state management (slices, async thunks, loading/error states).</li>
      <li><span>Supabase:</span> Postgres/Auth/Storage/Edge Functions for backend and server-side logic.</li>
      <li><span>pgvector:</span> Semantic search via embeddings stored in Postgres vectors.</li>
      <li><span>OpenAI embeddings:</span> <code>text-embedding-3-small</code> used to vectorize wiki content.</li>
      <li><span>Tailwind CSS:</span> Utility-first styling for fast UI iteration.</li>
    </ul>
  `,
    stackHtml: `
    <h4 class="h5 fw-bold">Technologies stack:</h4>
    <ul>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" alt="Redux Toolkit" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" alt="React Router" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="Postgres" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" alt="Supabase" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg" alt="Git" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="GitHub" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="Visual Studio Code" /></span></li>
    </ul>
  `,
  },
  {
    id: "commercial-001",
    title: "Tour Guide",
    description:
      "Tour Guide is a modern web application designed to provide users with an engaging and interactive experience for exploring guided tours. Built using React, Vite, and Bootstrap, the project focuses on delivering a user-friendly interface and responsive design.",
    image: "pictures/tour-guide/tour-guide.jpg",
    tags: [
      "React",
      "React Router",
      "Vite",
      "React Bootstrap",
      "Bootstrap",
      "CSS",
      "Sass",
      "AdobeXD",
      "Git",
      "GitHub",
      "Visual Studio Code",
    ],
    links: {
      github: "https://github.com/MariuszRozycki/tour-guide-bootstrap",
      live: "https://tour-guide-pl.netlify.app/",
    },
    detailsHtml: `
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
      <li><span>Deploy on CyberFolks</span></li>
      </ul>
    `,
    stackHtml: `
     <h4 class="h5 fw-bold">Technologies stack:</h4>
    <ul>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" alt="React Router" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg" alt="React Bootstrap" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="Css3" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="Sass" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg" alt="AdobeXD" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg" alt="Git" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="GitHub" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="Visual Studio Code" /></span></li>
      
    </ul>`,
  },
  {
    id: "commercial-002",
    title: "Skin & Beauty",
    description:
      'Skin & Beauty is a website for a beauty salon in Oslo. On the website you can browse treatments, read about the details of the treatments and make an appointment. The website has a "home" section and a contact section.',
    image: "pictures/skin-beauty/skin-beauty.jpg",
    tags: [
      "JavaScript",
      "CSS",
      "HTML",
      "Git",
      "GitHub",
      "Visual Studio Code",
      "AdobeXD",
    ],
    links: {
      github: "https://github.com/MariuszRozycki/skin-beauty",
      live: "https://alena-skin-beauty.netlify.app/",
    },
    detailsHtml: `
    <h4>Skin Beauty Project</h4>
    <p>Skin Beauty is a project designed to showcase a beauty and skincare business based in Oslo. The website is built to provide information about services, treatments, and contact details, creating an elegant and user-friendly experience.</p>

    <h4>Description</h4>
    <p>The goal of this project was to implement front-end development skills while building a fully responsive and visually appealing website for a beauty service provider. The project contains multiple pages displaying services, a gallery, and a contact form.</p>

    <h4>Project contains the following pages:</h4>
    <ol>
      <li><span>Home Page</span> - Features a hero section with branding, introduction, and navigation.</li>
      <li><span>About Page</span> - Provides details about the business and its services.</li>
      <li><span>Treatments Page</span> - Lists various skin treatments available at the salon.</li>
      <li><span>Gallery</span> - Showcases high-quality images of treatments and results.</li>
      <li><span>Contact Page</span> - Contains a form where users can reach out to the business, ensuring validation for input fields.</li>
    </ol>

    <h4>Built with</h4>
    <ul>
      <li><span>This project was developed using:</span></li>
      <li>- HTML, CSS, JavaScript</li>
      <li>- Responsive Design Techniques</li>
      <li>- Visual Studio Code for development</li>
    </ul>

    <h4>Design</h4>
    <ul>
      <li>- Initial wireframes and sketches were created to plan the website layout.</li>
      <li>- Styling was implemented using CSS for a clean and professional look.</li>
    </ul>

    <h4>Technical</h4>
    <ul>
      <li>- HTML structure ensures semantic elements for better SEO.</li>
      <li>- CSS styles for layout, animations, and responsiveness.</li>
      <li>- JavaScript is used for interactive elements such as the navigation menu.</li>
    </ul>

    <h4>Summary:<h4>
    <ul>
      <li>- Fully responsive for mobile, tablet, and desktop screens.</li>
      <li>- Clean HTML structure with proper semantic elements.</li>
      <li>- Optimized images and assets for fast loading times.</li>
      <li>- Contact form includes validation for user input.</li>
    `,
    stackHtml: `
     <h4 class="h5 fw-bold">Technologies stack:</h4>
    <ul>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="Java Script" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="Css3" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="Html5" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="Visual Studio Code" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg" alt="AdobeXD" /></span></li>
    </ul>`,
  },
  {
    id: "secondyear-001",
    title: "Holidaze",
    description:
      "Holidaze is a modern front-end application for an accommodation booking platform. The project is being developed using HTML, SCSS, CSS, JavaScript, React, and TypeScript. It leverages GitHub Pages for hosting and integrates a Kanban board on GitHub Projects for task management. The design prototype was created in Adobe XD.",
    image: "pictures/holidaze/holidaze.jpg",
    tags: [
      "React",
      "React Bootstrap",
      "React Router",
      "TypeScript",
      "Vite",
      "CSS",
      "SCSS",
      "Bootstrap",
      "GitHub",
      "Git",
      "AdobeXD",
      "Visual Studio Code",
    ],
    links: {
      github: "https://github.com/MariuszRozycki/holidaze",
      live: "https://mariuszrozycki.github.io/holidaze/",
    },
    detailsHtml: `
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
      <li>- A user may view a list of Venues.</li>
      <li>- A user may search for a specific Venue.</li>
      <li>- A user may view a specific Venue page by id.</li>
      <li>- A user may view a calendar with available dates for a Venue.</li>
      <li>- A user with a stud.noroff.no email may register as a customer.</li>  
      <li>- A user with a stud.noroff.no email may register as a Venue manager.</li>  
      <li>- A registered user may login.</li>  
    </ul>
    <h5>Logged customer-facing features</h5>
     <ul>
      <li>- A registered customer may create a booking at a Venue.</li>
      <li>- A registered customer may view their upcoming bookings.</li>
      <li>- A user with a stud.noroff.no email may register as a Venue manager.</li>
      <li>- A user may view a calendar with available dates for a Venue.</li>
      <li>- A registered user may update their avatar.</li>  
      <li>- A registered user may logout.</li>  
    </ul>
    <h5>Venue manager-facing features</h5>
    <ul>
      <li>- A registered Venue manager may create a Venue.</li>
      <li>- A registered Venue manager may update a Venue they manage.</li>
      <li>- A registered Venue manager may delete a Venue they manage.</li>
      <li>- A registered Venue manager may delete a Venue they manage.</li>
    </li>
    `,
    stackHtml: `
     <h4 class="h5 fw-bold">Technologies stack:</h4>
    <ul>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg" alt="React Bootstrap" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" alt="React Router" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="Type Script" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="Css3" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="Scss" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg" alt="AdobeXD" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="Visual Studio Code" /></span></li>
    </ul>`,
  },
  {
    id: "secondyear-002",
    title: "E-Com",
    description:
      "This project is an eCommerce store built with React, following the requirements set out in the project brief. The store uses an external API (https://v2.api.noroff.dev/online-shop) to fetch product data and allows users to browse products, view individual product details, add items to the cart, and complete the checkout process.",
    image: "pictures/e-com/e-com.jpg",
    tags: [
      "React",
      "React Bootstrap",
      "React Router",
      "Vite",
      "CSS",
      "SCSS",
      "Bootstrap",
      "GitHub",
      "Git",
      "AdobeXD",
      "Visual Studio Code",
    ],
    links: {
      github: "https://github.com/MariuszRozycki/e-com-store-react",
      live: "https://ecom-react-mariusz.netlify.app/",
    },
    detailsHtml: `
    <h4>Goal</h4>
    <ul>
      <li>To demonstrate knowledge of React by building an eCommerce store using the API provided by Noroff.</li>
    </ul>

    <h4>Features</h4>
    <ul>
      <li>Homepage displaying a list of all available products.</li>
      <li>Search bar with live search filtering.</li>
      <li>Product page for individual product details.</li>
      <li>Cart functionality with the ability to add, view, and remove items.</li>
      <li>Checkout flow including a success page with an order confirmation message.</li>
      <li>Contact form with validation.</li>
      <li>Responsive design for both desktop and mobile.</li>
      <li>Clean and well-structured code using modern React features like hooks and React Router.</li>
    </ul>

    <h4>Technologies used:</h4>
    <ul>
      <li><span>React:</span> Core framework for building the front-end.</li>
      <li><span>React Router:</span> For managing page navigation.</li>
      <li><span>Styled-components:</span> Used for styling the components and making the design responsive.</li>
      <li><span>React Toastify:</span> To display notifications for various actions such as successful form submissions and errors.</li>
      <li><span>Fetch API:</span> For making requests to the external API to retrieve product data.</li>
      <li><span>Netlify:</span> For deployment of the live site.</li>
    </ul>

    <h4>Pages</h4>
    <ul>
      <li><span>Homepage:</span> Lists all products fetched from the API and provides a search bar for filtering products by name. Clicking on a product redirects the user to the individual product page.</li>
      <li><span>Product Page:</span> Displays the details of a specific product including its title, description, image, and discounted price (if available). There is an "Add to Cart" button to add products to the cart.</li>
      <li><span>Cart Page:</span> Lists all products added to the cart, displays the total price, and includes a "Checkout" button.</li>
      <li><span>Checkout Success Page:</span> Displays a success message confirming the order and provides a link to return to the homepage. The cart is cleared upon reaching this page.</li>
      <li><span>Contact Page:</span> <br> - Contains a form with validation for the following fields: <br>
      <span class="fw-normal">- Full name (minimum 3 characters)</span> <br>
      <span class="fw-normal">- Subject (minimum 3 characters)</span> <br>
      <span class="fw-normal">- Email (valid email address)</span> <br>
      <span class="fw-normal">- Telephone number</span> <br>
      <span class="fw-normal">- Message body (minimum 3 characters)</span>
      </li>
    <ul>
    `,
    stackHtml: `
    <h4 class="h5 fw-bold">Technologies stack:</h4>
   <ul>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg" alt="React Bootstrap" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" alt="React Router" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="Css3" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="Scss" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg" alt="AdobeXD" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="Visual Studio Code" /></span></li>
   </ul>`,
  },
  {
    id: "secondyear-003",
    title: "Auction house",
    description:
      "An auction site is looking to launch a website where users can add items to be bid on and bid on items other users have put up for auction. When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings. The maximum number of responses from the API is 100. The main page is divided into 10 smaller pages by pagination. Sorting takes place from the newest to the oldest or from the oldest to the newest. The sort contains 100 responses from the API. When searching the listings, we look for 100 API responses. The entered letter, word, searches among the results in titles, descriptions and tags.",
    image: "pictures/auction-house/auction-house.jpg",
    tags: [
      "JavaScript",
      "CSS",
      "Sass",
      "Bootstrap",
      "GitHub",
      "Git",
      "AdobeXD",
      "Visual Studio Code",
    ],
    links: {
      github: "https://github.com/MariuszRozycki/auction-gavel",
      live: "https://genuine-squirrel-c1ec8c.netlify.app/",
    },
    detailsHtml: `
    <h4>Features</h4>
    <ul>
      <li>- A user with a stud.noroff.no email may register.</li>
      <li>- A registered user may login.</li>
      <li>- A registered user may logout.</li>
      <li>- A registered user may update their avatar.</li>
      <li>- A registered user may view their total credit.</li>
      <li>- A registered user may create a Listing with a title, deadline date, media gallery and description.</li>
      <li>- A registered user may add a Bid to another user’s Listing.</li>
      <li>- A registered user may view Bids made on a Listing.</li>
      <li>- An unregistered user may search through Listings.</li>
    </ul>

    <h4>Technical restrictions:</h4>
    <ul>
      <li>Html</li>
      <li>Css</li>
      <li>Scss</li>
      <li>JavaScript</li>
      <li>Bootstrap</li>
      <li>Trello</li>
      <li>AdobeXD</li>
      <li>Deploy on Netlify</li>
    </ul>    
    `,
    stackHtml: `
    <h4 class="h5 fw-bold">Technologies stack:</h4>
   <ul>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="Css3" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="Sass" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg" alt="AdobeXD" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="Visual Studio Code" /></span></li>
   </ul>`,
  },
  {
    id: "firstyear-002",
    title: "Museum of science",
    description:
      "An interactive science museum called the Community Science Museum is opening in your town/city. Its core target audience is primary and middle school children (7-15) and families with young children. The museum wants a website that is informative and appealing, that will attract both middle school pupils and their parents. The site should appeal to youngsters without pandering; it should take for granted that the audience is inquisitive and intelligent. The website should be informative and engaging, but should encourage viewers to visit the museum itself. The website should be responsive and be easy to use on a variety of devices.",
    image: "pictures/museum-of-science/museum-of-science.jpg",
    tags: [
      "JavaScript",
      "CSS",
      "HTML",
      "Git",
      "GitHub",
      "AdobeXD",
      "Visual Studio Code",
    ],
    links: {
      github: "https://github.com/MariuszRozycki/museum-of-science",
      live: "https://wizardly-hugle-cb8551.netlify.app/",
    },
    detailsHtml: `
    <h4>Description</h4>
    <p>I made a website Museum of Science as a study semester project. Site was designed by me and appeals to target audience.
    This is as a first semester project. Project includes design principles, project management, communication technology, and developing with HTML/CSS and basic Java Script. 
    A prototype of the website is made using Adobe XD [link to prototypes](https://xd.adobe.com/view/233a9331-2653-4c76-80d0-bb6d72fadf3d-7669). <br>
    However it was one among of my first study projects, my goal was to design website that I will use it in future as a template.</p> 

  <h4>Requirements of project:</h4>
  <ul>
    <li>- the site has been design that appeals to the target audience</li>
    <li>- Compositional principles, typography, and color schemes are considered</li>
    <li>- HTML is semantic and neatly indented</li>
    <li>- the site uses external CSS style sheets which follow the DRY principle</li>
    <li>- the site takes WCAG principles into consideration, especially regarding hierarchy, navigation, and color usage</li>
    <li>- the site is responsive, attractive, and easy to use on a variety of devices</li>
    <li>- the site shows consideration for content strategy and SEO (used of meta tags and alt text)</li>
  </ul>

  <h4>Summary:</h4>
  <ul>
    <li>- website is mobile responsive and looks good on all screen sizes</li>
    <li>- the HTML is neat and semantic, the CSS is concise and styles aren't duplicated in media queries</li>
    <li>- each page has a unique title, one unique h1, and meta description</li>
    <li>- images are below 200kb and have alt text</li>
    <li>- the site looks good and there's a class in the navigation telling the user which page they're on</li>
    <li>- text lines are kept short</li>
    <li>- the colors have good contrast, the text is easy to read and the site is easy for user's to navigate</li>
  <ul>

  <h4>Built with</h4>
  <ul>
    <li><span>To built this project I used:</span>
    <li>- HTML, CSS, JS,</li>
    <li>- worked with Visual Studio Code,</li>
    <li>- website deployed on Netlify</li>
  <ul>
    `,
    stackHtml: `
    <h4 class="h5 fw-bold">Technologies stack:</h4>
    <ul>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="Css3" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="Html5" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg" alt="AdobeXD" /></span></li>
      <li><span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="Visual Studio Code" /></span></li>
    </ul>`,
  },
];
