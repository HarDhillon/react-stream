import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    // window refers to the web page, instance is in the page
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '410480857840-uusbssmcugig55qvbkhdsb14v0tdol50.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        // get instance of auth
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        // listen to when state changes so text updates
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  // update state if isSignedIn changes
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }
  // sign in helper method
  onSignIn = () => {
    this.auth.signIn();
  };
  // sign out helper method
  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;

    } else if (this.state.isSignedIn){
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className='google icon' />
          Sign Out
        </button>
      )

    } else {
      return (
        <button onClick={this.onSignIn} className="ui red google button">
          <i className="google icon" />
          Sign in with Google
        </button>
      )
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;