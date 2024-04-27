import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// array of objects
let posts = [];
//creating form handler
let add = false;
//editor form handler
let editMode = false;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts, editMode:false, add: false});
});

app.get("/bed", (req, res) => {
    res.render("bed.ejs")
})

app.get("/view", (req, res) => {
  res.render("view.ejs", { add: true, posts: posts, editMode:false });
});

app.post("/submit", (req, res) => {
  createPost(req, res);
  res.render("view.ejs", { posts: posts, add: false, editMode: 0 });
});

//will be the post bring back to light or burn in hell aka edit or delete msg according to button type
app.post("/edit", (req, res) => {
  if(req.body["submitButt"]==="🗑️"){deletePost(req, res);
    res.render("view.ejs", { posts: posts, add: false, editMode:false });
  }else{editPost(req,res)} 
});

// creating-editing post
function createPost(req, res) {
  const post = {
    name: req.body["name"],
    article: req.body["article"],
    timeStamp: new Date(),
  };

  if(posts[req.body["id"]]) {
    //retrieving back to place in case of editing
    posts[req.body["id"]]=post;
    console.log("triggered");
  } else{
    //creating new post
  posts.push(post);
  }
}

//deleting func
function deletePost(req, res) {
  console.log(req.body["id"]);
  posts.splice(req.body["id"], 1);
}

//function for placing values from object to input fields for editing, ID is for further identification a sorting back to original place of obj. array
function editPost(req,res) {
  let postID = posts[req.body["id"]];
  res.render("view.ejs", { add: false, posts: posts, editMode: true, article: postID["article"], userName: postID["name"], ID: req.body["id"] });
  console.log(postID["article"]);
}
  

app.listen(3000, () => {
    console.log('Blog is running on port 3000');
});

//class="d-flex flex-wrap justify-content-center shadow py-3 mb-4 border-bottom"
//class="nav-link px-2 link-body-emphasis"
//class="nav-link px-2 link-body-emphasis"
//class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"