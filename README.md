🌾 PricePulse AI

AI-Powered Agricultural Market Price Intelligence Platform

Know Your Mandi Before You Sell!

PricePulse AI is an agricultural market intelligence platform designed to help farmers and other agricultural stakeholders understand mandi prices and make more informed selling decisions.

The platform uses real government-provided agricultural market data to provide accessible price information and support market analysis.

---

📌 Table of Contents

- "Overview" (#-overview)
- "Problem Statement" (#-problem-statement)
- "Our Solution" (#-our-solution)
- "Key Features" (#-key-features)
- "Technology Stack" (#-technology-stack)
- "Data Source" (#-data-source)
- "System Architecture" (#-system-architecture)
- "Project Structure" (#-project-structure)
- "Installation and Setup" (#-installation-and-setup)
- "Environment Configuration" (#-environment-configuration)
- "Running the Application" (#-running-the-application)
- "Future Enhancements" (#-future-enhancements)
- "Contributors" (#-contributors)
- "License" (#-license)

---

🚀 Overview

Agricultural market prices can vary significantly across different mandis, commodities, and locations. Farmers often face difficulties accessing timely market information, which can affect their selling decisions.

PricePulse AI aims to bridge this information gap through a data-driven platform that makes agricultural market information easier to access and understand.

By integrating government mandi data, data processing, visualization, and AI-oriented intelligence, PricePulse AI aims to make agricultural market insights more accessible.

❗ Problem Statement

Farmers frequently encounter challenges such as:

- Lack of accessible and centralized mandi price information.
- Difficulty comparing commodity prices across different markets.
- Limited understanding of agricultural market price trends.
- Information gaps that make selling decisions difficult.
- Dependence on fragmented sources of market information.

💡 Our Solution

PricePulse AI provides a centralized platform that works with government agricultural market data.

It is designed to help users:

- Access agricultural commodity price information.
- Explore mandi-level market data.
- Understand price variations.
- Analyze available market information through visualizations.
- Make more informed agricultural marketing decisions.

✨ Key Features

Feature| Description
Government Data Integration| Uses real agricultural market data from data.gov.in.
Mandi Price Intelligence| Helps users explore commodity prices across markets.
Data Visualization| Presents market information through visual representations.
Commodity Analysis| Supports analysis of available commodity data.
Market Comparison| Provides a foundation for comparing market prices.
Data Storage| Uses SQLite for structured local data storage.
CSV Fallback| Supports an alternative CSV data source when required.
AI Integration| Provides a foundation for intelligent agricultural market insights.

🛠️ Technology Stack

Frontend

- Python
- Streamlit
- Plotly

Backend

- Python
- Requests
- Pandas

Database

- SQLite

Data Source

- data.gov.in API
- CSV fallback

Additional Tools

- NumPy
- Python dotenv
- Git and GitHub

📊 Data Source

PricePulse AI prioritizes authentic government agricultural market data rather than manually generated demo records.

Primary Data Source:

- Platform: Open Government Data Platform India
- Website: https://www.data.gov.in/
- Dataset: Current Daily Price of Various Commodities from Various Markets
- Integration: Government API

Data Handling Strategy:

1. Fetch available agricultural market data through the government API.
2. Process and organize the retrieved information.
3. Store and manage relevant records using SQLite.
4. Use CSV as a fallback data source when necessary.

Note: Data availability and freshness depend on the source API and its published updates.

🏗️ System Architecture

The application follows a modular architecture that separates the user interface, backend processing, and database management.

              USER
                |
                v
       STREAMLIT FRONTEND
                |
                v
          PYTHON BACKEND
                |
          +-----+------+
          |            |
          v            v
    GOVERNMENT API   CSV FALLBACK
    (data.gov.in)        |
          |              |
          +------+-------+
                 |
                 v
           DATA PROCESSING
              (Pandas)
                 |
                 v
             SQLITE DB
                 |
                 v
        ANALYSIS & VISUALIZATION
                 |
                 v
           USER DASHBOARD

📁 Project Structure

The project is organized into separate modules for frontend, backend, and database management.

PRICEPULSE-AI/
│
├── frontend/
│   └── app.py
│
├── backend/
│   ├── services.py
│   └── ...
│
├── database/
│   ├── schema.sql
│   └── ...
│
├── requirements.txt
├── .env
├── .gitignore
└── README.md

The tree above is a simplified representation. Keep it synchronized with the actual repository files.

⚙️ Installation and Setup

Follow these steps to run PricePulse AI locally.

1. Clone the Repository

git clone https://github.com/Shivank247/PRICEPULSE-AI.git

2. Navigate to the Project Directory

cd PRICEPULSE-AI

3. Create a Virtual Environment

python -m venv venv

Activate it:

Windows:

venv\Scripts\activate

Linux / macOS:

source venv/bin/activate

4. Install Dependencies

pip install -r requirements.txt

🔑 Environment Configuration

Create a ".env" file in the project root directory.

Add your government API credentials:

DATA_GOV_IN_API_KEY=your_api_key_here

Replace the placeholder with your actual API key obtained from the data.gov.in platform.

Important: Never upload your actual ".env" file or API credentials to a public GitHub repository.

Add this to ".gitignore":

.env
venv/
__pycache__/
*.pyc
*.db

▶️ Running the Application

Start the Streamlit frontend using:

streamlit run frontend/app.py

The application will be available at:

http://localhost:8501

Ensure that the backend service and its required configuration are running before using features that depend on it.

🔮 Future Enhancements

We aim to expand PricePulse AI with additional capabilities:

- AI-Based Price Prediction: Estimate possible future commodity price movements.
- Smart Selling Recommendations: Help farmers evaluate potential markets.
- Market Trend Analysis: Identify historical price patterns.
- Regional Market Intelligence: Improve location-based market comparisons.
- Multilingual Support: Make the platform accessible to farmers in regional languages.
- Weather Integration: Explore the relationship between weather conditions and agricultural markets.
- Personalized Alerts: Notify users about important commodity price changes.
- Advanced AI Assistant: Provide conversational agricultural market insights.

👥 Contributors

Project: PricePulse AI

Contributor| Role
Shivank Singh| Project Lead, Architecture & Integration

Add the remaining team members and their contributions here.

🎯 Project Vision

Our vision is to make agricultural market information more accessible, understandable, and useful.

We believe that access to reliable market information can help farmers make better-informed decisions and improve transparency in agricultural markets.

PricePulse AI — Know Your Mandi Before You Sell! 🌾

---

📄 License

This project is developed for educational, research, and innovation purposes.

Add an appropriate open-source license before publicly distributing the project.# PRICEPULSE-AI