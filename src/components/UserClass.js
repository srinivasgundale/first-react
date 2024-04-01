import React from "react";
class Userclass extends React.Component {
  constructor(props) {
    super(props);
    console.log("🚀 ~ UserclassName ~ constructor ~ props:", props);
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("🚀 ~ User ~ constructor ~ state:", this.state);
  }
  componentDidMount() {
    console.log("🚀 ~ User ~ componentDidMount ~ componentDidMount:");
  }
  render() {
    console.log("🚀 ~ User ~ render ~ render:");

    const { name, email } = this.props;
    const { count, count2 } = this.state;
    const myStyle = {
      maxWidth: "500px",
    };
    return (
      <div className="col-md-4">
        <div className="mb-3 card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="..." className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{email}</p>
                <p className="card-text">Count : {count}</p>
                <p className="card-text">Count2 : {count2}</p>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => {
                    console.log("🚀 ~ User ~ render ~ setState:");
                    this.setState({
                      count: this.state.count + 1,
                      count2: this.state.count2 + 2,
                    });
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
