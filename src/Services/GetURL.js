import BaseURL from "./BaseURL";

export const GetURL = () => {
    return BaseURL.get("/comments")
}