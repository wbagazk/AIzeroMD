const fetch = require('node-fetch');
const { v4: uuidv4 } = require('uuid');

async function flux(options) {
  try {
    options = {
      prompt: options?.prompt,
      seed: options?.seed || Math.floor(Math.random() * 2147483647) + 1,
      random_seed: options?.random_seed ?? true,
      width: options?.width ?? 512,
      height: options?.height ?? 512,
      steps: options?.steps ?? 8,
    };

    if (!options.prompt) {
      return { status: false, message: "undefined reading prompt!" };
    }

    const session_hash = string(11);
    const joinResponse = await fetch("https://black-forest-labs-flux-1-schnell.hf.space/queue/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [options.prompt, options.seed, options.random_seed, options.width, options.height, options.steps],
        event_data: null,
        fn_index: 2,
        trigger_id: 5,
        session_hash: session_hash,
      }),
    });

    if (!joinResponse.ok) throw new Error("Failed to join queue");

    const dataResponse = await fetch(`https://black-forest-labs-flux-1-schnell.hf.space/queue/data?session_hash=${session_hash}`);
    if (!dataResponse.ok) throw new Error("Failed to retrieve data");

    const rawData = await dataResponse.text();
    const jsonObjects = rawData.split("\n")
      .filter(line => line.startsWith("data: "))
      .map(line => JSON.parse(line.substring(6).trim()));
    
    const result = jsonObjects.find(d => d.msg === "process_completed") || {};

    if (!result?.success) return { status: false, message: result };

    const images = result.output.data.filter(d => typeof d === "object").map(d => d.url);
    return { status: true, data: { images: images } };

  } catch (e) {
    return { status: false, message: e.message };
  }
}

function string(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
}

module.exports = { flux };