import React from "react";
class Userclass extends React.Component {
  constructor(props) {
    super(props);
    console.log("🚀 ~ UserclassName ~ constructor ~ props:", props);
    this.state = {};
    console.log("🚀 ~ User ~ constructor ~ state:", this.state);
  }
  componentDidMount() {
    console.log("🚀 ~ User ~ componentDidMount ~ componentDidMount:");
  }
  componentDidUpdate() {
    console.log("🚀 ~ User ~ componentDidUpdate ~ componentDidUpdate:");
  }
  render() {
    console.log("🚀 ~ User ~ render ~ render:");
    const { user } = this.props;
    const { name, email, phone, username } = user;
    console.log("🚀 ~ User ~ render ~ name:", name, email, phone, username);

    const myStyle = {
      maxWidth: "500px",
    };
    return (
      <div className="col-md-4">
        <div className="mb-3 card">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://picsum.photos/200/300"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  Name: {name.firstname + " " + name.lastname}
                </h5>
                <p className="card-text">Email: {email}</p>

                <p className="card-text"> Phone: {phone}</p>
                <p className="card-text">
                  <small className="text-body-secondary">@{username}</small>
                </p>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => {
                    console.log("🚀 ~ User ~ render ~ setState:");
                    this.setState({});
                  }}
                >
                  Increment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Userclass;
