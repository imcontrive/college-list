import React, { Component } from "react";
import { connect } from "react-redux";
import { College } from "./College";

class Home extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="main-wrapper">
        <section className="heading">Colleges in North India</section>
        <div className="college-lists">
          {this.props.colleges
            ? this.props.colleges.map((college, i) => (
                <College college={college} key={i + 1} />
              ))
            : ""}
          <span id="last-scroll-element"></span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.mainReducer.colleges);
  return state.mainReducer;
};

export default connect(mapStateToProps)(Home);
