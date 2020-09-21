"""
api/?seq=sequence
"""

from sanic import Sanic
from sanic.response import json

from . import converter 
from . import search

app = Sanic("")


@app.route('/')
@app.route('/<path:path>')
async def index(request, path=""):
    seq = request.args["seq"][0].upper()
    protein = converter.dna_to_protein(seq)
    found, protein_name = search.dna_in_protein(protein)
    return json({"found": found, "protein": protein_name})