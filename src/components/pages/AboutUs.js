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

    return this.state.users.length === 0 ? (<ShimmerCards />) : (
      <div className="container">
        <div className="flex flex-nowarap row">
          {this.state.users.map((user) => (
            <UserClass key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

export default AboutUs;
