function division(a, b) {
  if (b === 0) {
		return 'No se puede dividir con 0'
  } else {
		return a/b
  }
}

module.exports = division;