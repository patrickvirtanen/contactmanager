import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // componentWillMount() {
  //   console.log("ComponentWillMount");
  // }

  // componentDidUpdate() {
  //   console.log("ComponentdidUpdate");
  // }

  // componentWillUpdate() {
  //   console.log("ComponentWillUpdate");
  // }
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("ComponentdidUpdate");
  // }

  // static getDerivedStateFromProps(nextProps, nextState) {
  //   return {
  //     test: "Something"
  //   };
  // }

  // getSnapshotBeforeUpdate(nextProps, nextState) {
  //   console.log("getSnapshotBeforeUpdate");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
export default Test;
