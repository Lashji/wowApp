import React, { Component } from "react";
import { OauthReceiver } from "react-oauth-flow";

export default class OauthHandler extends Component {
  handleSuccess = async (accessToken, { response, state }) => {
    console.log("Successfully authorized");
    // await setProfileFromDropbox(accessToken);
    // await redirect(state.from);
  };

  handleError = error => {
    console.error("An error occured");
    console.error(error.message);
  };

  render() {
    return (
      <OauthReceiver
        tokenUrl="https://eu.battle.net/oauth/token"
        clientId={process.env.CLIENT_ID}
        clientSecret={process.env.CLIENT_SECRET}
        onAuthSuccess={this.handleSuccess}
        onAuthError={this.handleError}
        render={({ processing, state, error }) => (
          <div>
            {processing && <p>Authorizing now...</p>}
            {error && (
              <p className="error">An error occured: {error.message}</p>
            )}
          </div>
        )}
      />
    );
  }
}
