// LanguageProvider.js

import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import React, { Component } from 'react';

const mapStateToProps = function (state) {
  return {
    language: state.language,
    translations: state.translations,
  };
};

class LanguageProvider extends Component {
  render() {
    const { children } = this.props;

    return (
      <IntlProvider locale={this.props.language} key={this.props.language} messages={this.props.translations}>
        {children}
      </IntlProvider>
    );
  }
}

export default connect(mapStateToProps)(LanguageProvider);
