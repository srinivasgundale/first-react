import ReactGA from "react-ga4";
import { AtSymbolIcon, PhoneIcon, ChevronRightIcon  } from '@heroicons/react/24/solid';
const Portfolio = () => {
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Portfolio",
  });
  const phoneNumber = "+60102806155";
  const email = "srinivasgundale@gmail.com";
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center py-20 px-">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there :)</h1>
            
            <p className="text-xl mb-6">
              I'm Srinivas Gundali, an Experienced Full Stack Web Developer with over 10 years of
              expertise in Analysis, Design, Development, Integration Testing, and
              Implementation of web-based applications.
            </p>
            <a
            href={`tel:${phoneNumber}`}
            className="btn btn-primary hover:bg-blue-600 transition-colors duration-300 mr-2"
          >
            <PhoneIcon className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${email}`}
            className="btn btn-primary hover:bg-blue-600 transition-colors duration-300"
          >
            <AtSymbolIcon className="h-6 w-6" />
          </a>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 rounded-full p-3 shadow-lg z-50 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
            
          </div>
        </div>
      </div>
      {/* <div className="hero-content text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-4">Srinivas Gundali</h1>
          <p className="text-xl mb-6">
            I'm an Experienced Full Stack Web Developer with over 10 years of
            expertise in Analysis, Design, Development, Integration Testing, and
            Implementation of web-based applications.
          </p>
          <a
            href={`tel:${phoneNumber}`}
            className="btn btn-primary hover:bg-blue-600 transition-colors duration-300 mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </a>
          <a
            href={`mailto:${email}`}
            className="btn btn-primary hover:bg-blue-600 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>
          </a>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 rounded-full p-3 shadow-lg z-50 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div> */}
    </>
  );
};
const ProfileSummary = () => {
  return (
    <section className="p-8 rounded-lg mx-4 my-8">
      <h2 className="text-3xl font-bold text-center mb-6">Profile Summary</h2>
      <ul className="list-disc list-inside space-y-4">
        <li>
          <strong>PHP Frameworks:</strong> Extensive experience with
          CodeIgniter, Laravel, Drupal, and QuickC.
        </li>
        <li>
          <strong>JavaScript Frameworks:</strong> Skilled in using jQuery,
          Vue.js, and React.js.
        </li>
        <li>
          <strong>MVC Architectures:</strong> Proficient in building
          Model-View-Controller architectures.
        </li>
        <li>
          <strong>RESTful Services:</strong> Expertise in developing
          applications using RESTful Web Services.
        </li>
        <li>
          <strong>Database Management:</strong> Proficient with MySQL, RDS, and
          SQL.
        </li>
        <li>
          <strong>AWS Services:</strong> Hands-on experience with EC2, S3,
          CloudFront, Load Balancer, SES, Route 53, RDS, CloudWatch, Lambda, and
          more.
        </li>
        <li>
          <strong>E-Commerce & Logistics:</strong> Extensive experience in
          developing E-Commerce and Logistics web applications.
        </li>
        <li>
          <strong>Requirements & Solutions:</strong> Skilled in capturing
          requirements and implementing solutions effectively.
        </li>
        <li>
          <strong>Team Collaboration:</strong> Experience working with both
          large and small teams for system requirement study, design, and
          development.
        </li>
        <li>
          <strong>Server Hosting:</strong> Knowledgeable in various server
          hosting/domain providers (AWS, Digital Ocean) and LAMP stack
          installation.
        </li>
        <li>
          <strong>Third-Party APIs:</strong> Worked with various APIs such as
          Facebook, Google, YouTube, and OpenAI.
        </li>
        <li>
          <strong>Project Development:</strong> Capable of developing projects
          from scratch and maintaining them efficiently.
        </li>
        <li>
          <strong>Independent Handling:</strong> Proven ability to handle
          projects individually.
        </li>
        <li>
          <strong>Logging Utilities:</strong> Experienced in using log4php and
          Laravel logger for logging utilities.
        </li>
        <li>
          <strong>Research & Development:</strong> Engaged in R&D to learn and
          implement new technologies.
        </li>
        <li>
          <strong>Adaptability:</strong> Fast learner with the ability to adapt
          quickly to new working environments.
        </li>
        <li>
          <strong>Communication & Teamwork:</strong> Possesses good
          communication skills and is an effective team member.
        </li>
      </ul>
      <p className="mt-4">
        <strong>
          {" "}
          With a proven track record of working under tight deadlines and
          delivering high-quality solutions, I am adept at both collaborative
          team environments and independent project handling. My ability to
          adapt and learn quickly ensures that I stay current with the latest
          industry trends and technologies.
        </strong>
      </p>
    </section>
  );
};
const WorkExperience = () => {
  const experiences = [
    {
      company: "Accenture Solutions Sdn Bhd",
      designation: "Digital Platform Arch Assoc Principal",
      tenure: "Nov 2021 – Current",
      location: "Kuala Lumpur, Malaysia",
    },
    {
      company: "Entropia Sdn Bhd",
      designation: "Sr. Associate",
      tenure: "Sep 2019 – Oct 2021",
      location: "Kuala Lumpur, Malaysia",
    },
    {
      company: "Belmont Technologies",
      designation: "Sr. Software Developer",
      tenure: "Jan 2018 – Aug 2019",
      location: "Kuala Lumpur, Malaysia",
    },
    {
      company: "Creative Mantra",
      designation: "Sr. Software Engineer",
      tenure: "Aug 2015 – Dec 2017",
      location: "Mumbai-India",
    },
    {
      company: "Rithisha Information Systems",
      designation: "PHP Developer",
      tenure: "Nov 2013 – Jul 2015",
      location: "Hyderabad-India",
    },
  ];

  return (
    <>
      <section className="p-8 bg-base-100">
        <h2 className="text-4xl font-bold text-center mb-12">
          Work Experience Summary
        </h2>
      <ul className="timeline timeline-vertical">
      {experiences.map((experience, index) => (
        <li key={index}>
          <div className="timeline-start">{experience.tenure}</div>
          <div className="timeline-middle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box transition-transform transform hover:scale-105 duration-300">
          <h3 className="text-2xl font-bold mb-2">
                  {experience.company}
                </h3>
                  <h4 className="text-lg font-semibold mb-1">
                    {experience.designation}
                  </h4>
                  <p className="text-gray-600 mb-1">{experience.tenure}</p>
                  <p className="text-gray-600">{experience.location}</p>
          </div>
          <hr />
        </li>
      ))}
        {/* <li>
          <hr />
          <div className="timeline-start">1998</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">iMac</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start">2001</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">iPod</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start">2007</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">iPhone</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start">2015</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">Apple Watch</div>
        </li> */}
      </ul>
      </section>
      {/* <section className="p-8 bg-base-100">
        <h2 className="text-4xl font-bold text-center mb-12">
          Work Experience Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {experience.company}
                </h3>
                <h4 className="text-lg font-semibold mb-1">
                  {experience.designation}
                </h4>
                <p className="text-gray-600 mb-1">{experience.tenure}</p>
                <p className="text-gray-600">{experience.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </>
  );
};

const SkillsSection = () => {
  const skills = [
    "PHP",
    ".Net",
    "Java",
    "JavaScript",
    "jQuery",
    "React.js",
    "Vue.js",
    "Node.js",
    "Laravel",
    "CodeIgniter",
    "Drupal",
    "MySQL",
    "AWS",
    "Azure",
    "Apache/Nginx",
    "Tailwind CSS",
    "DaisyUI",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
  ];

  return (
    <section className="p-8 bg-neutral to-teal-400 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-neutral-content">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="badge badge-primary text-black-800 py-2 px-6 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

const ProjectExperience = () => {
  const projectExperiences = [
    {
      company: "Accenture",
      projects: [
        {
          image: "https://tm.com.my/themes/custom/tmtheme/img/TM_YNIN.webp",
          title: "Telecom Malaysia",
          // role: "Full Stack Associate Manager",
          // teamSize: 2,
          // technologies: "PHP, HTML, CSS, JavaScript, GoLang, Bootstrap, MySQL, Docker, OpenAI, Dall-E-3",
          url: "#",
        },
        {
          title: "Hartalega NGX",
          image: "https://ngx.hartalega.com.my/static/vectors/logo-combo.svg",
          // role: "Full Stack Associate Manager",
          // teamSize: 2,
          // technologies: "PHP, HTML, CSS, JavaScript, Laravel, Bootstrap, MySQL, Docker, OpenAI, Dall-E-3",
          url: "https://ngx.hartalega.com.my/home",
        },
        {
          title: "Unifi & Unifi Business",
          image: "https://unifi.com.my/themes/unifi/img/newest2022/unifi.svg",
          // role: "Full Stack Associate Manager",
          // teamSize: 2,
          // technologies: "PHP, HTML, CSS, JavaScript, Drupal 9, Bootstrap, MySQL, Docker",
          url: "https://unifi.com.my/",
        },
        {
          title: "Digital Nasional Berhad",
          image:
            "https://www.digital-nasional.com.my/themes/custom/dnb/img/logo/dnb-logo.svg",
          // role: "Full Stack Associate Manager",
          // teamSize: 2,
          // technologies: "PHP, HTML, CSS, JavaScript, Drupal 9, Bootstrap, MySQL, Azure",
          url: "https://www.digital-nasional.com.my/",
        },
        {
          title: "UEM Sunrise",
          image:
            "https://uems.imgix.net/storage/images/2023/07/FYH-Smiley-Logo-RGB.png?auto=compress&fm=webp&ixlib=php-3.3.1",
          // role: "Full Stack Associate Manager",
          // teamSize: 2,
          // technologies: "PHP, HTML, CSS, JavaScript, Drupal 9, Bootstrap, MySQL, Azure",
          url: "https://www.uemsunrise.com/",
        },
        {
          title: "Internal Tools & POC",
          image:
            "https://enkonix.com/api/media/Proof-of-Concept-PoC_RnwOUUo_x1_webp.webp",
          // role: "Full Stack Associate Manager",
          // teamSize: 2,
          // technologies: "PHP, HTML, CSS, JavaScript, Drupal 9, Bootstrap, MySQL, Azure",
          url: "https://www.uemsunrise.com/",
        },
      ],
    },
    {
      company: "Entropia",
      projects: [
        {
          title: "RHB",
          image: "https://www.rhbgroup.com/-/media/Project/RHB/Logo/logo.png",
          // role: "Sr. Associate (Tools Development)",
          // teamSize: 4,
          // technologies: "PHP, HTML, CSS, JavaScript, Laravel, Bootstrap, Vue.js, MySQL, AWS EC2, AWS S3, AWS SES, AWS RDS, AWS Lambda",
          url: "https://www.rhbgroup.com/",
        },
        {
          title: "AIA",
          image:
            "https://www.aia.com.my/content/dam/my-wise/images/system/icons/aia-logo-red.svg",
          // role: "Sr. Associate (Tools Development)",
          // teamSize: 4,
          // technologies: "PHP, HTML, CSS, JavaScript, Laravel, Bootstrap, Vue.js, MySQL, AWS EC2, AWS S3, AWS SES, AWS RDS, AWS Lambda",
          url: "https://www.aia.com.my/",
        },
        {
          title: "Nippon Paint",
          image:
            "https://th.bing.com/th/id/R.bf45af7f38313043e99146ee3517e9d7?rik=VQuyl9MZn9kHVA&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f6102db05a849c40004f9a13c.png&ehk=vg%2fQSN4XfB11%2ffvlD8QL5yKJFruTubV4%2f299n9aQ1wA%3d&risl=&pid=ImgRaw&r=0",
          // role: "Sr. Associate (Tools Development)",
          // teamSize: 4,
          // technologies: "PHP, HTML, CSS, JavaScript, Laravel, Bootstrap, Vue.js, MySQL, AWS EC2, AWS S3, AWS SES, AWS RDS, AWS Lambda",
          url: "https://shoponline.nipponpaint.com.my/",
        },
        {
          title: "Desaru Coast",
          image:
            "https://www.desarucoast.com/destination-resorts/desaru-coast.svg",
          // role: "Sr. Associate (Tools Development)",
          // teamSize: 4,
          // technologies: "PHP, HTML, CSS, JavaScript, Laravel, Bootstrap, Vue.js, MySQL, AWS EC2, AWS S3, AWS SES, AWS RDS, AWS Lambda",
          url: "https://www.desarucoast.com/",
        },
        {
          title: "MDEC Fintech Booster",
          image: "https://mdec.my/static/logo/mdec-logo.png",
          // role: "Sr. Associate (Tools Development)",
          // teamSize: 4,
          // technologies: "PHP, HTML, CSS, JavaScript, Laravel, Bootstrap, Vue.js, MySQL, AWS EC2, AWS S3, AWS SES, AWS RDS, AWS Lambda",
          url: "#",
        },
        {
          title: "Touch Stone (Entropia’s Internal Application)",
          image:
            "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg",
          // role: "Sr. Associate (Tools Development)",
          // teamSize: 4,
          // technologies: "PHP, HTML, CSS, JavaScript, GoLang, Bootstrap, Vue.js, React.js, MySQL, RDS, AWS EC2, AWS S3, AWS SES, AWS RDS, AWS Lambda",
          url: "#",
        },
      ],
    },
    {
      company: "Belmont Technologies",
      projects: [
        {
          title: "Whizzl",
          image:
            "https://www.whizzl.com/wp-content/uploads/2020/08/whizzl-logo13082020.png",
          // role: "Sr. Software Developer",
          // teamSize: 10,
          // technologies: "PHP, HTML, CSS, JavaScript, jQuery, Ajax, Laravel, Bootstrap, wkhtmltopdf, MySQL, AWS, AWS S3, AWS SQS, AWS RDS",
          url: "https://www.whizzl.com/",
        },
      ],
    },
    {
      company: "Creative Mantra",
      projects: [
        {
          title: "TMS Logistics",
          image:
            "https://t-tms.com/wp-content/uploads/2022/05/TMS-Open-File-150x67.png",
          // role: "Sr. Software Engineer",
          // teamSize: 10,
          // technologies: "PHP, HTML, CSS, JavaScript, jQuery, Ajax, Laravel, Bootstrap, Dompdf, MySQL, AWS, AWS S3, AWS SQS, AWS RDS, PayPal",
          url: "https://t-tms.com/",
        },
        {
          title: "Bingo Card Creator",
          image:
            "https://www.bingocardcreator.com/images/bingo-card-creator-logo.svg",
          // role: "Software Engineer",
          // teamSize: 3,
          // technologies: "PHP, HTML, CSS, JavaScript, React.js, jQuery, Ajax, CodeIgniter, Bootstrap, Dompdf, MySQL, PayPal, Stripe, Digital Ocean",
          url: "https://www.bingocardcreator.com/",
        },
        {
          title: "Symmetry Elevators",
          image:
            "https://old.symmetryelevators.com/wp-content/uploads/2017/02/logo.png",
          // role: "Software Engineer",
          // teamSize: 5,
          // technologies: "JavaScript, jQuery, HTML, Bootstrap, CSS, Ajax",
          url: "https://old.symmetryelevators.com/",
        },
      ],
    },
    {
      company: "Rithisha Information Systems",
      projects: [
        {
          title: "Vibloo",
          image:
            "https://drive.usercontent.google.com/download?id=1F6i6oD9HhsPCWXSehS1n6D_-_Q4nmnH6&authuser=0",
          // role: "PHP Developer",
          // teamSize: 3,
          // technologies: "PHP, HTML, CSS, JavaScript, jQuery, Ajax, JSON, log4php, AWS, REST API (Slim framework), QuickC, CodeIgniter, MySQL, PayPal, Social Media API, AWS EC2, AWS SQS, AWS S3, AWS RDS",
          url: "https://vibloo.com",
        },
      ],
    },
  ];

  return (
    <section className="p-8 bg-base-200">
      <h2 className="text-4xl font-bold text-center mb-12">
        Project Experience
      </h2>
      <div className="space-y-12">
        {projectExperiences.map((company, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold text-center mb-8">
              {company.company}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {company.projects.map((project, projIndex) => (
                <div
                  key={projIndex}
                  className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
                >
                  <figure>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 object-fit"
                    />
                  </figure>
                  <div className="card-body p-6">
                    <h2 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h2>
                    {/* <p className="text-gray-600 mb-2">{project.role}</p>
                    <p className="text-gray-600 mb-2">{project.teamSize} team members</p>
                    <p className="text-gray-600 mb-4">Technologies: {project.technologies}</p> */}
                    <div className="card-actions flex justify-end">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary hover:bg-gray-700 transition-colors duration-300"
                      >
                        <ChevronRightIcon className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-neutral p-8 rounded-lg mx-4 my-8">
      <h2 className="text-4xl font-bold mb-4 text-neutral-content">Contact</h2>
      <form className="shadow-lg rounded-lg p-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </section>
  );
};

const AboutUs = () => {
  return (
    <div>
      <Portfolio />
      <ProfileSummary />
      <SkillsSection />
      <WorkExperience />
      <ProjectExperience />
      {/* <Contact /> */}
    </div>
  );
};

export default AboutUs;
