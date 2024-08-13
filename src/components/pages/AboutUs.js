//rafc shrtcut to create component layout
import { React, Component } from "react";
import UserClass from "../../components/UserClass";
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
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-primary text-white py-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">My Portfolio</h1>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </header>
  
        <main className="container mx-auto p-6">
          <section id="about" className="py-12">
            <h2 className="text-4xl font-semibold mb-4">About Me</h2>
            <p className="text-lg">Hello! I'm a web developer with experience in React, Tailwind CSS, and more.</p>
          </section>
  
          <section id="projects" className="py-12">
            <h2 className="text-4xl font-semibold mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example Project */}
              <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="project-image.jpg" alt="Project" className="w-full h-40 object-cover"/>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Project Title</h3>
                  <p className="text-gray-700">Brief description of the project.</p>
                </div>
              </div>
              {/* Add more projects here */}
            </div>
          </section>
  
          <section id="contact" className="py-12">
            <h2 className="text-4xl font-semibold mb-4">Contact</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input type="text" id="name" className="input input-bordered w-full"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input type="email" id="email" className="input input-bordered w-full"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea id="message" className="textarea textarea-bordered w-full"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </section>
        </main>
  
        <footer className="bg-primary text-white py-4">
          <div className="container mx-auto text-center">
            &copy; 2024 My Portfolio
          </div>
        </footer>
      </div>
    );
  }
}

export default AboutUs;
