 export const callbackPrompt = {
     message: 'Tell me your phone number',
     showPrompt() {
         const number = prompt(this.message);
     },
     showDeferrendPrompt(ms) {
         setTimeout(this.showPrompt.bind(callbackPrompt), ms);
     }
 };