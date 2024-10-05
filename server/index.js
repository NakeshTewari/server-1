import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

console.log("PORT:", process.env.PORT);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(
        `Server is running at port: http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("Mongodb connection failed!", error);
  });

// nakesh1107
// uMmDtRjSScfIk3oQ
//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

//AIzaSyCBG76uGLMNURon7xhnQ8R-Gs-lxqCZm8s
