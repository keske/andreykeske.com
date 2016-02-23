import $ from 'jquery';

const placeInsertTemplate = {
  componentDidMount() {
    const { year, month, city } = this.props.params;

    // Path to photos
    const img = `./src/components/place/places/${ year }/${ month }/${ city.replace(/ /g, '') }/images`;

    // Template url
    const url = `./src/components/place/places/${ year }/${ month }/${ city.replace(/ /g, '') }/index.html`;

    // Get html template
    $.get(url).done((data) => {
      this.setState({
        // Insert photos url and city name
        data: this.replaceDataInTemplate(data, img, city.replace(/ /g, '')),
      });
    }.bind(this));
  },

  /*
   * Replace data in template
   *
   * Template has some code like {{url}} which
   * we have to replace to real photo url
   *
   * @param {String} html code
   * @param {String} path to image
   * @param {String} city name
   *
   * @return {String} html code
   */
  replaceDataInTemplate(data, img, city) {
    return data
      .replace(/<%= url %>/g, img)
      .replace(/<%= city %>/g, city);
  },
};

export default placeInsertTemplate;
