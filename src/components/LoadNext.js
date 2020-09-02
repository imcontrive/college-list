import React, { Component } from "react";

export default class LoadNext extends Component {
  componentDidMount() {
    const { increment } = this.props;
    const options = {
      root: null,
      rootMargin: "90px 0px",
      threshold: 0
    };
    const callBack = enteries => {
      if (enteries[0].isIntersecting) {
        this.props.increment();
      }
      return;
    };
    const observer = new IntersectionObserver(callBack, options);
    const target = document.querySelector("#last-scroll-element");

    observer.observe(target);
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
