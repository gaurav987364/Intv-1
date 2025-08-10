// counter.js
// class CounterElement extends HTMLElement {
//   constructor() {
//     super();
//     this.count = 0;

//     // Shadow DOM setup
//     this.attachShadow({ mode: 'open' });

//     // Initial render
//     this.shadowRoot.innerHTML = `
//       <style>
//         button {
//           margin: 5px;
//           padding: 8px 12px;
//           font-size: 16px;
//         }
//         span {
//           font-weight: bold;
//           font-size: 18px;
//         }
//       </style>
//       <div>
//         <button id="decrement">-</button>
//         <span id="value">${this.count}</span>
//         <button id="increment">+</button>
//       </div>
//     `;
//   }

//   connectedCallback() {
//     this.shadowRoot.querySelector('#increment').addEventListener('click', () => this.updateCount(1));
//     this.shadowRoot.querySelector('#decrement').addEventListener('click', () => this.updateCount(-1));
//   }

//   updateCount(delta) {
//     this.count += delta;
//     this.shadowRoot.querySelector('#value').textContent = this.count;
//   }
// }

// customElements.define('counter-element', CounterElement);




// const template = document.createElement("template");
// template.innerHTML = `
//   <div>
//     <button id="decrement">-</button>
//     <span>Count: <span id="count">0</span></span>
//     <button id="increment">+</button>
//   </div>
// `
// class Counter extends HTMLElement {
//   constructor(){
//     super();

//     this.count = 0;
//     //add template to shadow dom ok not directly
//     const shadowRoot = this.attachShadow({mode:"open"});
//     shadowRoot.appendChild(template.content.cloneNode(true)); // doing append child because template is object not a string
//   }


//   handleIncrease = ()=>{
//     const count = this.shadowRoot.getElementById("count");
//     count.textContent = Number(count.textContent) + 1;
//   }

//   handleDecrease = ()=>{
//     const count = this.shadowRoot.getElementById("count");
//     count.textContent = Number(count.textContent) - 1;
//   }

//   // update Ui
//   updateUi = ()=>{
//     this.shadowRoot.getElementById("count").textContent = this.getAttribute("count");
//     console.log(this.getAttribute("count"));
//   }
//   // on mounting in class just like react but
//   connectedCallback(){
//     this.shadowRoot.getElementById("increment").addEventListener("click", this.handleIncrease);
//     this.shadowRoot.getElementById("decrement").addEventListener("click", this.handleDecrease);
//   }

//   //did component mount (agar haa unmount hua to clean up event phase)
//   disconnectedCallback(){
//     this.shadowRoot.getElementById("increment").removeEventListener("click", this.handleIncrease);
//     this.shadowRoot.getElementById("decrement").removeEventListener("click", this.handleDecrease);
//   }

//   // attribute change
//   attributeChangedCallback(name, oldValue, newValue){
//     console.log(name, oldValue, newValue);
//   }

// }

// customElements.define('my-counter', Counter);


const template = document.createElement("template");
template.innerHTML = `
  <div>
    <button id="decrement">-</button>
    <span>Count: <span id="count">0</span></span>
    <button id="increment">+</button>
  </div>
`
class Counter extends HTMLElement {
  constructor(){
    super();

    this.count = 0;

    // adding attributes functionality also
    this.min = 0;
    this.max = 10000000000;
    this.step = 1;

    //add template to shadow dom ok not directly
    const shadowRoot = this.attachShadow({mode:"open"});
    shadowRoot.appendChild(template.content.cloneNode(true)); // doing append child because template is object not a string
  }


  handleIncrease = ()=>{
    const count = this.shadowRoot.getElementById("count");
    // count.textContent = Number(count.textContent) + 1;
    if(Number(count.textContent) + this.step >= this.max){
      return;
    }
    count.textContent = Number(count.textContent) + this.step;
    this.updateUi();
  }

  handleDecrease = ()=>{
    const count = this.shadowRoot.getElementById("count");
    // count.textContent = Number(count.textContent) - 1;
    if(Number(count.textContent) - this.step <= this.min){
      return;
    }

    count.textContent = Number(count.textContent) - this.step;
    this.updateUi();
  }

  // update Ui
  updateUi = ()=>{
    this.shadowRoot.getElementById("count").textContent = this.getAttribute("count");
    console.log(this.getAttribute("count"));
  }
  // on mounting in class just like react but
  connectedCallback(){
    const minStr = this.getAttribute('min');
    const maxStr = this.getAttribute('max');
    const stepStr = this.getAttribute('step');

    if(minStr){
      this.min = Number(minStr);
    }
    if(maxStr){
      this.max = Number(maxStr);
    }
    if(stepStr){
      this.step = Number(stepStr);
    }

    this.shadowRoot.getElementById("increment").addEventListener("click", this.handleIncrease);
    this.shadowRoot.getElementById("decrement").addEventListener("click", this.handleDecrease);
  }

  //did component mount (agar haa unmount hua to clean up event phase)
  disconnectedCallback(){
    this.shadowRoot.getElementById("increment").removeEventListener("click", this.handleIncrease);
    this.shadowRoot.getElementById("decrement").removeEventListener("click", this.handleDecrease);
  }

  // attribute change
  attributeChangedCallback(name, oldValue, newValue){
    console.log(name, oldValue, newValue);
  }

}

customElements.define('my-counter', Counter);