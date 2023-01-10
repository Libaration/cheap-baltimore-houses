import zxcvbn from "zxcvbn";
export const checkPasswordStrength = (password) => {
  const { score } = zxcvbn(password);
  if (password.length === 0) return { passwordLabel: "Password", inputColor: "default", score };
  switch (score) {
    case 4:
      return { passwordLabel: "Very Strong password", inputColor: "success", score };
    case 3:
      return { passwordLabel: "Strong password", inputColor: "success", score };
    case 2:
      return { passwordLabel: "Fair password", inputColor: "warning", score };
    case 1:
      return { passwordLabel: "Weak password", inputColor: "error", score };
    case 0:
      return { passwordLabel: "Very Weak password", inputColor: "error", score };
    default:
      return { passwordLabel: "Weak password", inputColor: "error", score };
  }
};
