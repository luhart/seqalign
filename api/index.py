"""
api/?seq=sequence
"""

from sanic import Sanic
from sanic.response import json

from . import align
from . import search

app = Sanic()


@app.route('/')
@app.route('/<path:path>')
async def index(request, path=""):
    seq = request.args["seq"][0]
    alignment = align.get_alignment(seq)
    found, protein = search.dna_in_protein(alignment)
    return json({"found": found, "protein": protein})