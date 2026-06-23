import { Router } from 'express';
// import { loginUser } from '../controllers/user.controller.js';
import { otpSender, registerUser, loginUser, logoutUser, accessRefreshToken, changeCurrentPassword, updateAccountDetails, updateUserAvatar, updateUserCoverImage } from '../controllers/user.controller.js';
import { upload } from '../middlewares/multer.middleware.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

router.route("/register").post(
	upload.fields([
		{
			name: "avatar",
			maxCount: 1
		},
		{
			name: "coverImage",
			maxCount: 1
		}
	]),
	registerUser
);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(accessRefreshToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/update-account-details").patch(verifyJWT,updateAccountDetails);
router.route("/update-avatar").patch(verifyJWT,upload.single("avatar"),updateUserAvatar);
router.route("/update-coverImage").patch(verifyJWT,upload.single("coverImage"),updateUserCoverImage);
router.route("/otpsend").post(otpSender);


export default router;