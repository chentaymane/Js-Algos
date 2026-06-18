function dogYears(planetName, dogAge) {
  const earthSeconds = 31557600; // seconds in 1 earth year

  switch (planetName) {
    case "mercury":
      return parseFloat((dogAge / (earthSeconds * 0.2408467) * 7).toFixed(2));
    case "venus":
      return parseFloat((dogAge / (earthSeconds * 0.61519726) * 7).toFixed(2));
    case "earth":
      return parseFloat((dogAge / (earthSeconds * 1.0) * 7).toFixed(2));
    case "mars":
      return parseFloat((dogAge / (earthSeconds * 1.8808158) * 7).toFixed(2));
    case "jupiter":
      return parseFloat((dogAge / (earthSeconds * 11.862615) * 7).toFixed(2));
    case "saturn":
      return parseFloat((dogAge / (earthSeconds * 29.447498) * 7).toFixed(2));
    case "uranus":
      return parseFloat((dogAge / (earthSeconds * 84.016846) * 7).toFixed(2));
    case "neptune":
      return parseFloat((dogAge / (earthSeconds * 164.79132) * 7).toFixed(2));
    default:
      return null;
  }
}