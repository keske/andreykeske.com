import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import DocumentMeta from 'react-document-meta';

// Component styles
import { styles } from './styles/styles.scss';

// Language
import Language from './locale/';

const Work = ({ language }) => {

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
                { Language.translate('Title') }
              </h1>
              <p>
                { Language.translate('Text') }
              </p>

              <div className="responsive-container">
                <iframe width="420" height="315"
                  src="https://www.youtube.com/embed/JlvEuMp2UVw"
                  frameBorder="0" allowFullScreen
                />
              </div>

              <h2>
                { Language.translate('Process') }
              </h2>

              <div className="responsive-container">
                <iframe width="420" height="315"
                  src="https://www.youtube.com/embed/NS6r5PAInkY"
                  frameBorder="0" allowFullScreen
                />
              </div>

            </Col>
          </Row>
        </Grid>
    </div>
  );
};

Work.propTypes = {
  language: PropTypes.string,
};

export default Work;
