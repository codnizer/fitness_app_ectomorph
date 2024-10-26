export function importAll(r) {
    let images = {};
    r.keys().forEach((key) => (images[key.replace('./', '')] = r(key)));
    return images;
  }