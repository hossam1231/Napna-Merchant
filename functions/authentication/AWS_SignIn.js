import React from "react";
import * as AWS from "aws-sdk/global";

var AmazonCognitoIdentity = require("amazon-cognito-identity-js");

const AWS_SignIn = ({ email, password }) => {
	console.log("attempting sign in");

	var authenticationData = {
		Username: email,
		Password: password,
	};
	var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
		authenticationData
	);
	var poolData = {
		UserPoolId: "us-east-1_EdEM6OA8K", // Your user pool id here
		ClientId: "68jfls6f8j10hqqqkpf1t33aj4", // Your client id here
	};
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	var userData = {
		Username: email,
		Pool: userPool,
	};
	var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
	cognitoUser.authenticateUser(authenticationDetails, {
		onSuccess: function (result) {
			var accessToken = result.getAccessToken().getJwtToken();

			//POTENTIAL: Region needs to be set if not already set previously elsewhere.
			AWS.config.region = "Regions.US_EAST_1";

			AWS.config.credentials = new AWS.CognitoIdentityCredentials({
				IdentityPoolId: "us-east-1:7752578d-721c-4b5f-b649-589b9b42af4a", // your identity pool id here
				Logins: {
					// Change the key below according to the specific region your user pool is in.
					"cognito-idp.Regions.US_EAST_1.amazonaws.com/us-east-1_EdEM6OA8K":
						result.getIdToken().getJwtToken(),
				},
			});

			//refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
			AWS.config.credentials.refresh((error) => {
				if (error) {
					console.error(error);
				} else {
					// Instantiate aws sdk service objects now that the credentials have been updated.
					// example: var s3 = new AWS.S3();
					console.log("Successfully logged!");
				}
			});
		},

		onFailure: function (err) {
			alert(err.message || JSON.stringify(err));
		},
	});
};

export default AWS_SignIn;
