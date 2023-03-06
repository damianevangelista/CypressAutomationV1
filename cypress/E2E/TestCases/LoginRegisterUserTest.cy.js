/// <reference types="cypress" />
import LoginRegisterUserPage from "../PagesObjects/LoginRegisterUserPage"
import HomePage from "../PagesObjects/HomePage"
import AccountCreated from "../PagesObjects/AccountCreatedPage"

describe("Login and Register Test Cases",()=>{

    beforeEach("",()=>{
        HomePage.GetUrl();
        HomePage.SignupLogin();
        cy.fixture("example").then(function(data) {
            this.data = data;
        });
    })

    //Register Test Cases
    it.skip("Register User",function (){
        LoginRegisterUserPage.GetRegisterName(this.data.RegisterName);
        LoginRegisterUserPage.GetRegisterEmail(this.data.RegisterEmail);
        LoginRegisterUserPage.GetRegisterSingUpButton();
        LoginRegisterUserPage.GetRegisterLabel(this.data.RegisterLabel);
        LoginRegisterUserPage.GetMrTitle(this.data.MrTitle);
        LoginRegisterUserPage.GetPassword(this.data.Password);
        LoginRegisterUserPage.GetDateDay(this.data.DateDay);
        LoginRegisterUserPage.GetDateMonth(this.data.DateMonth,this.data.DateMonthValue);
        LoginRegisterUserPage.GetDateYear(this.data.DateYear);
        LoginRegisterUserPage.GetNewLetter(this.data.NewLetter);
        LoginRegisterUserPage.GetSpecialOffer(this.data.SpecialOffer);
        LoginRegisterUserPage.GetAddressInf(this.data.AddressInf);
        LoginRegisterUserPage.GetFirstName(this.data.FirstName);
        LoginRegisterUserPage.GetLastName(this.data.LastName);
        LoginRegisterUserPage.GetCompany(this.data.Company);
        LoginRegisterUserPage.GetAddress(this.data.Address);
        LoginRegisterUserPage.GetAddress2(this.data.Address2);
        LoginRegisterUserPage.GetCountry(this.data.Country);
        LoginRegisterUserPage.GetState(this.data.State);
        LoginRegisterUserPage.GetCity(this.data.City);
        LoginRegisterUserPage.GetZipCode(this.data.ZipCode);
        LoginRegisterUserPage.GetMobilNumber(this.data.MobilNumber);
        LoginRegisterUserPage.GetCreateAccountButton();
        AccountCreated.GetAccountCreted(this.data.AccountCreted);
        AccountCreated.GetCongratulationMessage(this.data.CongratulationMessage);
        AccountCreated.GetOnlineMessage(this.data.OnlineMessage)
        AccountCreated.GetContinueButton();

    })

    it.only('Login Correct', function(){
        LoginRegisterUserPage.GetLoginEmail(this.data.RegisterEmail);
        LoginRegisterUserPage.GetLoginPassword(this.data.Password);
        LoginRegisterUserPage.GetLoginButton();
        HomePage.GetLoggedUser(this.data.LoggedUser)
        HomePage.Logout();
        LoginRegisterUserPage.GetLoginLabel(this.data.LoginLabel);
    })
    

})