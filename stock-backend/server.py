from flask import Flask,jsonify,request
from flask_cors import CORS
import requests
import pickle
import pandas as pd

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'moshi-moshi'
    return app
 

app = create_app()

CORS(app);


@app.route('/submit-form',methods=['POST','GET'])
def submit():
    data = request.json

    name = data.get('name')
    selected_stock = data.get('stock')

    # Load your model
    try:
        if selected_stock == 'AAPL':
            name_model = './apple_data.pkl'
        elif selected_stock == 'AMZN':
            name_model = './amazon_data.pkl'
        elif selected_stock == 'MSFT':
            name_model = './microsoft_data.pkl'
        elif selected_stock == 'TSLA':
            name_model= './tesla_data.pkl'
        elif selected_stock == 'GOOGL':
            name_model = './google_data.pkl'
    except Exception as e:
        print(e)

    
    with open(name_model, 'rb') as f:
        loaded_data = pickle.load(f)


    #News
    news_api_key = "622157770ea74838a4e880b671869404"  # Replace with your API key

    news_url = f"https://newsapi.org/v2/everything?q={selected_stock}&apiKey={news_api_key}"
    response = requests.get(news_url)
    news_data = response.json()

    if news_data['totalResults'] > 0:
        top_news_headline = news_data['articles'][0]['title']
        print("Top News Headline:", top_news_headline)
    else:
        print("No recent news found for the stock.")    

    df = loaded_data['valid']
    price = float(df.iloc[-1,1])
    print(price)
    price0 = float(df['Close'].tail(10).mean())
    print(price0)
    if price-price0 >= 0:
        res = "Stock is amongst the high performers. It has fared well"
    else:
        res = "Stock is amongst the low performers. It hasn't fared well"
    img = loaded_data['graph_image']

    response_data = {
        'name':name,
        'selected_stock': selected_stock,
        'price': float(price),
        'res':res,
        'news':top_news_headline,
    }
    print(price - price0)
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)

