const fetch = require('node-fetch');

async function removeBackground(url) {
	try {
		const images = await fetch(url);
		if (!images.ok) {
            throw new Error("Failed to download image.");
        }

		const imageBuffer = await images.arrayBuffer();
		const contentType = images.headers.get("content-type");

		const upload = await fetch(
			"https://aibackgroundremover.org/api/get-upload-url",
			{
				headers: {
					accept: "/",
					referer: "https://aibackgroundremover.org/",
					"user-agent":
						"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0",
				},
			},
		);

		const { uploadUrl, publicUrl } = await upload.json();

		const upres = await fetch(uploadUrl, {
			method: "PUT",
			body: imageBuffer,
			headers: {
				"Content-Type": contentType,
			},
		});

		if (!upres.ok) {
			throw new Error("Failed to upload.");
		}

		const removebg = await fetch(
			"https://aibackgroundremover.org/api/remove-bg",
			{
				method: "POST",
				headers: {
					accept: "/",
					"content-type": "application/json",
					referer: "https://aibackgroundremover.org/",
				},
				body: JSON.stringify({ image: publicUrl }),
			},
		);

		const { id } = await removebg.json();

		let status_response;
		do {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			const statusCheck = await fetch(
				`https://aibackgroundremover.org/api/check-status?id=${id}`,
				{
					headers: {
						accept: "/",
						referer: "https://aibackgroundremover.org/",
					},
				},
			);
			status_response = await statusCheck.json();
		} while (
			status_response.status === "starting" ||
			status_response.status === "processing"
		);

		if (status_response.status === "succeeded") {
			return status_response.output;
		}
		throw new Error(status_response.error || "Error Processing.");
	} catch (error) {
		console.error("Error:", error.message);
		throw error;
	}
}

module.exports = { removeBackground };