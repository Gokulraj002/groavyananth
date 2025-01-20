// // import { useEffect } from 'react';

// // const Chatbot = () => {
// //   useEffect(() => {
  
// //     const script = document.createElement('script');
// //     script.type = 'text/javascript';
// //     script.async = true;
// //     script.src = 'https://cdn.msgmaker.in/es.chat.min.js?t=be21cb2c-8445-4c06-b24f-8864293d830f'; // The script URL

// //     document.head.appendChild(script);

// //     return () => {
// //       document.head.removeChild(script);
// //     };
// //   }, []); 

// //   return null;
// // };

// // export default Chatbot;
// import { useEffect } from 'react';

// const Chatbot = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.async = true;
//     script.innerHTML = `
//       !function(t,e){
//         t.artibotApi={l:[],t:[],on:function(){this.l.push(arguments)},trigger:function(){this.t.push(arguments)}};
//         var a=!1,i=e.createElement("script");
//         i.async=!0,i.type="text/javascript",i.src="https://app.artibot.ai/loader.js",
//         e.getElementsByTagName("head").item(0).appendChild(i),
//         i.onreadystatechange=i.onload=function(){
//           if(!(a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState)){
//             new window.ArtiBot({i:"11cc33e5-73b4-43f8-b49e-7e1107a944bf"});
//             a=!0
//           }
//         }
//       }(window,document);
//     `;
//     document.head.appendChild(script);

//     return () => {
//       // Clean up the script when component unmounts
//       document.head.removeChild(script);
//     };
//   }, []);

//   return null;
// };

// export default Chatbot;
