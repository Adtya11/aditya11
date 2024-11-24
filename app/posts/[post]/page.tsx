import { fetchPost, insertPost } from "@/app/db/queries";
import { InsertPost as Post } from "@/app/db/schema";
import PostLayout, {
  renderDate,
  renderHeading,
  renderTextBlock,
  renderTitle,
  renderUrlText,
  renderSpace,
  renderSubHeading,
  renderEmbedApp,
  renderTypeScriptCodeSnippet,
  renderSpecialWord,
  renderBulletPoint,
  renderImage,
} from "./postLayout";
import reactElementToJSXString from "react-element-to-jsx-string";
import parse from "html-react-parser";
import { parseDate } from "./utils";
import { headers } from "next/headers";

type paramsType = {
  post: string;
};

const content = reactElementToJSXString(
    <div>
      {renderTitle('Asynchronous JavaScript through event loop')}
      {renderDate(new Date("2024-11-20"))}
      {<hr />}
      {renderSpace()}
      {renderTextBlock('We know that javascript is a single threaded language so it executes only one task at a time. So how does asychronous programming works here ? When we make an api request and wait for its response using await, Javascript execution does not stops at this line instead it continues to execute next code so how does this happens ? 🤔 this happens throug')}
      {renderSpecialWord('Event Loop!')}
      {renderSpace()}
      {renderTextBlock('Event loop is a concept in JavaScript which decides the flow of JavaScript execution in browsers as well as in Node.js. It is responsible for execution and handling of tasks such as execution of asynchronous code and enabling non-blocking behaviour.')}
      {renderSpace()}
      {renderHeading('How Event Loop works')}
      {renderTextBlock("The working of Event Loop is simple. It is an endless loop, where the JavaScript engine waits for tasks, executes them and then sleeps, waits for more tasks.")}
      {renderSpace()}
      {renderTextBlock('The JavaScript engine -')}
      {renderBulletPoint('Executes tasks, starting from oldest.')}
      {renderBulletPoint('Sleeps and waits for more tasks.')}
      {renderTextBlock('JavaScript engine executes tasks gets one by one inside a place called')}
      {renderSpecialWord('call stack')}
      {renderTextBlock('.')}
      {renderImage("https://lkvjsczrikayaewovbxg.supabase.co/storage/v1/object/public/Images/event1mod.png", '')}
      {renderTextBlock('Before the code gets executed the')}
      {renderSpecialWord('Global Execution Context (GEC)')}
      {renderTextBlock('the default environment in JavaScript where code begins execution is initialised. It sets up the global scope and managing global variables, functions, and objects.')}
      {renderSpace()}
      {renderTextBlock('The code gets executed in call stack, then it is popped out then JavaScript waits for more tasks.')}
      {renderSubHeading('Handling Synchronous vs Asynchronous operations')}
      {renderTextBlock('Synchronous operation like function execution, console.log onScroll goes directly inside call stack and gets executed.')}
      {renderTextBlock('While Asynchronous operations like Promises, MutationObserver first goes into')}
      {renderSpecialWord('Task Queue')}
      {renderTextBlock('then call stack executes them.')}
      {renderImage("https://lkvjsczrikayaewovbxg.supabase.co/storage/v1/object/public/Images/event2mod.png?t=2024-11-24T08%3A05%3A40.032Z", '')}
      {renderSubHeading('Let us understand what is web api')}
      {renderTextBlock('This is special set of api that allows javascript to interact with the browser. When we write')}
      {renderSpecialWord("console.log('hello')")}
      {renderTextBlock('JavaScript puts this in call stack through which it is directly sent to the browser console to log')}
      {renderSpecialWord('hello')}
      {renderTextBlock('. Similarly there are many inbuilt browser features like DOM manipulation, HTTP requests, animations, and much more. Which we can access through')}
      {renderUrlText("Web Api's", 'https://developer.mozilla.org/en-US/docs/Web/API')}
      {renderSubHeading('Now we have understood the terms here is the complete picture')}
      {renderImage("https://lkvjsczrikayaewovbxg.supabase.co/storage/v1/object/public/Images/eventmod3.png?t=2024-11-24T08%3A21%3A12.048Z", '')}
      {renderTextBlock('In our script file we have operations that can be Synchronous, Asynchronous operations or it can belong to web api. Additionaly the task queue is divided in two parts microtask queue and macrotask queue.')}
      {renderBulletPoint('Operations like Promises (Promise.then, Promise.catch, Promise.finally), Mutation Observer and queueMicrotask goes inside microtask queue.')}
      {renderBulletPoint('Whearas if there any callback function created by setTimeout, onMouseOver or any other webApi gets inside MacrotaskQueue.')}
      {renderBulletPoint('First all tasks inside microtask queue are finished then one task from macrotask queue is executed then execuetion goes back to microtask queue.')}
      {renderSpace()}
      {renderTextBlock('Even')}
      {renderSpecialWord('setTimeout')}
      {renderTextBlock('is a feature of web api, after the delayed interval web api transfers its callback function to macrotask queue.')}
      {renderHeading('What wiil  be output of following code ?')}
      {renderTypeScriptCodeSnippet(`1.console.log&lpar;1&rpar;;
2.setTimeout&lpar;&lpar;&rpar; &equals;&gt; console.log&lpar;2&rpar;&rpar;;
3.Promise.resolve&lpar;&rpar;.then&lpar;&lpar;&rpar; &equals;&gt console.log&lpar;3&rpar;&rpar;;
4.setTimeOut(() &equals;&gt; console.log(4), 5000)
5.console.log&lpar;5&rpar;;`)}
      {renderTextBlock('First statement gets executed-')}
      {renderTypeScriptCodeSnippet('console.log(1);')}
      {renderTextBlock('Since console.log is a synchronous operation it directly moves to call stack and it belongs to web api. Web api executes it and transfers the log to browsers console.')}
      {renderImage('https://lkvjsczrikayaewovbxg.supabase.co/storage/v1/object/public/Images/output1mod.png?t=2024-11-24T09%3A23%3A42.142Z', '')}
      {renderTypeScriptCodeSnippet('setTimeout(() &equals;&gt; console.log(2))')}
      {renderTextBlock('setTimeout also belong to Web Api so web api after a delay of 0 secs appends to callback function tomacrotask queue.')}
      {renderImage('https://lkvjsczrikayaewovbxg.supabase.co/storage/v1/object/public/Images/output2mod.png?t=2024-11-24T09%3A24%3A18.734Z', '')}
      {renderTypeScriptCodeSnippet('Promise.resolve().then(() &equals;&gt; console.log(3));')}
      {renderTextBlock('We know that promises are handled in microtask queue, the value of promised is resolved and its callback function get queued in microtask queue.')}
      {renderImage('https://lkvjsczrikayaewovbxg.supabase.co/storage/v1/object/public/Images/output3mod.png?t=2024-11-24T09%3A43%3A51.768Z', '')}
      {renderTypeScriptCodeSnippet('setTimeOut(() &equals;&gt; console.log(4), 5000)')}
      {renderTextBlock('Now this setTimeout goes inside web api and waits there for 5 secs Then after that its callback function will be added to macrotask queue.')}
      {renderImage('https://lkvjsczrikayaewovbxg.supabase.co/storage/v1/object/public/Images/output4mod.png?t=2024-11-24T09%3A44%3A28.272Z', '')}
      {renderTypeScriptCodeSnippet('console.log(5)')}
      {renderTextBlock('This statement gets inside call stack and gets transferres to web api logging 5 inside browser console. And we see output 1, 5.')}
      {renderImage('https://lkvjsczrikayaewovbxg.supabase.co/storage/v1/object/public/Images/output5mod.png?t=2024-11-24T09%3A44%3A35.725Z', '')}
      {renderSpace()}
      {renderTextBlock('Now the call stack is empty and the processing of queue begins. Starting with microtask queue, logging 3 inside console. And we see output 1, 5, 3.')}
      {renderImage('https://lkvjsczrikayaewovbxg.supabase.co/storage/v1/object/public/Images/output6mod.png?t=2024-11-24T09%3A44%3A44.621Z', '')}
      {renderSpace()}
      {renderTextBlock('Since microtask queue is empty now tasks inside macrotask queue get processed. Logging 2 inside console, And we see output 1, 5, 3, 2.')}
      {renderImage('https://lkvjsczrikayaewovbxg.supabase.co/storage/v1/object/public/Images/output7mod.png?t=2024-11-24T09%3A44%3A52.932Z', '')}
      {renderSpace()}
      {renderTextBlock('Now after a delay of 5 seconds the callback function of setTimeout moves to macrotask queue.')}
      {renderImage('https://lkvjsczrikayaewovbxg.supabase.co/storage/v1/object/public/Images/output8mod.png?t=2024-11-24T09%3A45%3A04.965Z', '')}
      {renderSpace()}
      {renderTextBlock('Since microtask queue is empty at this point the macrotask queue get executed. Moves the console statement inside call satck then we api transfers it to console. And we see output 1, 5, 3, 2, 4.')}
      {renderImage('https://lkvjsczrikayaewovbxg.supabase.co/storage/v1/object/public/Images/output9mod.png?t=2024-11-24T09%3A45%3A12.778Z', '')}
    </div>
);

// const post = {
//   id: 2,
//   title: "Asynchronous JavaScript through event loop",
//   slug: "asynchronous-javascript-through-event-loop",
//   content: content,
//   description: "Asynchronous JavaScript through event loop description",
//   thumbnail: "",
//   updatedAt: new Date(2024, 11, 22),
//   tags: {
//     tags: ["event-loop", "javascript-working", 'asynchronous-programming'],
//   },
//   likes: 0,
// };

export default async function Page({ params }: { params: paramsType }) {
  const header = headers();
  // const ip = (header.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
  const post: Post = (await fetchPost(params.post))[0];
  //await insertPost(post);
  return <PostLayout child={parse(content)} />;
}
