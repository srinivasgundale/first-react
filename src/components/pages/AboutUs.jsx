import React from "react";

const Portfolio = () => {
  return (
    <section className="hero min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
      <div className="hero-content text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-4">Srinivas Gundali</h1>
          <p className="text-xl mb-6">
            I'm an Experienced Full Stack Web Developer with over 10 years of expertise in Analysis, Design, Development, Integration Testing, and Implementation of web-based applications.
          </p>
          <button className="btn btn-primary hover:bg-blue-600 transition-colors duration-300">Contact Me</button>
        </div>
      </div>
    </section>
  );
};
const ProfileSummary = () => {
  return (
    <section className="p-8 rounded-lg mx-4 my-8">
      <h2 className="text-3xl font-bold text-center mb-6">Profile Summary</h2>
      <ul className="list-disc list-inside space-y-4">
        <li><strong>PHP Frameworks:</strong> Extensive experience with CodeIgniter, Laravel, Drupal, and QuickC.</li>
        <li><strong>JavaScript Frameworks:</strong> Skilled in using jQuery, Vue.js, and ReactJs.</li>
        <li><strong>MVC Architectures:</strong> Proficient in building Model-View-Controller architectures.</li>
        <li><strong>RESTful Services:</strong> Expertise in developing applications using RESTful Web Services.</li>
        <li><strong>Database Management:</strong> Proficient with MySQL, RDS, and SQL.</li>
        <li><strong>AWS Services:</strong> Hands-on experience with EC2, S3, CloudFront, Load Balancer, SES, Route 53, RDS, CloudWatch, Lambda, and more.</li>
        <li><strong>E-Commerce & Logistics:</strong> Extensive experience in developing E-Commerce and Logistics web applications.</li>
        <li><strong>Requirements & Solutions:</strong> Skilled in capturing requirements and implementing solutions effectively.</li>
        <li><strong>Team Collaboration:</strong> Experience working with both large and small teams for system requirement study, design, and development.</li>
        <li><strong>Server Hosting:</strong> Knowledgeable in various server hosting/domain providers (AWS, Digital Ocean) and LAMP stack installation.</li>
        <li><strong>Third-Party APIs:</strong> Worked with various APIs such as Facebook, Google, YouTube, and OpenAI.</li>
        <li><strong>Project Development:</strong> Capable of developing projects from scratch and maintaining them efficiently.</li>
        <li><strong>Independent Handling:</strong> Proven ability to handle projects individually.</li>
        <li><strong>Logging Utilities:</strong> Experienced in using log4php and Laravel logger for logging utilities.</li>
        <li><strong>Research & Development:</strong> Engaged in R&D to learn and implement new technologies.</li>
        <li><strong>Adaptability:</strong> Fast learner with the ability to adapt quickly to new working environments.</li>
        <li><strong>Communication & Teamwork:</strong> Possesses good communication skills and is an effective team member.</li>
      </ul>
      <p className="mt-4" >
      <strong> With a proven track record of working under tight deadlines and delivering high-quality solutions, I am adept at both collaborative team environments and independent project handling. My ability to adapt and learn quickly ensures that I stay current with the latest industry trends and technologies.</strong>
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
    <section className="p-8 bg-base-100">
      <h2 className="text-4xl font-bold text-center mb-12">Work Experience Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((experience, index) => (
          <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{experience.company}</h3>
              <h4 className="text-lg font-semibold mb-1">{experience.designation}</h4>
              <p className="text-gray-600 mb-1">{experience.tenure}</p>
              <p className="text-gray-600">{experience.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
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
      <h2 className="text-4xl font-bold text-center mb-12 text-neutral-content">Skills</h2>
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
          role: "Full Stack Associate Manager",
          teamSize: 2,
          technologies: "PHP, HTML, CSS, JavaScript, GoLang, Bootstrap, MySQL, Docker, OpenAI, Dall-E-3",
          url: "#"
        },
        {
          title: "Hartalega NGX",
          image: "https://ngx.hartalega.com.my/static/vectors/logo-combo.svg",
          role: "Full Stack Associate Manager",
          teamSize: 2,
          technologies: "PHP, HTML, CSS, JavaScript, Laravel, Bootstrap, MySQL, Docker, OpenAI, Dall-E-3",
          url: "https://hartalega.ngx"
        },
        {
          title: "Unifi & Unifi Business",
          image: "https://unifi.com.my/themes/unifi/img/newest2022/unifi.svg",
          role: "Full Stack Associate Manager",
          teamSize: 2,
          technologies: "PHP, HTML, CSS, JavaScript, Drupal 9, Bootstrap, MySQL, Docker",
          url: "https://unifi.unifi-business"
        },
        {
          title: "Digital Nasional Berhad",
          image: "https://www.digital-nasional.com.my/themes/custom/dnb/img/logo/dnb-logo.svg",
          role: "Full Stack Associate Manager",
          teamSize: 2,
          technologies: "PHP, HTML, CSS, JavaScript, Drupal 9, Bootstrap, MySQL, Azure",
          url: "https://digital-nasional-berhad"
        },
      ]
    },
    {
      company: "Entropia",
      projects: [
        {
          title: "MDEC Fintech Booster",
          image: "https://mdec.my/static/logo/mdec-logo.png",
          role: "Sr. Associate (Tools Development)",
          teamSize: 4,
          technologies: "PHP, HTML, CSS, JavaScript, Laravel, Bootstrap, Vue.js, MySQL, AWS EC2, AWS S3, AWS SES, AWS RDS, AWS Lambda",
          url: "https://mdec-fintech-booster"
        },
        {
          title: "Touch Stone (Entropia’s Internal Application)",
          image: "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg",
          role: "Sr. Associate (Tools Development)",
          teamSize: 4,
          technologies: "PHP, HTML, CSS, JavaScript, GoLang, Bootstrap, Vue.js, MySQL, RDS, AWS EC2, AWS S3, AWS SES, AWS RDS, AWS Lambda",
          url: "https://touch-stone"
        }
      ]
    },
    {
      company: "Belmont Technologies",
      projects: [
        {
          title: "Whizzl",
          image: "https://www.whizzl.com/wp-content/uploads/2020/08/whizzl-logo13082020.png",
          role: "Sr. Software Developer",
          teamSize: 10,
          technologies: "PHP, HTML, CSS, JavaScript, jQuery, Ajax, Laravel, Bootstrap, wkhtmltopdf, MySQL, AWS, AWS S3, AWS SQS, AWS RDS",
          url: "https://whizzl"
        }
      ]
    },
    {
      company: "Creative Mantra",
      projects: [
        {
          title: "TMS Logistics",
          role: "Sr. Software Engineer",
          teamSize: 10,
          technologies: "PHP, HTML, CSS, JavaScript, jQuery, Ajax, Laravel, Bootstrap, Dompdf, MySQL, AWS, AWS S3, AWS SQS, AWS RDS, PayPal",
          url: "https://tms-logistics"
        },
        {
          title: "Bingo Card Creator",
          role: "Software Engineer",
          teamSize: 3,
          technologies: "PHP, HTML, CSS, JavaScript, jQuery, Ajax, CodeIgniter, Bootstrap, Dompdf, MySQL, PayPal, Stripe, Digital Ocean",
          url: "https://bingo-card-creator"
        },
        {
          title: "Symmetry Elevators",
          role: "Software Engineer",
          teamSize: 5,
          technologies: "JavaScript, jQuery, HTML, Bootstrap, CSS, Ajax",
          url: "https://symmetry-elevators"
        }
      ]
    },
    {
      company: "Rithisha Information Systems",
      projects: [
        {
          title: "Vibloo",
          role: "PHP Developer",
          teamSize: 3,
          technologies: "PHP, HTML, CSS, JavaScript, jQuery, Ajax, JSON, log4php, AWS, REST API (Slim framework), QuickC, CodeIgniter, MySQL, PayPal, Social Media API, AWS EC2, AWS SQS, AWS S3, AWS RDS",
          url: "https://vibloo"
        }
      ]
    }
  ];

  return (
    <section className="p-8 bg-gray-200">
      <h2 className="text-4xl font-bold text-center mb-12">Project Experience</h2>
      <div className="space-y-12">
        {projectExperiences.map((company, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold text-center mb-8">{company.company}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {company.projects.map((project, projIndex) => (
                <div key={projIndex} className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                  <figure>
                    <img src={project.image} alt={project.title} className="w-full h-32 object-cover" />
                  </figure>
                  <div className="card-body p-6">
                    <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                    <p className="text-gray-600 mb-2">{project.role}</p>
                    <p className="text-gray-600 mb-2">{project.teamSize} team members</p>
                    <p className="text-gray-600 mb-4">Technologies: {project.technologies}</p>
                    <div className="card-actions flex justify-end">
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary hover:bg-gray-700 transition-colors duration-300">
                        View Project
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

const AboutUs = () => {
  return (
    <div>
      <Portfolio />
      <ProfileSummary />
      <SkillsSection />
      <WorkExperience />
      <ProjectExperience />
    </div>
  );
};

export default AboutUs;
