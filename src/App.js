import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

class App extends Component {
  handleSubmit = ( e, history, searchInput ) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${ searchInput }`;
    history.push( url );
  };
  render() {
    return (
      <div className="container">
        <PhotoContextProvider>
          <HashRouter basename="/">
            <div className="container mt-0 ">
              <Route
                render={props => (
                  <Header
                    handleSubmit={this.handleSubmit}
                    history={props.history}
                  />
                )}
              />
              <Switch>
              
                <Route path="/beach" render={() => <Item searchTerm="beach" />} />
                <Route path="/bird" render={() => <Item searchTerm="bird" />} />
                <Route path="/food" render={() => <Item searchTerm="food" />} />
                <Route path="/fruit" render={() => <Item searchTerm="fruit" />} />
                <Route path="/world" render={() => <Item searchTerm="world" />} />
                <Route path="/avengers" render={() => <Item searchTerm="avenger" />} />
                <Route path="/india" render={() => <Item searchTerm="india" />} />
                <Route
                  path="/search/:searchInput"
                  render={props => (
                    <Search searchTerm={props.match.params.searchInput} />
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </HashRouter>
        </PhotoContextProvider>
      </div>
    );
  }
}

export default App;
