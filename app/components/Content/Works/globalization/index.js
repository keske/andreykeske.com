import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import DocumentMeta from 'react-document-meta';

// Component styles
import { styles } from './styles/styles.scss';

// Language
import Language from './locale/';

const Work = ({Language }) => {

  // Set language
  Language.setLocale(language);

  const metaData = {
    title: `${Language.translate('Title')} — ${Language.translate('Text')}`,
    description: Language.translate('Text'),
    meta: {
      charset: 'utf-8',
      name: {
        keywords: Language.translate('Title'),
      },
    },
  };

  return (
    <div className={styles}>
      <DocumentMeta {...metaData} />
        <Grid>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={8} mfOffset={2}
              lg={8} lgOffset={2}
            >

              <h1>
                {Language.translate('Title')}
              </h1>
              <p>
                {Language.translate('Text')}
              </p>
            </Col>
          </Row>
        </Grid>

        <div
          className="responsive-container"
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55207280.68936508!2d-17.645922980156378!3d32.37667657045178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1451573511029"
            width="100%"
            height="350"
            frameBorder="0"
            allowFullScreen
          />
        </div>

    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
};

export default Work;
