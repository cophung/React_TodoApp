const functions = require("firebase-functions");
const app = require("express")();
const cors = require("cors");

const {
  getAllTodos,
  getOneTodo,
  postOneTodo,
  deleteTodo,
  editTodo,
} = require("./APIs/todos");

const {
  loginUser,
  signUpUser,
  uploadProfilePhoto,
  getUserDetail,
  updateUserDetails,
} = require("./APIs/users");

const auth = require("./util/auth");

app.use(cors({ origin: true }));

app.get("/todos", auth, getAllTodos);
app.get("/todos/:todoId", auth, getOneTodo);
app.post("/todo", auth, postOneTodo);
app.delete("/todo/:todoId", auth, deleteTodo);
app.put("/todo/:todoId", auth, editTodo);

app.post("/login", loginUser);
app.post("/signup", signUpUser);

app.post("/user/image", auth, uploadProfilePhoto);
app.get("/user", auth, getUserDetail);
app.post("/user", auth, updateUserDetails);

exports.api = functions.https.onRequest(app);
