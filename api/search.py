from os import listdir
from os.path import isfile, join

from Bio import SeqIO

PROTEIN_DIR = "./proteins/" 

def search_proteins(seq):
    """search all files for a matching protein sequence"""
    protein_files = [PROTEIN_DIR + f for f in listdir(PROTEIN_DIR) if isfile(join(PROTEIN_DIR, f))]

    found = False
    locus_tag = "n/a"
    location = "n/a"

    for protein_file in protein_files:
        for seq_record in SeqIO.parse(protein_file, "fasta"):
            if seq in seq_record.seq:
                found = True
                locus_tag = seq_record.id
                location = seq_record.description.split(" ")[-2][10:-1]
                break
    return found, locus_tag, location
