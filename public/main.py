from flask import Flask, request
import requests

app = Flask(__name__)

@app.route('/proxy', methods=['GET'])
def proxy():
    url = request.args.get('url')

    if url:
        response = requests.get(url)
        return response.text
    else:
        return 'Invalid URL'

if __name__ == '__main__':
    app.run()
