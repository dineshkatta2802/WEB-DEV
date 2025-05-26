from flask import Flask, request, send_file, render_template
import os
import subprocess
import uuid

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    py_file = request.files['pyfile']
    data_file = request.files['datafile']

    # Create a unique folder for each upload
    session_id = str(uuid.uuid4())
    session_path = os.path.join(UPLOAD_FOLDER, session_id)
    os.makedirs(session_path, exist_ok=True)

    # Save uploaded files
    py_path = os.path.join(session_path, 'script.py')
    data_path = os.path.join(session_path, data_file.filename)

    py_file.save(py_path)
    data_file.save(data_path)

    # Run the Python script
    env = os.environ.copy()
    env['PYTHONUNBUFFERED'] = '1'
    subprocess.run(['python', py_path], cwd=session_path, env=env, check=True)

    plot_path = os.path.join(session_path, 'plot.png')
    return send_file(plot_path, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)
