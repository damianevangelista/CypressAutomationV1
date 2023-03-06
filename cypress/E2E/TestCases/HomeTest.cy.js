import HomePage from "../PagesObjects/HomePage"

describe("Home Page Test cases",()=>{
    beforeEach("", ()=>{
        HomePage.GetUrl();
    })

    
    it("Click on SingUp / Logion Button",()=>{
        HomePage.SignupLogin();
    })
})