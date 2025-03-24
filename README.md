# Automated Exchange Rate ETL Pipeline (Google Sheets + Apps Script + Google Colab)

This project is a real-world **ETL pipeline** that:
-  Extracts live exchange rates from a public API
-  Transforms & timestamps the data
-  Loads the data into Google Sheets
-  Schedules daily automatic refresh
- ⚠ Sends alert if INR crosses 185

---

## Technologies Used

- Google Sheets
- Google Apps Script
- ExchangeRate-API
- Google Colab (for testing or Python version)
- GitHub

---

##  How It Works

1. **Apps Script (`Code.gs`)** fetches exchange rate data from:  
   `https://api.exchangerate-api.com/v4/latest/USD`

2. It writes the data into the connected Google Sheet with a timestamp.

3. An email alert is sent if the INR exchange rate crosses 85.

4. The script is scheduled to run daily via time-based triggers.

---

## Files in This Repo

| File | Description |
|------|-------------|
| `Code.gs` | Google Apps Script that performs the full ETL process |
| `ETL_Pipeline_Colab.ipynb` | Colab notebook for testing API in Python |
| `README.md` | Project documentation |

---

## Alert Feature

If the INR rate is greater than `185`, an email is sent to a configured Gmail address using `MailApp`.

---

## ✍️ Author

- Srishti
- Built as a personal data project using free & cloud-based tools.
