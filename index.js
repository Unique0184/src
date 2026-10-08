export default {
  async fetch(request) {
    const appsScriptUrl =
      "https://script.google.com/macros/s/AKfycbxkLUFEQJvz31jazqtCapKKb9v8R4cJ0f_FA2WjpNcYBAP0bmDxwzvac2M5m5jNS16Ubg/exec";

    if (request.method === "POST") {
      const body = await request.text();

      await fetch(appsScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: body
      });

      return new Response("OK", { status: 200 });
    }

    return new Response("Telegram Proxy is running", { status: 200 });
  }
};
