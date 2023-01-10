import zxcvbn from "zxcvbn";
export const checkPasswordStrength = (password) => {
  const { score } = zxcvbn(password);
  if (password.length === 0) return { passwordLabel: "Password", inputColor: "default" };
  switch (score) {
    case 4:
      return { passwordLabel: "Very Strong password", inputColor: "success" };
    case 3:
      return { passwordLabel: "Strong password", inputColor: "success" };
    case 2:
      return { passwordLabel: "Fair password", inputColor: "warning" };
    case 1:
      return { passwordLabel: "Weak password", inputColor: "error" };
    case 0:
      return { passwordLabel: "Very Weak password", inputColor: "error" };
    default:
      return { passwordLabel: "Weak password", inputColor: "error" };
  }
};
