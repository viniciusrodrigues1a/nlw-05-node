import express from "express";
import {createServer} from "http";
import path from "path";
import {Server, Socket} from "socket.io";
import "./database";
import {routes} from "./routes";

const app = express();

const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));
app.set("views", publicPath);
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
})

const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id);
})

app.use(express.json());
app.use(routes);

export { http, io };
