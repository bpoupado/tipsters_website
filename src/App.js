import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component.jsx';
import Footer from './components/footer/footer.component.jsx';

import News from './pages/news/news.component.jsx';
import Tips from './pages/tips/tips.component.jsx';
import NewsDetails from './pages/news-details/news-details.component.jsx';
import TipDetails from './pages/tip-details/tip-details.component.jsx';
import About from './pages/about/about.component.jsx';
import Homepage from './pages/homepage/homepage.component.jsx';
import Error404 from './pages/error-pages/error-404.component';

// import { CardList } from './components/card-list/card-list.component.jsx';

import './app.styles.scss';

// import axios from 'axios';

// const bearer = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiY2RlNjUyNDU3OWIzZDA4ODQxYzM5ODZhMzY1MDAyYjA3OTIyOWRkMGE1YmU4MDI4ZjlmNzYxZDU3Y2ZlZTk0M2UyNGE0ZThmZTk4ZDZhNGYiLCJpYXQiOiIxNjE2NzA3MTIzLjcyMzUxMSIsIm5iZiI6IjE2MTY3MDcxMjMuNzIzNTE3IiwiZXhwIjoiMTY0ODI0MzEyMy42NTgzNjkiLCJzdWIiOiIyNjIiLCJzY29wZXMiOltdfQ.RBD8-JWVN0DRhtAIcgfd0zmfdgqcdKFgnjTPv4RxTU5a8-uUeLmfoouyw9SfGiNIgZZ2s_dV9qi88H_UYZRdjwlFy3x_v1u3PBwuH6FjPtQj_HA_xSjH8NJwRGQTTTRHp9-VRk-iC0z2ejz3oySfKkIIQkitSMkt31UHoHvnxFKEupPk_AFbuaNCJv-N5LmJHFvsfx9B4pJVz5VF2QcQwR0Lz3wq11nJkI1fQ-wlQqJ_eP4ygQo3mcHj_zbDixdFae7a39lGCK6F1J93gXgauP0vKfM8Z4o0Jo5eFyXeU1Y1w48BxTvUxLmMjgJNaCOKjIX7W37A-8wgIe-gmY0FByUib-aGUyjDnLP0PNL2M84ZiRUpzAZik-jR0EwFnOyktBxLY4mRYHU97FQA9WmjlPvRAnhYbL0-gBQP3ONc-tO0rbZ2vAtU6Mn3m47NSLNDh10vusPT9Cl9y-lqfRP3NxH-thvJdFT1L9WH2rjcYy5gF09eACwIi9533Kp7JRpQ2lXg6YelbgpIKGmIgYogU-ZwphXwILMKcueh8HxTHq_LOhRZ1Azwmj53Oa5Xjil0pTJCJYNltqOvDVDdoZ9-3lfLZsJS-d6jAPA0Uviexz0ibge7wv2TIoFznZ2WhJPhToPzwbaIWJm-OUek4OKO20g8xHuf_L9CVFbVjcckKa4';
// const config = {
//   headers: { Authorization: `Bearer ${bearer}` }
// };


class App extends Component {
  // constructor(){
  //   super();
  // }

  state = {
    teams: [],
    tournament: [],
    loading: true
  }


  // componentDidMount() {
  //     axios.get(`https://placar365.com/api/tournaments/soccer/primeira-liga`, config)
  //     .then(tournament_data => {
  //       const tournament = tournament_data.data['data'];
  //       console.log(tournament);
  //       this.setState({ tournament: tournament });

  //       axios.get(`https://placar365.com/api/seasons/soccer/primeira-liga-2122/standings`, config)
  //       .then(teams_data => {
  //         const teams = teams_data.data['data'];

  //         console.log(teams);
  //         this.setState({ teams: teams });

  //         const el = document.querySelector(".loader-container");
  //         if (el) {
  //           el.remove();  // removing the spinner element
  //           this.setState({ loading: false }); // showing the app
  //         }
  //     })
  //   })
  // }

  render() {

    return(
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/news" exact component={ News } />
          <Route path="/news/:id" component={ NewsDetails } />
          <Route path="/tips" exact component={ Tips } />
          <Route path="/tip/:id" exact component={ TipDetails } />
          <Route path="/about" exact component={ About } />
          <Route path="/error404" exact component={Error404} />
          <Route path="*" component={Error404} />
        </Switch>
        <Footer/>
      </Router>
    )


    // if(!this.state.loading){
    //   return (
    //     <div>
    //       <CardList teams={ this.state.teams } tournament={ this.state.tournament } />
    //     </div>
    //   )
    // }else{
    //   return ('');
    // }
  }
}
export default App;