function hyphenateWords (str) {
  let slug = str.toLowerCase().replace(/\s/g, '-')
  return slug
}

export {hyphenateWords}
