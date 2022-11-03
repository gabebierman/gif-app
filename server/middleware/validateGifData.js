/**
 * pulls out gif information, checks for valid information and that the url is valid
 * sends an error message with the appropriate text if the object doesn't fot needed criteria
 *
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {Next} next - Express next funciton for middleware
 * @returns - returns either next() to send to next middleware or a response with appropriate error
 */

export default function validateGifData(req, res, next) {
    const urlRegex =
        /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)(.gif)/;
    const { user_id, url, title, gif_id } = req.body;
    if (!user_id) {
        return res.send({ error: "not valid user id", success: false });
    }
    if (!url || !url.toString().match(urlRegex) || url.length > 64) {
        return res.send({ error: "not valid url", success: false });
    }
    if (!title || title.length > 64) {
        return res.send({ error: "not valid title", success: false });
    }
    if (!gif_id || gif_id.length > 32) {
        return res.send({ error: "not valid gif id", success: false });
    }
    req.body = { url, title, gif_id, user_id };
    return next();
}
