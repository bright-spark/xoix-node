class MobilePreview extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          .mobile-frame {
            width: 281.25px; /* 75% of 375px */
            height: 500.25px; /* 75% of 667px */
            border: 12px black solid; /* 75% of 16px */
            border-top-width: 45px; /* 75% of 60px */
            border-bottom-width: 45px; /* 75% of 60px */
            border-radius: 27px; /* 75% of 36px */
            position: relative;
            overflow: hidden;
            box-shadow: 0 0 7.5px rgba(0,0,0,0.5); /* 75% of 10px */
            background-color: #212121;
          }
          .mobile-screen {
            width: 133.33%; /* Scale up content */
            height: 133.33%; /* Scale up content */
            transform: scale(0.75); /* Scale down to fit */
            transform-origin: top left;
            border: none;
            -ms-overflow-style: none;  /* Internet Explorer 10+ */
            scrollbar-width: none;  /* Firefox */
          }
          .mobile-screen::-webkit-scrollbar { 
            display: none;  /* Safari and Chrome */
          }
          .home-button {
            position: absolute;
            bottom: 7.5px; /* 75% of 10px */
            left: 50%;
            transform: translateX(-50%);
            width: 37.5px; /* 75% of 50px */
            height: 37.5px; /* 75% of 50px */
            background: #333;
            border-radius: 50%;
          }
        </style>
        <div class="mobile-frame">
          <iframe class="mobile-screen"></iframe>
        </div>
      `;
      shadowRoot.appendChild(template.content.cloneNode(true));
  
      this.iframe = shadowRoot.querySelector('.mobile-screen');
    }
  
    static get observedAttributes() {
      return ['url'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'url' && newValue) {
        this.iframe.src = newValue;
      }
    }
  }
  
  customElements.define('mobile-preview', MobilePreview);
  