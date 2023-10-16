function DNAStrand(dna){
    let newDna = ''
    for (let i = 0; i < dna.length; i++) {
      switch (dna[i]) {
        case 'A':
        newDna += 'T';
        break;
        case 'T':
        newDna += 'A';
        break;
        case 'C':
        newDna += 'G';
        break;
        case 'G':
        newDna += 'C';
        break;
      }
    }
    return newDna;
  }