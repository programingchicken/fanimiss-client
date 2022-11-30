import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


// import Reviews from './components/Reviews/Review';
// import MakeReviews from './components/Reviews/MakeReview';
// import TopRated from './components/Reviews/TopRated';
import Marketplace from './components/marketplace/MarketplaceSearch';
import MarketplaceItem from './components/marketplace/MarketPage';
import PosterPage from './components/poster/PosterPage1';
import Poster from './components/poster/Poster';
import BuyPage from './components/BuyPage';
// import About from './components/about/AboutUs';
import PosterSmall from './components/poster/PosterSmall';

import Public from './components/Public';
import Menu from './components/Menu';
import NotFound from './components/NotFound';
// import UserSignUp from './components/user/UserSignUp';
// import UserSignIn from './components/user/UserSignIn';
// import UserSignOut from './components/user/UserSignOut';
// import Authenticated from './components/Authenticated';
// import PrivateRoute from './components/PrivateRoute';
import withContext from './components/Context';

// import Header from './components/temps/Header';


const MarketplaceWithContext = withContext(Marketplace);
const MarketplaceItemWithContext = withContext(MarketplaceItem);
const PosterWithContext = withContext(Poster);
const PagePosterWithContext = withContext(PosterPage);
const BuyPageWithContext = withContext(BuyPage);
const PosterSmallWithContext = withContext(PosterSmall);

// const ReviewsWithContext = withContext(Reviews);
// const TopRatedWithContext = withContext(TopRated);
// const MakeReviewsWithContext = withContext(MakeReviews);
// const AboutWithContext = withContext(About);

// const HeaderWithContext = withContext(Header);
// const AuthWithContext = withContext(Authenticated);
// const UserSignUpWithContext = withContext(UserSignUp);
// const UserSignInWithContext = withContext(UserSignIn);
// const UserSignOutWithContext = withContext(UserSignOut);
const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')
function App() {
  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() => {
localStorage.setItem("cart",JSON.stringify(cart));
  }, [cart])

  return(
    <Router>
      <div style={{height: '100%', width: '100%'}}>
        <Switch>
        <Route exact path="/" component={Public} />
        <Route exact path="/menu" component={Menu} />
        {/* <PrivateRoute path="/authenticated" component={AuthWithContext} /> */}


        <Route exact path="/marketplace" component={MarketplaceWithContext} />
        <Route exact path="/marketplace/:id" component={MarketplaceItemWithContext} />
        <Route exact path="/posters/small" component={PosterSmallWithContext} />
        <Route exact path="/posters/:id" component={PagePosterWithContext} />
        <Route exact path="/posters" component={PosterWithContext} />
        <Route exact path="/buypage" component={BuyPageWithContext} />
         {/*
        <Route exact path="/reviews" component={ReviewsWithContext} />
        <Route exact path="/reviews/reviewcom" component={MakeReviewsWithContext} />
        <Route exact path="/reviews/toprated" component={TopRatedWithContext} />
        <Route exact path="/about" component={AboutWithContext} /> */}


        {/* <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signout" component={UserSignOutWithContext} /> */}
        <Route component={NotFound} />
        </Switch>
    </div>
  </Router>
  )
      }

export default App;