const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const dotenv = require('dotenv');

dotenv.config();

const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, EMAIL_ADDRESS } = process.env;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'
);

oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN
});

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: EMAIL_ADDRESS,
        accessToken,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
      },
    });

    const tenantName = "Sara Fowler";
    const propertyManagerName = "Tim Burton";
    const tenantUrl = "us9316407.app.rentancy.com";
    const tenantEmail = "Tenant@gmail.com";
    const submitUrl = "Tenant@gmail.com";
    const mailOptions = {
      from: EMAIL_ADDRESS,
      to: 'test@example.com',
      subject: 'Test email from Node.js using OAuth2 authentication',
      text: 'This is a test email, testing out the UI compatibility between different mail services.',
      html: `
        <body style="background-color:#ededed;font-size:16px;font-weight:600;padding:5px 0;font-family:'SF Pro Text',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';">
          <div style="width:720px;margin:50px auto;background-color:#fff;">
            <div style="background-color:#7145DF;padding:20px 30px;">
              <img src="https://com-rentancy-documentsdevus-devus.s3.us-west-2.amazonaws.com/public/properties/03d51480-b7f5-11ed-8bb8-39a7d75406f3/a4cc339ad4b0225b8234220e7857b61b-1678085788472.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZDYPEV35BFFI3P7M%2F20230306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230306T065801Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBrxPiiEPIPHMexT5aOr47DW1bCw4mFD594bSnT12bl6AiBJpfZbeWRF%2B%2BUWLJo9anJ%2Bq1zAps2A3PG3KjeeFtho7CrEBAgQEAAaDDYyNjU2MDExODUyMiIMRWUbGRYyT8SP8nVXKqEEWhd8Pb7H2Bs9iX4XgmWkeoqceUDZPXi5CtrwUrE8bWf9XbQWsFHQ2lHOuIp81JPxONBn9Ek5N4NgTbBHAhRmcGq8Ew2bSdao3tfMw00f5l0xzzbc996LmJt0aGo%2FMpAQcZKF1Zj0bR2H7KSzZ6311HBoyhNwPWaqvnK4s8QykC2Bi26S1Zv0E9vOYKutzbWlqsQ5i0ILyQHjjd0KwokNxis%2FMnIMY13%2B%2FY%2BkzDlrhP1pMnwJGH6AlFco0tauXfyLLWNLlli%2BgStKmpiyvZMz6QOfgc0wEm7el5ke8F2Ya%2BP3tKwdaP8Apo%2Fym3BuaUjIJIM66bi7hsJ%2FyOl6lFFtP1ilzBNlD9Xn6nJsXIApR0BPHLG4MWIAmJ6xZGMBFAxbMnqcaT59ErJ0WKMXkwoc9YQgn1LQxyG7VgaZcB%2FcuCMuA9VydEAgeRRneFEAxEm4EQsUpEawZm7HK6c1OuOsyPk%2FTFXnpxBwGqD2ENu6R4FVKJXOPCyiIOCoq6tKh7VHYuOuyKMcEqa%2FLnipR%2F%2BK9c50NkvOZzosza7SrxBS7C4CTDLh86HDERq8FFbwg%2FMLtEDceYrv4PmVMEZvGmjOiBbOmS2s%2B5SsWSCDfgruInJzkS9KqsEE9IIkprDofhuwe7BsKKOBruoWhKH7PBWRaI2x2QU0ytgVzoQFvvAjpq9ut6Fud2%2FGaOXy%2FvMojanIwNUa1%2FBl1QOtg74Qh0q%2BmNkwrZyWoAY6hgI83RhgqL6cHmHIZRGlpw6Wnw1f9PwcqJ8TF4G%2B52148L%2BIs4FpZLkTaDh1JWTIrBVO2FpspnUY3sKtCypVG9rcKQTYjdoyTBvRvx8DXI5CKZbJSf%2FbKTelGONXvz3w%2FWKqNKHRPrHFFeKqq4U3b%2FIMONygvpy879thFY9uu%2FYilzxaoOnEFDMKmGNEHW1fc3vAPR84WfNaVhZZW6QSbTd3e%2BJDpbgPKtig2q0Z7XiHLQq8cJ4vqAIJgkUzEj%2F4LL6LGB3Czr%2FqKuC2uWeHiTi%2FSNiaTMrRlKHjAJfOd4Y%2Bl1WwxhuyAzISFrr0D90Z2haOHAcaFxV9jKBUscyytDI6Ievd8ZNT&X-Amz-Signature=8f434714e1e1dd3ba99b76ce004db65344c0a5de2dfe06620ad2ab23742c9a83&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.6.1%20os%2FWindows%2FNT_10.0%20lang%2Fjs%20md%2Fbrowser%2FChrome_110.0.0.0%20api%2Fs3%2F3.6.1%20aws-amplify%2F4.5.3_js&x-id=GetObject" alt="rentancy-logo">
            </div>
            <div style="text-align:center;">
              <h1 style="margin-top:50px;font-size:18px;color:#202437;">Your Tenant Portal is Ready!</h1>
              <p style="margin-block:20px 44px;color:#515666;">Hi ${tenantName}, ${propertyManagerName} has invited you to join your tenant portal.</p>
              <p style="margin:45px 0 0 0;color:#515666;">Your Account URL</p>
              <p style="background-color:#f1f3ff;padding:20px 0;text-align:center;border-radius:6px;margin:20px auto 40px;width:600px;font-weight:600;">
                <span style="position:relative;top:4px;"><img width="20px" height="20px" src="https://com-rentancy-documentsdevus-devus.s3.us-west-2.amazonaws.com/public/properties/03d51480-b7f5-11ed-8bb8-39a7d75406f3/160f30e9507e532a37e9b2287163bef1-1678085788470.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZDYPEV35BFFI3P7M%2F20230306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230306T065930Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBrxPiiEPIPHMexT5aOr47DW1bCw4mFD594bSnT12bl6AiBJpfZbeWRF%2B%2BUWLJo9anJ%2Bq1zAps2A3PG3KjeeFtho7CrEBAgQEAAaDDYyNjU2MDExODUyMiIMRWUbGRYyT8SP8nVXKqEEWhd8Pb7H2Bs9iX4XgmWkeoqceUDZPXi5CtrwUrE8bWf9XbQWsFHQ2lHOuIp81JPxONBn9Ek5N4NgTbBHAhRmcGq8Ew2bSdao3tfMw00f5l0xzzbc996LmJt0aGo%2FMpAQcZKF1Zj0bR2H7KSzZ6311HBoyhNwPWaqvnK4s8QykC2Bi26S1Zv0E9vOYKutzbWlqsQ5i0ILyQHjjd0KwokNxis%2FMnIMY13%2B%2FY%2BkzDlrhP1pMnwJGH6AlFco0tauXfyLLWNLlli%2BgStKmpiyvZMz6QOfgc0wEm7el5ke8F2Ya%2BP3tKwdaP8Apo%2Fym3BuaUjIJIM66bi7hsJ%2FyOl6lFFtP1ilzBNlD9Xn6nJsXIApR0BPHLG4MWIAmJ6xZGMBFAxbMnqcaT59ErJ0WKMXkwoc9YQgn1LQxyG7VgaZcB%2FcuCMuA9VydEAgeRRneFEAxEm4EQsUpEawZm7HK6c1OuOsyPk%2FTFXnpxBwGqD2ENu6R4FVKJXOPCyiIOCoq6tKh7VHYuOuyKMcEqa%2FLnipR%2F%2BK9c50NkvOZzosza7SrxBS7C4CTDLh86HDERq8FFbwg%2FMLtEDceYrv4PmVMEZvGmjOiBbOmS2s%2B5SsWSCDfgruInJzkS9KqsEE9IIkprDofhuwe7BsKKOBruoWhKH7PBWRaI2x2QU0ytgVzoQFvvAjpq9ut6Fud2%2FGaOXy%2FvMojanIwNUa1%2FBl1QOtg74Qh0q%2BmNkwrZyWoAY6hgI83RhgqL6cHmHIZRGlpw6Wnw1f9PwcqJ8TF4G%2B52148L%2BIs4FpZLkTaDh1JWTIrBVO2FpspnUY3sKtCypVG9rcKQTYjdoyTBvRvx8DXI5CKZbJSf%2FbKTelGONXvz3w%2FWKqNKHRPrHFFeKqq4U3b%2FIMONygvpy879thFY9uu%2FYilzxaoOnEFDMKmGNEHW1fc3vAPR84WfNaVhZZW6QSbTd3e%2BJDpbgPKtig2q0Z7XiHLQq8cJ4vqAIJgkUzEj%2F4LL6LGB3Czr%2FqKuC2uWeHiTi%2FSNiaTMrRlKHjAJfOd4Y%2Bl1WwxhuyAzISFrr0D90Z2haOHAcaFxV9jKBUscyytDI6Ievd8ZNT&X-Amz-Signature=4ffe313a95719acc2aeff8a0c8ef3c86754d43fc951c4975821e112125d40fa7&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.6.1%20os%2FWindows%2FNT_10.0%20lang%2Fjs%20md%2Fbrowser%2FChrome_110.0.0.0%20api%2Fs3%2F3.6.1%20aws-amplify%2F4.5.3_js&x-id=GetObject" alt="tenant-link-icon"></span>
                <a style="font-size:18px;font-weight:600;margin-left:10px;color:#202437;text-decoration:none;" href=${tenantUrl}>${tenantUrl}</a>
              </p>
              <p style="margin:0;color:#515666;">Login Email</p>
              <p style="background-color:#f1f3ff;padding:20px 0;text-align:center;border-radius:6px;margin:20px auto 40px;width:600px;font-weight:600;">
                <img  width="20px" height="20px" src="https://com-rentancy-documentsdevus-devus.s3.us-west-2.amazonaws.com/public/properties/03d51480-b7f5-11ed-8bb8-39a7d75406f3/9183c7c6e2feb9fa6bcb0d453ae63c60-1678085788472.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZDYPEV35BFFI3P7M%2F20230306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230306T070012Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIBrxPiiEPIPHMexT5aOr47DW1bCw4mFD594bSnT12bl6AiBJpfZbeWRF%2B%2BUWLJo9anJ%2Bq1zAps2A3PG3KjeeFtho7CrEBAgQEAAaDDYyNjU2MDExODUyMiIMRWUbGRYyT8SP8nVXKqEEWhd8Pb7H2Bs9iX4XgmWkeoqceUDZPXi5CtrwUrE8bWf9XbQWsFHQ2lHOuIp81JPxONBn9Ek5N4NgTbBHAhRmcGq8Ew2bSdao3tfMw00f5l0xzzbc996LmJt0aGo%2FMpAQcZKF1Zj0bR2H7KSzZ6311HBoyhNwPWaqvnK4s8QykC2Bi26S1Zv0E9vOYKutzbWlqsQ5i0ILyQHjjd0KwokNxis%2FMnIMY13%2B%2FY%2BkzDlrhP1pMnwJGH6AlFco0tauXfyLLWNLlli%2BgStKmpiyvZMz6QOfgc0wEm7el5ke8F2Ya%2BP3tKwdaP8Apo%2Fym3BuaUjIJIM66bi7hsJ%2FyOl6lFFtP1ilzBNlD9Xn6nJsXIApR0BPHLG4MWIAmJ6xZGMBFAxbMnqcaT59ErJ0WKMXkwoc9YQgn1LQxyG7VgaZcB%2FcuCMuA9VydEAgeRRneFEAxEm4EQsUpEawZm7HK6c1OuOsyPk%2FTFXnpxBwGqD2ENu6R4FVKJXOPCyiIOCoq6tKh7VHYuOuyKMcEqa%2FLnipR%2F%2BK9c50NkvOZzosza7SrxBS7C4CTDLh86HDERq8FFbwg%2FMLtEDceYrv4PmVMEZvGmjOiBbOmS2s%2B5SsWSCDfgruInJzkS9KqsEE9IIkprDofhuwe7BsKKOBruoWhKH7PBWRaI2x2QU0ytgVzoQFvvAjpq9ut6Fud2%2FGaOXy%2FvMojanIwNUa1%2FBl1QOtg74Qh0q%2BmNkwrZyWoAY6hgI83RhgqL6cHmHIZRGlpw6Wnw1f9PwcqJ8TF4G%2B52148L%2BIs4FpZLkTaDh1JWTIrBVO2FpspnUY3sKtCypVG9rcKQTYjdoyTBvRvx8DXI5CKZbJSf%2FbKTelGONXvz3w%2FWKqNKHRPrHFFeKqq4U3b%2FIMONygvpy879thFY9uu%2FYilzxaoOnEFDMKmGNEHW1fc3vAPR84WfNaVhZZW6QSbTd3e%2BJDpbgPKtig2q0Z7XiHLQq8cJ4vqAIJgkUzEj%2F4LL6LGB3Czr%2FqKuC2uWeHiTi%2FSNiaTMrRlKHjAJfOd4Y%2Bl1WwxhuyAzISFrr0D90Z2haOHAcaFxV9jKBUscyytDI6Ievd8ZNT&X-Amz-Signature=5dd979894a8a94554cb2bbfb1d48536aabd0eb4f9cfc44107cfe4edd5cabb0ba&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.6.1%20os%2FWindows%2FNT_10.0%20lang%2Fjs%20md%2Fbrowser%2FChrome_110.0.0.0%20api%2Fs3%2F3.6.1%20aws-amplify%2F4.5.3_js&x-id=GetObject" alt="tenant-email-icon">
                <a style="font-size:18px;font-weight:600;margin-left:10px;color:#202437;text-decoration:none;" href=${tenantEmail}>${tenantEmail}</a>
              </p>
              <button style="padding:15px 50px;color:#fff;background-color:#7145DF;border-radius:64px;border:none;">
                <a style="font-size:16px;font-weight:700;color:#fff;text-decoration:none;" href=${submitUrl}>
                  Accept Invitation
                </a>
              </button>
              <div style="background-color:#f8f8ff;width:100%;margin-top:50px;padding:30px 0;font-size:14px;font-weight:400;color:#515666;">
                <span>©2020 Rentancy Ltd</span>
              </div>
            </div>
          </div>
        </body>
      `
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', result);
  } catch (error) {
    console.error(error);
  }
}

sendMail();