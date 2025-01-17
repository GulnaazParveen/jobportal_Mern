import { Router } from "express";
const router = Router();
import { upload } from "../middlewares/multer.middleware.js";
// importing route
import { createJob, findAllJobs } from "../controllers/job.controller.js";
import { loginUser, logoutUser, refreshAccessToken, registerUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

//declaratoin exact route
router.route("/postjob").post(createJob);
router.route("/getjob").get(findAllJobs);
router.route("/registerUser").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      file: "assests",
      maxCount: 1,
    },
  ]),
  registerUser
);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
export default router;
