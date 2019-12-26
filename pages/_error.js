/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { withTranslation } from '../i18n';

const Error = ({ statusCode, t }) => (
  <p>
    {statusCode
      ? t('error-with-status', { statusCode })
      : t('error-without-status')}
  </p>
);

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null;
  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }
  return {
    namespacesRequired: ['common'],
    statusCode,
  };
};

export default withTranslation('common')(Error);
