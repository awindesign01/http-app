import BaseURL from "./BaseURL";

export const PostURL = (data) => {
    const token = "SECURE TOKEN";
	const header = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	return BaseURL.post("/comments", data, header);
};

// return BaseURL.put("/comments/11", data)
// هیچ فرقی بین پوت و پست وجود نداره اما در پوت باید به اون کامنت مورد نظر مستقیم اشاره کنیم