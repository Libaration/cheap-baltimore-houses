import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkHtml from "remark-html";
export const generateMarkdown = (str) => {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw, remarkHtml]} className="markdown">
      {str}
    </ReactMarkdown>
  );
};
