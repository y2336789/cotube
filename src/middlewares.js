import multer from "multer";

export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "Coding with Cotube";
    // 현재 로그인된 사용자를 알려줌 req.session.user가 undefine일 수도 있음, loggedInUser도 User 모델임
    res.locals.loggedInUser = req.session.user || {};
    next();
  };
  
  export const protectorMiddleware = (req, res, next) => {
    if (req.session.loggedIn) {
      return next();
    } else {
      req.flash("error", "Log in first.");
      return res.redirect("/login");
    }
  };
  
  export const publicOnlyMiddleware = (req, res, next) => {
    if (!req.session.loggedIn) {
      return next();
    } else {
      req.flash("error", "이미 로그인 되어 있습니다.");
      return res.redirect("/");
    }
  };
  // 파일을 어디로 보낼 것인가 -> uploads라는 폴더를 만들고 사용자가 업로드하는 모들 파일을 저장, multer로 저장했기에 req.file을 사용할 수 있음!
  export const avatarUpload = multer({
    dest: "uploads/avatars/",
    limits: {
      fileSize: 3000000,
    },
  });
  export const videoUpload = multer({
    dest: "uploads/videos/",
    limits: {
      fileSize: 10000000,
    },
  });