const fetch = require('node-fetch'); // Memastikan fetch tersedia

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

async function magichour(prompt, orientation = 'square') {
  const task_id = generateUUID();
  
  try {
    await fetch('https://magichour.ai/api/free-tools/v1/ai-image-generator', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-timezone-offset': new Date().getTimezoneOffset().toString()
      },
      body: JSON.stringify({ prompt, orientation, task_id })
    });
    
    const statusEndpoint = `https://magichour.ai/api/free-tools/v1/ai-image-generator/${task_id}/status`;
    let completed = false, result = null;
    
    while (!completed) {
      const statusResponse = await fetch(statusEndpoint, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'x-timezone-offset': new Date().getTimezoneOffset().toString()
        }
      });
      
      const statusData = await statusResponse.json();
      
      if (statusData.status === 'SUCCESS') {
        completed = true;
        result = statusData;
      } else if (statusData.status === 'FAILED') {
        throw new Error('Image generation failed');
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    return result.urls;
  } catch (error) {
    console.error('Error in text2img function:', error);
    throw error;
  }
}

module.exports = { magichour };