function printerError(s) {
    if (/[n-z]/g.test(s)) {
    const errors = s.match(/[n-z]/g).length
    return `${errors}/${s.length}`
    }
    return `0/${s.length}`
}