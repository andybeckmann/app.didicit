(function(e){function t(t){for(var o,n,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],o=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var o={},r={app:0},i=[];function n(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=o,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1626:function(e,t,a){},2690:function(e,t,a){},"2ecd":function(e,t,a){"use strict";a("6521")},"3de6":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("AppHeader"),a("div",{staticClass:"app--main"},[a("transition",{attrs:{name:"slideFade",mode:"out-in"}},[a("router-view")],1)],1),a("AppFooter")],1)},i=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"app--primary-header"},[a("AppLogo"),a("AppNav",{attrs:{user:this.authUser}})],1)])},s=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app--header-logo"},[a("router-link",{attrs:{to:"/"}},[e._v("didic.it")])],1)},l=[],u={},d=u,p=(a("768e"),a("2877")),h=Object(p["a"])(d,c,l,!1,null,"8f2dfff6",null),v=h.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app--header-nav"},[null!=e.user?a("nav",[a("ul",[a("li",[a("router-link",{attrs:{to:"/dashboard"}},[a("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 123.4 123","xml:space":"preserve"}},[a("path",{staticClass:"icon dashboard",attrs:{d:"M55,108.5L27,64.2c-1.7-2.7-0.9-6.3,1.8-8c2.7-1.7,6.3-0.9,8,1.8l17.7,14.5l40-61c1.5-2.8,5.1-3.9,7.9-2.3 c2.8,1.5,3.9,5.1,2.3,7.9L55,108.5z"}})])])],1),a("li",[a("router-link",{attrs:{to:"/"}},[a("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 123.4 123","xml:space":"preserve"}},[a("path",{staticClass:"icon settings",attrs:{d:"M114.8,48h-6.6c-1-3.3-2.3-6.5-3.9-9.5l4-4c1.1-1.1,1.1-2.8,0-3.8L92.8,15.1c-1.1-1.1-2.8-1.1-3.8,0l-4,4\n\t\t\t\t\t\t\tc-3-1.6-6.2-3-9.5-3.9V8.6c0-1.5-1.2-2.7-2.7-2.7h-22c-1.5,0-2.7,1.2-2.7,2.7v6.6c-3.3,1-6.5,2.3-9.5,3.9l-4-4\n\t\t\t\t\t\t\tc-1.1-1.1-2.8-1.1-3.8,0L15.1,30.6c-1.1,1.1-1.1,2.8,0,3.8l4,4c-1.6,3-3,6.2-3.9,9.5H8.6c-1.5,0-2.7,1.2-2.7,2.7v22\n\t\t\t\t\t\t\tc0,1.5,1.2,2.7,2.7,2.7h6.6c1,3.3,2.3,6.5,3.9,9.5l-4,4c-1.1,1.1-1.1,2.8,0,3.8l15.5,15.5c1.1,1.1,2.8,1.1,3.8,0l4-4\n\t\t\t\t\t\t\tc3,1.6,6.2,3,9.5,3.9v6.2c0,1.5,1.2,2.7,2.7,2.7h22c1.5,0,2.7-1.2,2.7-2.7v-6.2c3.3-1,6.5-2.3,9.5-3.9l4,4c1.1,1.1,2.8,1.1,3.8,0\n\t\t\t\t\t\t\tl15.5-15.5c1.1-1.1,1.1-2.8,0-3.8l-4-4c1.6-3,3-6.2,3.9-9.5h6.6c1.5,0,2.7-1.2,2.7-2.7v-22C117.5,49.2,116.3,48,114.8,48z\n\t\t\t\t\t\t\tM61.7,79.3c-9.8,0-17.8-8-17.8-17.8c0-9.8,8-17.8,17.8-17.8s17.8,8,17.8,17.8C79.5,71.3,71.5,79.3,61.7,79.3z"}})])])],1)])]):e._e()])},m=[],g={props:["user"]},y=g,w=(a("9429"),Object(p["a"])(y,f,m,!1,null,"b8aa37e2",null)),b=w.exports,_=a("260b"),P=(a("ea7b"),a("66ce"),{data:function(){return{authUser:null,userData:null}},components:{AppLogo:v,AppNav:b},methods:{updateUserData:function(){_["a"].database().ref("users").child(this.authUser.uid).update({userData:this.userData})},signOut:function(){var e=this;_["a"].auth().signOut().then((function(){e.$router.push({name:"Settings"})}))}},created:function(){var e=this;_["a"].auth().onAuthStateChanged((function(t){e.authUser=t,t&&_["a"].database().ref("users").child(t.uid).on("value",(function(t){t.val()&&(e.userData=t.val().userData,e.$set(e.authUser,"userData",e.userData))}))}))}}),Y=P,S=(a("2ecd"),Object(p["a"])(Y,n,s,!1,null,"2cb6b2ac",null)),I=S.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app--footer"},[a("router-link",{attrs:{to:"/privacy"}},[e._v("Privacy")])],1)},C=[],U={},x=U,W=(a("b9d7"),Object(p["a"])(x,D,C,!1,null,"b213f200",null)),O=W.exports,k={components:{AppHeader:I,AppFooter:O}},E=k,A=(a("5c0b"),Object(p["a"])(E,r,i,!1,null,null,null)),T=A.exports,j=a("9483");Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var q=a("8c4f"),B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.authUser?a("div",{staticClass:"app--main-settings"},[a("div",{staticClass:"app--main-settings-menu"},[a("p",[e._v("Signed in as: "),a("b",[e._v(e._s(e.authUser.email))])]),a("button",{on:{click:e.signOut}},[e._v("Sign out")])]),a("form",{on:{submit:function(t){return t.preventDefault(),e.updateEmail(t)}}},[a("h2",[e._v("Update Email")]),a("label",[e._v("E-mail")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{placeholder:"Your Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("button",[e._v("Update")]),e._v(" "),e.emailHasBeenUpdated?a("span",{staticClass:"form-success"},[e._v("Your E-mail has been updated")]):e._e(),e.emailIsInvalid?a("span",{staticClass:"form-error"},[e._v(e._s(e.emailErrorMessage))]):e._e()])]),a("form",{on:{submit:function(t){return t.preventDefault(),e.updatePassword(t)}}},[a("h2",[e._v("Update Password")]),a("label",[e._v("New Password")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword,expression:"newPassword"}],attrs:{type:"password",placeholder:"••••••••••"},domProps:{value:e.newPassword},on:{input:function(t){t.target.composing||(e.newPassword=t.target.value)}}}),a("button",[e._v("Update")]),e._v(" "),e.passwordHasBeenUpdated?a("span",{staticClass:"form-success"},[e._v("Your password has been updated")]):e._e(),e.passwordIsInvalid?a("span",{staticClass:"form-error"},[e._v(e._s(e.passwordErrorMessage))]):e._e()])])]):a("div",{staticClass:"app--main-auth"},[e.signInInvalid?a("div",{staticClass:"app--main-auth-error-message"},[e._v("E-mail or password invalid")]):e._e(),0==e.registered?a("div",{staticClass:"app--main-auth-signup"},[a("h1",[e._v("Register")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"account@domain.com"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"••••••••••"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("div",[a("button",[e._v("Submit")]),a("p",[e._v("Already have an account? "),a("a",{attrs:{href:"#"},on:{click:function(t){e.registered=!0}}},[e._v("Sign in")])])])])]):a("div",{staticClass:"app--main-auth-signin"},[a("h1",[e._v("Sign in")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.signIn(t)}}},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"account@domain.com"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"••••••••••"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("div",[a("button",[e._v("Submit")]),e._v(" "),a("p",[e._v("Don't have an account? "),a("a",{attrs:{href:"#"},on:{click:function(t){e.registered=!1}}},[e._v("Register")])])])])])])])},M=[],N={apiKey:"AIzaSyDXaLMBn4kqyq9vuTEy0BDjYxW47TQFuOw",authDomain:"learned-4a597.firebaseapp.com",databaseURL:"https://learned-4a597-default-rtdb.firebaseio.com",projectId:"learned-4a597",storageBucket:"learned-4a597.appspot.com",messagingSenderId:"1045813171365",appId:"1:1045813171365:web:f3ccd0fa034e91189ca94c"};_["a"].initializeApp(N);var L={data:function(){return{email:"",password:"",authUser:null,registered:!0,photoURL:null,displayName:null,newPassword:null,emailHasBeenUpdated:!1,emailIsInvalid:!1,emailErrorMessage:"",passwordHasBeenUpdated:!1,passwordIsInvalid:!1,passwordErrorMessage:"",signInInvalid:!1,signInErrorMessage:""}},methods:{register:function(){_["a"].auth().createUserWithEmailAndPassword(this.email,this.password).catch((function(e){return alert(e.message)}))},signOut:function(){_["a"].auth().signOut()},signIn:function(){var e=this;_["a"].auth().signInWithEmailAndPassword(this.email,this.password).then((function(){e.$router.push("/dashboard")})).catch((function(t){e.signInInvalid=!0,e.signInErrorMessage=t.message}))},updateEmail:function(){var e=this;this.authUser.updateEmail(this.email).then((function(){e.emailHasBeenUpdated=!0,e.emailIsInvalid=!1})).catch((function(t){e.emailIsInvalid=!0,e.emailHasBeenUpdated=!1,e.emailErrorMessage=t.message}))},updatePassword:function(){var e=this;this.authUser.updatePassword(this.newPassword).then((function(){e.newPassword=null,e.passwordHasBeenUpdated=!0,e.passwordIsInvalid=!1})).catch((function(t){e.passwordHasBeenUpdated=!1,e.passwordIsInvalid=!0,e.passwordErrorMessage=t.message}))}},created:function(){var e=this;_["a"].auth().onAuthStateChanged((function(t){e.authUser=t,t&&(e.displayName=t.displayName,e.photoURL=t.photoURL,e.email=t.email)}))}},$=L,F=(a("a4c5"),Object(p["a"])($,B,M,!1,null,"ed1ee59c",null)),H=F.exports,z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},R=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Privacy Policy")]),a("p",[e._v("Last updated: May 02, 2021")]),a("p",[e._v("This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.")]),a("p",[e._v("We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the "),a("a",{attrs:{href:"https://www.freeprivacypolicy.com/free-privacy-policy-generator/"}},[e._v("Privacy Policy Generator")]),e._v(".")]),a("h1",[e._v("Interpretation and Definitions")]),a("h2",[e._v("Interpretation")]),a("p",[e._v("The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.")]),a("h2",[e._v("Definitions")]),a("p",[e._v("For the purposes of this Privacy Policy:")]),a("ul",[a("li",[a("p",[e._v("Account means a unique account created for You to access our Service or parts of our Service.")])]),a("li",[a("p",[e._v('Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.')])]),a("li",[a("p",[e._v("Application means the software program provided by the Company downloaded by You on any electronic device, named didicit")])]),a("li",[a("p",[e._v('Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to didicit.')])]),a("li",[a("p",[e._v("Country refers to: Maine, United States")])]),a("li",[a("p",[e._v("Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.")])]),a("li",[a("p",[e._v("Personal Data is any information that relates to an identified or identifiable individual.")])]),a("li",[a("p",[e._v("Service refers to the Application.")])]),a("li",[a("p",[e._v("Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.")])]),a("li",[a("p",[e._v("Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).")])]),a("li",[a("p",[e._v("You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.")])])]),a("h1",[e._v("Collecting and Using Your Personal Data")]),a("h2",[e._v("Types of Data Collected")]),a("h3",[e._v("Personal Data")]),a("p",[e._v("While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:")]),a("ul",[a("li",[a("p",[e._v("Email address")])]),a("li",[a("p",[e._v("Usage Data")])])]),a("h3",[e._v("Usage Data")]),a("p",[e._v("Usage Data is collected automatically when using the Service.")]),a("p",[e._v("Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.")]),a("p",[e._v("When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.")]),a("p",[e._v("We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.")]),a("h2",[e._v("Use of Your Personal Data")]),a("p",[e._v("The Company may use Personal Data for the following purposes:")]),a("ul",[a("li",[a("p",[e._v("To provide and maintain our Service, including to monitor the usage of our Service.")])]),a("li",[a("p",[e._v("To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.")])]),a("li",[a("p",[e._v("For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.")])]),a("li",[a("p",[e._v("To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.")])]),a("li",[a("p",[e._v("To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.")])]),a("li",[a("p",[e._v("To manage Your requests: To attend and manage Your requests to Us.")])]),a("li",[a("p",[e._v("For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.")])]),a("li",[a("p",[e._v("For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.")])])]),a("p",[e._v("We may share Your personal information in the following situations:")]),a("ul",[a("li",[e._v("With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.")]),a("li",[e._v("For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.")]),a("li",[e._v("With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.")]),a("li",[e._v("With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.")]),a("li",[e._v("With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.")]),a("li",[e._v("With Your consent: We may disclose Your personal information for any other purpose with Your consent.")])]),a("h2",[e._v("Retention of Your Personal Data")]),a("p",[e._v("The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.")]),a("p",[e._v("The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.")]),a("h2",[e._v("Transfer of Your Personal Data")]),a("p",[e._v("Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to --- and maintained on --- computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.")]),a("p",[e._v("Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.")]),a("p",[e._v("The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.")]),a("h2",[e._v("Disclosure of Your Personal Data")]),a("h3",[e._v("Business Transactions")]),a("p",[e._v("If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.")]),a("h3",[e._v("Law enforcement")]),a("p",[e._v("Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).")]),a("h3",[e._v("Other legal requirements")]),a("p",[e._v("The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:")]),a("ul",[a("li",[e._v("Comply with a legal obligation")]),a("li",[e._v("Protect and defend the rights or property of the Company")]),a("li",[e._v("Prevent or investigate possible wrongdoing in connection with the Service")]),a("li",[e._v("Protect the personal safety of Users of the Service or the public")]),a("li",[e._v("Protect against legal liability")])]),a("h2",[e._v("Security of Your Personal Data")]),a("p",[e._v("The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.")]),a("h1",[e._v("Children's Privacy")]),a("p",[e._v("Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.")]),a("p",[e._v("If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.")]),a("h1",[e._v("Links to Other Websites")]),a("p",[e._v("Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.")]),a("p",[e._v("We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.")]),a("h1",[e._v("Changes to this Privacy Policy")]),a("p",[e._v("We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.")]),a("p",[e._v('We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.')]),a("p",[e._v("You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.")]),a("h1",[e._v("Contact Us")]),a("p",[e._v("If you have any questions about this Privacy Policy, You can contact us:")]),a("ul",[a("li",[e._v("By email: contact@andybeckmann.com")])])])}],J={},K=J,G=Object(p["a"])(K,z,R,!1,null,"6236de3c",null),Q=G.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("form",{staticClass:"app-dashboard-add",on:{submit:function(t){return t.preventDefault(),e.addItem(t)}}},[a("label",[e._v("Keep learning")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],attrs:{placeholder:"So, what's next?"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),a("button",{class:{disabled:e.isButtonDisabled()}},[e._v("Add")])])]),1!=e.userItems.length?a("ul",{staticClass:"app--dashboard-items"},e._l(e.userItems,(function(t,o){return a("li",{key:o,ref:"item",refInFor:!0,class:{completed:t.completed},attrs:{index:o}},[a("button",{class:{completed:t.completedToday},attrs:{"data-key":t},on:{click:function(a){return e.toggleItemStatus(o,t.description,t.completed)}}}),a("div",{staticClass:"app--dashboard-items-item-text"},[e._v(" "+e._s(t.description)+" ")]),a("button",{staticClass:"delete",attrs:{"data-key":t},on:{click:function(t){return e.deleteItem(o)}}},[e._v("× ")])])})),0):e._e()])},X=[],Z=(a("a4d3"),a("e01a"),{data:function(){return{description:"",buttonStatus:!0,completed:!1,userItems:[{description:"",completed:!1}]}},methods:{addItem:function(){""!=this.description&&(_["a"].database().ref("users").child(this.user.uid).push({description:this.description,completed:!1}),this.description="")},deleteItem:function(e){_["a"].database().ref("users").child(this.user.uid+"/"+e).remove()},toggleItemStatus:function(e,t,a){_["a"].database().ref("users").child(this.user.uid+"/"+e).update({description:t,completed:!a})},isButtonDisabled:function(){return""==this.description}},created:function(){var e=this;_["a"].auth().onAuthStateChanged((function(t){e.user=t,t&&_["a"].database().ref("users").child(t.uid).on("value",(function(t){t.val()&&(e.userItems=t.val())}))}))}}),ee=Z,te=(a("bb7e"),Object(p["a"])(ee,V,X,!1,null,"a0d39714",null)),ae=te.exports;o["a"].use(q["a"]);var oe=[{path:"/",name:"Settings",component:H},{path:"/dashboard",name:"Dashboard",component:ae},{path:"/privacy",name:"Privacy",component:Q}],re=new q["a"]({mode:"history",base:"/",routes:oe}),ie=re;o["a"].config.productionTip=!1,new o["a"]({router:ie,render:function(e){return e(T)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},6521:function(e,t,a){},"768e":function(e,t,a){"use strict";a("1626")},"8e25":function(e,t,a){},9429:function(e,t,a){"use strict";a("2690")},"9a21":function(e,t,a){},"9c0c":function(e,t,a){},a4c5:function(e,t,a){"use strict";a("9a21")},b9d7:function(e,t,a){"use strict";a("3de6")},bb7e:function(e,t,a){"use strict";a("8e25")}});
//# sourceMappingURL=app.a4d337b5.js.map