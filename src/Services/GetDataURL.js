import BaseURL from "./BaseURL";

export const GeyDataURL = (commentID) => {
    return BaseURL.get(`comments/${commentID}`)
}