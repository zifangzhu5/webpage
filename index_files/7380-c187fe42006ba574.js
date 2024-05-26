"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7380],{43547:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(19841),i=n(651);function r(e){let{percentage:t,thickness:n=1/12,className:r,backgroundStrokeClassName:a="stroke-gray-400",transitionDuration:l,transitionTimingFunction:s,onTransitionEnd:d}=e,c=120*n,u=(120-c)/2,f=2*Math.PI*u;return(0,i.jsxs)("svg",{width:120,height:120,viewBox:"0 0 ".concat(120," ").concat(120),className:r,children:[(0,i.jsx)("circle",{className:(0,o.default)("origin-[50%_50%] -rotate-90",a),strokeWidth:c,fill:"transparent",r:u,cx:60,cy:60}),(0,i.jsx)("circle",{className:"origin-[50%_50%] -rotate-90 transition-[stroke-dashoffset]",stroke:"currentColor",strokeWidth:c,strokeDashoffset:f-t/100*f,strokeDasharray:"".concat(f," ").concat(f),fill:"transparent",r:u,cx:60,cy:60,style:{transitionDuration:l,transitionTimingFunction:s},onTransitionEnd:d})]})}},79626:function(e,t,n){n.d(t,{$e:function(){return r},EZ:function(){return a},Ql:function(){return i},dO:function(){return o},xC:function(){return l}});let o=10,i=4,r={duration:20,hasCloseButton:!0},a=512,l=536870912},80005:function(e,t,n){n.d(t,{R3:function(){return w},W7:function(){return g},cT:function(){return y},lU:function(){return F},po:function(){return v}});var o=n(95312),i=n(97021),r=n(82988),a=n(16602),l=n(8025),s=n(34470),d=n(25940),c=n(44446),u=n(43446),f=n(48687),p=n(13400);let m={duration:20,hasCloseButton:!0};function g(e){return JSON.stringify({file:e.name,modified:e.lastModified,currentTime:new Date().toString()})}function v(e){return new Promise((t,n)=>{let o=new FileReader,i=new Image;o.onload=()=>{i.onload=()=>t(i),i.onerror=e=>n(e),i.src=o.result},o.readAsDataURL(e)})}async function y(e,t,n,s,d,f){var p,g,v;let y=c.N.getState().resetRateLimits,w=o.EG.Initial;a.A.logEvent(l.M.uploadFileInitiated,{client:"web",useCase:s.kind,uploadEntry:"local"});let F=f.usesRetrievalIndex?performance.now():void 0;try{let{file_id:r,upload_url:a}=await i.Z.createFile(t.name,t.size,s,!!y);d.onFileCreated(e,r,a),w=o.EG.FileCreated;let l=s.kind===o.Ei.Gizmo?s.gizmoId:void 0,c=null!==(p=f.shouldUpdateProgress)&&void 0!==p&&p,v=null!==(g=f.usesRetrievalIndex)&&void 0!==g&&g,x=await i.Z.uploadFileToAzureStorage(t,a,t=>{c&&d.onFileUploadProgress(e,10+80*t)});if(d.onFileUploadProgress(e,90),201!==x.status&&h(x,r,v),w=o.EG.FileUploaded,await i.Z.processFileUpload(r,{gizmoId:l}),w=o.EG.FileProcessed,f.usesRetrievalIndex){let t=await E(r,l);(null==t?void 0:t.status)===o.Xf.Skipped&&u.m.danger(n.formatMessage(k.retrievalSkippedFile,{fileName:t.name}),m),d.onFileUploaded(e,r,void 0,{fileTokenSize:t.file_size_tokens}),w=o.EG.RetrievalIndexCreated}else d.onFileUploaded(e,r,f.imageDimensions);null!=F&&i.Z.postRetrievalTiming({e2eLatencyMs:performance.now()-F,type:"file"})}catch(i){x(n,t.name,i);let o="NotInstanceOfError";i instanceof r.gK?o=i.name:i instanceof r.Q0?o="FatalServerError_type_".concat(null!==(v=i.type)&&void 0!==v?v:"undefined"):i instanceof Error?o=i.name:i instanceof r.vq&&(o=i.name),d.onError(e,"error",o,s,w)}}async function w(e,t,n,d,c){let g=performance.now();a.A.logEvent(l.M.uploadFileInitiated,{client:"web",useCase:n.kind,contextConnector:d.contextConnector});let v=o.EG.Initial;try{let a=await i.Z.uploadConnectorAPI(e,d.contextConnector,n,t,void 0,d.o365DriveId);switch(a.type){case"error":throw function(e){let{status_code:t,error_code:n,error_message:o}=e;if(!t||!(t<500))return new r.Q0(o);{let e="internal_error";return n?e=n:404===t?e="file_not_found":403===t?e="permission_error":413===t&&(e="file_too_large"),new r.vq(o,e)}}(a.error);case"file":switch(f.MP.onFileCreated(e,a.file.id,"",d.contextConnector),v=o.EG.FileProcessed,n.kind){case o.Ei.MyFiles:{f.MP.onFileUploadProgress(e,90);let t=await E(a.file.file_id);(null==t?void 0:t.status)===o.Xf.Skipped&&u.m.danger(c.formatMessage(k.retrievalSkippedFile,{fileName:t.name}),m),f.MP.onFileUploaded(e,a.file.file_id,void 0,{fileTokenSize:t.file_size_tokens,mimeType:a.file.mime_type}),v=o.EG.RetrievalIndexCreated;break}case o.Ei.Multimodal:f.MP.onFileUploaded(e,a.file.file_id,{width:512,height:512},{mimeType:a.file.mime_type});break;case o.Ei.AceUpload:f.MP.onFileUploaded(e,a.file.file_id,void 0,{mimeType:a.file.mime_type});break;case o.Ei.DalleAgent:case o.Ei.Gizmo:case o.Ei.ProfilePicture:throw new r.vq("Use case not supported by cloud doc: ".concat(n.kind))}break;case"folder":throw new r.vq("Folder type not supported")}i.Z.postRetrievalTiming({e2eLatencyMs:performance.now()-g,type:d.contextConnector})}catch(i){s.U.addError(Error("Failed to upload connected file by ".concat(d.contextConnector),{cause:i})),x(c,(0,p.Ad)(t.name,null==d?void 0:d.syntheticExtension),i);let n="NotInstanceOfError";if(i instanceof r.Q0){var y;n="FatalServerError_type_".concat(null!==(y=i.type)&&void 0!==y?y:"undefined")}else(i instanceof r.gK||i instanceof Error||i instanceof r.vq)&&(n=i.name);f.MP.onError(e,"error",n,{kind:o.Ei.MyFiles},v)}}async function F(e,t,n,o,i){let{width:r,height:a}=await v(t);return y(e,t,n,{kind:o},i,{imageDimensions:{width:r,height:a}})}async function E(e,t){let n=Date.now()+6e4,a=e=>new Promise(t=>setTimeout(t,e)),l=0;for(;Date.now()<n;){let n=await i.Z.getRetrievalStatus(e,t);if(n.status===o.Xf.Success||n.status===o.Xf.Skipped)return n;if(n.status===o.Xf.Failed)throw new r.vq("Context extraction failed",n.error_code);l++,await a(Math.min(1e3,100*l))}throw new r.vq("Retrieval indexing timed out")}async function h(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o="Unknown error";try{o=await e.data}catch(e){}throw n&&i.Z.markFileUploadFailed(t,{error:o}),new r.vq("File upload to blobstore failed","failed_upload_to_blobstore")}function x(e,t,n){let o=(0,p.kr)(e,"default_upload_error",{fileName:t});n instanceof r.vq&&null!=n.code&&(o=(0,p.kr)(e,n.code)),u.m.danger(o,m)}let k=(0,d.vU)({retrievalSkippedFile:{id:"useFilePickerState.retrievalSkippedFile",defaultMessage:'Unable to extract text from "{fileName}"'}})},48687:function(e,t,n){n.d(t,{Dw:function(){return E},HR:function(){return F},MP:function(){return h},gF:function(){return w}});var o=n(24312),i=n(95312),r=n(16602),a=n(8025),l=n(34470),s=n(25940),d=n(68810),c=n(43446),u=n(79626),f=n(76762),p=n(80005),m=n(13400);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let y={files:[],connectorFileData:{}},w=(0,d.Ue)(()=>y),F={hasUploadInProgress:e=>{let{files:t}=e;return t.some(e=>e.status===f.XX.Uploading)},getReadyFiles:e=>{let{files:t}=e;return t.filter(e=>e.status===f.XX.Ready)}},E={reset:()=>{w.setState(y)},uploadFile:async function(e,t,n,o,s){let d=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},g=arguments.length>6?arguments[6]:void 0,v=arguments.length>7?arguments[7]:void 0,{gizmoId:y}=d,F=w.getState().files,E=(0,m.xs)(n,t.name,t.type,null==v?void 0:v.contextConnector,g),k={tempId:e,gizmoId:d.gizmoId,status:f.XX.Uploading,file:t,progress:1,fileId:null,cdnUrl:null,contextConnectorInfo:v,contextConnector:null==v?void 0:v.contextConnector};if(F.length===u.dO)r.A.logEvent(a.M.uploadedMaxFilesError),c.m.danger(s.formatMessage(x.maxUploadsAtATime,{maxUploads:u.dO,fileName:t.name}),u.$e);else{let n;w.setState(e=>{let{files:t}=e;return{files:[...t,k]}});let r={};if(o.includes(t.type)){if(n={kind:i.Ei.Multimodal},!v){let{width:e,height:n}=await (0,p.po)(t);if(e>2048||n>2048)try{let o=await (0,m.Tu)(t,2048),i=await (0,p.po)(o);e=i.width,n=i.height,t=o}catch(e){l.U.addError(Error("Error resizing image:",{cause:e}))}r.imageDimensions={width:e,height:n}}}else switch(E){case f.AJ.Multimodal:throw Error("Multimodal file upload not supported mime type, ".concat(t.type,"\nSupported mime types: ")+o.join(", "));case f.AJ.Interpreter:n={kind:i.Ei.AceUpload};break;case f.AJ.Retrieval:n={kind:i.Ei.MyFiles},r.usesRetrievalIndex=!0;break;case f.AJ.ProfilePicture:throw Error("cannot upload profile picture via uploadFile");case f.AJ.ContextConnector:case f.AJ.None:return}null!=y&&(n={kind:i.Ei.Gizmo,gizmoId:y}),d.skipUpload||(v?await (0,p.R3)(e,t,n,v,s):await (0,p.cT)(e,t,s,n,h,r))}},createFileCompleted:(e,t,n,o)=>{let i=w.getState().files,r=i.findIndex(t=>t.tempId===e),a=i[r];if(r>=0&&a.status===f.XX.Uploading){let e=[...i];e.splice(r,1,v(v({},a),{},{progress:10,fileId:t,cdnUrl:n,contextConnector:o})),w.setState({files:e})}},updateProgress:(e,t)=>{let n=w.getState().files,o=n.findIndex(t=>t.tempId===e),i=n[o];if(o>=0&&i.status===f.XX.Uploading){let e=[...n];e.splice(o,1,v(v({},i),{},{progress:t})),w.setState({files:e})}},uploadCompleted:(e,t,n,o,i)=>{let l=w.getState().files,s=l.findIndex(t=>t.tempId===e);if(s>=0&&l[s].status===f.XX.Uploading&&null!==l[s].fileId){var d,c,u;let t=l[s],p=[...l],g=v(v({},t),{},{tempId:e,status:f.XX.Ready,progress:100,fileSpec:v(v({name:t.file.name,id:t.fileId,size:t.file.size,contextConnectorInfo:t.contextConnectorInfo,mimeType:null!==(d=null!==(c=null==o?void 0:o.mimeType)&&void 0!==c?c:t.file.type)&&void 0!==d?d:(0,m.s1)(t.file.name)},n||{}),o||{})});p.splice(s,1,g);let y=v({},w.getState().connectorFileData);i&&(y[null==i?void 0:i.file_id]=i),w.setState({files:p,connectorFileData:y}),r.A.logEvent(a.M.uploadFileCompleted,{status:t.status,fileId:t.fileId,contextConnector:null!==(u=t.contextConnector)&&void 0!==u?u:"local"})}},remove:(e,t,n,o,i)=>{let l=w.getState().files,s=l.findIndex(t=>t.tempId===e);if(s>=0){let e=l[s];"error"===t?r.A.logEvent(a.M.uploadFileError,{status:e.status,fileId:e.fileId,client:"web",errorClassName:null!=n?n:"undefined",useCaseType:o,uploadStatus:null!=i?i:"undefined",contextConnector:e.contextConnector}):r.A.logEvent(a.M.removeFile,{status:e.status,fileId:e.fileId});let d=[...l];d.splice(s,1),w.setState({files:d})}}},h={onFileCreated:E.createFileCompleted,onFileUploadProgress:E.updateProgress,onFileUploaded:E.uploadCompleted,onError:E.remove},x=(0,s.vU)({maxUploadsAtATime:{id:"useFilePickerState.maxUploadsAtATime",defaultMessage:"Unable to upload {fileName}. Max {maxUploads} uploads at a time"}})},44446:function(e,t,n){n.d(t,{J:function(){return i},N:function(){return r}});var o=n(68810);let i={label:"Auto",value:""},r=(0,o.Ue)(()=>({forceParagen:!1,forceNulligen:!1,forceParagenModel:i,forceRateLimit:!1,resetRateLimits:!1,showDebugConversationTurns:!1,rebaseSystemMessageContent:null}))}}]);
//# sourceMappingURL=7380-c187fe42006ba574.js.map