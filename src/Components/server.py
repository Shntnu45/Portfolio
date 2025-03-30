from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/contact', methods=['POST'])
def handle_contact_form():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # You can add validation logic here to ensure the data is valid
    if not name or not email or not message:
        return jsonify({'error': 'Invalid request'}), 400

    # You can add logic to store the message in a database or send an email
    # For this example, we'll just log the message to the console
    print(f'Received message from {name} ({email}): {message}')

    return jsonify({'success': True}), 201

if __name__ == '__main__':
    app.run(debug=True)