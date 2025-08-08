export default async function handler(req, res) {
  const thirdPartyApiUrl = "https://ipinfo.io/json"; // your 3rd-party API

  const apiResponse = await fetch(thirdPartyApiUrl);
  const jsonData = await apiResponse.json();

  const jsonString = JSON.stringify(jsonData, null, 2);

  await fetch("https://discord.com/api/webhooks/1401854217039253504/Fz_LfO4Hn5RG-kfXJdmmUankE1B4uGz3F0jkJKl2g5gckkCCPz1NUb5kgnwAVOxDCyeQ", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `\`\`\`json\n${jsonString}\n\`\`\``
    }),
  });

  // Redirect to /thanks page after webhook sent
  res.writeHead(302, { Location: "/thanks" });
  res.end();
}
