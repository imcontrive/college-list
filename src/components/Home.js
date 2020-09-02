import React, { Component } from "react";
import { connect } from "react-redux";
import { College } from "./College";
import LoadNext from "./LoadNext";

class Home extends Component {
  state = {
    colleges: [],
    page: 0,
    incrementBy: 10
  };

  componentDidMount() {
    this.incrementNextPage();
  }

  incrementNextPage = () => {
    const { page } = this.state;
    const incrementBy = this.state.incrementBy;
    const nextPage = page + incrementBy;
    const newData =
      (this.props["colleges"].length > 0 &&
        this.props["colleges"].slice(page, nextPage)) ||
      [];
    let prevState = this.state.colleges;
    prevState = [...prevState, ...newData];
    if (nextPage <= this.props["colleges"].length) {
      this.setState({
        colleges: prevState,
        page: nextPage
      });
    }
  };

  render() {
    return (
      <div className="main-wrapper">
        <section className="heading">Colleges in North India</section>
        {this.state.colleges.length > 0 && (
          <LoadNext increment={this.incrementNextPage}>
            <div className="college-lists">
              {this.state.colleges
                ? this.state.colleges.map((college, i) => (
                    <College college={college} key={i + 1} />
                  ))
                : ""}
              <span id="last-scroll-element"></span>
            </div>
          </LoadNext>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.mainReducer;
};

export default connect(mapStateToProps)(Home);
