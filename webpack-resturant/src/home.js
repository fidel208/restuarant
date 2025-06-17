// modules/home.js
export default function createHome() {
  const home = document.createElement('div');
  home.id = 'home-tab';

  const left = document.createElement('div');
  left.className = 'left';

  const title = document.createElement('div');
  title.className = 'title';
  title.innerHTML = '<h1>Urban Palate</h1>';

  const about = document.createElement('div');
  about.className = 'about';
  about.innerHTML = '<p>Urban palate, your favourite spot for tasty meals.</p>';

  const location = document.createElement('div');
  location.className = 'location';
  location.innerHTML = `
    <h2>Location</h2>
    <p>We are located at Kwale main road street, near Taleh Hotel.</p>
  `;

  const compliment = document.createElement('div');
  compliment.className = 'compliment';
  compliment.innerHTML = `
    <p>
      I have been coming here for quite sometime and I'm not even
      thinking of leaving soon. I'm happy that i found a resturant that
      serves food to its very best. The foods are delicious and you
      won't even think of leaving it for another resturant once you've
      tasted its meals.
    </p>
    <p><b><i>Fidempa</i></b></p>
  `;

  left.appendChild(title);
  left.appendChild(about);
  left.appendChild(location);
  left.appendChild(compliment);

  const right = document.createElement('div');
  right.className = 'right';

  const work = document.createElement('div');
  work.className = 'work';
  work.innerHTML = `
    <h2>Working hours</h2>
    <ul>
      <li>Monday: 7:00a.m - 6:00p.m</li>
      <li>Tuesday: 7:00a.m - 6:00p.m</li>
      <li>Wednesday: 7:00a.m - 6:00p.m</li>
      <li>Thursday: 7:00a.m - 6:00p.m</li>
      <li>Friday: 7:00a.m - 6:00p.m</li>
      <li>Saturday: 7:00a.m - 6:00p.m</li>
      <li>Sunday: 2:00p.m - 6:00p.m</li>
    </ul>
    <p># GOOD THINGS TAKE TIME</p>
  `;

  right.appendChild(work);
  
  home.appendChild(left);
  home.appendChild(right);
  
  return home;
}