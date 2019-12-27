import React, { Component } from 'react';
import UserContext from './user-context';
import { i18n, withTranslation } from '../i18n';

class Translations extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    // this.state = {currentValue: 'en'}
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   this.setState({currentValue: event.target.value});
  // }

  selectLang() {
    const { selectLang } = this.context;
    selectLang();
  }

  render() {
    return (
      <>
        <div className="lang">
          <select onChange={e => i18n.changeLanguage(e.target.value)}>
          {/* <select onChange={e => this.selectLang.bind(e.target.value)}> */}
            <option value="en">en</option>
            <option value="cn">cn</option>
            <option value="kr">kr</option>
            <option value="ru">ru</option>
          </select>
        </div>

        <style jsx scoped>
        {`
          .lang {
            top: 0;
            right: 0;
            position: absolute;
            padding: 8px;
          }
        `}
        </style>
      </>
    );
  }
}
export default withTranslation("common")(Translations);
