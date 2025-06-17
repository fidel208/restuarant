// modules/contact.js
export default function createContact() {
  const contact = document.createElement('div');
  contact.id = 'contact-tab';
  
  contact.innerHTML = `
    <h1>Contact us</h1>
    <div class="cont">
      <div class="one">
        <ol>
          <li>
            <p>CEO Urban palate, <br>+999246152424</p>
          </li>
          <li>
            <p>Manager, <br>+999235622210</p>
          </li>
          <li>
            <p>Chef Moha, <br>+999289015111</p>
          </li>
        </ol>
      </div>
      <div class="two">
        <p>Email us at</p>
        <a href="#">urbanpalate1@gmail.com</a> or <br />
        <a href="#">managerurban00@yahoo.com</a>
      </div>
    </div>
  `;
  
  return contact;
}