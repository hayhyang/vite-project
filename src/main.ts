import './index.css'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <h1 class="text-3xl font-bold">Hello World</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
