//rafc shrtcut to create component layout
import { React, Component } from "react";
import UserClass from "../UserClass";
import ShimmerCards from "../common/ShimmerCards";
class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    console.log("🚀 ~ AboutUs ~ constructor ~ props:", this.props);
  }
  async componentDidMount() {
    console.log("🚀 ~ AboutUs ~ componentDidMount ~ componentDidMount:");
    const data = await fetch("https://fakestoreapi.com/users");

    const json = await data.json();
    console.log("🚀 ~ fetchData ~ json:", json);
    this.setState({
      users: json,
    });
  }
  componentDidUpdate() {
    console.log("🚀 ~ AboutUs ~ componentDidUpdate ~ componentDidUpdate:");
  }
  render() {
    console.log("🚀 ~ AboutUs ~ render ~ render:");
    console.log("🚀 ~ AboutUs ~ render ~ state:", this.state.users);

    // return this.state.users.length === 0 ? (<ShimmerCards />) : (
    //   <div className="container">
    //     <div className="flex flex-nowarap row">
    //       {this.state.users.map((user) => (
    //         <UserClass key={user.id} user={user} />
    //       ))}
    //     </div>
    //   </div>
    // );
    // return (
    //   <div className="min-h-screen bg-gray-100 text-gray-900">
    //     <header className="bg-primary text-white py-4">
    //       <nav className="container mx-auto flex justify-between items-center">
    //         <h1 className="text-3xl font-bold">My Portfolio</h1>
    //         <ul className="flex space-x-4">
    //           <li><a href="#about" className="hover:text-gray-300">About</a></li>
    //           <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
    //           <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
    //         </ul>
    //       </nav>
    //     </header>
  
    //     <main className="container mx-auto p-6">
    //       <section id="about" className="py-12">
    //         <h2 className="text-4xl font-semibold mb-4">About Me</h2>
    //         <p className="text-lg">Hello! I'm a web developer with experience in React, Tailwind CSS, and more.</p>
    //       </section>
  
    //       <section id="projects" className="py-12">
    //         <h2 className="text-4xl font-semibold mb-4">Projects</h2>
    //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //           {/* Example Project */}
    //           <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
    //             <img src="project-image.jpg" alt="Project" className="w-full h-40 object-cover"/>
    //             <div className="p-4">
    //               <h3 className="text-xl font-bold">Project Title</h3>
    //               <p className="text-gray-700">Brief description of the project.</p>
    //             </div>
    //           </div>
    //           {/* Add more projects here */}
    //         </div>
    //       </section>

    //       <header className="bg-blue-600 text-white p-4">
    //           <div className="container mx-auto text-center">
    //               <h1 className="text-3xl font-bold">My Skills</h1>
    //           </div>
    //       </header>

    //       <section className="container mx-auto p-4">
    //           <section className="mb-8">
    //               <h2 className="text-2xl font-semibold mb-4">Frontend Technologies</h2>
    //               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    //                   <div className="p-4 bg-white shadow-md rounded-lg">
    //                       <h3 className="text-xl font-semibold">HTML</h3>
    //                   </div>
    //                   <div className="p-4 bg-white shadow-md rounded-lg">
    //                       <h3 className="text-xl font-semibold">CSS</h3>
    //                   </div>
    //                   <div className="p-4 bg-white shadow-md rounded-lg">
    //                       <h3 className="text-xl font-semibold">Bootstrap</h3>
    //                   </div>
    //                   <div className="p-4 bg-white shadow-md rounded-lg">
    //                       <h3 className="text-xl font-semibold">Tailwind CSS</h3>
    //                   </div>
    //                   <div className="p-4 bg-white shadow-md rounded-lg">
    //                       <h3 className="text-xl font-semibold">DaisyUI</h3>
    //                   </div>
    //                   <div className="p-4 bg-white shadow-md rounded-lg">
    //                       <h3 className="text-xl font-semibold">React</h3>
    //                   </div>
    //                   <div className="p-4 bg-white shadow-md rounded-lg">
    //                       <h3 className="text-xl font-semibold">Vue.js</h3>
    //                   </div>
    //               </div>
    //           </section>

    //           <section className="mb-8">
    //               <h2 className="text-2xl font-semibold mb-4">Backend Technologies</h2>
    //               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    //                   <div className="p-4 bg-white shadow-md rounded-lg">
    //                       <h3 className="text-xl font-semibold">PHP</h3>
    //                   </div>
    //                   <div className="p-4 bg-white shadow-md rounded-lg">
    //                       <h3 className="text-xl font-semibold">Laravel</h3>
    //                   </div>
    //                   <div className="p-4 bg-white shadow-md rounded-lg">
    //                       <h3 className="text-xl font-semibold">Drupal</h3>
    //                   </div>
    //                   <div className="p-4 bg-white shadow-md rounded-lg">
    //                       <h3 className="text-xl font-semibold">Node.js</h3>
    //                   </div>
    //                   <div className="p-4 bg-white shadow-md rounded-lg">
    //                       <h3 className="text-xl font-semibold">.NET</h3>
    //                   </div>
    //                   <div className="p-4 bg-white shadow-md rounded-lg">
    //                       <h3 className="text-xl font-semibold">Java</h3>
    //                   </div>
    //               </div>
    //           </section>

    //           <section>
    //               <h2 className="text-2xl font-semibold mb-4">Database Technologies</h2>
    //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //                   <div className="p-4 bg-white shadow-md rounded-lg">
    //                       <h3 className="text-xl font-semibold">MySQL</h3>
    //                   </div>
    //               </div>
    //           </section>

    //           <section className="mt-8">
    //               <h2 className="text-2xl font-semibold mb-4">Cloud Services</h2>
    //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //                   <div className="p-4 bg-white shadow-md rounded-lg">
    //                       <h3 className="text-xl font-semibold">AWS</h3>
    //                   </div>
    //                   <div className="p-4 bg-white shadow-md rounded-lg">
    //                       <h3 className="text-xl font-semibold">Azure</h3>
    //                   </div>
    //               </div>
    //           </section>
    //       </section>
  
    //       <section id="contact" className="py-12">
    //         <h2 className="text-4xl font-semibold mb-4">Contact</h2>
    //         <form className="space-y-4">
    //           <div>
    //             <label htmlFor="name" className="block text-sm font-medium">Name</label>
    //             <input type="text" id="name" className="input input-bordered w-full"/>
    //           </div>
    //           <div>
    //             <label htmlFor="email" className="block text-sm font-medium">Email</label>
    //             <input type="email" id="email" className="input input-bordered w-full"/>
    //           </div>
    //           <div>
    //             <label htmlFor="message" className="block text-sm font-medium">Message</label>
    //             <textarea id="message" className="textarea textarea-bordered w-full"></textarea>
    //           </div>
    //           <button type="submit" className="btn btn-primary">Send</button>
    //         </form>
    //       </section>
    //     </main>
  
        
    //   </div>
    // );

    return (
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-blue-600 text-white py-4 shadow-lg">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-4xl font-extrabold">My Portfolio</h1>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-gray-300 transition">About</a></li>
              <li><a href="#projects" className="hover:text-gray-300 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-gray-300 transition">Contact</a></li>
            </ul>
          </nav>
        </header>
  
        <main className="container mx-auto p-6">
          <section id="about" className="py-12">
            <h2 className="text-4xl font-bold mb-4 text-blue-600">About Me</h2>
            <p className="text-lg mb-4">
              Hello! I'm a web developer with experience in React, Tailwind CSS, and more.
              I’m passionate about building engaging user experiences and scalable applications.
            </p>
            <img src="profile-picture.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto border-4 border-blue-600 shadow-lg"/>
          </section>
  
          <section id="projects" className="py-12">
            <h2 className="text-4xl font-bold mb-4 text-blue-600">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example Project */}
              <div className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                <img src="project-image.jpg" alt="Project" className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Project Title</h3>
                  <p className="text-gray-700">Brief description of the project.</p>
                </div>
              </div>
              {/* Add more projects here */}
            </div>
          </section>
  
          <section id="skills" className="py-12">
            <h2 className="text-4xl font-bold mb-4 text-blue-600">My Skills</h2>
            <div className="space-y-12">
              {/* Frontend Technologies */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Frontend Technologies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <div className="p-4 bg-white shadow-md rounded-lg">
                    <h4 className="text-xl font-semibold">HTML</h4>
                  </div>
                  <div className="p-4 bg-white shadow-md rounded-lg">
                    <h4 className="text-xl font-semibold">CSS</h4>
                  </div>
                  <div className="p-4 bg-white shadow-md rounded-lg">
                    <h4 className="text-xl font-semibold">Bootstrap</h4>
                  </div>
                  <div className="p-4 bg-white shadow-md rounded-lg">
                    <h4 className="text-xl font-semibold">Tailwind CSS</h4>
                  </div>
                  <div className="p-4 bg-white shadow-md rounded-lg">
                    <h4 className="text-xl font-semibold">DaisyUI</h4>
                  </div>
                  <div className="p-4 bg-white shadow-md rounded-lg">
                    <h4 className="text-xl font-semibold">React</h4>
                  </div>
                  <div className="p-4 bg-white shadow-md rounded-lg">
                    <h4 className="text-xl font-semibold">Vue.js</h4>
                  </div>
                </div>
              </section>
  
              {/* Backend Technologies */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Backend Technologies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <div className="p-4 bg-white shadow-md rounded-lg">
                    <h4 className="text-xl font-semibold">PHP</h4>
                  </div>
                  <div className="p-4 bg-white shadow-md rounded-lg">
                    <h4 className="text-xl font-semibold">Laravel</h4>
                  </div>
                  <div className="p-4 bg-white shadow-md rounded-lg">
                    <h4 className="text-xl font-semibold">Drupal</h4>
                  </div>
                  <div className="p-4 bg-white shadow-md rounded-lg">
                    <h4 className="text-xl font-semibold">Node.js</h4>
                  </div>
                  <div className="p-4 bg-white shadow-md rounded-lg">
                    <h4 className="text-xl font-semibold">.NET</h4>
                  </div>
                  <div className="p-4 bg-white shadow-md rounded-lg">
                    <h4 className="text-xl font-semibold">Java</h4>
                  </div>
                </div>
              </section>
  
              {/* Database Technologies */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Database Technologies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 bg-white shadow-md rounded-lg">
                    <h4 className="text-xl font-semibold">MySQL</h4>
                  </div>
                </div>
              </section>
  
              {/* Cloud Services */}
              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Cloud Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 bg-white shadow-md rounded-lg">
                    <h4 className="text-xl font-semibold">AWS</h4>
                  </div>
                  <div className="p-4 bg-white shadow-md rounded-lg">
                    <h4 className="text-xl font-semibold">Azure</h4>
                  </div>
                </div>
              </section>
            </div>
          </section>
  
          <section id="contact" className="py-12">
            <h2 className="text-4xl font-bold mb-4 text-blue-600">Contact</h2>
            <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input type="text" id="name" className="input input-bordered w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input type="email" id="email" className="input input-bordered w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea id="message" className="textarea textarea-bordered w-full"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </section>
        </main>
  
        <footer className="bg-blue-600 text-white p-4 text-center">
          <p>&copy; 2024 My Portfolio</p>
        </footer>
      </div>
    );
  }
}

export default AboutUs;
