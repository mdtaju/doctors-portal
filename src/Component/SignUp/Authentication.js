import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../FirebaseConfig';
import { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


export const PrivateRoute = ({ children, ...rest }) => {
    const auth = AuthChange();
      return (
          <Route
            {...rest}
            render={({ location }) =>
              auth !== null ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: "/signup",
                    state: { from: location }
                  }}
                />
              )
            }
          />
      );
  }

  export const AuthChange = () => {
    const [UserInfo, setUserInfo] = useState();
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            const information = {name: user.displayName, email: user.email, emailVary: user.emailVerified, photo: user.photoURL}
            setUserInfo(information);
        } else {
            setUserInfo(null)
        }
    });
    }, [])
    return UserInfo;
}


const Authentication = () => {
    const CreatNewAccount = (CreatUser, SetCreatUser) => {
        firebase.auth().createUserWithEmailAndPassword(CreatUser.email, CreatUser.password)
        .then(() => {
            firebase.auth().currentUser.updateProfile({
                displayName: CreatUser.name
            })
            .then(() => {
                window.location.pathname = '/appointment'
            })
        })
        .catch((err) => {
            const GetUser = {
                ...CreatUser
            }
            GetUser.error = err.message
            SetCreatUser(GetUser)
        });
    }

    const SignInAuthUser = (User, SetUser) => {
        firebase.auth().signInWithEmailAndPassword(User.email, User.password)
        .then(() => {
            window.location.pathname = '/appointment'
        })
        .catch((err) => {
            const getUser = {
                ...User
            }
            getUser.error = err.message;
            SetUser(getUser);
        });
    }

    const SignOutAccount = () => {
            firebase.auth().signOut().then(function() {
                if (window.location.pathname !== '/') {
                    window.location.pathname = '/'
                }
            })
    }

    const SignInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            window.location.pathname = 'appointment'
        })
    }

    return {
        CreatNewAccount,
        SignInAuthUser,
        SignOutAccount,
        SignInWithGoogle
    }
};

export default Authentication;