import $ from 'jquery';

const placeInsertTemplate = {
  componentDidMount() {
    const { year, month, city } = this.props.params;

    // Path to photos
    const img = `./src/components/Travel/Components/Place/places/${ year }/${ month }/${ city }/images`;

    // Template url
    const url = `./src/components/Travel/Components/Place/places/${ year }/${ month }/${ city }/index.html`;

    // Get html template
    $.get(url).done((data) => {
      this.setState({
        // Insert photos url and city name
        data: this.replaceDataInTemplate(data, img, city),
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