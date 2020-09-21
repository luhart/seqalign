from Bio.Seq import Seq


def dna_to_protein(dna_seq):
    """Converts coding DNA sequence to protein"""
    return Seq(dna_seq.upper()).reverse_complement().translate()

