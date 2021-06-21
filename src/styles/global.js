import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  [data-tooltip] {
    position: relative;
  
    &:after {
      position: absolute;
      opacity: 0;
      pointer-events: none;
      top: -20px;
      left: 0;
      content: attr(data-tooltip);
      border-radius: 3px;
      box-shadow: 0 0 5px 2px rgba(100, 100, 100, 0.6);
      background-color: white;
      z-index: 1;
      padding: 8px;
      width: 150px;
      transform: translateY(-20px);
      transition: all 150ms cubic-bezier(.25, .8, .25, 1);
    }

    &:hover {
      :after {
        opacity: 1;
      }
    }
  }
`