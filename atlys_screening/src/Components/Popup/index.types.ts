export interface IPopup {
  closeModal?: () => void,
  showCloseIcon? : boolean;
  onLoginSuccess?: () => void;
}

export interface ILogin {
  switchToRegister: () => void;
  closeModal?: () => void,
  onLoginSuccess?: any
}

export interface IRegister {
  switchToLogin: () => void;
  closeModal?: () => void,
}
