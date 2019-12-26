import { createContext } from "react";
import EventEmitter from "eventemitter3";

import { i18n } from "../i18n";

let UserContext = createContext({
  lang: "en",
  toggleLang: () => {},
  registerLangListener: () => {},
  unregisterLangListener: () => {}
});

export class UserProvider extends React.Component {
  state = {
    lang: "en",
    toggleLang: this.toggleLang.bind(this),
    registerLangListener: this.registerLangListener.bind(this),
    unregisterLangListener: this.unregisterLangListener.bind(this)
  };

  constructor(props) {
    super(props);
    this.lnNotifier = new EventEmitter();
  }

  detectBrowserlanguage(defaultLang) {
    let navLang = navigator.language || navigator.userLanguage || defaultLang;

    return navLang.substring(0, 2);
  }

  componentDidMount() {
    const defaultLang = this.detectBrowserlanguage("en");
    const lang = localStorage.getItem("user-lang");
    const usedLang = lang ? lang : defaultLang;

    this.setState(
      {
        lang: usedLang
      },
      () => {
        i18n.changeLanguage(this.state.lang, () => {
          this.lnNotifier.emit("langChanged");
        });
      }
    );
  }

  toggleLang() {
    this.setState({ lang: this.state.lang === "en" ? "kr" : "en" }, () => {
      localStorage.setItem("user-lang", this.state.lang);
      i18n.changeLanguage(this.state.lang, () => {
        this.lnNotifier.emit("langChanged");
      });
    });
  }

  registerLangListener(fn, ctx) {
    this.lnNotifier.on("langChanged", fn, ctx);
  }

  unregisterLangListener(fn, ctx) {
    this.lnNotifier.removeListener("langChanged", fn, ctx);
  }

  render() {
    i18n.changeLanguage(this.state.lang);
    return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
  }
}

export const UserConsumer = UserContext.Consumer;
export default UserContext;
