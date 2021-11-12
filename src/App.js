import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './page/homepage/homepage.components';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './component/header/header.component';
import { auth, createUserProfileDocument,  } from './firebase/firebase.utils';
import {onSnapshot} from 'firebase/firestore';
import { setCurrentUser } from './redux/user/user.action';
     

class  App extends React.Component {

  unsubscribeFromAUth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAUth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        onSnapshot(userRef, (snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      
      }else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAUth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='shop' element={<ShopPage />} />
          <Route path='/signin' element={ this.props.currentUser ? (<Navigate replace to='/' />) : (<SignInAndSignUpPage />)}/>
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
