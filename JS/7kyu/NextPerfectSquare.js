function findNextSquare(sq) {
    if (Math.sqrt(sq) !== Math.floor(Math.sqrt(sq))) return -1;
    return (Math.sqrt(sq) + 1) ** 2;
    return -1;
  }