import renderToDOM from '../utils/renderToDOM';

const startSortingBtn = () => {
  const domString = '<button type="button" class="btn btn-info" id="start-sorting">Start the Sorting Ceremony!</button>';

  renderToDOM('#form-container', domString);
};
export default startSortingBtn;
