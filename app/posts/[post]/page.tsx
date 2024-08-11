import { fetchPost, insertPost } from "@/app/db/queries";
import { InsertPost as Post } from "@/app/db/schema";
import PostLayout, {
  renderDate,
  renderHeading,
  renderTextBlock,
  renderTextBlockContinued,
  renderTextBlockContinuedTop,
  renderTitle,
  renderUrlText,
  renderSpace,
  renderEmbedApp,
  renderTypeScriptCodeSnippet,
  renderSpecialWord,
  renderBulletPoint,
} from "./postLayout";
import reactElementToJSXString from "react-element-to-jsx-string";
import parse from "html-react-parser";
import { parseDate } from "./utils";

let post = {
  id: 1,
  title: "Understanding Web Workers",
  content: "",
  slug: "understanding-web-workers",
  description: "This is how web workers work",
  updatedAt: new Date("2024-07-22"),
  thumbnail: "https://images.app.goo.gl/m519mth7U2BWzNJ99",
};

const content = reactElementToJSXString(<div></div>);

post.content = content;

export default async function Page({ params }) {
  //insertPost(post);

  // const post: Post = (await fetchPost(params.post))[0];
  return (
    <PostLayout
      child={
        // parse(content)
        <div className="text-justify">
          {renderTitle(post.title)}
          {renderDate(post.updatedAt)}
          <hr />
          {renderSpace()}
          {renderTextBlock(
            "JavaScript is often referred to as single thread language. In practice this refers to the main thread which is a single thread. All the calculations like parsing JavaScript, rendering HTML, applying css that we see on UI are done by the browser on this very thread."
          )}
          {renderSpace()}
          {renderTextBlock(
            "JavaScript only processes one operation at a time ☹️. So if we want to do more than one task together we will have to wait for one operation to finish so we can start executing another operation. Suppose the current operation is expensive and it blocks the main thread for let's say 2, 5, or 10 seconds and meanwhile if we try to interact with the UI then the page will become unresponsive 😵‍💫"
          )}
          {renderSpace()}
          {renderTextBlock(
            "All operations run by default on the main thread. With the help of "
          )}
          {renderUrlText(
            "Web Workers",
            "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
          )}
          {renderTextBlock(
            " we can register and utilize extra threads, In a way Web Wrokers is a tool provided by browsers through which we can perform multithreading in JavaScript."
          )}
          {renderHeading(
            "Using web workers to increase performance of web page"
          )}
          {renderTextBlock(
            "Web workers are useful for performing computationally heavy task on a separate worker thread. This makes the main thread available for other UI manipulations. Suppose main thread is busy in performing a task and user interacts with the web page then page will freeze, this is not good and it can decrease "
          )}
          {renderUrlText(
            " Interaction to Next Paint (INP)",
            "https://web.dev/articles/inp"
          )}
          {renderTextBlock(
            " responsiveness metric. When the main thread has less work to process, it can respond more quickly to user interactions."
          )}
          {renderSpace()}
          {renderTextBlock(
            "Less main thread work especially during startup also carries a potential benefit for"
          )}
          {renderUrlText(
            " Largest Contentful Paint (LCP) ",
            "https://web.dev/articles/inp"
          )}
          {renderTextBlock(
            "by reducing long tasks. Rendering an LCP element requires main thread time either for rendering text or images, which are frequent and common LCP elements and by reducing main thread work overall, you can ensure that your page's LCP element is less likely to be blocked by expensive work that a web worker could handle instead."
          )}
          {renderHeading("Demonstration")}
          {renderTextBlock(
            "Let's understand by working example how to utilise separate worker thread to perform the heavy lifting. Below is an example (All code can be found in view source option at the bottom) where if we type in input box and click Search then the below search function will be executed."
          )}
          {renderTypeScriptCodeSnippet(`export const search = function wait(value) {
    const now = Date.now();
    while (Date.now() - now <= 2000) {
      /* do nothing */
    }
  };`)}
          {renderTextBlock(
            "Which will make page freeze for 2 secs and the input text will be printed below. Suppose this search method mimics the real world equivalent of calling an API and performing some operation."
          )}
          {renderSpace()}
          {renderEmbedApp(
            "https://glitch.com/embed/#!/embed/input-responsiveness-without-web-workers?path=style.css&previewSize=100",
            "input-responsiveness-without-web-workers"
          )}
          {renderSpace()}
          {renderTextBlock(
            "While the page is freezed we cannot interact with the page nor we can type something else in text box. This is a very bad user experience. Now let's transfer this search method on a worker thread."
          )}
          {renderTypeScriptCodeSnippet(
            `const worker = new Worker("worker.js");`
          )}

          {renderTextBlock(
            "To register a worker thread we will instantiate the Worker class. By this it is specified where the code is located, which the browser loads and subsequently creates a new thread for. The resulting thread is called a worker thread."
          )}
          {renderTypeScriptCodeSnippet(`export const search = function wait(value) {
    const now = Date.now();
    while (Date.now() - now <= 2000) {
      /* do nothing */
    }
  };`)}
          {renderTextBlock("First we have to move this search method on a")}
          {renderSpecialWord(" worker.js ")}
          {renderTextBlock(
            "file. On the Search button click we will send the input text to web worker thread using "
          )}
          {renderUrlText(
            " postMessage() ",
            "https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage"
          )}
          {renderTextBlock(" api. And recieve response using ")}
          {renderUrlText(
            " onMessage() ",
            "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage"
          )}
          {renderTextBlock(" method. This is called a message pipeline.")}
          {renderTypeScriptCodeSnippet(`button.addEventListener("click", () => {
  worker.postMessage(inputString);
  worker.onmessage = function (e) {
    resultText.innerHTML = e.data;
  };
});`)}
          {renderTextBlock(
            "And inside wroker.js file we will call the search method. Thus when Search button is clicked the UI does not frezzes 🎉."
          )}
          {renderTypeScriptCodeSnippet(`onmessage = function (e) {
  const value = e.data;
  search(value);
  postMessage(\`Searched for \${value}\`);
};`)}
          {renderEmbedApp(
            "https://glitch.com/embed/#!/embed/input-responsiveness-using-web-workers?path=script.js&previewSize=100",
            "input-responsiveness-using-web-workers"
          )}
          {renderTextBlock(
            "Though the above result can also be achieved by Javascript's"
          )}
          {renderSpecialWord(" async/await ")}
          {renderTextBlock(
            " but this example helps to understand the use of web workers well. Other real workd scenarios where Web Workers can prove useful are -"
          )}
          {renderBulletPoint(
            "To perform complex calculations such as real-time stock market analysis or a physics simulation."
          )}
          {renderBulletPoint(
            "Running WebAssembly modules that perform CPU-intensive tasks like a game running in a browser that uses WebAssembly for complex physics simulations."
          )}
          {renderBulletPoint(
            "Synchronizing data with a server in the background, such as saving data to a database or syncing files."
          )}
          {renderBulletPoint(
            "Enabling real-time collaboration features, such as shared editing in documents."
          )}
          {renderHeading("Limitations with Web Workers")}
          {renderTextBlock("Web Wrokers do not have direct access to the")}
          {renderUrlText(
            " Window object",
            "https://developer.mozilla.org/en-US/docs/Web/API/Window"
          )}
          {renderTextBlock(
            ", thus it directly can't modify DOM. Instead it indirectly provides information to the main thread and then the main thread manipulates DOM which happens through a messaging pipeline. It also does not has access to the JavaScript primitives, constructs and fetch API. But it has access to another set of API's i.e "
          )}
          {renderUrlText(
            "Web Workers API.",
            "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"
          )}
          {renderHeading("Summing Up")}
          {renderTextBlock(
            "Web Workers is a great tool to enhance the performance of any Web app by moving Javascript execution to another thread."
          )}
          {renderSpace()}
          {renderTextBlock(
            "By providing a way to multitask it helps to load UI faster. That might reduce First Contentful Paint or even Time to Interactive, which can in turn increase your "
          )}
                    {renderUrlText(
            "Lighthouse score.",
            "https://developer.chrome.com/docs/lighthouse/overview/"
          )}
        </div>
      }
    />
  );
}
