import * as dotenv from "dotenv";
dotenv.config();
import app from "./server";

app.listen(7070, () => {
  console.log(`Hello on  http://localhost:${7070}`);
});
