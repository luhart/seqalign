# seq-align

Live on [Vercel](https://seqalign.vercel.app/)

To make changes, just make a PR to the master branch :)


## Frontend

- React
- Next.js
- CSS is mostly react-bootstrap

# API

The API is a handful of serverless functions running on Vercel

- Python
- Sanic for ASGI

## Future improvements

- eslint
- formik instead of react-bootstrap forms
- user registration/login + db
- different dna search options (forward/reverse)
- tests
- faster dna search: use makeblastdb instead of python 'in' + for loops

## Currently includes alignment search for the following proteins

- NC_000852
- NC_007346
- NC_008724
- NC_009899
- NC_014637
- NC_020104
- NC_023423
- NC_023640 (NC_016072)
- NC_023719
- NC_027867

NOTE: NCBI Reference Sequence: NC_023640.1 has been replaced by NC_016072.


## Example

Searching the DNA sequence:

```tcaagttgttgtcgtcgtctccaaccaaccgtccgtaccgtggacaaccaccaaatcttgggatggatggatgatgccgtcggtggtgatggatggacgaggacgaggccaagccaagttgttgtcgtcgtctccaaccagccgttcgcgtcgtcgaccaccaaatcttgagatggacgtggcatcatcggtggcgatgaaggccaagccaagccaagttgtcgtcgtatccaaccgaccgtccgtgtcgtgaacccccaaaccttgggatggatggccaagccatgttgttgttgttgtcttcgtcgtcgtctccacccaaccgtccgtaccatggacctccaaatcctggcaggggctgatgacaccgtcggtgggatggatggtcaggccaggccaagtcgttgtcgtcgtctccaaccaaccgactgtccgtaccatggacctccaaatcttgggatggacggatgacaccgtcggtgggatgaaggccaagccaagccaagtcgttgtcgtcgtctccaaccaaccgaccataccgtggaccgccaaatcttgggatggacgtggcatcat```

should return:

```MMPRPSQDLAVHGMVGWLETTTTTWLGLAFIPPTVSSVHPKIWRSMVRTVGWLETTTTTWPGLTIHPTDGVISPCQDLEVHGTDGWVETTTKTTTTTWLGHPSQGLGVHDTDGRLDTTTTWLGLAFIATDDATSISRFGGRRRERLVGDDDNNLAWPRPRPSITTDGIIHPSQDLVVVHGTDGWLETTTTT*```