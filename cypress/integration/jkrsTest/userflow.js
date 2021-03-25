import openingScreen from "./openingScreen/openingScreen";
import homePage from "./homePage/homePage";
import register from "./register/register";
import logIn from "./logIn/login";
import introduction from "./introduction/introduction";
import iceBreaker from "./iceBreaker/iceBreaker";
import talkingPoints from "./talkingPoints/talkingPoints";
import yourSessions from "./yourSessions/yourSessions";
import signOut from "./signOut/signOut";

openingScreen();
homePage();
register("cypresstest@gmail.com", "Cypress", "Test", "cypresstest");
logIn("cypresstest@gmail.com", "cypresstest");
introduction();
iceBreaker();
talkingPoints();
yourSessions();
signOut();
