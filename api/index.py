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
    protein = str(converter.dna_to_protein(seq))
    found, locus_tag, location, full_protein = search.search_proteins(protein)
    
    if found:
        found = "found" 
    else:
        found = "not found"

    return json({"dna": seq, "found": found, "locus_tag": locus_tag, "location": location, "protein": protein})