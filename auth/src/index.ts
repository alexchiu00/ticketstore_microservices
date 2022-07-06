import express from "express";
import { currentUserRouter } from "./routes/currentUser";
import { signinRouter } from "./routes/signIn";
import { signoutRouter } from "./routes/signOut";
import { signupRouter } from "./routes/signUp";

const app = express();

app.use(express.json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
