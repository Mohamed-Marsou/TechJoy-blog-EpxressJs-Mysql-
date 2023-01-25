const express = require("express");
const isAuth = require("../middleware/is-Auth");
const blogController = require("../controllers/blogController");
const router = express.Router();

router.post("/user_profile_update", blogController.postUpdateProfile);
router.get("/user_profile", blogController.getProfile);
router.get("/register", blogController.getRegister);
router.get("/login", blogController.getLogin);
router.get("/contact", blogController.getContact);
router.get("/FAQ", blogController.getFAQ);
router.get("/blog", blogController.getBlogPage);
router.get("/home", blogController.getHome);
router.get("/", blogController.getHome);

router.post("/ArticleComment/:userId", isAuth, blogController.postComment);
router.post("/logOut", blogController.postLogout);
router.post("/checkin", blogController.postLogin);
router.post("/register", blogController.postRegister);
router.post("/newMailer", blogController.postContactPage);
router.post("/ty", blogController.postSaveMailBlogPG);
router.post("/thnkpage", blogController.postSaveMail);
router.post("/sub_thk", blogController.postThankPage);
module.exports = router;
