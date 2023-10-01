import axios from "axios";
import http, { IncomingMessage, ServerResponse } from "http";

const port: number = 3000;

interface IMessage {
	message: string;
	success: boolean;
	data: null | {}[] | [] | {};
}

const server = http.createServer(
	(req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
		res.setHeader("content-type", "Application/JSON");
		let status = 404;

		let response: IMessage = {
			message: "Bad",
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
					const iniUrl: any = url?.split("/")[1];
					const useFulurl = parseInt(iniUrl);

					const fakeapi = await axios.get(
						"https://fakestoreapi.com/products"
					);

					if (fakeapi.status) {
						let fakeStoreData = fakeapi.data;
						let Data = fakeStoreData.filter((el) => {
							return el.id === useFulurl;
						});
					} else {
						res.write(JSON.stringify({ status, response }));
						res.end();
					}
				}
			});
	}
);

server.listen(port, () => {
	console.log(`${port} is running`);
});
