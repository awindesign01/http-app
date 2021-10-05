import BaseURL from "./BaseURL";

export const DeleteURL = (commentID) => {
    return BaseURL.delete(`/comments/${commentID}`);
}