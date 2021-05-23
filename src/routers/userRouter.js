import express from "express";
import {
  getEdit,
  postEdit,
  logout,
  see,
  startGithubLogin,
  finishGithubLogin,
  getChangePassword,
  postChangePassword,
} from "../controllers/userController";
import { protectorMiddleware, publicOnlyMiddleware, avatarUpload, } from "../middlewares";

const userRouter = express.Router();
userRouter.get("/logout", protectorMiddleware, logout);
// 미들웨어는 항상 왼쪽에서 오른쪽으로
// input에서 오는 avatar파일을 multer를 통해 파일을 uploads 폴더에 저장하고, postEdit에 파일에 대한 정보를 전달
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(avatarUpload.single("avatar"), postEdit);
userRouter
  .route("/change-password")
  .all(protectorMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);

userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);

userRouter.get("/:id", see);

export default userRouter;