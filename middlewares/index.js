import { decodeToken, resClientData } from "../utils/index.js";
const authenticateToken = (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Token missing" });
        }
        const verify = decodeToken(token);
        if (!verify) throw new Error("Verification failed!");
        req.user = {
            ...verify,
            token,
          };
        return next();
    } catch (error) {
        resClientData(res, 403, error.message);
    }
};
export { authenticateToken }