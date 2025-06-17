// modules/about.js
export default function createAbout() {
  const about = document.createElement('div');
  about.id = 'about-tab';
  
  about.innerHTML = `
    <p><strong>Urban Palate</strong>, Your favourite spot for delicious meals.</p>
    <p>Location: Second building, along Kwale main road, near taleh hotel.</p>
    <h2>Availability</h2>
    <ul>
      <li>Monday: 7:00a.m - 6:00p.m</li>
      <li>Tuesday: 7:00a.m - 6:00p.m</li>
      <li>Wednesday: 7:00a.m - 6:00p.m</li>
      <li>Thursday: 7:00a.m - 6:00p.m</li>
      <li>Friday: 7:00a.m - 6:00p.m</li>
      <li>Saturday: 7:00a.m - 6:00p.m</li>
      <li>Sunday: 2:00p.m - 6:00p.m</li>
    </ul>
  `;
  
  return about;
}