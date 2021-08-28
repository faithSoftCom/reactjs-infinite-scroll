import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 50,
  width: 50,
  border: "5px solid green",
  margin: 6,
  padding: 8
};

class App extends React.Component {
  state = {
    items: Array.from({ length: 10 })
  };

  fetchMoreData = () => {
    if(this.state.items.length >= 100)
    {
      return
    }
    // a fake async api call like which sends
    // 10 more records in 2.5 secs
    setTimeout(() => { 
      this.setState({
          items: this.state.items.concat(Array.from({ length: 10 }))        
      });
    }, 2500);
  };


  render() {
    return (
      <div>
        <h1>reactjs-infinite-scroll</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
        >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              {index+1}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
