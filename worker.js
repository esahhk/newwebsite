export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/music/') && url.pathname.endsWith('.m4a')) {
      const fileName = url.pathname.split('/').pop();
      
      const rawUrl = `https://raw.githubusercontent.com/esahhk/newwebsite/main/music/${fileName}`;
      
      const modifiedRequest = new Request(rawUrl, {
        method: request.method,
        headers: request.headers
      });

      return fetch(modifiedRequest);
    }

    return env.ASSETS.fetch(request);
  }
};
