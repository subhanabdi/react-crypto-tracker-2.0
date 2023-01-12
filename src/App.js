import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import { initializeApp } from "firebase/app";



const firebaseConfig = {

  apiKey: "AIzaSyDSBYkhbWogxxTA4H9I8k4EP4ddSxFf-xY",

  authDomain: "crypto-hunter-5386b.firebaseapp.com",

  projectId: "crypto-hunter-5386b",

  storageBucket: "crypto-hunter-5386b.appspot.com",

  messagingSenderId: "1093479081366",

  appId: "1:1093479081366:web:6fe73e16865378043ba9b7"

};


const app = initializeApp(firebaseConfig);


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
