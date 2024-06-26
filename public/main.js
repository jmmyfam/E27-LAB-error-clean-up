import '../styles/main.scss';
import form from '../components/form';
import filterBtnRow from '../components/filterButtons';
import studentAreas from '../components/studentAreas';
import studentsOnDom from '../components/studentsOnDom';
import { students } from '../utils/data/students';
import voldysArmy from '../utils/data/voldysArmy';
import htmlStructure from '../components/htmlStructure';
import header from '../components/header';
import startSortingBtn from '../components/sortingButton';

const events = () => {
  // get form on the DOM on button click
  document.querySelector('#start-sorting').addEventListener('click', () => {
    // put html elements on the DOM on click
    form(); // form
    filterBtnRow(); // filter buttons
    studentAreas(); // students and voldy's army divs
  });

  // target expel buttons to move to voldys army
  document.querySelector('#student-container').addEventListener('click', (e) => {
    if (e.target.id.includes('expel')) {
      const [, id] = e.target.id.split('--');
      const index = students.findIndex((student) => student.id === Number(id));

      // move from one array to another
      voldysArmy.push(...students.splice(index, 1));
      // get both sets of students on the DOM
      studentsOnDom('#students', students);
      studentsOnDom('#voldy', voldysArmy);
    }
  });

  // target filter buttons on Dom
  document.querySelector('#filter-container').addEventListener('click', (e) => {
    if (e.target.id.includes('filter')) {
      const [, house] = e.target.id.split('--');

      if (house === 'all') {
        studentsOnDom('#students', students);
      } else if (house) {
        const filter = students.filter((student) => student.house === house);
        studentsOnDom('#students', filter, house);
      }
    }
  });
};

// Create a new ID for the students

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
