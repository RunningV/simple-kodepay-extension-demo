import '@/assets/base.scss'
import './index.scss'

self.onerror = function (message, source, lineno, colno, error) {
  console.info(
    `Error: ${message}\nSource: ${source}\nLine: ${lineno}\nColumn: ${colno}\nError object: ${error}`
  )
}

function handlePayment() {
  // send payment messge to background
  console.log('send payment messge to background')
  chrome.runtime.sendMessage({ message: 'payment' });
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('payment-button')?.addEventListener('click', handlePayment)
})