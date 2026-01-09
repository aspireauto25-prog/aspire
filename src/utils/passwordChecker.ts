function checkPasswordStrength(password: string) {
  let score = 0;

  if (!password) {
    return { score: 0, strength: "Very Weak" };
  }

  // Length
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;

  // Character variety
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  // Strength label
  let strength;
  if (score <= 2) strength = "Very Weak";
  else if (score <= 4) strength = "Weak";
  else if (score <= 6) strength = "Medium";
  else strength = "Strong";

  return { score, strength };
}

export default checkPasswordStrength;
