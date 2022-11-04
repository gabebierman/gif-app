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

    const { url, title, gif_id, user_id } = req.body;
    if (!url || !url.toString().match(urlRegex) || url.length > 164) {
        return res.send({ success: false, error: "Invalid Gif URL" });
    }

    if (!title || !gif_id || !user_id || gif_id.length > 32 || title.length > 64) {
        return res.send({ success: false, error: "Invalid Data Provided" });
    }
    req.body = { url, title, gif_id, user_id };
    return next();
}
