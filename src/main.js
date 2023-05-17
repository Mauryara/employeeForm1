import {LitElement, html} from 'lit';

import './employee-data';
import './emp-form';

class HomePage extends LitElement {
  render() {
    return html`
      <!-- <employee-form>  </employee-form> -->
      <employee-form></employee-form>
      
    
      
    `;
  }
}
customElements.define('home-page', HomePage);
