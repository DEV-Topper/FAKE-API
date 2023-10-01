import axios from "axios";
import http, { IncomingMessage, ServerResponse } from "http";

const port: number = 4000;

interface iMessage {
	message: string;
	success: boolean;
	data: null | {} | {}[];
}

const server = http.createServer(
	(req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
		res.setHeader("content-type", "application/json");

		let status = 404;

		let responce: iMessage = {
			message: "BAD",
			success: false,
			data: null,
		};

		let container = "";

		req
			.on("data", (chunk: any) => {
				container += chunk;
			})
			.on("end", async () => {
				const { method, url } = req;

				if (method === "GET") {
					let TheUrl: any = url?.split("/")[1];
					let UseUrl = parseInt(TheUrl);

					const fakeapi = await axios.get(
						"https://fakestoreapi.com/products"
					);

					if (fakeapi.status) {
					}
				}
			});
	}
);
