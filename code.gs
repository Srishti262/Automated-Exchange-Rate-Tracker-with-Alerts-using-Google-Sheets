function fetchExchangeRates() {
  const url = 'https://api.exchangerate-api.com/v4/latest/USD';
  const response = UrlFetchApp.fetch(url);
  const data = JSON.parse(response.getContentText());
  const rates = data.rates;

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  sheet.clear();  // Clear old data

  // Add headers
  sheet.getRange(1, 1).setValue("Currency");
  sheet.getRange(1, 2).setValue("Rate");
  sheet.getRange(1, 3).setValue("Timestamp");

  const timestamp = new Date().toLocaleString();

  let row = 2;
  for (const [currency, rate] of Object.entries(rates)) {
    sheet.getRange(row, 1).setValue(currency);
    sheet.getRange(row, 2).setValue(rate);
    sheet.getRange(row, 3).setValue(timestamp);
    row++;
  }

  //  INR Alert Section (after all data is written)
  const inrRate = rates["INR"];
  if (inrRate > 185) {
    MailApp.sendEmail({
      to: "sriiishtiii77@gmail.com",  
      subject: "⚠️ INR Alert!",
      body: "The INR has crossed 185. Current Rate = " + inrRate
    });
  }
}
