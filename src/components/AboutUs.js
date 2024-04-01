//rafc shrtcut to create component layout
import { React, Component } from "react";
import UserClass from "./../components/UserClass";
class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log("🚀 ~ AboutUs ~ constructor ~ props:", this.props);
  }
  componentDidMount() {
    console.log("🚀 ~ AboutUs ~ componentDidMount ~ componentDidMount:");
  }
  render() {
    console.log("🚀 ~ AboutUs ~ render ~ render:");

    return (
      <div className="container">
        <div className="flex flex-nowarap row">
          <UserClass name="sri" email="s@gm.com" />
          <UserClass name="sri1" email="s1@gm.com" />
          <UserClass name="sri2" email="s2@gm.com" />
        </div>
      </div>
    );
  }
}

export default AboutUs;
