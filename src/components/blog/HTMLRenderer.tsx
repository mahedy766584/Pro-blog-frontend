import DOMPurify from "dompurify";

type HTMLRendererProps = {
    html: string;
};

const HTMLRenderer = ({ html }: HTMLRendererProps) => {

    const clean = DOMPurify.sanitize(html)
    console.log(clean)
    return (
        <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: clean }}
        />
    );
};

export default HTMLRenderer;