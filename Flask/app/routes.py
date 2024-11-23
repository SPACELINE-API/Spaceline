from app import app
from flask import render_template

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/intro')
def intro():
    return render_template('intro.html')

@app.route('/scrum')
def scrum():
    return render_template('scrum.html')

@app.route('/artefatos')
def artefatos():
    return render_template('artefatos.html')

@app.route('/master')
def master():
    return render_template('master.html')

@app.route('/po')
def po():
    return render_template('po.html')

@app.route('/softskills')
def softskills():
    return render_template('softskills.html')

@app.route('/avaliações')
def avaliações():
    return render_template('avaliações.html')

