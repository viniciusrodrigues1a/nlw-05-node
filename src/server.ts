import { http } from "./http";
import "./websocket/client";

const port = 3333;
http.listen(port, () => console.log(`Server is running on port ${port}`));

