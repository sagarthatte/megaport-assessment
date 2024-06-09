import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://my-json-server.typicode.com/sagarthatte/megaport-assessment",
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	}
});

export default {
	getItems() {
		return apiClient.get("/items");
	}
};
